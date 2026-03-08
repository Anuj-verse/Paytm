declare class Logger {
    private getTimestamp;
    private formatLog;
    info(message: string, data?: any): void;
    warning(message: string, data?: any): void;
    error(message: string, data?: any): void;
    debug(message: string, data?: any): void;
}
export declare const logger: Logger;
export {};
//# sourceMappingURL=logger.d.ts.map