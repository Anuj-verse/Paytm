export interface TransactionHistoryRequest {
  transactionType?: "credit" | "debit" | "transfer";
  limit?: number;
  skip?: number;
}

export interface TransactionResponse {
  message: string;
  data?: any[];
}
