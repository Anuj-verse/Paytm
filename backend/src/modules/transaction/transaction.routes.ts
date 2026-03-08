import { Router } from "express";
import * as transactionController from "./transaction.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = Router();

// All transaction routes require authentication
router.use(authMiddleware);

router.get("/history", transactionController.getHistory);
router.get("/stats", transactionController.getStats);
router.get("/:transactionId", transactionController.getTransaction);

export default router;
