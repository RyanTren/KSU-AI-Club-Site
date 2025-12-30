'use client';

import { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CreditCard, Heart, Sparkles, CheckCircle, XCircle } from 'lucide-react';

const donationTiers = [
    {
        id: 'supporter',
        name: 'Supporter',
        amount: 500, // $5.00 in cents
        displayAmount: '$5',
        description: 'Help us buy snacks for meetings',
        icon: '☕',
    },
    {
        id: 'contributor',
        name: 'Contributor',
        amount: 1500, // $15.00 in cents
        displayAmount: '$15',
        description: 'Support our workshop materials',
        icon: '📚',
    },
    {
        id: 'champion',
        name: 'Champion',
        amount: 2500, // $25.00 in cents
        displayAmount: '$25',
        description: 'Fund our AI projects and events',
        icon: '🚀',
    },
    {
        id: 'patron',
        name: 'Patron',
        amount: 5000, // $50.00 in cents
        displayAmount: '$50',
        description: 'Major supporter of club initiatives',
        icon: '⭐',
    },
];

export default function PayPortalPage() {
    const searchParams = useSearchParams();
    const [selectedTier, setSelectedTier] = useState<string | null>(null);
    const [customAmount, setCustomAmount] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

    useEffect(() => {
        if (searchParams.get('success')) {
            setMessage({
                type: 'success',
                text: 'Thank you for your donation! Your support means the world to us.',
            });
        }
        if (searchParams.get('canceled')) {
            setMessage({
                type: 'error',
                text: 'Payment was canceled. Feel free to try again when you\'re ready.',
            });
        }
    }, [searchParams]);

    const handleCheckout = async () => {
        setIsLoading(true);
        setMessage(null);

        try {
            const tier = donationTiers.find(t => t.id === selectedTier);
            const amount = tier?.amount || 0;
            const customAmountCents = customAmount ? Math.round(parseFloat(customAmount) * 100) : 0;

            const response = await fetch('/api/checkout', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: amount,
                    customAmount: customAmountCents > 0 ? parseFloat(customAmount) : null,
                    donationType: tier?.name || 'Custom Donation',
                }),
            });

            const data = await response.json();

            if (data.error) {
                throw new Error(data.error);
            }

            // Redirect to Stripe Checkout URL
            if (data.url) {
                window.location.href = data.url;
            } else {
                throw new Error('No checkout URL returned');
            }
        } catch (err: any) {
            setMessage({
                type: 'error',
                text: err.message || 'Something went wrong. Please try again.',
            });
            setIsLoading(false);
        }
    };

    const isValidAmount = selectedTier || (customAmount && parseFloat(customAmount) >= 1);

    return (
        <div className="min-h-screen bg-ksu-black text-ksu-white">
            <main className="container mx-auto py-20 px-4 pt-32">
                {/* Header Section */}
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Heart className="w-8 h-8 text-ksu-gold" />
                        <h1 className="text-4xl md:text-5xl font-bold">
                            Support <span className="text-ksu-gold">KSU AI Club</span>
                        </h1>
                    </div>
                    <p className="text-ksu-gray text-lg max-w-2xl mx-auto">
                        Your generous donations help us organize workshops, fund projects, 
                        and build a thriving AI community at Kennesaw State University.
                    </p>
                </motion.div>

                {/* Status Messages */}
                {message && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className={`max-w-2xl mx-auto mb-8 p-4 rounded-lg flex items-center gap-3 ${
                            message.type === 'success'
                                ? 'bg-green-900/50 border border-green-500 text-green-300'
                                : 'bg-red-900/50 border border-red-500 text-red-300'
                        }`}
                    >
                        {message.type === 'success' ? (
                            <CheckCircle className="w-6 h-6 flex-shrink-0" />
                        ) : (
                            <XCircle className="w-6 h-6 flex-shrink-0" />
                        )}
                        <p>{message.text}</p>
                    </motion.div>
                )}

                {/* Donation Tiers */}
                <motion.div
                    className="max-w-4xl mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <h2 className="text-2xl font-semibold mb-6 text-center">Choose a donation amount</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {donationTiers.map((tier, index) => (
                            <motion.button
                                key={tier.id}
                                onClick={() => {
                                    setSelectedTier(tier.id);
                                    setCustomAmount('');
                                }}
                                className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                                    selectedTier === tier.id
                                        ? 'border-ksu-gold bg-ksu-gold/10 shadow-lg shadow-ksu-gold/20'
                                        : 'border-ksu-gray/30 hover:border-ksu-gold/50 bg-ksu-black/50'
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.3, delay: index * 0.1 }}
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <div className="text-3xl mb-2">{tier.icon}</div>
                                <div className="text-2xl font-bold text-ksu-gold">{tier.displayAmount}</div>
                                <div className="font-semibold mt-1">{tier.name}</div>
                                <div className="text-sm text-ksu-gray mt-2">{tier.description}</div>
                            </motion.button>
                        ))}
                    </div>
                </motion.div>

                {/* Custom Amount */}
                <motion.div
                    className="max-w-md mx-auto mb-8"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                >
                    <div className="text-center mb-4">
                        <span className="text-ksu-gray">— or —</span>
                    </div>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-ksu-gold text-xl font-bold">$</span>
                        <input
                            type="number"
                            min="1"
                            step="0.01"
                            placeholder="Enter custom amount"
                            value={customAmount}
                            onChange={(e) => {
                                setCustomAmount(e.target.value);
                                setSelectedTier(null);
                            }}
                            className="w-full pl-10 pr-4 py-4 rounded-xl bg-ksu-black/50 border-2 border-ksu-gray/30 
                                     focus:border-ksu-gold focus:outline-none text-xl placeholder:text-ksu-gray/50
                                     transition-colors duration-300"
                        />
                    </div>
                    <p className="text-sm text-ksu-gray text-center mt-2">Minimum donation: $1.00</p>
                </motion.div>

                {/* Checkout Button */}
                <motion.div
                    className="max-w-md mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <button
                        onClick={handleCheckout}
                        disabled={!isValidAmount || isLoading}
                        className={`w-full py-4 px-8 rounded-xl font-bold text-lg flex items-center justify-center gap-3
                                  transition-all duration-300 ${
                                      isValidAmount && !isLoading
                                          ? 'bg-ksu-gold text-ksu-black hover:bg-ksu-gold/90 hover:shadow-lg hover:shadow-ksu-gold/30'
                                          : 'bg-ksu-gray/30 text-ksu-gray cursor-not-allowed'
                                  }`}
                    >
                        {isLoading ? (
                            <>
                                <div className="w-5 h-5 border-2 border-ksu-black border-t-transparent rounded-full animate-spin" />
                                Processing...
                            </>
                        ) : (
                            <>
                                <CreditCard className="w-5 h-5" />
                                Donate Now
                            </>
                        )}
                    </button>
                </motion.div>

                {/* Security Note */}
                <motion.div
                    className="max-w-2xl mx-auto mt-12 text-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <div className="flex items-center justify-center gap-2 text-ksu-gray mb-2">
                        <Sparkles className="w-4 h-4" />
                        <span className="text-sm">Secure payment powered by Stripe</span>
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <p className="text-sm text-ksu-gray/70">
                        All donations are processed securely. Your payment information never touches our servers.
                    </p>
                </motion.div>

                {/* What Your Donation Supports */}
                <motion.div
                    className="max-w-4xl mx-auto mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-2xl font-semibold mb-8 text-center">What Your Donation Supports</h2>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="p-6 rounded-xl bg-gradient-to-br from-ksu-black to-ksu-gray/10 border border-ksu-gray/20">
                            <div className="text-3xl mb-3">🎓</div>
                            <h3 className="font-semibold text-lg mb-2">Workshops & Events</h3>
                            <p className="text-ksu-gray text-sm">
                                Fund hands-on AI/ML workshops, guest speakers, and networking events.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-ksu-black to-ksu-gray/10 border border-ksu-gray/20">
                            <div className="text-3xl mb-3">💻</div>
                            <h3 className="font-semibold text-lg mb-2">Computing Resources</h3>
                            <p className="text-ksu-gray text-sm">
                                Help us access cloud computing and GPUs for AI projects and research.
                            </p>
                        </div>
                        <div className="p-6 rounded-xl bg-gradient-to-br from-ksu-black to-ksu-gray/10 border border-ksu-gray/20">
                            <div className="text-3xl mb-3">🏆</div>
                            <h3 className="font-semibold text-lg mb-2">Competitions</h3>
                            <p className="text-ksu-gray text-sm">
                                Support our teams participating in hackathons and AI competitions.
                            </p>
                        </div>
                    </div>
                </motion.div>
            </main>
        </div>
    );
}
