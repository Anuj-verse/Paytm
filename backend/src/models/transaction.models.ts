import mongoose from "mongoose";


const transactionSchema = new mongoose.Schema({
    sender: {type:String,required:true},
    receiver: {type:String,required:true},
    amount: {type:Number,required:true},
    refenenceId: {type:String,required:true},
    status: {type:String,enum:["pending","success","failed"],default:"pending"},
    type: {type:String,enum: ["add_money","withdraw","wallet_transfer","merchant_payment"]},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

const Transaction = mongoose.model("Transaction",transactionSchema);

export default Transaction;