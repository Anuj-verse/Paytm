import mongoose from "mongoose";
declare const Wallet: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
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
        createdAt: NativeDate;
        updatedAt: NativeDate;
        status: "active" | "inactive";
        userId: mongoose.Types.ObjectId;
        balance: number;
        currency: string;
        dailylimit: number;
        transaction: mongoose.Types.ObjectId[];
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        status: "active" | "inactive";
        userId: mongoose.Types.ObjectId;
        balance: number;
        currency: string;
        dailylimit: number;
        transaction: mongoose.Types.ObjectId[];
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "active" | "inactive";
    userId: mongoose.Types.ObjectId;
    balance: number;
    currency: string;
    dailylimit: number;
    transaction: mongoose.Types.ObjectId[];
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Wallet;
//# sourceMappingURL=wallet.models.d.ts.map