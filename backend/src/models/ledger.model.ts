import mongoose from "mongoose";

const ledgerSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  transactionId: { type: mongoose.Schema.Types.ObjectId, ref: "Transaction" },
  amount: { type: Number, required: true },
  type: { type: String, enum: ["debit", "credit"], required: true },
  balance: { type: Number, required: true }, // Running balance after this transaction
  description: { type: String },
  createdAt: { type: Date, default: Date.now },
});

const Ledger = mongoose.model("Ledger", ledgerSchema);

export default Ledger;
