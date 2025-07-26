export default function StatCard  ({ 
  icon, 
  title, 
  value, 
  extraContent,
  iconSize = "w-6 h-6"

}) {
  return (
<div className="bg-white rounded-2xl px-4 py-5 border border-gray-100 hover:shadow-md transition-shadow flex items-center min-h-28">
  <div className="flex items-center space-x-4">
    {icon && (
      <div className={`flex items-center justify-center w-12 h-12 min-w-12 min-h-12 rounded-full bg-gray-bgGray`}>
        {typeof icon === 'string' ? (
          <img
            src={icon}
            alt="icon"
            className={`w-6 h-6 object-contain ${iconSize}`} 
          />
        ) : (
          icon
        )}
      </div>
    )}

    <div className="flex-1">
      <p className="text-xs text-gray-mainGray font-medium text-typography-secondary mb-1">
        {title}
      </p>
      <p className="text-xl font-bold text-typography-primary">{value}</p>

      {extraContent && (
        <div className="flex text-xs items-center"> 
          <p className="text-[#05CD99] font-bold pr-2">{extraContent.percent}</p>
          <p className="text-[#A3AED0]">{extraContent.label}</p>
        </div>
      )}
    </div>
  </div>
</div>

  );
};