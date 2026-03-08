import { ledgerService } from "./ledger.service.js";
export const getLedger = async (req, res) => {
    try {
        const userId = req._id;
        const { limit, skip } = req.query;
        const result = await ledgerService.getLedger(userId, limit ? parseInt(limit) : 50, skip ? parseInt(skip) : 0);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getSummary = async (req, res) => {
    try {
        const userId = req._id;
        const summary = await ledgerService.getLedgerSummary(userId);
        res.status(200).json({
            message: "Ledger summary retrieved successfully",
            data: summary,
        });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const getBalanceHistory = async (req, res) => {
    try {
        const userId = req._id;
        const { limit } = req.query;
        const result = await ledgerService.getBalanceHistory(userId, limit ? parseInt(limit) : 30);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=ledger.controller.js.map