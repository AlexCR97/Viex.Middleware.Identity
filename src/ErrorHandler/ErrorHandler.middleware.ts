import { DomainError } from '@/errors/Domain.error'
import { Express, NextFunction, Request, Response } from 'express'

export default {
    install(server: Express) {
        console.log('Initializing ErrorHandler middleware...')
    
        server.use((err: any, _request: Request, response: Response, _next: NextFunction) => {
            console.log('Error intercepted!')
            console.log({ err })
    
            if (err instanceof DomainError) {
                response.status(err.statusCode).json({
                    statusCode: err.statusCode,
                    message: err.message,
                })
            }
            else {
                response.status(500).json({
                    statusCode: 500,
                    message: 'An error occured',
                })
            }
        })
    
        console.log('Initialized ErrorHandler middleware!')
    }
}
