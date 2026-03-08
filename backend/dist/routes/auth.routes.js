import { Router } from 'express';
import User from "../models/Users.models.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const router = Router();
router.get('/', (req, res) => {
    res.send("hello from auth");
});
router.post('/signup', async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        if (!username || !email || !phone || !password) {
            return res.status(401).json("All fields are required");
        }
        const user = await User.findOne({
            $or: [{ username }, { email }, { phone }]
        });
        if (user) {
            return res.status(401).json("user credentials is already present");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ username, email, phone, password: hashedPassword });
        await newUser.save();
        const token = jwt.sign({
            _id: newUser._id,
        }, process.env.JWT_SECRET);
        return res.status(201).json({ "message": "User created successfully", "token": token });
    }
    catch (error) {
        console.log(error);
    }
});
router.post('/signin', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(401).json("All fields are required");
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json("users is not present ,signup first");
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch)
            return res.status(401).json("password is incorrect");
        const token = jwt.sign({
            _id: user._id,
        }, process.env.JWT_SECRET);
        return res.status(201).json({ "token": token });
    }
    catch (error) {
        console.log(error);
    }
});
export default router;
//# sourceMappingURL=auth.routes.js.map