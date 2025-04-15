const baseUrl = "https://portproject-eight.vercel.app/api";

class CustomError extends Error {
  status;
  body;

  constructor({
    message,
    status,
    body,
  }: {
    message: string;
    status: number;
    body: object;
  }) {
    super(message);
    this.status = status;
    this.body = body;
  }
}

export const overviewData = async () => {
  const response = await fetch(`${baseUrl}/dashboard-overview`);

  const body = await response.json();

  if (!response.ok) {
    const errorInfo = {
      message: body.message,
      status: body.status,
      body,
    };

    const error = new CustomError(errorInfo);

    throw error;
  }

  return body;
};

export const getBookingsData = async (query: any) => {
  const urlSearchParams = new URLSearchParams();

  urlSearchParams.append(
    "hotelPage",
    query.pageNumbers.hotel.toString() || "1"
  );
  urlSearchParams.append(
    "flightPage",
    query.pageNumbers.flight.toString() || "1"
  );

  const res = await fetch(
    `${baseUrl}/dashboard-booking-management?${urlSearchParams.toString()}`,
    {
      method: "POST",
    }
  );

  const body = await res.json();

  if (!res.ok) {
    const errorData = { message: body.message, status: body.status, body };
    const error = new CustomError(errorData);
    throw error;
  }

  return body;
};

export const getCustomers = async (data: object) => {
  const response = await fetch(`${baseUrl}/dashboard-customer-search`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const body = await response.json();

  if (!response.ok) {
    const errorData = { message: body.message, status: body.status, body };
    const error = new CustomError(errorData);
    throw error;
  }

  return body;
};
