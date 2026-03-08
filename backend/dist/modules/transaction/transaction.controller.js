import { transactionService } from "./transaction.service.js";
export const getHistory = async (req, res) => {
    try {
        const userId = req._id;
        const { type, limit, skip } = req.query;
        const filters = {
            transactionType: type,
            limit: limit ? parseInt(limit) : 10,
            skip: skip ? parseInt(skip) : 0,
        };
        const result = await transactionService.getTransactionHistory(userId, filters);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;
        const result = await transactionService.getTransactionById(transactionId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getStats = async (req, res) => {
    try {
        const userId = req._id;
        const stats = await transactionService.getTransactionStats(userId);
        res.status(200).json({
            message: "Transaction stats retrieved successfully",
            data: stats,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=transaction.controller.js.map