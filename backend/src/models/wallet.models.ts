import mongoose from "mongoose";

const walletSchema = new mongoose.Schema({
    userId:{ type:mongoose.Schema.Types.ObjectId, ref:"User",required:true},
    balance:{ type:Number, required:true,default:0},
    currency: { type: String, required:true,default:"INR"},
    status: { type: String, enum: ["active", "inactive"], default: "active"},
    dailylimit: {type: Number,default: 100000},
    transaction: [{ type:mongoose.Schema.Types.ObjectId, ref:"Transaction"}],
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

const Wallet = mongoose.model("Wallet",walletSchema);

export default Wallet;