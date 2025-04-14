import React, { useContext } from "react";
import { ordersChartData } from "../seed";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const OrdersChart = () => {
  return (
    <div className="flex flex-col bg-white dark:darkPrimaryText dark:bg-darkSecondaryBg border-[1px] dark:darkBorder rounded-lg h-[300px] p-6">
      <div className="flex justify-between items-start">
        <span>
          <h1 className="font-medium">
            Total orders{" "}
            <span className="text-red-600 text-xs bg-red-100 px-1 py-[0.01rem] font-semibold">
              10%
            </span>
          </h1>
          <p className="text-xs font-medium dark:darkSecondaryText secondaryText">
            Last 7 days
          </p>
        </span>
        <h1 className="font-semibold text-xl">194</h1>
      </div>
      <div className="flex-1 flex justify-center">
        <ResponsiveContainer width={300} height="100%">
          <BarChart
            barGap={1}
            barSize={7}
            data={ordersChartData}
            margin={{ top: 20, right: 80, left: 20, bottom: 5 }}
          >
            <XAxis dataKey="time" axisLine={false} tick={false} />
            <YAxis tick={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                width: "150px",
                height: "80px",
                fontSize: "12px",
                borderRadius: "8px",
                border: "1px solid #ccc",
                padding: "10px",
                boxShadow: "0px 4px 8px rgba(0,0,0,0.1)",
              }}
              position={{ x: -30, y: -50 }}
              cursor={false}
            />
            <Bar
              dataKey="completedOrders"
              stackId="a"
              radius={[0, 0, 5, 5]}
              fill="#8884d8"
              name="Completed Orders"
              activeBar={false}
            />
            <Bar
              dataKey="pendingOrders"
              stackId="a"
              radius={[5, 5, 0, 0]}
              fill="#CBC9FF"
              name="Pending Orders"
              activeBar={false}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="text-xs">
        <span className="flex items-center gap-2">
          <div className="rounded-[9999] w-2 h-2 bg-[#8884d8]"></div> completed
        </span>
        <span className="flex items-center gap-2">
          <div className="rounded-[9999] w-2 h-2 bg-[#CBC9FF]"></div> pending
        </span>
      </div>
    </div>
  );
};

export default OrdersChart;
