import { walletService } from "./wallet.service.js";
export const getBalance = async (req, res) => {
    try {
        const userId = req._id;
        const result = await walletService.getBalance(userId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const addMoney = async (req, res) => {
    try {
        const userId = req._id;
        const { amount, paymentMethod } = req.body;
        const result = await walletService.addMoney(userId, { amount, paymentMethod });
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const transferMoney = async (req, res) => {
    try {
        const userId = req._id;
        const { receiverPhone, amount } = req.body;
        const result = await walletService.transferMoney(userId, { receiverPhone, amount });
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=wallet.controller.js.map