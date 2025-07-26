const SidebarButton = ({
  icon: Icon,
  label,
  href,
  isActive = false,
  onClick,
  className = "",
  isCollapsed = false,
}) => {
  const handleClick = () => {
    if (onClick) {
      onClick(href);
    }
  };

  return (
    <div
      onClick={handleClick}
      className={`
        group flex items-center p-2 transition-all duration-200 cursor-pointer
        hover:text-[#2B3674] hover:shadow-sm hover:scale-[1.02]
        focus:outline-none focus:ring-2 focus:ring-[#2B3674] focus:ring-opacity-50
        ${
          isActive
            ? isCollapsed
              ? "text-[#6366F1]"
              : "text-[#6366F1] border-r-[#6366F1] border-r-4"
            : "text-gray-600"
        }
        ${isCollapsed ? "justify-center" : "space-x-3"}
        ${className}
      `}
      title={isCollapsed ? label : undefined}
    >
      <div className="transition-transform duration-200 group-hover:scale-110">
        <Icon isActive={isActive} />
      </div>
      <span
        className={`
          font-medium transition-all duration-200 group-hover:translate-x-1
          ${isCollapsed ? "opacity-0 w-0 overflow-hidden" : "opacity-100"}
        `}
      >
        {label}
      </span>
    </div>
  );
};

export default SidebarButton;
