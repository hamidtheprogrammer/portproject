import { NextRequest, NextResponse } from "next/server";
import { seedData } from "../dashboard-booking-management/route";

export async function POST(request: NextRequest) {
  if (request.method !== "POST")
    return NextResponse.json({ status: 401, message: "Method not allowed" });

  const queryObject = await request.json();

  console.log(queryObject);

  if (queryObject.flights) {
    const flightCustomers = seedData.flights.filter((f) => {
      return f.customer.name
        .toLowerCase()
        .includes(queryObject.flights.toLowerCase());
    });

    return NextResponse.json({ status: 200, flightCustomers });
  } else if (queryObject.hotels) {
    const hotelCustomers = seedData.hotels.filter((f) => {
      return f.customer.name
        .toLowerCase()
        .includes(queryObject.hotels.toLowerCase());
    });

    return NextResponse.json({ status: 200, hotelCustomers });
  }

  return NextResponse.json({
    status: 400,
    message: "Invalid query parameters",
  });
}
