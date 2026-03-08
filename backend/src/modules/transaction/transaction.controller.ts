import type { Request, Response } from "express";
import { transactionService } from "./transaction.service.js";
import type { TransactionHistoryRequest } from "./transaction.types.js";

export const getHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const { type, limit, skip } = req.query;

    const filters: TransactionHistoryRequest = {
      transactionType: type as any,
      limit: limit ? parseInt(limit as string) : 10,
      skip: skip ? parseInt(skip as string) : 0,
    };

    const result = await transactionService.getTransactionHistory(userId, filters);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getTransaction = async (req: Request, res: Response): Promise<void> => {
  try {
    const { transactionId } = req.params as any;
    const result = await transactionService.getTransactionById(transactionId);
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getStats = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const stats = await transactionService.getTransactionStats(userId);
    res.status(200).json({
      message: "Transaction stats retrieved successfully",
      data: stats,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
