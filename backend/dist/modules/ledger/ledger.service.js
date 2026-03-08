import Ledger from "../../models/ledger.model.js";
import Wallet from "../../models/wallet.models.js";
export class LedgerService {
    async recordEntry(data, transactionId) {
        const { userId, amount, type, description } = data;
        // Get current wallet balance
        const wallet = await Wallet.findOne({ userId });
        if (!wallet) {
            throw new Error("Wallet not found");
        }
        // Create ledger entry with running balance
        const ledgerEntry = new Ledger({
            userId,
            transactionId,
            amount,
            type,
            balance: wallet.balance,
            description,
        });
        await ledgerEntry.save();
    }
    async getLedger(userId, limit = 50, skip = 0) {
        const entries = await Ledger.find({ userId })
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .populate("transactionId");
        return {
            message: "Ledger retrieved successfully",
            data: entries,
        };
    }
    async getLedgerSummary(userId) {
        const summary = await Ledger.aggregate([
            { $match: { userId } },
            {
                $group: {
                    _id: "$type",
                    totalAmount: { $sum: "$amount" },
                    count: { $sum: 1 },
                },
            },
        ]);
        return summary;
    }
    async getBalanceHistory(userId, limit = 30) {
        const history = await Ledger.find({ userId })
            .limit(limit)
            .sort({ createdAt: -1 })
            .select("balance amount type createdAt");
        return {
            message: "Balance history retrieved successfully",
            data: history,
        };
    }
}
export const ledgerService = new LedgerService();
//# sourceMappingURL=ledger.service.js.map