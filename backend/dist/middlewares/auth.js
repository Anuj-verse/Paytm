import jwt from 'jsonwebtoken';
import User from '../models/Users.models.js';
const authMiddleware = async (req, res, next) => {
    try {
        const token = req.headers["token"];
        if (!token) {
            return res.status(401).json({ message: "No token provided" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findOne({ _id: decoded._id });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        req._id = decoded._id;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json({ message: "Invalid token" });
    }
};
export default authMiddleware;
//# sourceMappingURL=auth.js.map