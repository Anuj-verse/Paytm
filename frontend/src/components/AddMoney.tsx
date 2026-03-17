import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { X, CreditCard, Banknote } from "lucide-react";

interface AddMoneyProps {
  isOpen: boolean;
  onClose: () => void;
  onMoneyAdded?: () => void;
}

const AddMoney: React.FC<AddMoneyProps> = ({ isOpen, onClose, onMoneyAdded }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!amount || parseFloat(amount) <= 0) {
      alert('Please enter a valid amount');
      return;
    }

    setLoading(true);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert('Authentication required');
        return;
      }

      const response = await fetch("http://localhost:3000/api/wallet/add-money", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "token": token
        },
        body: JSON.stringify({
          amount: parseFloat(amount),
          paymentMethod
        })
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        throw new Error(errorData.message || 'Failed to add money');
      }

      const result = await response.json();
      console.log("Money added successfully:", result);

      // Reset form
      setAmount('');
      setPaymentMethod('card');
      onClose();

      // Notify parent component to refresh balance
      if (onMoneyAdded) {
        onMoneyAdded();
      }

      alert('Money added successfully!');
    } catch (error) {
      console.error("Error adding money:", error);
      alert(error instanceof Error ? error.message : 'Failed to add money');
    } finally {
      setLoading(false);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <Card className="bg-black border-white/10 p-6 w-full max-w-md mx-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-white">Add Money</h2>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-400 hover:text-white"
          >
            <X size={20} />
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label className="text-gray-300">Amount (₹)</Label>
            <Input
              type="number"
              step="0.01"
              min="0.01"
              placeholder="Enter amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-black/40 border-white/10 text-white h-11 rounded-xl"
              required
            />
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">Payment Method</Label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                  paymentMethod === 'card'
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                <CreditCard size={16} />
                <span className="text-sm">Card</span>
              </button>
              <button
                type="button"
                onClick={() => setPaymentMethod('bank')}
                className={`flex items-center gap-2 p-3 rounded-lg border transition-colors ${
                  paymentMethod === 'bank'
                    ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                    : 'border-white/10 bg-white/5 text-gray-400 hover:border-white/20'
                }`}
              >
                <Banknote size={16} />
                <span className="text-sm">Bank</span>
              </button>
            </div>
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1 border-white/10 text-gray-400 hover:bg-white/5"
            >
              Cancel
            </Button>
            <Button
              type="submit"
              disabled={loading}
              className="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white"
            >
              {loading ? 'Adding...' : 'Add Money'}
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default AddMoney;