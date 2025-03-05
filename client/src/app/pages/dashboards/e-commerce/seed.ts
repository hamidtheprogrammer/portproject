const yearlyData = [
  { time: "Jan", orders: 830, sales: 41700 },
  { time: "Feb", orders: 890, sales: 45000 },
  { time: "Mar", orders: 950, sales: 48000 },
  { time: "Apr", orders: 1020, sales: 52000 },
  { time: "May", orders: 980, sales: 50000 },
  { time: "Jun", orders: 1080, sales: 55000 },
  { time: "Jul", orders: 1180, sales: 60000 },
  { time: "Aug", orders: 1220, sales: 62000 },
  { time: "Sep", orders: 1140, sales: 58000 },
  { time: "Oct", orders: 1260, sales: 63000 },
  { time: "Nov", orders: 1340, sales: 67000 },
  { time: "Dec", orders: 1500, sales: 75000 },
];

const monthlyData = [
  { time: "Jan 1", orders: 24, sales: 1200 },
  { time: "Jan 2", orders: 18, sales: 900 },
  { time: "Jan 3", orders: 26, sales: 1300 },
  { time: "Jan 4", orders: 30, sales: 1500 },
  { time: "Jan 5", orders: 22, sales: 1100 },
  { time: "Jan 6", orders: 34, sales: 1700 },
  { time: "Jan 7", orders: 40, sales: 2000 },
  { time: "Jan 8", orders: 32, sales: 1600 },
  { time: "Jan 9", orders: 36, sales: 1800 },
  { time: "Jan 10", orders: 28, sales: 1400 },
  { time: "Jan 11", orders: 26, sales: 1300 },
  { time: "Jan 12", orders: 20, sales: 1000 },
  { time: "Jan 13", orders: 18, sales: 900 },
  { time: "Jan 14", orders: 22, sales: 1100 },
  { time: "Jan 15", orders: 24, sales: 1200 },
  { time: "Jan 16", orders: 30, sales: 1500 },
  { time: "Jan 17", orders: 34, sales: 1700 },
  { time: "Jan 18", orders: 36, sales: 1800 },
  { time: "Jan 19", orders: 40, sales: 2000 },
  { time: "Jan 20", orders: 44, sales: 2200 },
  { time: "Jan 21", orders: 46, sales: 2300 },
  { time: "Jan 22", orders: 42, sales: 2100 },
  { time: "Jan 23", orders: 38, sales: 1900 },
  { time: "Jan 24", orders: 34, sales: 1700 },
  { time: "Jan 25", orders: 32, sales: 1600 },
  { time: "Jan 26", orders: 28, sales: 1400 },
  { time: "Jan 27", orders: 26, sales: 1300 },
  { time: "Jan 28", orders: 24, sales: 1200 },
  { time: "Jan 29", orders: 20, sales: 1000 },
  { time: "Jan 30", orders: 18, sales: 900 },
  { time: "Jan 31", orders: 16, sales: 800 },
];

const dailyData = [
  { time: "00:00", orders: 1, sales: 50 },
  { time: "01:00", orders: 1, sales: 40 },
  { time: "02:00", orders: 1, sales: 30 },
  { time: "03:00", orders: 1, sales: 20 },
  { time: "04:00", orders: 1, sales: 25 },
  { time: "05:00", orders: 1, sales: 30 },
  { time: "06:00", orders: 1, sales: 40 },
  { time: "07:00", orders: 2, sales: 60 },
  { time: "08:00", orders: 2, sales: 80 },
  { time: "09:00", orders: 2, sales: 100 },
  { time: "10:00", orders: 2, sales: 90 },
  { time: "11:00", orders: 2, sales: 85 },
  { time: "12:00", orders: 3, sales: 120 },
  { time: "13:00", orders: 3, sales: 110 },
  { time: "14:00", orders: 2, sales: 100 },
  { time: "15:00", orders: 2, sales: 90 },
  { time: "16:00", orders: 2, sales: 80 },
  { time: "17:00", orders: 2, sales: 75 },
  { time: "18:00", orders: 2, sales: 85 },
  { time: "19:00", orders: 2, sales: 95 },
  { time: "20:00", orders: 2, sales: 100 },
  { time: "21:00", orders: 2, sales: 90 },
  { time: "22:00", orders: 1, sales: 60 },
  { time: "23:00", orders: 1, sales: 50 },
];

const hourlyData = [
  { time: "12:00", orders: 1, sales: 5 },
  { time: "12:01", orders: 1, sales: 3 },
  { time: "12:02", orders: 1, sales: 2 },
  { time: "12:03", orders: 1, sales: 3 },
  { time: "12:04", orders: 1, sales: 2 },
  { time: "12:05", orders: 1, sales: 4 },
  { time: "12:06", orders: 1, sales: 5 },
  { time: "12:07", orders: 1, sales: 6 },
  { time: "12:08", orders: 1, sales: 7 },
  { time: "12:09", orders: 1, sales: 8 },
  { time: "12:10", orders: 1, sales: 6 },
  { time: "12:11", orders: 1, sales: 5 },
  { time: "12:12", orders: 1, sales: 4 },
  { time: "12:13", orders: 1, sales: 3 },
  { time: "12:14", orders: 1, sales: 6 },
  { time: "12:15", orders: 1, sales: 7 },
  { time: "12:16", orders: 1, sales: 8 },
  { time: "12:17", orders: 2, sales: 9 },
  { time: "12:18", orders: 1, sales: 6 },
  { time: "12:19", orders: 1, sales: 5 },
  { time: "12:20", orders: 1, sales: 4 },
  { time: "12:21", orders: 1, sales: 6 },
  { time: "12:22", orders: 1, sales: 7 },
  { time: "12:23", orders: 1, sales: 8 },
  { time: "12:24", orders: 1, sales: 6 },
  { time: "12:25", orders: 1, sales: 5 },
  { time: "12:26", orders: 1, sales: 4 },
  { time: "12:27", orders: 1, sales: 3 },
  { time: "12:28", orders: 1, sales: 2 },
  { time: "12:29", orders: 1, sales: 3 },
  { time: "12:30", orders: 1, sales: 4 },
  { time: "12:31", orders: 1, sales: 5 },
  { time: "12:32", orders: 1, sales: 6 },
  { time: "12:33", orders: 1, sales: 7 },
  { time: "12:34", orders: 1, sales: 6 },
  { time: "12:35", orders: 1, sales: 5 },
  { time: "12:36", orders: 1, sales: 4 },
  { time: "12:37", orders: 1, sales: 3 },
  { time: "12:38", orders: 1, sales: 4 },
  { time: "12:39", orders: 1, sales: 5 },
  { time: "12:40", orders: 1, sales: 6 },
  { time: "12:41", orders: 1, sales: 7 },
  { time: "12:42", orders: 1, sales: 6 },
  { time: "12:43", orders: 1, sales: 5 },
  { time: "12:44", orders: 1, sales: 4 },
  { time: "12:45", orders: 1, sales: 3 },
  { time: "12:46", orders: 1, sales: 4 },
  { time: "12:47", orders: 1, sales: 5 },
  { time: "12:48", orders: 1, sales: 6 },
  { time: "12:49", orders: 1, sales: 7 },
  { time: "12:50", orders: 1, sales: 6 },
  { time: "12:51", orders: 1, sales: 5 },
  { time: "12:52", orders: 1, sales: 4 },
  { time: "12:53", orders: 1, sales: 3 },
  { time: "12:54", orders: 1, sales: 4 },
  { time: "12:55", orders: 1, sales: 5 },
  { time: "12:56", orders: 1, sales: 6 },
  { time: "12:57", orders: 1, sales: 7 },
  { time: "12:58", orders: 1, sales: 8 },
  { time: "12:59", orders: 2, sales: 9 },
];

const totalHourlySales = hourlyData.reduce(
  (total, minute) => total + minute.sales,
  0
);

const totalHourlyOrders = hourlyData.reduce(
  (total, minute) => total + minute.orders,
  0
);

const totalDailySales = dailyData.reduce(
  (total, month) => total + month.sales,
  0
);
const totalDailyOrders = dailyData.reduce(
  (total, month) => total + month.orders,
  0
);
const totalMonthlySales = monthlyData.reduce(
  (total, month) => total + month.sales,
  0
);
const totalMonthlyOrders = monthlyData.reduce(
  (total, month) => total + month.orders,
  0
);
const totalYearlySales = yearlyData.reduce(
  (total, month) => total + month.sales,
  0
);
const totalYearlyOrders = yearlyData.reduce(
  (total, month) => total + month.orders,
  0
);

//orders chart
const ordersChartData = [
  { time: "Jan 1", completedOrders: 18, totalOrders: 24 },
  { time: "Jan 2", completedOrders: 12, totalOrders: 18 },
  { time: "Jan 3", completedOrders: 20, totalOrders: 26 },
  { time: "Jan 4", completedOrders: 25, totalOrders: 30 },
  { time: "Jan 5", completedOrders: 15, totalOrders: 22 },
  { time: "Jan 6", completedOrders: 28, totalOrders: 34 },
  { time: "Jan 7", completedOrders: 35, totalOrders: 40 },
].map((item) => ({
  ...item,
  pendingOrders: item.totalOrders - item.completedOrders,
}));

const RecentPurchasesData = [
  {
    customer: "Alice Johnson",
    product: "Laptop",
    payment: "Success",
    amount: 5,
  },
  {
    customer: "Brian Smith",
    product: "Washing Machine",
    payment: "Pending",
    amount: 7,
  },
  {
    customer: "Caroline Adams",
    product: "T-shirt",
    payment: "Success",
    amount: 3,
  },
  {
    customer: "David Miller",
    product: "Microwave",
    payment: "Success",
    amount: 6,
  },
  {
    customer: "Emma Thompson",
    product: "Sneakers",
    payment: "Pending",
    amount: 4,
  },
  {
    customer: "Frank Wilson",
    product: "Smartphone",
    payment: "Success",
    amount: 8,
  },
  {
    customer: "Grace Evans",
    product: "Refrigerator",
    payment: "Pending",
    amount: 2,
  },
  {
    customer: "Henry Carter",
    product: "Hoodie",
    payment: "Success",
    amount: 9,
  },
  {
    customer: "Isla Brown",
    product: "Television",
    payment: "Success",
    amount: 7,
  },
  {
    customer: "Jack Robinson",
    product: "Air Conditioner",
    payment: "Pending",
    amount: 3,
  },
  { customer: "Kate Lewis", product: "Jeans", payment: "Success", amount: 6 },
  {
    customer: "Liam Anderson",
    product: "Toaster",
    payment: "Pending",
    amount: 5,
  },
  {
    customer: "Mia Walker",
    product: "Gaming Console",
    payment: "Success",
    amount: 8,
  },
  {
    customer: "Noah Martinez",
    product: "Dress",
    payment: "Pending",
    amount: 4,
  },
  {
    customer: "Olivia Scott",
    product: "Blender",
    payment: "Success",
    amount: 9,
  },
];

const salesPerRegion = [
  {
    image: "/ChinaFlag.png",
    country: "China",
    userData: { userCount: 332, userPercentage: 30 },
    revenueData: { revenue: 1251, revenuePercentage: 30 },
  },
  {
    image: "/IndiaFlag.png",
    country: "India",
    userData: { userCount: 249, userPercentage: 25 },
    revenueData: { revenue: 1042, revenuePercentage: 25 },
  },

  {
    image: "/UsaFlag.png",
    country: "USA",
    userData: { userCount: 166, userPercentage: 20 },
    revenueData: { revenue: 834, revenuePercentage: 20 },
  },
  {
    image: "/GermanyFlag.png",
    country: "Germany",
    userData: { userCount: 124, userPercentage: 15 },
    revenueData: { revenue: 625, revenuePercentage: 15 },
  },
  {
    image: "/BrazilFlag.png",
    country: "Brazil",
    userData: { userCount: 83, userPercentage: 10 },
    revenueData: { revenue: 417, revenuePercentage: 10 },
  },
];

// Order Data with Multiple Cities
const orderByRegionData = [
  { country: "India", city: "Delhi", orders: 20, lat: 28.7041, lng: 77.1025 },
  { country: "India", city: "Mumbai", orders: 15, lat: 19.076, lng: 72.8777 },
  {
    country: "India",
    city: "Bangalore",
    orders: 14,
    lat: 12.9716,
    lng: 77.5946,
  },
  {
    country: "China",
    city: "Beijing",
    orders: 25,
    lat: 39.9042,
    lng: 116.4074,
  },
  {
    country: "China",
    city: "Shanghai",
    orders: 18,
    lat: 31.2304,
    lng: 121.4737,
  },
  {
    country: "China",
    city: "Guangzhou",
    orders: 15,
    lat: 23.1291,
    lng: 113.2644,
  },
  { country: "USA", city: "New York", orders: 20, lat: 40.7128, lng: -74.006 },
  {
    country: "USA",
    city: "Los Angeles",
    orders: 12,
    lat: 34.0522,
    lng: -118.2437,
  },
  { country: "USA", city: "Chicago", orders: 7, lat: 41.8781, lng: -87.6298 },
  { country: "Germany", city: "Berlin", orders: 10, lat: 52.52, lng: 13.405 },
  { country: "Germany", city: "Hamburg", orders: 9, lat: 53.5511, lng: 9.9937 },
  { country: "Germany", city: "Munich", orders: 10, lat: 48.1351, lng: 11.582 },
  {
    country: "Brazil",
    city: "São Paulo",
    orders: 10,
    lat: -23.5505,
    lng: -46.6333,
  },
  {
    country: "Brazil",
    city: "Rio de Janeiro",
    orders: 9,
    lat: -22.9068,
    lng: -43.1729,
  },
];

export {
  yearlyData,
  monthlyData,
  dailyData,
  hourlyData,
  totalDailySales,
  totalHourlyOrders,
  totalHourlySales,
  totalMonthlyOrders,
  totalMonthlySales,
  totalYearlyOrders,
  totalYearlySales,
  totalDailyOrders,
  ordersChartData,
  RecentPurchasesData,
  salesPerRegion,
  orderByRegionData,
};
