import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  senderId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  receiverId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["credit", "debit", "transfer"], default: "transfer" },
  method: { type: String, enum: ["wallet", "card", "bank", "upi"], required: true },
  status: { type: String, enum: ["pending", "completed", "failed"], default: "pending" },
  description: { type: String },
  referenceId: { type: String, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const Transaction = mongoose.model("Transaction", transactionSchema);

export default Transaction;