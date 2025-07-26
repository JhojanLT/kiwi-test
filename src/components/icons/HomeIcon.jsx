export default function HomeIcon({ 
  className = "w-6 h-6", 
  color = "#4318FF",  // Color por defecto del diseño
  isActive = false,   // Para manejar estado activo
  ...props 
}) {
  const fillColor = isActive ? "#4318FF" : (color === "#4318FF" ? "#A3AED0" : color);
  
  return (
    <svg 
      className={className} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#clip0_home)">
        <path 
          d="M10.0001 19V14H14.0001V19C14.0001 19.55 14.4501 20 15.0001 20H18.0001C18.5501 20 19.0001 19.55 19.0001 19V12H20.7001C21.1601 12 21.3801 11.43 21.0301 11.13L12.6701 3.6C12.2901 3.26 11.7101 3.26 11.3301 3.6L2.9701 11.13C2.6301 11.43 2.8401 12 3.3001 12H5.0001V19C5.0001 19.55 5.4501 20 6.0001 20H9.0001C9.5501 20 10.0001 19.55 10.0001 19Z" 
          fill={fillColor}
        />
      </g>
      <defs>
        <clipPath id="clip0_home">
          <rect width="24" height="24" fill="white"/>
        </clipPath>
      </defs>
    </svg>
  );
}