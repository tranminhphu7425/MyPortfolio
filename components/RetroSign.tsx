
import React from 'react';

interface RetroSignProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const RetroSign: React.FC<RetroSignProps> = ({ children, className = "", variant = 'primary' }) => {
  const bgColor = variant === 'primary' ? 'bg-[#FDF5E6]' : 'bg-[#bc4749]';
  const borderColor = variant === 'primary' ? 'border-[#386641]' : 'border-[#FDF5E6]';
  const textColor = variant === 'primary' ? 'text-[#386641]' : 'text-[#FDF5E6]';

  return (
    <div className={`relative p-8 border-4 ${borderColor} ${bgColor} ${textColor} rounded-sm shadow-xl vintage-texture ${className}`}>
      {/* Decorative corners */}
      <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${borderColor}`}></div>
      <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${borderColor}`}></div>
      <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${borderColor}`}></div>
      <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${borderColor}`}></div>
      
      <div className="relative z-10 flex flex-col items-center text-center">
        {children}
      </div>
    </div>
  );
};

export default RetroSign;
