import mongoose from "mongoose";
declare const User: mongoose.Model<{
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username: string;
        email: string;
        phone: string;
        password: string;
        isVerified: boolean;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        kycStatus?: "pending" | "approved" | "rejected" | null;
        role?: "user" | "merchant" | "admin" | null;
        walletID?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        username: string;
        email: string;
        phone: string;
        password: string;
        isVerified: boolean;
        createdAt: NativeDate;
        updatedAt: NativeDate;
        kycStatus?: "pending" | "approved" | "rejected" | null;
        role?: "user" | "merchant" | "admin" | null;
        walletID?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username: string;
    email: string;
    phone: string;
    password: string;
    isVerified: boolean;
    createdAt: NativeDate;
    updatedAt: NativeDate;
    kycStatus?: "pending" | "approved" | "rejected" | null;
    role?: "user" | "merchant" | "admin" | null;
    walletID?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default User;
//# sourceMappingURL=Users.models.d.ts.map