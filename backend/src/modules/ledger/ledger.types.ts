export interface LedgerEntry {
  userId: string;
  amount: number;
  type: "debit" | "credit";
  description?: string;
}

export interface LedgerResponse {
  message: string;
  data?: any[];
}
