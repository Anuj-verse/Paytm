import type {Response, Request,NextFunction} from 'express';
import User from "../models/Users.models.js"
import Wallet from '../models/wallet.models.js';

const createWallet = async (req: Request, res: Response,next: NextFunction) => {
    try {
        const _id = (req as any)._id;
        if (!_id) {
            return res.status(400).json({ message: "User ID is required" });
        }
        const user = await User.findOne({ _id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        const existingWallet = await Wallet.findOne({ userId: user._id });
        if (existingWallet) {
            return res.status(400).json({ message: "Wallet already exists for this user" });
        }
        const wallet = new Wallet({ userId: user._id });
        await wallet.save();
        res.status(201).json({ message: "Wallet created successfully", wallet });
        next();
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal server error" });
    }
}

export default createWallet;