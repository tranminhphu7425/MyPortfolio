
import React from 'react';

interface RetroSignProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'secondary';
}

const RetroSign: React.FC<RetroSignProps> = ({ children, className = "", variant = 'primary', noneRow }) => {
  // Use Tailwind classes directly for better dark mode compatibility
  const containerClasses = variant === 'primary'
    ? 'bg-[#FDF5E6] border-[#386641] text-[#386641] dark:bg-[#252525] dark:border-[#FDF5E6] dark:text-[#FDF5E6]'
    : 'bg-[#bc4749] border-[#FDF5E6] text-[#FDF5E6] dark:bg-[#a53b3d] dark:border-[#FDF5E6] dark:text-[#FDF5E6]';

  const decorationClasses = variant === 'primary'
    ? 'border-[#386641] dark:border-[#FDF5E6]'
    : 'border-[#FDF5E6]';

  return (
    <div className={`relative p-8 border-4 shadow-xl vintage-texture transition-all ${containerClasses} rounded-sm ${className}`}>
      {/* Decorative corners */}
      <div className={`absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 ${decorationClasses}`}></div>
      <div className={`absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 ${decorationClasses}`}></div>
      <div className={`absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 ${decorationClasses}`}></div>
      <div className={`absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 ${decorationClasses}`}></div>

      <div
        className={`relative z-10 flex flex-col ${noneRow ? "" : "lg:flex-row-reverse"
          } items-center text-center gap-1`}
      >
        {children}
      </div>

    </div>
  );
};

export default RetroSign;
