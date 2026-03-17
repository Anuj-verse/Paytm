import express from "express";
import cors from "cors";
import dotenv from "dotenv";
// Middlewares
import { errorMiddleware, notFoundMiddleware } from "./middlewares/error.middleware.js";
import { rateLimitMiddleware } from "./middlewares/rateLimit.middleware.js";
import authMiddleware from "./middlewares/auth.middleware.js";
// Routes
import authRoutes from "./modules/auth/auth.routes.js";
import walletRoutes from "./modules/wallet/wallet.routes.js";
import transactionRoutes from "./modules/transaction/transaction.routes.js";
import ledgerRoutes from "./modules/ledger/ledger.routes.js";
// Logger
import { logger } from "./utils/logger.js";
dotenv.config();
const app = express();
// Global Middlewares
app.use(express.json());
app.use(cors());
app.use(rateLimitMiddleware(60 * 1000, 100)); // 100 requests per minute
app.use(express.urlencoded({ extended: true }));
// Health check endpoint
app.get("/health", (req, res) => {
    res.status(200).json({
        status: "OK",
        timestamp: new Date().toISOString(),
    });
});
// API Routes
app.use("/api/auth", authRoutes);
app.use("/api/wallet", walletRoutes);
app.use("/api/transactions", transactionRoutes);
app.use("/api/ledger", ledgerRoutes);
// 404 Handler
app.use(notFoundMiddleware);
// Global Error Middleware (must be last)
app.use(errorMiddleware);
export default app;
//# sourceMappingURL=app.js.map