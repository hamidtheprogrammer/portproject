"use client";

import { useState } from "react";
import { CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccessPage() {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="flex items-center justify-center h-[400px]">
      <div className="flex flex-col text-center justify-center shadow-lg p-4 w-[350px] aspect-square rounded-lg items-center">
        <CheckCircle size={50} className="text-green-500 mb-4" />
        <h2 className="text-xl font-semibold text-gray-800">
          Payment Successful
        </h2>
        <p className="text-gray-600 mt-2">
          Thank you for your booking! You will receive a confirmation email
          shortly.
        </p>

        <Link href="/pages/travel/hotel/customer/hotels-filter">
          <button
            onClick={() => setIsOpen(false)}
            className="mt-6 bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition"
          >
            return
          </button>
        </Link>
      </div>
    </div>
  );
}
