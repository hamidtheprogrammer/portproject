export type PaymentStatus = "Paid" | "Pending" | "Failed" | "Refunded";

interface Order {
  id: string;
  total: number;
  paymentStatus: PaymentStatus;
  delivery: "Free Shipping" | "Next Day delivery" | "Cash on delivery";
  date: string; // or Date if you prefer parsing it beforehand
  itemCount: number;
}

export const orderStatus: Record<PaymentStatus, number> = {
  Paid: 1,
  Pending: 2,
  Failed: 3,
  Refunded: 4,
};

export const orders: Order[] = [
  {
    id: "ORD001",
    total: 149.99,
    paymentStatus: "Paid",
    delivery: "Free Shipping",
    date: "2025-02-21",
    itemCount: 3,
  },
  {
    id: "ORD002",
    total: 299.49,
    paymentStatus: "Pending",
    delivery: "Next Day delivery",
    date: "2025-02-20",
    itemCount: 5,
  },
  {
    id: "ORD003",
    total: 79.99,
    paymentStatus: "Paid",
    delivery: "Cash on delivery",
    date: "2025-02-19",
    itemCount: 2,
  },
  {
    id: "ORD004",
    total: 199.99,
    paymentStatus: "Failed",
    delivery: "Free Shipping",
    date: "2025-02-18",
    itemCount: 4,
  },
  {
    id: "ORD005",
    total: 49.99,
    paymentStatus: "Paid",
    delivery: "Next Day delivery",
    date: "2025-02-17",
    itemCount: 1,
  },
  {
    id: "ORD006",
    total: 499.99,
    paymentStatus: "Paid",
    delivery: "Free Shipping",
    date: "2025-02-16",
    itemCount: 6,
  },
  {
    id: "ORD007",
    total: 129.99,
    paymentStatus: "Pending",
    delivery: "Cash on delivery",
    date: "2025-02-15",
    itemCount: 3,
  },
  {
    id: "ORD008",
    total: 219.99,
    paymentStatus: "Refunded",
    delivery: "Next Day delivery",
    date: "2025-02-14",
    itemCount: 4,
  },
  {
    id: "ORD009",
    total: 99.99,
    paymentStatus: "Paid",
    delivery: "Free Shipping",
    date: "2025-02-13",
    itemCount: 2,
  },
  {
    id: "ORD010",
    total: 599.99,
    paymentStatus: "Pending",
    delivery: "Next Day delivery",
    date: "2025-02-12",
    itemCount: 7,
  },
];

export const customerReviews = [
  {
    name: "Sony PlayStation 5 Digital Edition - White",
    rating: "5",
    review:
      "Absolutely love this console! Fast, quiet, and the graphics are insane.",
    date: "2023",
  },
  {
    name: "Apple MacBook Pro M3 - 16-inch Space Grey",
    rating: "4",
    review: "Powerful machine, but the price is a bit steep for what you get.",
    date: "2024",
  },
  {
    name: "Samsung Galaxy S24 Ultra - 512GB Titanium Gray",
    rating: "4",
    review: "Great camera and battery life, but One UI feels a bit cluttered.",
    date: "2022",
  },
  {
    name: "LG OLED evo G3 65” 4K Smart TV",
    rating: "3",
    review:
      "Picture quality is fantastic, but the smart features lag sometimes.",
    date: "2025",
  },
  {
    name: "Sony WH-1000XM5 Noise Cancelling Headphones - Black",
    rating: "5",
    review: "Best noise cancellation I’ve experienced, very comfortable too.",
    date: "2021",
  },
  {
    name: "Sony Xperia 5 V 5G Smartphone - Black",
    rating: "4",
    review: "Compact and powerful, but the camera software needs work.",
    date: "2024",
  },
  {
    name: "Apple MacBook Pro 14-inch M3 - Silver",
    rating: "5",
    review: "Perfect for work and editing videos, battery is excellent.",
    date: "2023",
  },
  {
    name: "Samsung QN90C Neo QLED 65-inch Smart TV",
    rating: "5",
    review: "Blown away by the brightness and colors! Worth every penny.",
    date: "2025",
  },
  {
    name: "LG UltraGear 27GN950-B 4K Gaming Monitor",
    rating: "4",
    review:
      "Super sharp display for gaming, but HDR isn’t as good as expected.",
    date: "2022",
  },
  {
    name: "Sony WH-1000XM5 Noise-Canceling Headphones",
    rating: "5",
    review: "I keep coming back to Sony headphones, they never disappoint.",
    date: "2023",
  },
];
