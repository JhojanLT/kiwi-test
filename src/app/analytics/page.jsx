import React from "react";
import SideBar from "@/components/SideBar";
import StatsRow from "@/components/dashboard/StatsRow";
import MonthRevenueChart from "@/components/dashboard/charts/MonthRevenueChart";
import WeeklyChart from "@/components/dashboard/charts/WeeklyChart";

export default function page() {
  return (
    <>
      <SideBar />
      <main className="bg-gray-bgGray ml-16 md:ml-72 p-5">
        <div className='py-8'>
          <p className='text-[#707EAE] text-xs'>Pages / Dashboard</p> {/*Cambiar a miga de pan*/}
          <h1 className='font-bold text-3xl text-primary-fonts'>Main Dashboard</h1>
        </div>
        <StatsRow />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <MonthRevenueChart />
          <WeeklyChart />
        </div>
      </main>
    </>
  );
}
