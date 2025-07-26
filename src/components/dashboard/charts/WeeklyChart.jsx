"use client";

import React from "react";
import dynamic from "next/dynamic";
import { AnalyticsIcon } from "@/components/icons";

const BarChart = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.BarChart })),
  { ssr: false }
);
const Bar = dynamic(
  () => import("recharts").then((mod) => ({ default: mod.Bar })),
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

const StackedBarChart = () => {
  const data = [
    { day: "17", value1: 15, value2: 20, value3: 10 },
    { day: "18", value1: 18, value2: 22, value3: 8 },
    { day: "19", value1: 12, value2: 18, value3: 15 },
    { day: "20", value1: 20, value2: 25, value3: 12 },
    { day: "21", value1: 16, value2: 20, value3: 9 },
    { day: "22", value1: 14, value2: 19, value3: 11 },
    { day: "23", value1: 19, value2: 24, value3: 13 },
    { day: "24", value1: 17, value2: 21, value3: 10 },
    { day: "25", value1: 21, value2: 26, value3: 14 },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h4 className="text-xl font-semibold text-gray-900 mb-2">
            Weekly Revenue
          </h4>
          <div className="flex items-center gap-4 flex-wrap md:flex-nowrap">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#6366F1] rounded-sm"></div>
              <span className="text-sm text-gray-600">Product A</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#60A5FA] rounded-sm"></div>
              <span className="text-sm text-gray-600">Product B</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#A78BFA] rounded-sm"></div>
              <span className="text-sm text-gray-600">Product C</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-1 bg-[#f4e6fa] rounded-lg">
          <AnalyticsIcon />
        </div>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            barCategoryGap="40%"
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f0f0f0"
              horizontal={true}
              vertical={false}
            />

            <XAxis
              dataKey="day"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9CA3AF" }}
            />

            <YAxis hide />

            <Tooltip
              contentStyle={{
                backgroundColor: "white",
                border: "1px solid #e5e7eb",
                borderRadius: "12px",
                fontSize: "14px",
              }}
              cursor={{ fill: "rgba(99, 102, 241, 0.1)" }}
            />

            <Bar
              dataKey="value1"
              stackId="a"
              fill="#6366F1"
              radius={[0, 0, 4, 4]}
            />
            <Bar
              dataKey="value2"
              stackId="a"
              fill="#60A5FA"
              radius={[0, 0, 0, 0]}
            />
            <Bar
              dataKey="value3"
              stackId="a"
              fill="#A78BFA"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StackedBarChart;
