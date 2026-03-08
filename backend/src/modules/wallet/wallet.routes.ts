import { Router } from "express";
import * as walletController from "./wallet.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = Router();

// All wallet routes require authentication
router.use(authMiddleware);

router.get("/balance", walletController.getBalance);
router.post("/add-money", walletController.addMoney);
router.post("/transfer", walletController.transferMoney);

export default router;
