import { DomainError } from "./Domain.error";

export class InvalidRefreshTokenError extends DomainError {
    constructor() {
        super(403, 'Your refresh token is invalid')
    }
}