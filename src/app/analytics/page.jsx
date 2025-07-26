import React from 'react'
import SideBar from "@/components/SideBar";
import StatsRow from '@/components/dashboard/StatsRow';


export default function page() {
  return (
    <>
    <SideBar/>
    <main className='bg-gray-bgGray ml-72 p-5'> 

    <StatsRow/>

    </main>
    </>
  )
}
