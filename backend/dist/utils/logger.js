var LogLevel;
(function (LogLevel) {
    LogLevel["INFO"] = "INFO";
    LogLevel["WARNING"] = "WARNING";
    LogLevel["ERROR"] = "ERROR";
    LogLevel["DEBUG"] = "DEBUG";
})(LogLevel || (LogLevel = {}));
class Logger {
    getTimestamp() {
        return new Date().toISOString();
    }
    formatLog(level, message, data) {
        const timestamp = this.getTimestamp();
        const dataStr = data ? `\n${JSON.stringify(data, null, 2)}` : "";
        return `[${timestamp}] [${level}] ${message}${dataStr}`;
    }
    info(message, data) {
        console.log(this.formatLog(LogLevel.INFO, message, data));
    }
    warning(message, data) {
        console.warn(this.formatLog(LogLevel.WARNING, message, data));
    }
    error(message, data) {
        console.error(this.formatLog(LogLevel.ERROR, message, data));
    }
    debug(message, data) {
        if (process.env.NODE_ENV === "development") {
            console.log(this.formatLog(LogLevel.DEBUG, message, data));
        }
    }
}
export const logger = new Logger();
//# sourceMappingURL=logger.js.map