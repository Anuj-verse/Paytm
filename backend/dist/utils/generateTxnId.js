/**
 * Generates a unique transaction ID
 * Format: TXN_YYYYMMDD_HHMMSS_RANDOMSTRING
 */
export const generateTransactionId = () => {
    // const date = new Date.now().toISOString().split("T")[0].replace(/-/g, "") as string;
    // const time = new Date.now().toTimeString().split(" ")[0].replace(/:/g, "") as string;
    const random = Math.random().toString(36).substring(2, 15);
    //return `TXN_${date}_${time}_${random}`;
    return `TXN_${random}`;
};
/**
 * Generates a unique wallet transaction ID
 * Format: WL_TIMESTAMP_RANDOMSTRING
 */
export const generateWalletTransactionId = () => {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2, 10);
    return `WL_${timestamp}_${random}`;
};
/**
 * Generates a unique reference ID for tracking
 */
export const generateReferenceId = () => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let result = "REF";
    for (let i = 0; i < 12; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
};
//# sourceMappingURL=generateTxnId.js.map