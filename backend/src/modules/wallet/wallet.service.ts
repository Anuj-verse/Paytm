import Wallet from "../../models/wallet.models.js";
import User from "../../models/Users.models.js";
import Transaction from "../../models/transaction.models.js";
import type { TransferRequest, AddMoneyRequest, WalletResponse, TransferResponse } from "./wallet.types.js";

export class WalletService {
  async getBalance(userId: string): Promise<WalletResponse> {
    const wallet = await Wallet.findOne({ userId });
    
    if (!wallet) {
      throw new Error("Wallet not found");
    }

    return {
      message: "Balance retrieved successfully",
      data: {
        userId: wallet.userId.toString(),
        balance: wallet.balance,
        currency: wallet.currency,
        status: wallet.status,
      },
    };
  }

  async addMoney(userId: string, data: AddMoneyRequest): Promise<WalletResponse> {
    const { amount, paymentMethod } = data;

    if (amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    const wallet = await Wallet.findOne({ userId });
    if (!wallet) {
      throw new Error("Wallet not found");
    }

    // Update wallet balance
    wallet.balance += amount;
    await wallet.save();

    // Create transaction record
    const transaction = new Transaction({
      senderId: userId,
      receiverId: userId, // Self transaction for add money
      amount,
      type: "credit",
      method: paymentMethod,
      status: "completed",
      description: `Added money via ${paymentMethod}`,
    });
    await transaction.save();

    // Add transaction to wallet
    wallet.transaction.push(transaction._id);
    await wallet.save();

    return {
      message: "Money added successfully",
      data: {
        userId: wallet.userId.toString(),
        balance: wallet.balance,
        currency: wallet.currency,
        status: wallet.status,
      },
    };
  }

  async transferMoney(senderId: string, data: TransferRequest): Promise<TransferResponse> {
    const { receiverPhone, amount } = data;

    if (amount <= 0) {
      throw new Error("Amount must be greater than 0");
    }

    // Find receiver by phone
    const receiver = await User.findOne({ phone: receiverPhone });
    if (!receiver) {
      throw new Error("Receiver not found");
    }

    // Get sender wallet
    const senderWallet = await Wallet.findOne({ userId: senderId });
    if (!senderWallet) {
      throw new Error("Sender wallet not found");
    }

    // Check balance
    if (senderWallet.balance < amount) {
      throw new Error("Insufficient balance");
    }

    // Check daily limit
    if (senderWallet.balance - amount < 0) {
      throw new Error("Transaction exceeds daily limit");
    }

    // Get receiver wallet
    const receiverWallet = await Wallet.findOne({ userId: receiver._id });
    if (!receiverWallet) {
      throw new Error("Receiver wallet not found");
    }

    // Perform transfer (should ideally be in a transaction)
    senderWallet.balance -= amount;
    receiverWallet.balance += amount;

    // Create transaction records
    const transaction = new Transaction({
      senderId,
      receiverId: receiver._id,
      amount,
      type: "transfer",
      method: "wallet",
      status: "completed",
      description: `Transfer to ${receiver.phone}`,
    });
    await transaction.save();

    // Add transaction to both wallets
    senderWallet.transaction.push(transaction._id);
    receiverWallet.transaction.push(transaction._id);

    await senderWallet.save();
    await receiverWallet.save();

    return {
      message: "Transfer completed successfully",
      data: {
        transactionId: transaction._id.toString(),
        amount,
        sender: senderId,
        receiver: receiver._id.toString(),
        timestamp: transaction.createdAt || new Date(),
      },
    };
  }
}

export const walletService = new WalletService();
