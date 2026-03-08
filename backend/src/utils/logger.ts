enum LogLevel {
  INFO = "INFO",
  WARNING = "WARNING",
  ERROR = "ERROR",
  DEBUG = "DEBUG",
}

class Logger {
  private getTimestamp(): string {
    return new Date().toISOString();
  }

  private formatLog(level: LogLevel, message: string, data?: any): string {
    const timestamp = this.getTimestamp();
    const dataStr = data ? `\n${JSON.stringify(data, null, 2)}` : "";
    return `[${timestamp}] [${level}] ${message}${dataStr}`;
  }

  info(message: string, data?: any): void {
    console.log(this.formatLog(LogLevel.INFO, message, data));
  }

  warning(message: string, data?: any): void {
    console.warn(this.formatLog(LogLevel.WARNING, message, data));
  }

  error(message: string, data?: any): void {
    console.error(this.formatLog(LogLevel.ERROR, message, data));
  }

  debug(message: string, data?: any): void {
    if (process.env.NODE_ENV === "development") {
      console.log(this.formatLog(LogLevel.DEBUG, message, data));
    }
  }
}

export const logger = new Logger();
