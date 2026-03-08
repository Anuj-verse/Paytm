import app from "./app.js";
import connectDB from "./config/dbconfig.js";
import { logger } from "./utils/logger.js";
const PORT = process.env.PORT || 3000;
// Connect to MongoDB
connectDB();
// Start server
const server = app.listen(PORT, () => {
    logger.info(`Server started on port ${PORT}`);
    logger.info(`Environment: ${process.env.NODE_ENV || "development"}`);
});
// Graceful shutdown
process.on("SIGTERM", () => {
    logger.warning("SIGTERM received, shutting down gracefully");
    server.close(() => {
        logger.info("Server closed");
        process.exit(0);
    });
});
process.on("SIGINT", () => {
    logger.warning("SIGINT received, shutting down gracefully");
    server.close(() => {
        logger.info("Server closed");
        process.exit(0);
    });
});
export default server;
//# sourceMappingURL=server.js.map