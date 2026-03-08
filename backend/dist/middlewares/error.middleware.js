export const errorMiddleware = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    console.error(`[Error] ${statusCode}: ${message}`);
    res.status(statusCode).json({
        error: {
            statusCode,
            message,
            timestamp: new Date().toISOString(),
        },
    });
};
export const notFoundMiddleware = (req, res, next) => {
    res.status(404).json({
        error: {
            statusCode: 404,
            message: "Route not found",
        },
    });
};
//# sourceMappingURL=error.middleware.js.map