import { NextRequest, NextResponse } from "next/server";

export function POST(request: NextRequest) {
  if (request.method !== "POST") {
    return NextResponse.json({ status: 404, message: "Method not allowed" });
  }

  const { searchParams } = new URL(request.url);

  const queryObject = Object.fromEntries(searchParams.entries());
  let take = 8;
  let skip = { hotel: 0, flight: 0 };

  if (queryObject.hotelPage) {
    skip.hotel = (Number(queryObject.hotelPage) - 1) * take;
  }
  if (queryObject.flightPage) {
    skip.flight = (Number(queryObject.flightPage) - 1) * take;
  }

  const bookingsData = {
    ...seedData,
    flights: seedData.flights.slice(
      skip.flight,
      take * Number(queryObject.flightPage)
    ),
    hotels: seedData.hotels.slice(
      skip.hotel,
      take * Number(queryObject.hotelPage)
    ),
  };
  const pagination = {
    hotelPageNumber: queryObject.hotelPage || 1,
    flightPageNumber: queryObject.flightPage || 1,
    hotelPages: seedData.hotels.length / take,
    flightPages: seedData.flights.length / take,
  };

  try {
    return NextResponse.json({
      status: 200,
      bookingManagement: { bookingsData, pagination },
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "Internal server error" });
  }
}

//seed
export const seedData = {
  flights: [
    {
      bookingId: "FL12345",
      customer: {
        name: "John Doe",
        email: "john.doe@example.com",
        phone: "+1 234 567 890",
        country: "USA",
      },
      flightDetails: {
        airline: "Emirates",
        flightNumber: "EK202",
        departure: { airport: "JFK", dateTime: "2025-03-20" },
        arrival: { airport: "DXB", dateTime: "2025-03-21" },
      },
      price: 1200.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL67890",
      customer: {
        name: "Alice Smith",
        email: "alice.smith@example.com",
        phone: "+44 789 123 456",
        country: "UK",
      },
      flightDetails: {
        airline: "British Airways",
        flightNumber: "BA303",
        departure: { airport: "LHR", dateTime: "2025-04-05" },
        arrival: { airport: "JFK", dateTime: "2025-04-05" },
      },
      price: 850.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL54321",
      customer: {
        name: "Carlos Rivera",
        email: "carlos.r@example.com",
        phone: "+34 612 345 678",
        country: "Spain",
      },
      flightDetails: {
        airline: "Iberia",
        flightNumber: "IB101",
        departure: { airport: "MAD", dateTime: "2025-05-10" },
        arrival: { airport: "MIA", dateTime: "2025-05-10" },
      },
      price: 950.75,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL98765",
      customer: {
        name: "Liam Chen",
        email: "liam.chen@example.com",
        phone: "+86 135 6789 4321",
        country: "China",
      },
      flightDetails: {
        airline: "China Eastern",
        flightNumber: "MU209",
        departure: { airport: "PVG", dateTime: "2025-06-15" },
        arrival: { airport: "LAX", dateTime: "2025-06-15" },
      },
      price: 1100.25,
      status: "canceled",
      payment: "refunded",
    },
    {
      bookingId: "FL11122",
      customer: {
        name: "Sophia Martins",
        email: "sophia.m@example.com",
        phone: "+55 21 98765 4321",
        country: "Brazil",
      },
      flightDetails: {
        airline: "LATAM",
        flightNumber: "LA707",
        departure: { airport: "GRU", dateTime: "2025-07-20" },
        arrival: { airport: "MEX", dateTime: "2025-07-20" },
      },
      price: 675.3,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL33445",
      customer: {
        name: "Oliver Johansson",
        email: "oliver.j@example.com",
        phone: "+46 73 456 7890",
        country: "Sweden",
      },
      flightDetails: {
        airline: "Scandinavian Airlines",
        flightNumber: "SK505",
        departure: { airport: "ARN", dateTime: "2025-08-10" },
        arrival: { airport: "CPH", dateTime: "2025-08-10" },
      },
      price: 250.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL55667",
      customer: {
        name: "Aisha Khan",
        email: "aisha.k@example.com",
        phone: "+92 321 987 6543",
        country: "Pakistan",
      },
      flightDetails: {
        airline: "Pakistan International Airlines",
        flightNumber: "PK786",
        departure: { airport: "ISB", dateTime: "2025-09-05" },
        arrival: { airport: "LHR", dateTime: "2025-09-05" },
      },
      price: 980.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL88990",
      customer: {
        name: "Ethan Williams",
        email: "ethan.w@example.com",
        phone: "+61 400 123 789",
        country: "Australia",
      },
      flightDetails: {
        airline: "Qantas",
        flightNumber: "QF001",
        departure: { airport: "SYD", dateTime: "2025-10-15" },
        arrival: { airport: "JFK", dateTime: "2025-10-16" },
      },
      price: 1750.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL99001",
      customer: {
        name: "Hassan Ali",
        email: "hassan.ali@example.com",
        phone: "+971 50 987 6543",
        country: "UAE",
      },
      flightDetails: {
        airline: "Etihad Airways",
        flightNumber: "EY131",
        departure: { airport: "AUH", dateTime: "2025-11-10" },
        arrival: { airport: "IAD", dateTime: "2025-11-10" },
      },
      price: 1300.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL77002",
      customer: {
        name: "Maria Gonzalez",
        email: "maria.g@example.com",
        phone: "+52 55 6789 1234",
        country: "Mexico",
      },
      flightDetails: {
        airline: "Aeromexico",
        flightNumber: "AM402",
        departure: { airport: "MEX", dateTime: "2025-12-01" },
        arrival: { airport: "JFK", dateTime: "2025-12-01" },
      },
      price: 780.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL66003",
      customer: {
        name: "Samuel Okafor",
        email: "samuel.o@example.com",
        phone: "+234 802 345 6789",
        country: "Nigeria",
      },
      flightDetails: {
        airline: "Air Peace",
        flightNumber: "P477",
        departure: { airport: "LOS", dateTime: "2026-01-15" },
        arrival: { airport: "LHR", dateTime: "2026-01-15" },
      },
      price: 920.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL55004",
      customer: {
        name: "Elena Petrova",
        email: "elena.p@example.com",
        phone: "+7 495 678 4321",
        country: "Russia",
      },
      flightDetails: {
        airline: "Aeroflot",
        flightNumber: "SU257",
        departure: { airport: "SVO", dateTime: "2026-02-20" },
        arrival: { airport: "CDG", dateTime: "2026-02-20" },
      },
      price: 645.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL44005",
      customer: {
        name: "Daniel Müller",
        email: "daniel.m@example.com",
        phone: "+49 170 123 4567",
        country: "Germany",
      },
      flightDetails: {
        airline: "Lufthansa",
        flightNumber: "LH456",
        departure: { airport: "FRA", dateTime: "2026-03-10" },
        arrival: { airport: "LAX", dateTime: "2026-03-10" },
      },
      price: 1120.0,
      status: "canceled",
      payment: "refunded",
    },
    {
      bookingId: "FL33006",
      customer: {
        name: "Chen Wei",
        email: "chen.wei@example.com",
        phone: "+86 138 7654 3210",
        country: "China",
      },
      flightDetails: {
        airline: "Air China",
        flightNumber: "CA981",
        departure: { airport: "PEK", dateTime: "2026-04-05" },
        arrival: { airport: "JFK", dateTime: "2026-04-05" },
      },
      price: 980.75,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL22007",
      customer: {
        name: "Isabelle Dupont",
        email: "isabelle.d@example.com",
        phone: "+33 6 9876 5432",
        country: "France",
      },
      flightDetails: {
        airline: "Air France",
        flightNumber: "AF007",
        departure: { airport: "CDG", dateTime: "2026-05-18" },
        arrival: { airport: "JFK", dateTime: "2026-05-18" },
      },
      price: 1025.5,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL11008",
      customer: {
        name: "Takashi Yamamoto",
        email: "takashi.y@example.com",
        phone: "+81 90 1234 5678",
        country: "Japan",
      },
      flightDetails: {
        airline: "Japan Airlines",
        flightNumber: "JL005",
        departure: { airport: "NRT", dateTime: "2026-06-12" },
        arrival: { airport: "LAX", dateTime: "2026-06-12" },
      },
      price: 1105.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL99009",
      customer: {
        name: "Liam O'Connor",
        email: "liam.oc@example.com",
        phone: "+353 86 123 4567",
        country: "Ireland",
      },
      flightDetails: {
        airline: "Ryanair",
        flightNumber: "FR123",
        departure: { airport: "DUB", dateTime: "2026-07-20" },
        arrival: { airport: "STN", dateTime: "2026-07-20" },
      },
      price: 150.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL88010",
      customer: {
        name: "Sophia Rossi",
        email: "sophia.rossi@example.com",
        phone: "+39 347 567 8901",
        country: "Italy",
      },
      flightDetails: {
        airline: "Alitalia",
        flightNumber: "AZ604",
        departure: { airport: "FCO", dateTime: "2026-08-10" },
        arrival: { airport: "JFK", dateTime: "2026-08-10" },
      },
      price: 890.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL77011",
      customer: {
        name: "Carlos Mendes",
        email: "carlos.m@example.com",
        phone: "+55 11 91234 5678",
        country: "Brazil",
      },
      flightDetails: {
        airline: "LATAM",
        flightNumber: "LA810",
        departure: { airport: "GRU", dateTime: "2026-09-05" },
        arrival: { airport: "MIA", dateTime: "2026-09-05" },
      },
      price: 750.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL66012",
      customer: {
        name: "Emily Johnson",
        email: "emily.j@example.com",
        phone: "+1 312 987 6543",
        country: "USA",
      },
      flightDetails: {
        airline: "United Airlines",
        flightNumber: "UA909",
        departure: { airport: "ORD", dateTime: "2026-10-12" },
        arrival: { airport: "LHR", dateTime: "2026-10-12" },
      },
      price: 1350.0,
      status: "canceled",
      payment: "refunded",
    },
    {
      bookingId: "FL55013",
      customer: {
        name: "Mei Ling",
        email: "mei.l@example.com",
        phone: "+86 139 8765 4321",
        country: "China",
      },
      flightDetails: {
        airline: "China Eastern",
        flightNumber: "MU588",
        departure: { airport: "PVG", dateTime: "2026-11-15" },
        arrival: { airport: "LAX", dateTime: "2026-11-15" },
      },
      price: 1150.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL44014",
      customer: {
        name: "Ivan Smirnov",
        email: "ivan.s@example.com",
        phone: "+7 921 654 3210",
        country: "Russia",
      },
      flightDetails: {
        airline: "S7 Airlines",
        flightNumber: "S7110",
        departure: { airport: "DME", dateTime: "2026-12-01" },
        arrival: { airport: "BKK", dateTime: "2026-12-01" },
      },
      price: 720.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "FL33015",
      customer: {
        name: "Aisha Ahmed",
        email: "aisha.a@example.com",
        phone: "+20 100 876 5432",
        country: "Egypt",
      },
      flightDetails: {
        airline: "EgyptAir",
        flightNumber: "MS985",
        departure: { airport: "CAI", dateTime: "2027-01-08" },
        arrival: { airport: "JFK", dateTime: "2027-01-08" },
      },
      price: 980.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "FL22016",
      customer: {
        name: "Jack Wilson",
        email: "jack.w@example.com",
        phone: "+61 400 654 321",
        country: "Australia",
      },
      flightDetails: {
        airline: "Qantas",
        flightNumber: "QF11",
        departure: { airport: "SYD", dateTime: "2027-02-14" },
        arrival: { airport: "LAX", dateTime: "2027-02-14" },
      },
      price: 1420.0,
      status: "confirmed",
      payment: "paid",
    },
  ],

  hotels: [
    {
      bookingId: "HT56789",
      customer: {
        name: "Jane Smith",
        email: "jane.smith@example.com",
        phone: "+44 987 654 321",
        country: "UK",
      },
      hotelDetails: {
        name: "Marriott Downtown",
        location: "New York, USA",
        checkIn: "2025-04-10",
        checkOut: "2025-04-15",
      },
      price: 750.75,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "HT67890",
      customer: {
        name: "Luca Moretti",
        email: "luca.moretti@example.com",
        phone: "+39 320 567 8901",
        country: "Italy",
      },
      hotelDetails: {
        name: "Hotel Roma",
        location: "Rome, Italy",
        checkIn: "2025-06-05",
        checkOut: "2025-06-12",
      },
      price: 620.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT78901",
      customer: {
        name: "Sofia González",
        email: "sofia.g@example.com",
        phone: "+34 678 987 654",
        country: "Spain",
      },
      hotelDetails: {
        name: "Barcelona Grand",
        location: "Barcelona, Spain",
        checkIn: "2025-07-15",
        checkOut: "2025-07-20",
      },
      price: 850.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT89012",
      customer: {
        name: "Hiroshi Tanaka",
        email: "hiroshi.t@example.com",
        phone: "+81 90 3456 7890",
        country: "Japan",
      },
      hotelDetails: {
        name: "Tokyo Imperial",
        location: "Tokyo, Japan",
        checkIn: "2025-08-01",
        checkOut: "2025-08-10",
      },
      price: 980.5,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "HT90123",
      customer: {
        name: "Amira Khaled",
        email: "amira.k@example.com",
        phone: "+20 115 678 9012",
        country: "Egypt",
      },
      hotelDetails: {
        name: "Cairo Nile View",
        location: "Cairo, Egypt",
        checkIn: "2025-09-10",
        checkOut: "2025-09-17",
      },
      price: 560.25,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT01234",
      customer: {
        name: "William Anderson",
        email: "william.a@example.com",
        phone: "+1 415 678 4321",
        country: "USA",
      },
      hotelDetails: {
        name: "San Francisco Bay Hotel",
        location: "San Francisco, USA",
        checkIn: "2025-10-05",
        checkOut: "2025-10-12",
      },
      price: 1020.0,
      status: "canceled",
      payment: "refunded",
    },
    {
      bookingId: "HT12345",
      customer: {
        name: "Olga Ivanova",
        email: "olga.i@example.com",
        phone: "+7 926 456 7890",
        country: "Russia",
      },
      hotelDetails: {
        name: "Moscow Grand Palace",
        location: "Moscow, Russia",
        checkIn: "2025-11-20",
        checkOut: "2025-11-28",
      },
      price: 770.5,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "HT23456",
      customer: {
        name: "Ethan Brown",
        email: "ethan.b@example.com",
        phone: "+61 450 678 123",
        country: "Australia",
      },
      hotelDetails: {
        name: "Sydney Harbour View",
        location: "Sydney, Australia",
        checkIn: "2025-12-15",
        checkOut: "2025-12-22",
      },
      price: 920.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT34567",
      customer: {
        name: "Carlos Mendoza",
        email: "carlos.mendoza@example.com",
        phone: "+52 55 6789 1234",
        country: "Mexico",
      },
      hotelDetails: {
        name: "Cancun Beach Resort",
        location: "Cancun, Mexico",
        checkIn: "2025-06-10",
        checkOut: "2025-06-17",
      },
      price: 880.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT45678",
      customer: {
        name: "Elena Petrova",
        email: "elena.petrova@example.com",
        phone: "+48 501 234 567",
        country: "Poland",
      },
      hotelDetails: {
        name: "Warsaw Royal Hotel",
        location: "Warsaw, Poland",
        checkIn: "2025-07-08",
        checkOut: "2025-07-15",
      },
      price: 710.0,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "HT56789",
      customer: {
        name: "Ali Khan",
        email: "ali.khan@example.com",
        phone: "+92 315 678 9012",
        country: "Pakistan",
      },
      hotelDetails: {
        name: "Karachi Grand Suites",
        location: "Karachi, Pakistan",
        checkIn: "2025-08-20",
        checkOut: "2025-08-27",
      },
      price: 590.25,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT67890",
      customer: {
        name: "Isabella Rossi",
        email: "isabella.rossi@example.com",
        phone: "+39 347 678 1234",
        country: "Italy",
      },
      hotelDetails: {
        name: "Venice Lagoon Hotel",
        location: "Venice, Italy",
        checkIn: "2025-09-05",
        checkOut: "2025-09-12",
      },
      price: 1025.75,
      status: "canceled",
      payment: "refunded",
    },
    {
      bookingId: "HT78901",
      customer: {
        name: "Hans Müller",
        email: "hans.muller@example.com",
        phone: "+49 172 456 7890",
        country: "Germany",
      },
      hotelDetails: {
        name: "Berlin City Lodge",
        location: "Berlin, Germany",
        checkIn: "2025-10-10",
        checkOut: "2025-10-18",
      },
      price: 860.5,
      status: "pending",
      payment: "pending",
    },
    {
      bookingId: "HT89012",
      customer: {
        name: "Chloe Martin",
        email: "chloe.martin@example.com",
        phone: "+33 6 78 12 34 56",
        country: "France",
      },
      hotelDetails: {
        name: "Paris Eiffel Stay",
        location: "Paris, France",
        checkIn: "2025-11-01",
        checkOut: "2025-11-07",
      },
      price: 950.0,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT90123",
      customer: {
        name: "Mohammed Al-Farsi",
        email: "mohammed.alfarsi@example.com",
        phone: "+971 50 789 1234",
        country: "UAE",
      },
      hotelDetails: {
        name: "Dubai Palm Resort",
        location: "Dubai, UAE",
        checkIn: "2025-12-20",
        checkOut: "2025-12-28",
      },
      price: 1400.5,
      status: "confirmed",
      payment: "paid",
    },
    {
      bookingId: "HT01234",
      customer: {
        name: "Emily Johnson",
        email: "emily.johnson@example.com",
        phone: "+1 617 234 5678",
        country: "USA",
      },
      hotelDetails: {
        name: "Boston Harbor Inn",
        location: "Boston, USA",
        checkIn: "2026-01-05",
        checkOut: "2026-01-12",
      },
      price: 780.25,
      status: "pending",
      payment: "pending",
    },
  ],
};
