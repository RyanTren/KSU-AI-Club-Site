import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-12-15.clover',
});

export async function POST(request: NextRequest) {
    try {
        const { amount, donationType, customAmount } = await request.json();

        // Use custom amount if provided, otherwise use preset amount
        const paymentAmount = customAmount ? Math.round(customAmount * 100) : amount;

        if (!paymentAmount || paymentAmount < 100) {
            return NextResponse.json(
                { error: 'Amount must be at least $1.00' },
                { status: 400 }
            );
        }

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ['card'],
            line_items: [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: `KSU AI Club ${donationType || 'Donation'}`,
                            description: 'Thank you for supporting the KSU AI Club!',
                        },
                        unit_amount: paymentAmount,
                    },
                    quantity: 1,
                },
            ],
            mode: 'payment',
            success_url: `${request.headers.get('origin')}/payportal?success=true`,
            cancel_url: `${request.headers.get('origin')}/payportal?canceled=true`,
        });

        return NextResponse.json({ sessionId: session.id, url: session.url });
    } catch (error: any) {
        console.error('Stripe error:', error);
        return NextResponse.json(
            { error: error.message || 'Something went wrong' },
            { status: 500 }
        );
    }
}
