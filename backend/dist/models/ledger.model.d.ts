import mongoose from "mongoose";
declare const Ledger: mongoose.Model<{
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
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
        type: "credit" | "debit";
        createdAt: NativeDate;
        userId: mongoose.Types.ObjectId;
        balance: number;
        amount: number;
        description?: string | null;
        transactionId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        type: "credit" | "debit";
        createdAt: NativeDate;
        userId: mongoose.Types.ObjectId;
        balance: number;
        amount: number;
        description?: string | null;
        transactionId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "credit" | "debit";
    createdAt: NativeDate;
    userId: mongoose.Types.ObjectId;
    balance: number;
    amount: number;
    description?: string | null;
    transactionId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Ledger;
//# sourceMappingURL=ledger.model.d.ts.map