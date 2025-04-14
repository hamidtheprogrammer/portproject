import { NextRequest, NextResponse } from "next/server";

const overview = {
  totalBookings: 12456,
  totalRevenue: 450000,
  activeUsers: 345,
  newCustomers: 67,
  cancellations: 34,
  revenueTrend: [
    { date: "2024-01", revenue: 20000, bookings: 150 },
    { date: "2024-02", revenue: 25000, bookings: 180 },
    { date: "2024-03", revenue: 22000, bookings: 160 },
    { date: "2024-04", revenue: 28000, bookings: 200 },
    { date: "2024-05", revenue: 24000, bookings: 170 },
    { date: "2024-06", revenue: 31000, bookings: 210 },
    { date: "2024-07", revenue: 29000, bookings: 190 },
    { date: "2024-08", revenue: 27000, bookings: 185 },
    { date: "2024-09", revenue: 35000, bookings: 230 },
    { date: "2024-10", revenue: 33000, bookings: 225 },
    { date: "2024-11", revenue: 39000, bookings: 250 },
    { date: "2024-12", revenue: 30000, bookings: 210 },
    { date: "2025-01", revenue: 42000, bookings: 260 },
    { date: "2025-02", revenue: 38000, bookings: 245 },
    { date: "2025-03", revenue: 47000, bookings: 290 },
    { date: "2025-04", revenue: 44000, bookings: 270 },
    { date: "2025-05", revenue: 49000, bookings: 320 },
    { date: "2025-06", revenue: 45000, bookings: 310 },
    { date: "2025-07", revenue: 53000, bookings: 350 },
    { date: "2025-08", revenue: 50000, bookings: 340 },
    { date: "2025-09", revenue: 47000, bookings: 310 },
    { date: "2025-10", revenue: 55000, bookings: 360 },
    { date: "2025-11", revenue: 52000, bookings: 340 },
    { date: "2025-12", revenue: 60000, bookings: 390 },
  ],
  cancellationTrend: [
    { date: "2024-01", cancellations: 5 },
    { date: "2024-02", cancellations: 8 },
    { date: "2024-03", cancellations: 4 },
    { date: "2024-04", cancellations: 6 },
    { date: "2024-05", cancellations: 7 },
    { date: "2024-06", cancellations: 5 },
    { date: "2024-07", cancellations: 9 },
    { date: "2024-08", cancellations: 6 },
    { date: "2024-09", cancellations: 8 },
    { date: "2024-10", cancellations: 10 },
    { date: "2024-11", cancellations: 12 },
    { date: "2024-12", cancellations: 14 },
    { date: "2025-01", cancellations: 11 },
    { date: "2025-02", cancellations: 13 },
    { date: "2025-03", cancellations: 15 },
    { date: "2025-04", cancellations: 10 },
    { date: "2025-05", cancellations: 9 },
    { date: "2025-06", cancellations: 12 },
    { date: "2025-07", cancellations: 14 },
    { date: "2025-08", cancellations: 13 },
    { date: "2025-09", cancellations: 16 },
    { date: "2025-10", cancellations: 18 },
    { date: "2025-11", cancellations: 20 },
    { date: "2025-12", cancellations: 22 },
  ],
};

export async function GET(req: NextRequest) {
  // await Cors(req, res, {
  //   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  //   origin: "*", // Change to specific origin in production
  //   credentials: true,
  // });

  if (req.method !== "GET") {
    return NextResponse.json({ status: 500, message: "Method Not Allowed" });
  }
  try {
    return NextResponse.json({ status: 200, overview });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
}
