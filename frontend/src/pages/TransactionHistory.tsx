import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
  History,
  ArrowDownLeft,
  ArrowUpRight,
  ChevronLeft,
  Loader2,
} from 'lucide-react';

type TransactionType = 'all' | 'sent' | 'received' | 'added';

type TransactionItem = {
  id: string;
  type: 'sent' | 'received' | 'added';
  amount: number;
  label: string;
  date: string;
  isPositive: boolean;
};

const FILTERS: { label: string; value: TransactionType }[] = [
  { label: 'All', value: 'all' },
  { label: 'Sent', value: 'sent' },
  { label: 'Received', value: 'received' },
  { label: 'Added', value: 'added' },
];

const PAGE_SIZE = 20;

function decodeUserId(token: string): string {
  try {
    return JSON.parse(atob(token.split('.')[1]))._id;
  } catch {
    return '';
  }
}

async function fetchTransactions(token: string, skip: number, limit: number): Promise<any[]> {
  const response = await fetch(
    `http://localhost:3000/api/transactions/history?limit=${limit}&skip=${skip}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        token,
      },
    }
  );

  if (!response.ok) {
    throw new Error(`Failed to fetch transactions (${response.status})`);
  }

  const data = await response.json();
  return Array.isArray(data.data) ? data.data : [];
}

function transformTransaction(txn: any, currentUserId: string): TransactionItem {
  const senderId = txn.senderId?._id || '';
  const receiverId = txn.receiverId?._id || '';
  const isSelf = senderId && receiverId && senderId === receiverId;
  const isSender = senderId === currentUserId;

  const type = isSelf ? 'added' : isSender ? 'sent' : 'received';
  const isPositive = type !== 'sent';

  return {
    id: txn._id || crypto.randomUUID(),
    type,
    amount: txn.amount,
    label: isSelf
      ? 'Money Added'
      : isPositive
      ? `From ${txn.senderId?.username || 'Unknown'}`
      : `To ${txn.receiverId?.username || 'Unknown'}`,
    date: new Date(txn.createdAt).toLocaleDateString(),
    isPositive,
  };
}

const TransactionHistory = () => {
  const navigate = useNavigate();
  const [transactions, setTransactions] = useState<TransactionItem[]>([]);
  const [filter, setFilter] = useState<TransactionType>('all');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [page, setPage] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  const loadTransactions = async (pageIndex: number, replace: boolean) => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    try {
      if (replace) setLoading(true);
      else setLoadingMore(true);

      const raw = await fetchTransactions(token, pageIndex * PAGE_SIZE, PAGE_SIZE);
      const currentUserId = decodeUserId(token);
      const transformed = raw.map((txn) => transformTransaction(txn, currentUserId));

      setTransactions((prev) => (replace ? transformed : [...prev, ...transformed]));
      setHasMore(raw.length === PAGE_SIZE);
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
    } finally {
      setLoading(false);
      setLoadingMore(false);
    }
  };

  useEffect(() => {
    setPage(0);
    loadTransactions(0, true);
  }, []);

  const handleLoadMore = async () => {
    const nextPage = page + 1;
    setPage(nextPage);
    await loadTransactions(nextPage, false);
  };

  const filtered =
    filter === 'all' ? transactions : transactions.filter((t) => t.type === filter);

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <Button
            variant="ghost"
            size="sm"
            className="text-gray-400 hover:text-white p-0"
            onClick={() => navigate('/dashboard')}
          >
            <ChevronLeft size={24} />
          </Button>
          <History className="text-cyan-400" size={28} />
          <h1 className="text-3xl font-bold">Transaction History</h1>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-2 mb-6 flex-wrap">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-colors ${
                filter === f.value
                  ? 'bg-cyan-600 border-cyan-600 text-white'
                  : 'bg-transparent border-white/20 text-gray-400 hover:border-white/40 hover:text-white'
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Content */}
        {loading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="text-cyan-400 animate-spin" size={36} />
          </div>
        ) : error ? (
          <Card className="bg-white/5 border-white/10 p-6 text-center text-red-400">
            {error}
          </Card>
        ) : filtered.length === 0 ? (
          <Card className="bg-white/5 border-white/10 p-10 text-center text-gray-400">
            No transactions found.
          </Card>
        ) : (
          <>
            <Card className="bg-white/5 border-white/10 p-4">
              <div className="space-y-3">
                {filtered.map((txn) => (
                  <div
                    key={txn.id}
                    className="flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5"
                  >
                    <div className="flex items-center gap-4">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          txn.isPositive ? 'bg-green-600/20' : 'bg-red-600/20'
                        }`}
                      >
                        {txn.isPositive ? (
                          <ArrowDownLeft className="text-green-400" size={16} />
                        ) : (
                          <ArrowUpRight className="text-red-400" size={16} />
                        )}
                      </div>
                      <div>
                        <p className="font-semibold text-white">{txn.label}</p>
                        <p className="text-gray-400 text-sm">{txn.date}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <Badge
                        className={`text-xs ${
                          txn.type === 'added'
                            ? 'bg-blue-600/20 text-blue-400 border-blue-500/20'
                            : txn.type === 'received'
                            ? 'bg-green-600/20 text-green-400 border-green-500/20'
                            : 'bg-red-600/20 text-red-400 border-red-500/20'
                        }`}
                      >
                        {txn.type}
                      </Badge>
                      <p
                        className={`font-bold ${
                          txn.isPositive ? 'text-green-400' : 'text-red-400'
                        }`}
                      >
                        {txn.isPositive ? '+' : '-'}${txn.amount}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {hasMore && (
              <div className="text-center mt-6">
                <Button
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg"
                  onClick={handleLoadMore}
                  disabled={loadingMore}
                >
                  {loadingMore ? (
                    <span className="flex items-center gap-2">
                      <Loader2 className="animate-spin" size={16} /> Loading...
                    </span>
                  ) : (
                    'Load More'
                  )}
                </Button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionHistory;
