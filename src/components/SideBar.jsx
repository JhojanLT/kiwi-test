import { LockIcon, UserIcon } from "lucide-react";
import { AnalyticsIcon, CartIcon, DashboardIcon, HomeIcon } from "./icons";
const Sidebar = () => {
  return (

    <aside className="w-72 bg-white h-screen flex flex-col px-4 py-6 fixed">
      <div className="mb-8 px-2">
        <h1 className="text-xl font-bold text-[#2B3674]">HORIZON <span className="font-normal">FREE</span></h1>
      </div>
      
{/* Falta crear la linea que separa el texto del menú */}
{/* Hay que corregir hover de algunos Iconos */}

      <nav className="flex flex-col space-y-4 text-sm text-gray-mainGray font-medium">
        <div className="flex items-center space-x-3 hover:text-[#2B3674]  cursor-pointer">
          <HomeIcon />
          <span >Dashboard</span>
        </div>

        <div className="flex items-center space-x-3 hover:text-[#2B3674] cursor-pointer">
            <CartIcon/>
          
          <span>NFT Marketplace</span>
        </div>


         <div className="flex items-center space-x-3 hover:text-[#2B3674] cursor-pointer">
          <AnalyticsIcon/>
        <span>Tables</span>
        </div>
    

        <div className="flex items-center space-x-3 hover:text-[#2B3674] cursor-pointer">
          <DashboardIcon />

          <span>Kanban</span>
        </div>

        <div className="flex items-center space-x-3 hover:text-[#2B3674] cursor-pointer">
            <UserIcon/>

          <span>Profile</span>
        </div>

        <div className="flex items-center space-x-3 hover:text-[#2B3674] cursor-pointer">
            <LockIcon/>
          <span>Sign In</span>
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;
