import type { LedgerEntry, LedgerResponse } from "./ledger.types.js";
export declare class LedgerService {
    recordEntry(data: LedgerEntry, transactionId?: string): Promise<void>;
    getLedger(userId: string, limit?: number, skip?: number): Promise<LedgerResponse>;
    getLedgerSummary(userId: string): Promise<any>;
    getBalanceHistory(userId: string, limit?: number): Promise<LedgerResponse>;
}
export declare const ledgerService: LedgerService;
//# sourceMappingURL=ledger.service.d.ts.map