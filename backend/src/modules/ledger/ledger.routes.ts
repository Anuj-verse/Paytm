import { Router } from "express";
import * as ledgerController from "./ledger.controller.js";
import authMiddleware from "../../middlewares/auth.middleware.js";

const router = Router();

// All ledger routes require authentication
router.use(authMiddleware);

router.get("/", ledgerController.getLedger);
router.get("/summary", ledgerController.getSummary);
router.get("/balance-history", ledgerController.getBalanceHistory);

export default router;
