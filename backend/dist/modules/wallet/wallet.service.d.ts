import type { TransferRequest, AddMoneyRequest, WalletResponse, TransferResponse } from "./wallet.types.js";
export declare class WalletService {
    getBalance(userId: string): Promise<WalletResponse>;
    addMoney(userId: string, data: AddMoneyRequest): Promise<WalletResponse>;
    transferMoney(senderId: string, data: TransferRequest): Promise<TransferResponse>;
}
export declare const walletService: WalletService;
//# sourceMappingURL=wallet.service.d.ts.map