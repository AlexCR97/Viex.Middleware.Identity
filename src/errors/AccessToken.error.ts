import { DomainError } from "./Domain.error";

export class AccessTokenError extends DomainError {
    constructor() {
        super(401, 'Could not find access token in authorization header')
    }
}