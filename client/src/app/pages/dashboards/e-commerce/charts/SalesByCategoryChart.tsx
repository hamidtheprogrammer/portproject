import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Sample data from MongoDB aggregation
const data = [
  { name: "Electronics", value: 5000 },
  { name: "Clothing", value: 2000 },
  { name: "Home Appliances", value: 4000 },
];

const COLORS = ["#8884d8", "#D1CEFE", "#0B1B50"];

const SalesByCategoryChart = () => {
  return (
    <div className="flex-1 flex flex-col bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg h-[300px] p-6">
      <div>
        <h1 className="font-medium"> Sales by category </h1>
        <p className="text-xs font-medium dark:darkSecondaryText secondaryText">
          Last 7 days
        </p>
      </div>
      <div className="flex-1 flex justify-center">
        <ResponsiveContainer width={300} height="90%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              //   outerRadius={100}
              innerRadius={30}
              fill="#8884d8"
              dataKey="value"
              //   label={({ name, percent }) =>
              //     `${name}: ${(percent * 100).toFixed(1)}%`
              //   }
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              formatter={(tick) => `$${tick.toLocaleString()}`}
              contentStyle={{ fontSize: "12px", borderRadius: "5px" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs">
        <span className="flex items-center gap-2">
          <div className={`rounded-[9999] w-2 h-2 bg-[${COLORS[0]}]`}></div>
          Electronics
        </span>
        <span className="flex items-center gap-2">
          <div className={`rounded-[9999] w-2 h-2 bg-[#D1CEFE]`}></div>
          Clothing
        </span>
        <span className="flex items-center gap-2">
          <div className={`rounded-[9999] w-2 h-2 bg-[#0B1B50]`}></div>
          Electrical appliances
        </span>
      </div>
    </div>
  );
};

export default SalesByCategoryChart;
