import StatCard from "./StatCard";

export default function StatsRow () {
  const stats = [
    {
      icon: "/assets/images/analytics/stats.png",
      value: "$350.4",
      iconBg: "bg-primary-hue"
    },
    {
      icon: "/assets/icons/spend.png",
      title: "Spend this month",
      value: "$642.39",
      iconBg: "bg-green-50"
    },
    {
      title: "Sales",
      value: "$574.34",
      iconBg: "bg-purple-50",
      extraconten:{percent:'%',label:'label'}
    },
    {
      icon: "/assets/icons/balance.png",
      title: "Your Balance",
      value: "$1,000",
      iconBg: "bg-blue-50",
    },
     {
      icon: "/assets/icons/balance.png",
      title: "Your Balance",
      value: "$1,000",
      iconBg: "bg-blue-50"
    },
     {
      icon: "/assets/icons/balance.png",
      title: "Your Balance",
      value: "$1,000",
      iconBg: "bg-blue-50",
    }
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-2 lg:gap-4">
      {stats.map((stat, index) => (
        <StatCard key={index} {...stat} />
      ))}
    </div>
  );
};