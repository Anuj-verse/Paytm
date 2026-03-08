import type { Request, Response } from "express";
import { ledgerService } from "./ledger.service.js";

export const getLedger = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const { limit, skip } = req.query;

    const result = await ledgerService.getLedger(
      userId,
      limit ? parseInt(limit as string) : 50,
      skip ? parseInt(skip as string) : 0
    );
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getSummary = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const summary = await ledgerService.getLedgerSummary(userId);
    res.status(200).json({
      message: "Ledger summary retrieved successfully",
      data: summary,
    });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};

export const getBalanceHistory = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId = (req as any)._id;
    const { limit } = req.query;

    const result = await ledgerService.getBalanceHistory(
      userId,
      limit ? parseInt(limit as string) : 30
    );
    res.status(200).json(result);
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
