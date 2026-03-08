export interface TransferRequest {
    receiverPhone: string;
    amount: number;
}
export interface AddMoneyRequest {
    amount: number;
    paymentMethod: "card" | "bank" | "upi";
}
export interface WalletResponse {
    message: string;
    data?: {
        userId: string;
        balance: number;
        currency: string;
        status: string;
    };
}
export interface TransferResponse {
    message: string;
    data?: {
        transactionId: string;
        amount: number;
        sender: string;
        receiver: string;
        timestamp: Date;
    };
}
//# sourceMappingURL=wallet.types.d.ts.map