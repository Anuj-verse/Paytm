import Transaction from "../../models/transaction.models.js";
export class TransactionService {
    async getTransactionHistory(userId, filters) {
        const { transactionType, limit = 10, skip = 0 } = filters || {};
        const query = {
            $or: [{ senderId: userId }, { receiverId: userId }],
        };
        if (transactionType) {
            query.type = transactionType;
        }
        const transactions = await Transaction.find(query)
            .limit(limit)
            .skip(skip)
            .sort({ createdAt: -1 })
            .populate("senderId", "username phone email")
            .populate("receiverId", "username phone email");
        return {
            message: "Transaction history retrieved successfully",
            data: transactions,
        };
    }
    async getTransactionById(transactionId) {
        const transaction = await Transaction.findById(transactionId)
            .populate("senderId", "username phone email")
            .populate("receiverId", "username phone email");
        if (!transaction) {
            throw new Error("Transaction not found");
        }
        return {
            message: "Transaction retrieved successfully",
            data: [transaction],
        };
    }
    async getTransactionStats(userId) {
        const stats = await Transaction.aggregate([
            {
                $match: {
                    $or: [{ senderId: userId }, { receiverId: userId }],
                },
            },
            {
                $group: {
                    _id: "$type",
                    count: { $sum: 1 },
                    totalAmount: { $sum: "$amount" },
                },
            },
        ]);
        return stats;
    }
}
export const transactionService = new TransactionService();
//# sourceMappingURL=transaction.service.js.map