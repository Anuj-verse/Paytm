import { useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useNavigate } from "react-router-dom";
import  AddMoney  from "@/components/AddMoney";
import SendMoney from '@/components/SendMoney';
import {
  Wallet,
  Send,
  Plus,
  History,
  ArrowUpRight,
  ArrowDownLeft,
  DollarSign
} from "lucide-react";

 async function getbalance(){
    try{
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found, user might not be authenticated");
            return 0;
        }
        const balanceResponse = await fetch("http://localhost:3000/api/wallet/balance", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": token
            }
        });
        const balanceData = await balanceResponse.json();
        console.log("Balance response:", balanceData);
        if (balanceResponse.ok) {
            console.log("Current balance:", balanceData.data.balance);
            return balanceData.data.balance;
        } else {
            console.error("Failed to fetch balance", balanceData);
            return 0;
        }
    }catch(error){
        console.error("Error fetching balance:", error);
        return 0;
    }
  }


const Dashboard = () => {
    
  const navigate = useNavigate();
  //const [transactions,setTransactions] = useState([]);
  type TransactionItem = {
    id: number;
    type: 'sent' | 'received' | 'added';
    amount: number;
    label: string;
    date: string;
    isPositive: boolean;
  };

  const [transactions, setTransactions] = useState<TransactionItem[]>([
    { id: 1, type: 'added', amount: 500, label: 'Money Added', date: '2024-03-15', isPositive: true },
    { id: 2, type: 'sent', amount: 200, label: 'To Prakhar', date: '2024-03-14', isPositive: false },
    { id: 3, type: 'received', amount: 100, label: 'From Arpit', date: '2024-03-13', isPositive: true },
    { id: 4, type: 'sent', amount: 50, label: 'To Saatyak', date: '2024-03-12', isPositive: false },
  ]);
  const [balance, setBalance] = useState(0);
  const [showAddMoney, setShowAddMoney] = useState(false);
  const [showSendMoney, setShowSendMoney] = useState(false);

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getbalance();
      setBalance(balance);
    };
    fetchBalance();
  }, []);

  const fetchTransactions = async () => {
    try {
        const token = localStorage.getItem("token");
        if (!token) {
            console.error("No token found for transactions");
            return;
        }

        const response = await fetch("http://localhost:3000/api/transactions/history", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "token": token
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log("Transactions response:", data);

        if (data.data && Array.isArray(data.data)) {
            // Decode current user id from JWT so we can determine transaction direction
            let currentUserId = "";
            try {
                currentUserId = JSON.parse(atob(token.split('.')[1]))._id;
            } catch {
                // ignore
            }

            // Transform backend transaction data to frontend format
            const transformedTransactions = data.data.map((txn: any, index: number) => {
                const senderId = txn.senderId?._id || "";
                const receiverId = txn.receiverId?._id || "";
                const isSelf = senderId && receiverId && senderId === receiverId;
                const isSender = senderId === currentUserId;

                const type = isSelf ? 'added' : isSender ? 'sent' : 'received';
                const isPositive = type !== 'sent';

                return {
                    id: txn._id || index + 1,
                    type,
                    amount: txn.amount,
                    label: isSelf ? 'Money Added' : isPositive ? `From ${txn.senderId?.username || 'Unknown'}` : `To ${txn.receiverId?.username || 'Unknown'}`,
                    date: new Date(txn.createdAt).toLocaleDateString(),
                    isPositive,
                };
            });
            setTransactions(transformedTransactions);
        } else {
            console.error("Invalid transaction data structure:", data);
        }
    } catch (error) {
        console.error("Error fetching transactions:", error);
    }
  };

  useEffect(() => {
    const fetchBalance = async () => {
      const balance = await getbalance();
      setBalance(balance);
    };
    fetchBalance();
    fetchTransactions();
  }, []);

  const handleMoneyAdded = async () => {
    // Refresh balance after adding money
    const newBalance = await getbalance();
    setBalance(newBalance);
    // Refresh transactions
    await fetchTransactions();
  };

  const handleMoneySent = async () => {
    // Refresh balance after sending money
    const newBalance = await getbalance();
    setBalance(newBalance);
    // Refresh transactions
    await fetchTransactions();
  };

  return (
    <div className='min-h-screen bg-black text-white p-6'>
        <AddMoney isOpen={showAddMoney} onClose={() => setShowAddMoney(false)} onMoneyAdded={handleMoneyAdded} />
        <SendMoney isOpen={showSendMoney} onClose={() => setShowSendMoney(false)} onMoneySent={handleMoneySent} />
      <div className='max-w-6xl mx-auto'>
        {/* Header */}
        <div className='flex items-center justify-between mb-8'>
          <div className='flex items-center gap-3'>
            <Wallet className='text-cyan-400' size={32} />
            <h1 className='text-3xl font-bold'>Dashboard</h1>
          </div>
          <Button
            className='bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg'
            onClick={() => {
              localStorage.removeItem("token");
              navigate('/login');
            }}
          >
            Logout
          </Button>
        </div>

        {/* Balance Card */}
        <Card className='bg-gradient-to-r from-cyan-900/20 to-blue-900/20 border-cyan-500/20 p-8 mb-8'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-gray-400 text-lg mb-2'>Wallet Balance</p>
              <div className='flex items-center gap-2'>
                <DollarSign className='text-cyan-400' size={32} />
                <span className='text-4xl font-bold text-white'>${balance.toFixed(2)}</span>
              </div>
            </div>
            <div className='text-right'>
              <p className='text-gray-400 mb-1'>Available</p>
              <Badge className='bg-green-600/20 text-green-400 border-green-500/20'>
                Active
              </Badge>
            </div>
          </div>
        </Card>

        {/* Action Buttons */}
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mb-8'>
          <Card className='bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer group' onClick={() => setShowSendMoney(true)}>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-lg bg-cyan-600/20 flex items-center justify-center group-hover:bg-cyan-600/30 transition-colors'>
                <Send className='text-cyan-400' size={24} />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-1 text-white' >Send Money</h3>
                <p className='text-gray-400 text-sm'>Transfer funds to another account</p>
              </div>
              <ArrowUpRight className='ml-auto text-gray-500 group-hover:text-cyan-400 transition-colors' size={20} />
            </div>
          </Card>

          <Card className='bg-white/5 border-white/10 p-6 hover:bg-white/10 transition-all cursor-pointer group' onClick={() => setShowAddMoney(true)}>
            <div className='flex items-center gap-4'>
              <div className='w-12 h-12 rounded-lg bg-green-600/20 flex items-center justify-center group-hover:bg-green-600/30 transition-colors'>
                <Plus className='text-green-400' size={24} />
              </div>
              <div>
                <h3 className='text-xl font-semibold mb-1 text-white'>Add Money</h3>
                <p className='text-gray-400 text-sm'>Deposit funds to your wallet</p>
              </div>
              <ArrowDownLeft className='ml-auto text-gray-500 group-hover:text-green-400 transition-colors' size={20} />
            </div>
          </Card>
        </div>

        {/* Recent Transactions */}
        <Card className='bg-white/5 border-white/10 p-6'>
          <div className='flex items-center gap-3 mb-6'>
            <History className='text-cyan-400' size={24} />
            <h2 className='text-2xl font-bold text-white'>Recent Transactions</h2>
          </div>

          <div className='space-y-4'>
            {transactions.map((transaction) => (
              <div key={transaction.id} className='flex items-center justify-between p-4 bg-black/20 rounded-lg border border-white/5'>
                <div className='flex items-center gap-4'>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    transaction.isPositive ? 'bg-green-600/20' : 'bg-red-600/20'
                  }`}>
                    {transaction.isPositive ? (
                      <ArrowDownLeft className='text-green-400' size={16} />
                    ) : (
                      <ArrowUpRight className='text-red-400' size={16} />
                    )}
                  </div>
                  <div>
                    <p className='font-semibold text-white'>
                      {transaction.label}
                    </p>
                    <p className='text-gray-400 text-sm'>{transaction.date}</p>
                  </div>
                </div>
                <div className='text-right'>
                  <p className={`font-bold ${
                    transaction.isPositive ? 'text-green-400' : 'text-red-400'
                  }`}>
                    {transaction.isPositive ? '+' : '-'}${transaction.amount}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center mt-6'>
            <Button className='bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg' onClick={() => navigate('/transactions')}>
              View All Transactions
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;