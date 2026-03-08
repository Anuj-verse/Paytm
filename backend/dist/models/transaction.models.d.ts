import mongoose from "mongoose";
declare const Transaction: mongoose.Model<{
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
}, mongoose.Document<unknown, {}, {
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
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
        type: "credit" | "debit" | "transfer";
        createdAt: NativeDate;
        updatedAt: NativeDate;
        status: "pending" | "completed" | "failed";
        method: "wallet" | "card" | "bank" | "upi";
        senderId: mongoose.Types.ObjectId;
        receiverId: mongoose.Types.ObjectId;
        amount: number;
        description?: string | null;
        referenceId?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        type: "credit" | "debit" | "transfer";
        createdAt: NativeDate;
        updatedAt: NativeDate;
        status: "pending" | "completed" | "failed";
        method: "wallet" | "card" | "bank" | "upi";
        senderId: mongoose.Types.ObjectId;
        receiverId: mongoose.Types.ObjectId;
        amount: number;
        description?: string | null;
        referenceId?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    type: "credit" | "debit" | "transfer";
    createdAt: NativeDate;
    updatedAt: NativeDate;
    status: "pending" | "completed" | "failed";
    method: "wallet" | "card" | "bank" | "upi";
    senderId: mongoose.Types.ObjectId;
    receiverId: mongoose.Types.ObjectId;
    amount: number;
    description?: string | null;
    referenceId?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Transaction;
//# sourceMappingURL=transaction.models.d.ts.map