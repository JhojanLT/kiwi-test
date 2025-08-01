export default function UserIcon({ 
  className = "w-6 h-6", 
  color = "#A3AED0",
  isActive = false,
  ...props 
}) {
  const fillColor = isActive ? "#4318FF" : color;
  
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_user)">
        <path 
          d="M12 12C14.21 12 16 10.21 16 8C16 5.79 14.21 4 12 4C9.79 4 8 5.79 8 8C8 10.21 9.79 12 12 12ZM12 14C9.33 14 4 15.34 4 18V19C4 19.55 4.45 20 5 20H19C19.55 20 20 19.55 20 19V18C20 15.34 14.67 14 12 14Z" 
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_user">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}