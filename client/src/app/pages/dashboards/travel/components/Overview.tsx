"use client";
import React, { useEffect } from "react";
import { useQuery } from "react-query";
import { overviewData } from "../apiClient";
import { BookIcon, User } from "lucide-react";
import { FcSalesPerformance } from "react-icons/fc";
import { BiUpArrow } from "react-icons/bi";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
} from "recharts";

const cardStyles =
  "bg-white h-24 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] rounded-lg flex items-center gap-3 px-5";
const iconStyles =
  "flex items-center justify-center rounded-lg h-[60%] aspect-square";
const smallText = "text-xs font-light";
const mainText = "font-medium text-xl";
export const selectOptions = ["view All", "Last 7 days", "Last month"];
const cards = [
  {
    label: "Total Bookings",
    key: "totalBookings",
    color: "purple",
    icon: <BookIcon size={17} color="white" />,
    spanFull: false,
  },
  {
    label: "Total Revenue",
    key: "totalRevenue",
    color: "yellow",
    icon: <FcSalesPerformance size={17} />,
    spanFull: false,
  },
  {
    label: "Total Customers",
    key: "activeUsers",
    color: "green",
    icon: <User size={17} color="white" />,
    spanFull: false,
  },
  {
    label: "New Customers",
    key: "newCustomers",
    color: "blue",
    icon: <BookIcon size={17} color="white" />,
    spanFull: false,
  },
  {
    label: "Cancellations",
    key: "cancellations",
    color: "orange",
    icon: <BookIcon size={17} color="white" />,
    spanFull: true,
  },
];

const OverviewCard = ({
  label,
  value,
  color,
  icon,
  spanFull,
}: {
  label: string;
  value: number;
  color: string;
  icon: any;
  spanFull: boolean;
}) => (
  <div className={`${cardStyles} ${spanFull ? "col-span-full" : ""}`}>
    <div
      style={{ background: color }}
      className={`bg-${color}-100 ${iconStyles}`}
    >
      <div
        style={{ background: color }}
        className={`bg-${color}-700 ${iconStyles}`}
      >
        {icon}
      </div>
    </div>
    <span className="flex flex-col gap-1">
      <p className={smallText}>{label}</p>
      <h1 className={mainText}>{value?.toLocaleString() || "0"}</h1>
    </span>
    <div className="text-green-500 text-xs flex items-end gap-1 flex-1 justify-end">
      <BiUpArrow fill="green" />
      +0.21%
    </div>
  </div>
);

const Overview = () => {
  const { data, isLoading } = useQuery({
    queryFn: overviewData,
    queryKey: "overview-data",
  });

  const totalRevenue =
    data &&
    data.overview.revenueTrend.reduce(
      (total: number, current: { revenue: number }) => total + current.revenue,
      0
    );

  const totalBookings =
    data &&
    data.overview.revenueTrend.reduce(
      (total: number, current: { bookings: number }) =>
        total + current.bookings,
      0
    );

  const trendTotal = [
    { name: "Revenue", total: totalRevenue, color: "#5CA1F0" },
    { name: "Bookings", total: totalBookings, color: "#A13CFF" },
  ];

  return (
    <section className="p-4 pb-0">
      <h1 className="font-bold text-lg text-black/65 mb-8 mt-4">
        Welcome, John Doe
      </h1>
      {isLoading || !data ? (
        <p>Loading...</p>
      ) : (
        <>
          <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4">
            {cards.map(({ key, ...cardProps }) => (
              <OverviewCard
                key={key}
                value={data?.overview?.[key]}
                {...cardProps}
              />
            ))}
          </div>
          <div className="rounded-lg bg-white mt-4 shadow-[0px_1px_3px_rgba(0,0,0,0.1)]">
            <span className="flex justify-between p-4 border-b text-black/60">
              <h1 className="text-sm font-semibold">Revenue and Bookings</h1>
              <select
                name=""
                id=""
                className="bg-transparent text-xs outline-none"
              >
                {selectOptions.map((s) => (
                  <option value={s}>{s}</option>
                ))}
              </select>
            </span>
            <div className="flex max-lg:flex-col max-lg:gap-7 pb-4">
              {Array.from({ length: 2 }).map((_, idx) => (
                <div className="h-[380px] lg:flex-1 text-xs font-light text-black/60">
                  <div className="flex items-center gap-2 p-4 border-b border-dashed text-black/60">
                    <div
                      style={{ background: trendTotal[idx].color }}
                      className={`w-2 h-2 rounded-[99px]`}
                    ></div>
                    <div key={trendTotal[idx].name}>
                      <h1 className={`${mainText}`}>
                        {trendTotal[idx].total.toLocaleString()}
                      </h1>
                      <p className={`${smallText}`}>{trendTotal[idx].name}</p>
                    </div>
                  </div>
                  <div className="h-[80%]">
                    <ResponsiveContainer height="100%" width="100%">
                      <LineChart
                        width={730}
                        height={250}
                        data={data.overview.revenueTrend}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <defs>
                          <filter
                            id="shadow"
                            x="0"
                            y="0"
                            width="200%"
                            height="200%"
                          >
                            <feDropShadow
                              dy="3"
                              stdDeviation="3"
                              floodColor="rgba(0,0,0,0.3)"
                            />
                          </filter>
                          <linearGradient
                            id="revenue"
                            x1="0"
                            y1="0"
                            x2="1"
                            y2="0"
                          >
                            <stop
                              offset="0%"
                              stopColor="#4A90E2"
                              stopOpacity={1}
                            />
                            <stop
                              offset="100%"
                              stopColor="#E94E77"
                              stopOpacity={1}
                            />
                          </linearGradient>
                          <linearGradient
                            id="bookings"
                            x1="0"
                            x2="1"
                            y1="0"
                            y2="0"
                          >
                            <stop
                              offset="0%"
                              stopColor="#ECEF2C"
                              stopOpacity={1}
                            />
                            <stop
                              offset="100%"
                              stopColor="#A13CFF"
                              stopOpacity={1}
                            />
                          </linearGradient>
                        </defs>
                        <CartesianGrid opacity={0.1} />
                        <XAxis
                          axisLine={false}
                          tickLine={false}
                          dataKey="date"
                          interval={6}
                          tick={{ dy: 10 }}
                        />
                        <YAxis
                          tick={{ dx: -20 }}
                          axisLine={false}
                          tickLine={false}
                          domain={["dataMin", "dataMax"]}
                        />
                        <Tooltip
                          labelStyle={{ color: "red" }}
                          contentStyle={{
                            fontWeight: "semibold",
                            borderRadius: 4,
                            borderColor: "white",
                            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
                          }}
                          formatter={(value) =>
                            idx === 0
                              ? `$${value.toLocaleString()}`
                              : `${value}`
                          }
                        />
                        <Line
                          strokeWidth={2}
                          type="monotone"
                          dataKey={idx === 0 ? "revenue" : "bookings"}
                          stroke={
                            idx === 0 ? "url(#revenue)" : "url(#bookings)"
                          }
                          dot={false}
                          filter="url(#shadow)"
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-lg bg-white mt-4 pb-4 shadow-[0px_1px_3px_rgba(0,0,0,0.1)] font-light text-black/60">
            <span className="flex justify-between p-4 border-b text-black/60">
              <h1 className="text-sm font-semibold">Cancellations</h1>
              <select
                name=""
                id=""
                className="bg-transparent text-xs outline-none"
              >
                {selectOptions.map((s) => (
                  <option value={s}>{s}</option>
                ))}
              </select>
            </span>
            <div className="h-[380px] w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  barSize={5}
                  width={150}
                  height={40}
                  data={data.overview.cancellationTrend}
                >
                  <CartesianGrid opacity={0.2} />
                  <Tooltip />
                  <Bar
                    radius={[10, 10, 0, 0]}
                    activeBar={{ color: "green" }}
                    dataKey="cancellations"
                    fill="#4A90E2"
                  />
                  <YAxis
                    dx={-20}
                    axisLine={false}
                    tickLine={false}
                    dataKey="cancellations"
                  />
                  <XAxis
                    interval={6}
                    axisLine={false}
                    tickLine={false}
                    dataKey="date"
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Overview;
