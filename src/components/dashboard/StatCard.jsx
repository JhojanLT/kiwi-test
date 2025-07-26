export default function StatCard  ({ 
  icon, 
  title, 
  value, 
  extraContent,
  iconBg = "bg-primary-hue",
  iconSize = "w-6 h-6"

}) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        {icon && 
        <div className={`flex items-center justify-center w-12 h-12 min-w-12 min-h-12 rounded-full ${iconBg}`}>
       ola
        </div>
        }
        
        <div className="flex-1">
          <p className="text-sm font-medium text-typography-secondary mb-1">
            {title}
          </p>
          <p className="text-2xl font-bold text-typography-primary">
            {value}
          </p>
          {extraContent && <div>
            <p className="text-[#05CD99]"></p>
            </div>}
        </div>
      </div>
    </div>
  );
};