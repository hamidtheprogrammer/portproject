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

export interface ChartProps {
  data: { time: string; orders: number; sales: number }[];
  handleCurrentMetricChange: (value: string) => void;
}

export enum CurrentMetricTimeInterval {
  HOUR = "last_hour",
  DAY = "last_day",
  MONTH = "last_30_days",
  YEAR = "last_year",
}

const TrendCharts = ({ data, handleCurrentMetricChange }: ChartProps) => {
  return (
    <div className="text-xs dark:darkSecondaryText rounded-2xl mt-8">
      <div className="pb-10 flex max-md:items-start justify-between max-md:flex-col max-md:gap-5 items-center">
        <span>
          <h1 className="text-xl font-bold dark:darkPrimaryText">
            Sales summary
          </h1>
          <p className="text-sm secondaryText dark:darkSecondaryText">
            Sales made across different time frames
          </p>
        </span>
        <span>
          <select
            onChange={(e) => handleCurrentMetricChange(e.target.value)}
            name="timeInterval"
            id=""
            className="border-[1px] rounded-md dark:darkBorder dark:bg-transparent h-9 w-64"
          >
            <option value={CurrentMetricTimeInterval.HOUR}>Last hour</option>
            <option value={CurrentMetricTimeInterval.DAY}>Last 24 hours</option>
            <option value={CurrentMetricTimeInterval.MONTH}>
              Last 30 days
            </option>
            <option value={CurrentMetricTimeInterval.YEAR}>
              Last 24 months
            </option>
          </select>
        </span>
      </div>
      <div className="w-full h-[40vh]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{
              top: 5,
              right: 50,
              left: 0,
              bottom: 5,
            }}
          >
            <defs>
              <linearGradient id="" x1="0" y1="0" x2="0" y2="1">
                <stop offset="10%" stopColor="#8884d8" stopOpacity={0.5} />
                <stop offset="90%" stopColor="#ffff" stopOpacity={0} />
              </linearGradient>
              <linearGradient
                id="multiColorGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3"
              stroke="#D1D5DB"
              vertical={false}
            />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="time"
              interval={9}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              dataKey="sales"
              domain={["dataMin", "dataMax"]}
              tickFormatter={(tick) => `$${tick.toLocaleString()}`}
            />
            <Tooltip formatter={(tick) => `$${tick.toLocaleString()}`} />
            <Area
              // dot={{ r: 3, fill: "#ffff" }}
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              strokeWidth={1}
              fillOpacity={1}
              fill="url(#multiColorGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TrendCharts;
