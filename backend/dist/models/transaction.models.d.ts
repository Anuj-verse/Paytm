import mongoose from "mongoose";
declare const Transaction: mongoose.Model<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
}, mongoose.Document<unknown, {}, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
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
        sender: string;
        receiver: string;
        amount: number;
        refenenceId: string;
        status: "pending" | "success" | "failed";
        type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        createdAt: NativeDate;
        updatedAt: NativeDate;
        sender: string;
        receiver: string;
        amount: number;
        refenenceId: string;
        status: "pending" | "success" | "failed";
        type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
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
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    createdAt: NativeDate;
    updatedAt: NativeDate;
    sender: string;
    receiver: string;
    amount: number;
    refenenceId: string;
    status: "pending" | "success" | "failed";
    type?: "add_money" | "withdraw" | "wallet_transfer" | "merchant_payment" | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export default Transaction;
//# sourceMappingURL=transaction.models.d.ts.map