import React, { useState } from 'react'
import { Card } from './ui/card'
import { Button } from './ui/button';
import { X } from 'lucide-react';

interface SendMoneyProps {
    isOpen: boolean;
    onClose: () => void;
    onMoneySent?: () => void;
    // You can add more props like recipient info, amount, etc.
}

const SendMoney: React.FC<SendMoneyProps> = ({ isOpen, onClose, onMoneySent }) => {
    const [recipient, setRecipient] = useState('');
    const [amount, setAmount] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!recipient || !amount || parseFloat(amount) <= 0) {
            alert('Please enter valid recipient and amount');
            return;
        }

        setLoading(true);

        try {
            const token = localStorage.getItem("token");
            if (!token) {
                alert('Authentication required');
                return;
            }

            console.log("Transfer request sent:", { receiverPhone: recipient, amount: parseFloat(amount) })    
            const response = await fetch("http://localhost:3000/api/wallet/transfer", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "token": token
                },
                body: JSON.stringify({
                    receiverPhone: recipient,
                    amount: parseFloat(amount)
                }),
            });
            
            if (!response.ok) {
                const errorData = await response.json().catch(() => ({}));
                throw new Error(errorData.message || 'Failed to send money');
            }

            setLoading(false);
            onClose();
            if (onMoneySent) {
                onMoneySent();
            }
        } catch (error) {
            setLoading(false);
            alert((error as Error).message);
        }
    };
    if (!isOpen) return null;

  return (
    <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
        <Card className="bg-black border-white/10 p-6 w-[40em] mx-4">

        <div className='text-center mb-6 relative'>
          <h2 className='text-2xl font-bold text-white'>Send Money</h2>
          <p className='text-gray-400'>Transfer funds to another account</p>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white absolute top-4 right-4"
          >
            <X size={20} />
          </Button>
        </div>
        <form  onSubmit={handleSubmit} className='space-y-4'>
          <div className='space-y-2'>
            <label className='text-gray-300'>Recipient Account</label>
            <input
              type='number'
              placeholder='Enter recipient Phone number'
                value={recipient}
                onChange={(e) => {
                    setRecipient(e.target.value)
                    console.log("Recipient phone updated:", e.target.value)
                }}
              className='bg-black/40 border-white/10 text-white h-11 rounded-xl w-full px-4'
              required
            />
          </div>
          <div className='space-y-2 '>
            <label className='text-gray-300'>Amount (₹)</label>
            <input
              type='text'
              step='0.01'
              min='0.01'
              placeholder='Enter amount to send'
              value={amount}
                onChange={(e) => setAmount(e.target.value)}
              className='bg-black/40 border-white/10 text-white h-11 rounded-xl w-full px-4 mb-4 mt-1'
              required
            />
          </div>
          <button
            type='submit'
            disabled={loading}
            className='w-full bg-cyan-600 hover:bg-cyan-700 text-gray-200 font-bold py-3 rounded-xl transition-colors'
          >
            {loading ? 'Sending...' : 'Send Money'}
          </button>
        </form>
        
        </Card>
    </div>
  )
}

export default SendMoney
            
