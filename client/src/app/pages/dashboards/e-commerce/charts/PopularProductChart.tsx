import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { product: "Laptop", sales: 120 },
  { product: "Smartphone", sales: 95 },
  { product: "Headphones", sales: 85 },
  { product: "Smartwatch", sales: 70 },
  { product: "Tablet", sales: 60 },
];

const PopularProductChart = () => {
  return (
    <div className="flex-1 flex flex-col bg-white  dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg h-[50vh] p-6">
      <div className="flex flex-col items-start">
        <h1 className="font-medium dark:darkPrimaryText">Popular products</h1>
        <p className="text-xs font-medium dark:darkSecondaryText secondaryText">
          Last 7 days
        </p>
      </div>
      <div className="flex-1 flex justify-center text-xs">
        <ResponsiveContainer width={300} height="100%">
          <BarChart barSize={20} data={data} margin={{ left: 0, right: 60 }}>
            <Tooltip
              formatter={(tick) => `$${tick.toLocaleString()}`}
              cursor={false}
            />
            <XAxis tick={false} axisLine={false} dataKey="product" />
            <YAxis tick={false} axisLine={false} />
            <Bar radius={7} dataKey="sales" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <span className="flex text-xs items-center gap-2 dark:darkPrimaryText">
        <div className="rounded-[9999] w-2 h-2 bg-[#8884d8]"></div> Popular
        products
      </span>
    </div>
  );
};

export default PopularProductChart;
