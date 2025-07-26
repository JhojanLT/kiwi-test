import { AnalyticsIcon } from "../icons";
import EarningsIcon from "../icons/EarningsIcon";
import SpendsIcon from "../icons/SpendsIcon";
import StatCard from "./StatCard";

export default function StatsRow () {
  const stats = [
    {
      icon:  <AnalyticsIcon/>,
      title:"Earnings",
      value: "$350.4",
    },
    {
      icon: <SpendsIcon/>,
      title: "Spend this month",
      value: "$642.39",
    },
    {
      title: "Sales",
      value: "$574.34",
      extraContent:{percent:'+23%',label:'since last month'}
    },
    {
      icon: "/assets/images/analytics/flag.png",
      title: "Your Balance",
      value: "$1,000",
    },
     {
      icon: "/assets/images/analytics/Icon.png",
      title: "New Tasks",
      value: "$1,000",
      iconSize: "min-w-[12px]"
    },
     {
      icon: <EarningsIcon/>,
      title: "Total Projects",
      value: "$1,000",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2  xl:grid-cols-6 gap-2 lg:gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};