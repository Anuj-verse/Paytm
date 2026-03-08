import Transaction from "../../models/transaction.models.js";
import type { TransactionHistoryRequest, TransactionResponse } from "./transaction.types.js";

export class TransactionService {
  async getTransactionHistory(userId: string, filters?: TransactionHistoryRequest): Promise<TransactionResponse> {
    const { transactionType, limit = 10, skip = 0 } = filters || {};

    const query: any = {
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

  async getTransactionById(transactionId: string): Promise<TransactionResponse> {
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

  async getTransactionStats(userId: string): Promise<any> {
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
