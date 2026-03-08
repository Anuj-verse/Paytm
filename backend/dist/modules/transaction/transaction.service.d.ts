import type { TransactionHistoryRequest, TransactionResponse } from "./transaction.types.js";
export declare class TransactionService {
    getTransactionHistory(userId: string, filters?: TransactionHistoryRequest): Promise<TransactionResponse>;
    getTransactionById(transactionId: string): Promise<TransactionResponse>;
    getTransactionStats(userId: string): Promise<any>;
}
export declare const transactionService: TransactionService;
//# sourceMappingURL=transaction.service.d.ts.map