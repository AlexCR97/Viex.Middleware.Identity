import { DomainError } from "./Domain.error";

export class ExpiredRefreshTokenError extends DomainError {
    constructor() {
        super(403, 'Your refresh token has expired')
    }
}