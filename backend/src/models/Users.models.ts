import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    kycStatus:{ type:String, enum: ["pending", "approved", "rejected"]},
    role:{ type:String, enum: ["user","merchant","admin"]},
    walletID:{ type:mongoose.Schema.Types.ObjectId, ref:"Wallet"},
    createdAt: { type: Date, default: Date.now},
    updatedAt: { type: Date, default: Date.now},
})

const User = mongoose.model("User",userSchema);

export default User;