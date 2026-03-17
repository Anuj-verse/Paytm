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
export default server;
//# sourceMappingURL=server.js.map