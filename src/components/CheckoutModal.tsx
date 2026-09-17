import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, Copy } from 'lucide-react';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({ isOpen, onClose }) => {
  const [paymentMethod, setPaymentMethod] = useState<'bank' | 'paystack'>('paystack');
  const [fullName, setFullName] = useState('');
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [copied, setCopied] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const copyAccount = () => {
    navigator.clipboard.writeText('0124982741');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0A0A0A]/60 backdrop-blur-xs"
        />

        {/* Modal Dialog */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 10 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-lg bg-[#FFFFFF] border border-[#0A0A0A]/15 rounded-lg shadow-xl overflow-hidden z-10"
        >
          {/* Header */}
          <div className="p-6 border-b border-[#0A0A0A]/10 flex items-center justify-between">
            <div>
              <span className="inline-block bg-[#DC143C] text-white text-xs font-semibold px-2.5 py-0.5 rounded-full mb-1">
                Bridge Digital Hub
              </span>
              <h3 className="font-serif text-2xl font-bold text-[#0A0A0A]">
                Join the AI Sales System
              </h3>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="text-[#0A0A0A]/60 hover:text-[#0A0A0A] p-2 rounded-md cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-[#DC143C]"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6">
            {!isSuccess ? (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Price reminder */}
                <div className="p-4 bg-[#E8DFCB] rounded-md border border-[#0A0A0A]/10 flex items-center justify-between">
                  <span className="text-sm font-medium text-[#0A0A0A]">Early enrollment price</span>
                  <span className="text-xl font-serif font-bold text-[#0A0A0A]">18,000 naira</span>
                </div>

                {/* Payment Method Switcher (Active tab uses #DC143C) */}
                <div className="space-y-2">
                  <label className="text-xs font-semibold text-[#0A0A0A] block">
                    Select payment method
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('paystack')}
                      className={`p-3 text-sm font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                        paymentMethod === 'paystack'
                          ? 'bg-[#DC143C] text-white border-[#DC143C]'
                          : 'bg-white text-[#0A0A0A] border-[#0A0A0A]/20 hover:border-[#0A0A0A]/50'
                      }`}
                    >
                      Paystack
                    </button>
                    <button
                      type="button"
                      onClick={() => setPaymentMethod('bank')}
                      className={`p-3 text-sm font-semibold rounded-md border text-center transition-colors cursor-pointer ${
                        paymentMethod === 'bank'
                          ? 'bg-[#DC143C] text-white border-[#DC143C]'
                          : 'bg-white text-[#0A0A0A] border-[#0A0A0A]/20 hover:border-[#0A0A0A]/50'
                      }`}
                    >
                      Bank transfer
                    </button>
                  </div>
                </div>

                {paymentMethod === 'bank' ? (
                  <div className="p-4 bg-[#E8DFCB]/50 border border-[#0A0A0A]/10 rounded-md space-y-3 text-sm text-[#0A0A0A]">
                    <p className="font-semibold">Transfer 18,000 NGN to:</p>
                    <div className="space-y-1 text-xs sm:text-sm font-sans">
                      <div><span className="text-[#0A0A0A]/70">Bank:</span> Guaranty Trust Bank (GTBank)</div>
                      <div><span className="text-[#0A0A0A]/70">Account Name:</span> Bridge Digital Hub</div>
                      <div className="flex items-center justify-between gap-2 pt-1">
                        <div>
                          <span className="text-[#0A0A0A]/70">Account Number: </span>
                          <span className="font-mono font-bold text-sm">0124982741</span>
                        </div>
                        <button
                          type="button"
                          onClick={copyAccount}
                          className="text-xs font-semibold px-2 py-1 bg-white border border-[#0A0A0A]/20 rounded-md hover:bg-[#E8DFCB] flex items-center gap-1 cursor-pointer"
                        >
                          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                          {copied ? 'Copied' : 'Copy'}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="p-4 bg-[#E8DFCB]/50 border border-[#0A0A0A]/10 rounded-md text-sm text-[#0A0A0A] space-y-1">
                    <p className="font-semibold">Instant card or transfer payment via Paystack</p>
                    <p className="text-xs text-[#0A0A0A]/80">Supports debit cards, Apple Pay, USSD, and direct bank transfer.</p>
                  </div>
                )}

                {/* Contact info */}
                <div className="space-y-4">
                  <div>
                    <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                      Your full name
                    </label>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Morenike Aderibigbe"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/20 rounded-md text-sm text-[#0A0A0A] focus-visible:outline-2 focus-visible:outline-[#DC143C]"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-semibold text-[#0A0A0A] block mb-1">
                      WhatsApp phone number
                    </label>
                    <input
                      type="tel"
                      required
                      value={whatsappNumber}
                      onChange={(e) => setWhatsappNumber(e.target.value)}
                      placeholder="e.g. +234 801 234 5678"
                      className="w-full px-3.5 py-2.5 bg-white border border-[#0A0A0A]/20 rounded-md text-sm text-[#0A0A0A] focus-visible:outline-2 focus-visible:outline-[#DC143C]"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#DC143C] text-white text-base font-semibold py-3.5 rounded-md hover:opacity-90 active:opacity-95 transition-opacity cursor-pointer focus-visible:outline-2 focus-visible:outline-[#DC143C]"
                >
                  {paymentMethod === 'paystack'
                    ? 'Pay 18,000 naira with Paystack'
                    : 'I have transferred 18,000 naira'}
                </button>
              </form>
            ) : (
              <div className="space-y-6 py-4">
                <div className="w-12 h-12 rounded-full bg-[#DC143C] text-white flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>

                <div className="text-center space-y-3">
                  <h4 className="font-serif text-2xl font-bold text-[#0A0A0A]">
                    Enrollment Confirmed
                  </h4>
                  <p className="text-base text-[#0A0A0A]/90 font-sans leading-relaxed">
                    As soon as you pay, you're added directly to the closed WhatsApp group. From there, you'll get everything you need before the live session on October 22.
                  </p>
                </div>

                <div className="p-4 bg-[#E8DFCB] border border-[#0A0A0A]/10 rounded-md text-center">
                  <p className="text-sm font-semibold text-[#0A0A0A] mb-3">
                    Click below to enter the closed WhatsApp group:
                  </p>
                  <a
                    href="https://chat.whatsapp.com/"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-block w-full bg-[#DC143C] text-white text-base font-semibold py-3 px-6 rounded-md hover:opacity-90 active:opacity-95 transition-opacity text-center cursor-pointer"
                  >
                    Open closed WhatsApp group
                  </a>
                </div>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-xs text-[#0A0A0A]/70 hover:text-[#0A0A0A] underline cursor-pointer"
                  >
                    Close window
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
