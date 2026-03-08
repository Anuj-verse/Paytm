import type { Request, Response } from "express";
import { walletService } from "./wallet.service.js";
import type { TransferRequest, AddMoneyRequest } from "./wallet.types.js";

export const getBalance = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const result = await walletService.getBalance(userId);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const addMoney = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const { amount, paymentMethod } = req.body as AddMoneyRequest;
    const result = await walletService.addMoney(userId, { amount, paymentMethod });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const transferMoney = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const { receiverPhone, amount } = req.body as TransferRequest;
    const result = await walletService.transferMoney(userId, { receiverPhone, amount });
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
