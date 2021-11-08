import { AccessTokenError } from '@/errors/AccessToken.error'
import { AuthHeaderError } from '@/errors/AuthHeader.error'
import { NextFunction, Request, Response } from 'express'
import jwt, { JwtPayload, VerifyErrors } from 'jsonwebtoken'
import { InvalidAccessTokenError } from '@/errors/InvalidAccessToken.error'
import { AuthenticationMiddlewareConfig, AuthenticationMiddlewareConfigOptions } from './AuthenticationMiddlewareConfig'

export default {
    install(options: AuthenticationMiddlewareConfigOptions) {
        AuthenticationMiddlewareConfig.init(options)
    },

    use(request: Request, _response: Response, next: NextFunction) {
        const authHeader = request.headers['authorization']

        if (!authHeader)
            throw new AuthHeaderError()

        const accessToken = authHeader.split(' ')[1] // "Bearer accessToken"

        if (!accessToken)
            throw new AccessTokenError()

        jwt.verify(accessToken, AuthenticationMiddlewareConfig.instance.options.accessToken.secret, (error: VerifyErrors | null, user: JwtPayload | undefined) => {
            if (error)
                throw new InvalidAccessTokenError();

            (request as any).user = user
            next()
        })
    }
}
