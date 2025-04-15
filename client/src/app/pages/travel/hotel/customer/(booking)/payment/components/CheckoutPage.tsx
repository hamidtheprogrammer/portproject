"use client";
import { FormEvent, useEffect, useState } from "react";
import {
  useStripe,
  useElements,
  PaymentElement,
} from "@stripe/react-stripe-js";

const CheckoutForm = ({ amount }: { amount: number }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [secret, setSecret] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://portproject-eight.vercel.app/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ amount: amount * 100 }), // Convert to cents
    })
      .then((res) => res.json())
      .then((data) => setSecret(data.clientSecret)) // Fix: Extract only clientSecret
      .catch(() => setError("Failed to initialize payment"));
  }, [amount]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!stripe || !elements || !secret) return;

    setLoading(true);
    setError(null);

    try {
      await elements.submit();
      const { error } = await stripe.confirmPayment({
        elements,
        clientSecret: secret,
        confirmParams: {
          return_url: `http://localhost:3000/pages/travel/hotel/customer/payment-successful?amount=${amount}`,
        },
      });

      if (error) {
        setError(error.message as string);
      } else {
        setSuccess(true);
      }
    } catch {
      setError("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {!secret ? (
        <p className="text-gray-500">Loading payment form...</p>
      ) : (
        <>
          <PaymentElement />
          {error && <p className="text-red-500 mt-2">{error}</p>}
          <button
            className="relative bg-blue-500 mt-5 text-white rounded-md h-10 w-full px-4 text-sm hover:bg-blue-600 transition disabled:bg-gray-400"
            type="submit"
            disabled={loading || !stripe}
          >
            {loading ? "Processing..." : "Pay"}
          </button>
          {success && (
            <p className="text-green-500 mt-2">Payment successful!</p>
          )}
        </>
      )}
    </form>
  );
};

export default CheckoutForm;
