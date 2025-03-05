const filter = [
  "availability",
  "stores",
  "category",
  "price",
  "rating",
  "age",
  "color",
  "delivery",
  "manufacturer",
  "warranty",
  "year",
];

export interface Filters {
  availability?: string[];
  stores?: string[];
  category?: string[];
  minPrice?: number;
  maxPrice?: number;
  rating?: string[];
  age?: string[];
  color?: string[];
  delivery?: string[];
  manufacturer?: string[];
  warranty?: string[];
  year?: string[];
}

export const filterArray = [
  {
    name: "availability",
    options: [
      { name: "In Stock Online", checked: false },
      { name: "In Stock In Store", checked: false },
    ],
  },
  {
    name: "stores",
    options: [
      { name: "Bad Store", checked: false },
      { name: "Good Store", checked: false },
    ],
  },
  {
    name: "category",
    options: [
      { name: "Electronics", checked: false },
      { name: "Gaming", checked: false },
      { name: "Home Appliances", checked: false },
    ],
  },
  {
    name: "Price",
    options: ["minPrice", "maxPrice"],
  },
  {
    name: "rating",
    options: [
      { name: "5", checked: false },
      { name: "4", checked: false },
      { name: "3", checked: false },
      { name: "2", checked: false },
      { name: "1", checked: false },
    ],
  },
  {
    name: "age",
    options: [
      { name: "12", checked: false },
      { name: "16", checked: false },
      { name: "18", checked: false },
    ],
  },
  {
    name: "color",
    options: [
      { name: "White", checked: false },
      { name: "Black", checked: false },
    ],
  },
  {
    name: "delivery",
    options: [
      { name: "Free Shipping", checked: false },
      { name: "Next Day delivery", checked: false },
      { name: "Cash on delivery", checked: false },
    ],
  },
  {
    name: "manufacturer",
    options: [
      { name: "Sony", checked: false },
      { name: "Apple", checked: false },
      { name: "Samsung", checked: false },
      { name: "LG", checked: false },
    ],
  },
  {
    name: "warranty",
    options: [
      { name: "1 year", checked: false },
      { name: "2 years", checked: false },
      { name: "3 years", checked: false },
    ],
  },
  {
    name: "Year",
    options: [
      { name: "2021", checked: false },
      { name: "2022", checked: false },
      { name: "2023", checked: false },
      { name: "2024", checked: false },
      { name: "2025", checked: false },
    ],
  },
];

export interface IProduct {
  image: string;
  title: string;
  price: number;
  reviews: number;
  availability: string;
  stores: string;
  category: string;
  rating: string;
  age: string;
  color: string;
  delivery: string;
  manufacturer: string;
  warranty: string;
  year: string;
}

export const productsSeed: IProduct[] = [
  {
    image: "/Ps5.png",
    title: "Sony PlayStation 5 Digital Edition - White",
    price: 499.99,
    reviews: 12500,
    availability: "In Stock Online",
    stores: "Bad Store",
    category: "Gaming",
    rating: "5",
    age: "12",
    color: "White",
    delivery: "Free Shipping",
    manufacturer: "Sony",
    warranty: "2 years",
    year: "2023",
  },
  {
    image: "/Macm3.png",
    title: "Apple MacBook Pro M3 - 16-inch Space Grey",
    price: 2499.99,
    reviews: 8500,
    availability: "In Stock In Store",
    stores: "Good Store",
    category: "Electronics",
    rating: "4",
    age: "18",
    color: "Black",
    delivery: "Next Day delivery",
    manufacturer: "Apple",
    warranty: "1 year",
    year: "2024",
  },
  {
    image: "/S24.png",
    title: "Samsung Galaxy S24 Ultra - 512GB Titanium Gray",
    price: 1299.99,
    reviews: 6700,
    availability: "In Stock Online",
    stores: "Good Store",
    category: "Electronics",
    rating: "4",
    age: "16",
    color: "Black",
    delivery: "Cash on delivery",
    manufacturer: "Samsung",
    warranty: "3 years",
    year: "2022",
  },
  {
    image: "/LGOLED.png",
    title: "LG OLED evo G3 65” 4K Smart TV",
    price: 2299.99,
    reviews: 9200,
    availability: "In Stock In Store",
    stores: "Bad Store",
    category: "Home Appliances",
    rating: "3",
    age: "12",
    color: "White",
    delivery: "Free Shipping",
    manufacturer: "LG",
    warranty: "1 year",
    year: "2025",
  },
  {
    image: "/SonyWH-1000XM5.png",
    title: "Sony WH-1000XM5 Noise Cancelling Headphones - Black",
    price: 399.99,
    reviews: 5400,
    availability: "In Stock Online",
    stores: "Good Store",
    category: "Electronics",
    rating: "5",
    age: "18",
    color: "Black",
    delivery: "Next Day delivery",
    manufacturer: "Sony",
    warranty: "3 years",
    year: "2021",
  },
  {
    image: "/SonyXperia.png",
    title: "Sony xperia 5 v 5g smartphone - Black",
    rating: "4",
    reviews: 320,
    price: 899,
    availability: "In stock in store",
    stores: "Good store",
    category: "Electronics",
    age: "16",
    color: "Black",
    delivery: "Next day delivery",
    manufacturer: "Sony",
    warranty: "2 years",
    year: "2024",
  },
  {
    image: "/Mac14m3.png",
    title: "Apple macbook pro 14-inch m3 - silver",
    rating: "5",
    reviews: 510,
    price: 1999,
    availability: "In stock online",
    stores: "Bad store",
    category: "Electronics",
    age: "18",
    color: "White",
    delivery: "Cash on delivery",
    manufacturer: "Apple",
    warranty: "1 year",
    year: "2023",
  },
  {
    image: "/Qn90c.png",
    title: "Samsung qn90c neo qled 65-inch smart tv",
    rating: "5",
    reviews: 210,
    price: 1499,
    availability: "In stock online",
    stores: "Good store",
    category: "Home appliances",
    age: "12",
    color: "Black",
    delivery: "Free shipping",
    manufacturer: "Samsung",
    warranty: "3 years",
    year: "2025",
  },
  {
    image: "/27gn950-b.png",
    title: "LG ultragear 27gn950-b 4k Gaming monitor",
    rating: "4",
    reviews: 150,
    price: 799,
    availability: "In stock in store",
    stores: "Bad store",
    category: "Gaming",
    age: "16",
    color: "Black",
    delivery: "Next day delivery",
    manufacturer: "LG",
    warranty: "1 year",
    year: "2022",
  },
  {
    image: "/Wh-1000xm5.png",
    title: "Sony wh-1000xm5 noise-canceling headphones",
    rating: "5",
    reviews: 890,
    price: 349,
    availability: "In stock online",
    stores: "Good store",
    category: "Electronics",
    age: "18",
    color: "White",
    delivery: "Cash on delivery",
    manufacturer: "Sony",
    warranty: "2 years",
    year: "2023",
  },
];

export const footerItems = [
  {
    title: "About Our Store",
    items: [
      "Our Story",
      "Careers",
      "Partnership Opportunities",
      "Privacy Policy",
      "Terms & Conditions",
    ],
  },
  {
    title: "Stay Connected",
    items: ["Blog", "Instagram", "Twitter", "LinkedIn"],
  },
  {
    title: "Customer Support",
    items: ["Help Center", "24/7 Support", "FAQs", "Community Forum"],
  },
  {
    title: "Payment Options",
    items: [
      "Credit/Debit Cards",
      "PayPal",
      "Buy Now, Pay Later",
      "Cash on Delivery",
    ],
  },
];
