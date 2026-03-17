import Ledger from "../../models/ledger.model.js";
import Wallet from "../../models/wallet.models.js";
import type { LedgerEntry, LedgerResponse } from "./ledger.types.js";

export class LedgerService {
  async recordEntry(data: LedgerEntry, transactionId?: string, balance?: number): Promise<void> {
    const { userId, amount, type, description } = data;

    // Use provided balance or get current wallet balance
    let currentBalance = balance;
    if (currentBalance === undefined) {
      const wallet = await Wallet.findOne({ userId });
      if (!wallet) {
        throw new Error("Wallet not found");
      }
      currentBalance = wallet.balance;
    }

    // Create ledger entry with running balance
    const ledgerEntry = new Ledger({
      userId,
      transactionId,
      amount,
      type,
      balance: currentBalance,
      description,
    });

    await ledgerEntry.save();
  }

  async getLedger(userId: string, limit = 50, skip = 0): Promise<LedgerResponse> {
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

  async getLedgerSummary(userId: string): Promise<any> {
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

  async getBalanceHistory(userId: string, limit = 30): Promise<LedgerResponse> {
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
