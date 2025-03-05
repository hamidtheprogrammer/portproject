import React from "react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { date: "2024-01-01", new_customers: 19, returning_customers: 5 },
  { date: "2024-01-02", new_customers: 24, returning_customers: 9 },
  { date: "2024-01-03", new_customers: 26, returning_customers: 10 },
  { date: "2024-01-04", new_customers: 29, returning_customers: 18 },
  { date: "2024-01-05", new_customers: 39, returning_customers: 17 },
  { date: "2024-01-06", new_customers: 40, returning_customers: 17 },
  { date: "2024-01-07", new_customers: 40, returning_customers: 26 },
];

const NewCustomersChart = () => {
  return (
    <div className="flex-1 flex flex-col bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg h-[50vh] p-6">
      <div className="flex flex-col">
        <h1 className="font-medium">New & returning customers </h1>
        <p className="text-xs font-medium dark:darkSecondaryText secondaryText">
          Last 7 days
        </p>
      </div>
      <div className="flex-1 w-full text-xs">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            width={730}
            height={250}
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0B1B50" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#0B1B50" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis
              interval={5}
              tickLine={false}
              axisLine={false}
              dataKey="date"
            />
            <YAxis tick={false} axisLine={false} />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="new_customers"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="returning_customers"
              stroke="#0B1B50"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs">
        <span className="flex items-center gap-2">
          <div className={`rounded-[9999] w-2 h-2 bg-[#0B1B50]`}></div>
          Returning customers
        </span>
        <span className="flex items-center gap-2">
          <div className={`rounded-[9999] w-2 h-2 bg-[#8884d8]`}></div>
          New Customers{" "}
        </span>
      </div>
    </div>
  );
};

export default NewCustomersChart;
