import React, { useContext } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  CartesianGrid,
} from "recharts";
import { ITheme, UIContext } from "@/app/context/UI/UIContext";
const data = [
  { time: "Jan 1", projection: 1320, sales: 1200 },
  { time: "Jan 2", projection: 990, sales: 900 },
  { time: "Jan 3", projection: 1430, sales: 1300 },
  { time: "Jan 4", projection: 1650, sales: 1500 },
  { time: "Jan 5", projection: 1210, sales: 1100 },
  { time: "Jan 6", projection: 1870, sales: 1700 },
  { time: "Jan 7", projection: 2200, sales: 2000 },
];

const SalesProjection = () => {
  const { theme } = useContext(UIContext);

  return (
    <div className=" flex flex-col gap-4 bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg h-[400px] p-6">
      <div className="flex flex-col items-start">
        <h1 className="text-xl font-semibold">Sales projection vs actual</h1>
        <p className="text-xs font-medium dark:darkSecondaryText secondaryText">
          Last 7 days
        </p>
      </div>
      <div className="flex-1 w-full flex justify-center text-xs -translate-x-[1.1rem]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            barSize={10}
            data={data}
            // margin={{ top: 40, right: 50, left: 0 }}
          >
            <XAxis dataKey="time" axisLine={false} tickLine={false} />
            <YAxis
              tickFormatter={(tick) => `$${tick.toLocaleString()}`}
              tickLine={false}
              axisLine={false}
            />
            <Tooltip
              contentStyle={{
                width: "150px",
                height: "80px",
                fontSize: "12px",
                backgroundColor: theme === ITheme.DARK ? "#222" : "#fff",
                color: theme === ITheme.DARK ? "#fff" : "#222",
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: "10px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              }}
              formatter={(tick) => `$${tick.toLocaleString()}`}
              //   position={{ x: -30, y: -50 }}
              cursor={false}
            />
            <CartesianGrid vertical={false} opacity={0.5} />
            <Legend />
            <Bar dataKey="sales" radius={7} fill="#8884d8" activeBar={false} />
            <Bar
              dataKey="projection"
              radius={7}
              fill="#CBC9FF"
              activeBar={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesProjection;
