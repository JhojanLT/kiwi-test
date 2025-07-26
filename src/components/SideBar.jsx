"use client";
import { useState } from "react";
import {
  AnalyticsIcon,
  CartIcon,
  DashboardIcon,
  HomeIcon,
  LockIcon,
  UserIcon,
} from "./icons";
import SidebarButton from "./atoms/SideBarButton";

const Sidebar = () => {
  const [activePath, setActivePath] = useState("/dashboard");
  const [isCollapsed, setIsCollapsed] = useState(false);

  const sidebarItems = [
    {
      id: "dashboard",
      icon: DashboardIcon,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      id: "nft-marketplace",
      icon: CartIcon,
      label: "NFT Marketplace",
      href: "/nft-marketplace",
    },
    { id: "tables", icon: AnalyticsIcon, label: "Tables", href: "/tables" },
    { id: "kanban", icon: HomeIcon, label: "Kanban", href: "/kanban" },
    { id: "profile", icon: UserIcon, label: "Profile", href: "/profile" },
    { id: "signin", icon: LockIcon, label: "Sign In", href: "/signin" },
  ];

  const handleNavigation = (href) => {
    setActivePath(href);
    console.log(`Navigating to: ${href}`);
  };

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside
      className={`
        h-[150vh] md:h-full fixed bg-white shadow-lg transition-all duration-300 ease-in-out z-50
        ${isCollapsed ? "w-16" : "w-72"}
        md:w-72 md:translate-x-0
        ${isCollapsed ? "translate-x-0" : "translate-x-0"}
        lg:w-72
      `}
    >
      <div
        className={`p-6 border-b border-gray-200 flex items-center justify-between`}
      >
        <div
          className={`text-xl font-bold text-gray-800 transition-opacity duration-300 ${
            isCollapsed ? "opacity-0 hidden" : "opacity-100"
          }`}
        >
          HORIZON FREE
        </div>

        <button
          onClick={toggleSidebar}
          className="flex md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <svg
            className={`w-5 h-5 transition-transform duration-300 ${
              isCollapsed ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <nav className="space-y-1">
          {sidebarItems.map((item) => (
            <SidebarButton
              key={item.id}
              icon={item.icon}
              label={item.label}
              href={item.href}
              isActive={activePath === item.href}
              onClick={handleNavigation}
              isCollapsed={isCollapsed}
            />
          ))}
        </nav>
      </div>

      {!isCollapsed && (
        <div
          className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </aside>
  );
};

export default Sidebar;
