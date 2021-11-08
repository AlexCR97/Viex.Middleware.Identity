import { DomainError } from "./Domain.error";

export class AuthHeaderError extends DomainError {
    constructor() {
        super(401, 'Could not find authorization header in request')
    }
}