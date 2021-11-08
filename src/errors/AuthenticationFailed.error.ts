import { DomainError } from "./Domain.error";

export class AuthenticationFailedError extends DomainError {
    constructor() {
        super(401, 'Login credentials are incorrect')
    }
}