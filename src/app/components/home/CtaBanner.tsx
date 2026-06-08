import React from 'react';

interface CtaBannerProps {
  backgroundImageUrl: string;
  onApplyClick?: () => void;
}

export const CtaBanner: React.FC<CtaBannerProps> = ({ 
  backgroundImageUrl, 
  onApplyClick 
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div 
        className="relative overflow-hidden rounded-xl bg-neutral-900 bg-cover bg-center shadow-lg min-h-[160px] md:min-h-[200px] flex items-center"
        style={{ backgroundImage: `url('${backgroundImageUrl}')` }}
      >
        {/* Dark Gradient Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/40 z-0" />

        {/* Content Container */}
        <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-6 px-6 py-6 md:px-12 md:py-8">
          
          {/* Typography Section */}
          <div className="text-left select-none max-w-xl">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-light italic text-white tracking-wide">
              Education That Empowers
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl font-black italic text-[#FF0A0A] uppercase tracking-wider mt-1">
              Opportunities That Transform
            </p>
          </div>

          {/* Action Button */}
          <div className="flex-shrink-0 w-full md:w-auto">
            <button
              onClick={onApplyClick}
              className="w-full md:w-auto flex items-center justify-center gap-3 bg-[#FF0A0A] hover:bg-[#D60000] text-white font-extrabold px-8 py-3 rounded-md uppercase tracking-wider transition-all duration-200 active:scale-95 shadow-md group"
            >
              Apply Now
              {/* Arrow SVG that subtly shifts right on hover */}
              <svg 
                className="w-5 h-5 transform transition-transform duration-200 group-hover:translate-x-1" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.5" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default CtaBanner;