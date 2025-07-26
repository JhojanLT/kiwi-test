import React from 'react'
import SideBar from "@/components/SideBar";
import StatsRow from '@/components/dashboard/StatsRow';


export default function page() {
  return (
    <>
    <SideBar/>
    <main className='bg-gray-bgGray ml-72 p-5'> 
      <div className='py-8'>
        <p className='text-[#707EAE] text-xs'>Pages / Dashboard</p> {/*Cambiar a miga de pan*/}
      <h1 className='font-bold text-3xl text-primary-fonts'>Main Dashboard</h1>
      </div>
    <StatsRow/>

    </main>
    </>
  )
}
