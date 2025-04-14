"use client";
import React from "react";
import CheckoutPage from "./components/CheckoutPage";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY as string
);

const amount = 745;

const page = () => {
  return (
    <div>
      <Elements
        options={{
          mode: "payment",
          amount: amount,
          currency: "usd",
        }}
        stripe={stripePromise}
      >
        <CheckoutPage amount={amount} />
      </Elements>
    </div>
  );
};

export default page;
