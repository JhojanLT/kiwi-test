"use client";

import React from "react";

import dynamic from "next/dynamic";
import { AnalyticsIcon } from "@/components/icons";

const LineChart = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.LineChart })),
  { ssr: false }
);
const Line = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.Line })),
  { ssr: false }
);
const XAxis = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.XAxis })),
  { ssr: false }
);
const YAxis = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.YAxis })),
  { ssr: false }
);
const CartesianGrid = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.CartesianGrid })),
  { ssr: false }
);
const Tooltip = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.Tooltip })),
  { ssr: false }
);
const ResponsiveContainer = dynamic(
  () =>
    import("recharts").then((mod) => ({ default: mod.ResponsiveContainer })),
  { ssr: false }
);

const MonthRevenueChart = () => {
  const data = [
    { month: "SEP", line1: 20, line2: 15 },
    { month: "OCT", line1: 35, line2: 25 },
    { month: "NOV", line1: 25, line2: 20 },
    { month: "DEC", line1: 45, line2: 35 },
    { month: "JAN", line1: 40, line2: 30 },
    { month: "FEB", line1: 50, line2: 40 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-sm text-gray-600">This month</span>
          </div>
          <div className="flex items-baseline gap-2">
            <h3 className="text-3xl font-bold text-gray-900">$37.5K</h3>
            <span className="text-sm text-green-600 font-medium">+2.45%</span>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-sm text-green-600 font-medium">On track</span>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-1 bg-[#f4e6fa] rounded-lg">
            <AnalyticsIcon />
          </div>
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={data}
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#5F6677" }}
            />
            <YAxis hide />
            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
                fontSize: "14px",
              }}
              cursor={{ stroke: "#20ABAD", strokeWidth: 1 }}
            />
            <Line
              type="monotone"
              dataKey="line1"
              stroke="#20ABAD"
              strokeWidth={3}
              dot={{ fill: "#20ABAD", strokeWidth: 2, r: 5 }}
              activeDot={{
                r: 7,
                fill: "#20ABAD",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
            <Line
              type="monotone"
              dataKey="line2"
              stroke="#8FB2B2"
              strokeWidth={3}
              dot={{ fill: "#8FB2B2", strokeWidth: 2, r: 5 }}
              activeDot={{
                r: 7,
                fill: "#8FB2B2",
                stroke: "white",
                strokeWidth: 2,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MonthRevenueChart;
