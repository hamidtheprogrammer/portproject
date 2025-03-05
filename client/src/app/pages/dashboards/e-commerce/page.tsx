"use client";
import React, { useEffect, useState } from "react";
import {
  totalDailySales,
  totalHourlyOrders,
  totalHourlySales,
  totalMonthlyOrders,
  totalMonthlySales,
  totalYearlyOrders,
  totalYearlySales,
  totalDailyOrders,
  hourlyData,
  dailyData,
  monthlyData,
  yearlyData,
} from "./seed";
import TrendCharts, { CurrentMetricTimeInterval } from "./charts/TrendCharts";
import OrdersChart from "./charts/OrdersChart";
import NewCustomersChart from "./charts/NewCustomersChart";
import SalesByCategoryChart from "./charts/SalesByCategoryChart";
import PopularProductChart from "./charts/PopularProductChart";
import RecentPurchases from "./RecentPurchases";
import SalesProjection from "./charts/SalesProjection";
import SalesMap from "./regionalData/SalesMap";
import SalesByRegion from "./regionalData/SalesByRegion";

const Page: React.FC = () => {
  const [currentMetric, setCurrentMetric] = useState({
    name: "",
    orders: 0,
    sales: 0,
    data: [],
  });

  useEffect(() => {
    setCurrentMetric({
      name: "hour",
      orders: totalHourlyOrders,
      sales: totalHourlySales,
      data: hourlyData as [],
    });
  }, []);

  const handleCurrentMetricChange = (newMetric: string) => {
    switch (newMetric) {
      case CurrentMetricTimeInterval.HOUR:
        setCurrentMetric({
          name: "hour",
          orders: totalHourlyOrders,
          sales: totalHourlySales,
          data: hourlyData as [],
        });
        break;
      case CurrentMetricTimeInterval.DAY:
        setCurrentMetric({
          name: "24 hours",
          orders: totalDailyOrders,
          sales: totalDailySales,
          data: dailyData as [],
        });
        break;
      case CurrentMetricTimeInterval.MONTH:
        setCurrentMetric({
          name: "30 days",
          orders: totalMonthlyOrders,
          sales: totalMonthlySales,
          data: monthlyData as [],
        });
        break;
      case CurrentMetricTimeInterval.YEAR:
        setCurrentMetric({
          name: "24 months",
          orders: totalYearlyOrders,
          sales: totalYearlySales,
          data: yearlyData as [],
        });
        break;
      default:
        throw new Error("invalid time interval");
    }
  };

  return (
    <div className="px-8 py-10 text primaryText ">
      <div>
        <h1 className="text-4xl secondaryText dark:darkSecondaryText tracking-tighter">
          Good Morning,
          <b className="font-medium primaryText dark:darkPrimaryText">
            John Doe
          </b>
        </h1>
        <p className="text-sm secondaryText dark:darkSecondaryText mt-3">
          Here are business analytics at selected time interval
        </p>
      </div>
      <div className="grid max-md:grid-cols-2 md:grid-cols-4 gap-7 mt-8 border-b-[1px] dark:darkBorder pb-5">
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium  secondaryText dark:darkSecondaryText">
            Total sales
          </p>
          <h1 className="font-bold text-xl dark:darkPrimaryText">
            ${currentMetric.sales.toLocaleString()}
          </h1>
          <p className="space-x-1 text-xs secondaryText dark:darkSecondaryText">
            <span className="text-green-600 rounded-md bg-green-100 px-1 py-[0.01rem] font-semibold">
              17%
            </span>
            <span>from last {currentMetric.name}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium secondaryText dark:darkSecondaryText">
            Total orders
          </p>
          <h1 className="font-bold text-xl dark:darkPrimaryText">
            {currentMetric.orders.toLocaleString()}
          </h1>
          <p className="space-x-1 text-xs secondaryText dark:darkSecondaryText">
            <span className="text-red-600 rounded-md bg-red-100 px-1 py-[0.01rem] font-semibold">
              9%
            </span>
            <span>from last {currentMetric.name}</span>
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium secondaryText dark:darkSecondaryText">
            Total revenue
          </p>
          <h1 className="font-bold text-xl dark:darkPrimaryText">
            ${Math.floor(Number(currentMetric.sales) * 0.9).toLocaleString()}
          </h1>
          <p className="space-x-1 text-xs secondaryText dark:darkSecondaryText">
            <span className="text-green-600 rounded-md bg-green-100 px-1 py-[0.01rem] font-semibold">
              15%
            </span>
            <span>from last {currentMetric.name}</span>
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-sm font-medium secondaryText dark:darkSecondaryText">
            Total customers
          </p>
          <h1 className="font-bold text-xl dark:darkPrimaryText">
            {Math.floor(Number(currentMetric.orders) / 1.5).toLocaleString()}
          </h1>
          <p className="space-x-1 text-xs secondaryText dark:darkSecondaryText">
            <span className="text-red-600 rounded-md bg-red-100 px-1 py-[0.01rem] font-semibold">
              14%
            </span>
            <span>from last {currentMetric.name}</span>
          </p>
        </div>
      </div>
      <TrendCharts
        handleCurrentMetricChange={handleCurrentMetricChange}
        data={currentMetric.data}
      />
      <div className="grid grid-cols-2 max-md:grid-cols-1 gap-3 mt-3">
        <OrdersChart />
        <SalesByCategoryChart />
        <NewCustomersChart />
        <PopularProductChart />
        <RecentPurchases />
        <SalesProjection />
        <SalesByRegion />
        {/* <SalesMap /> */}
      </div>
    </div>
  );
};

export default Page;
