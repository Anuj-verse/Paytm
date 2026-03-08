import type { SignupRequest, SigninRequest, AuthResponse, JWTPayload } from "./auth.types.js";
export declare class AuthService {
    signup(data: SignupRequest): Promise<AuthResponse>;
    signin(data: SigninRequest): Promise<AuthResponse>;
    verifyToken(token: string): Promise<JWTPayload>;
    getUserById(userId: string): Promise<import("mongoose").Document<unknown, {}, {
        username: string;
        email: string;
        phone: string;
        password: string;
        isVerified: boolean;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        kycStatus?: "pending" | "approved" | "rejected" | null;
        role?: "user" | "merchant" | "admin" | null;
        walletID?: import("mongoose").Types.ObjectId | null;
    }, {
        id: string;
    }, import("mongoose").DefaultSchemaOptions> & Omit<{
        username: string;
        email: string;
        phone: string;
        password: string;
        isVerified: boolean;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        kycStatus?: "pending" | "approved" | "rejected" | null;
        role?: "user" | "merchant" | "admin" | null;
        walletID?: import("mongoose").Types.ObjectId | null;
    } & {
        _id: import("mongoose").Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }>;
}
export declare const authService: AuthService;
//# sourceMappingURL=auth.service.d.ts.map