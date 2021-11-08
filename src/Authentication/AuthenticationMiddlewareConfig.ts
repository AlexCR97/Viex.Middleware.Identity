export class AuthenticationMiddlewareConfig {

    private static _instance: AuthenticationMiddlewareConfig

    readonly options: AuthenticationMiddlewareConfigOptions

    private constructor(options: AuthenticationMiddlewareConfigOptions) {
        this.options = options
    }

    static init(options: AuthenticationMiddlewareConfigOptions) {
        this._instance = new AuthenticationMiddlewareConfig(options)
    }

    static get instance() {
        if (!this._instance)
            throw 'AuthenticationMiddlewareConfig has not been initialized'

        return this._instance
    }
}

export interface AuthenticationMiddlewareConfigOptions {
    accessToken: {
        secret: string
    }
}
