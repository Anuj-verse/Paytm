import { authService } from "./auth.service.js";
export const signup = async (req, res) => {
    try {
        const { username, email, phone, password } = req.body;
        console.log("Signup request received:", { username, email, phone, password });
        const result = await authService.signup({ username, email, phone, password });
        res.status(201).json({ message: "User created successfully", user: result, token: result.token });
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
export const signin = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log("Signin request received:", { email, password });
        const result = await authService.signin({ email, password });
        res.status(200).json({ message: "Login successful", user: result.user, token: result.token });
    }
    catch (error) {
        res.status(401).json({ message: error.message });
    }
};
export const getProfile = async (req, res) => {
    try {
        const userId = req.userId || req._id;
        const user = await authService.getUserById(userId);
        res.status(200).json(user);
    }
    catch (error) {
        res.status(400).json({ message: error.message });
    }
};
//# sourceMappingURL=auth.controller.js.map