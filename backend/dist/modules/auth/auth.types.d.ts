export interface SignupRequest {
    username: string;
    email: string;
    phone: string;
    password: string;
}
export interface SigninRequest {
    email: string;
    password: string;
}
export interface AuthResponse {
    message: string;
    token?: string;
    user?: {
        id: string;
        username: string;
        email: string;
        phone: string;
    };
}
export interface JWTPayload {
    _id: string;
}
export interface AuthenticatedRequest extends Express.Request {
    userId?: string;
}
//# sourceMappingURL=auth.types.d.ts.map