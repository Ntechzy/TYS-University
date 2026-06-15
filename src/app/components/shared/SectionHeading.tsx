import React from 'react';
import { motion } from 'framer-motion';

// Define the interface for strict type safety
interface SectionHeadingProps {
  tagline?: string;
  highlightText?: string;
  mainText?: string;
  description?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  tagline = "PLACEMENTS", 
  highlightText = "Explore", 
  mainText = "the Top Global recruiters who choose our talent", 
  description = "Offering top placements with premium packages, featuring global industry leaders along with career-focused specialized training."
}) => {
  return (
    <div className="w-full max-w-7xl mx-auto px-6 py-12 font-sans selection:bg-amber-100">
      <div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-16">
        
        {/* Left Side: Tagline with Custom Scribble Underline */}
        <motion.div 
          initial={{ opacity: 0, x: -25 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col items-start pt-2 flex-shrink-0 min-w-[160px]"
        >
          <span className="text-xs font-black tracking-[0.25em] text-neutral-900 uppercase">
            {tagline}
          </span>
          {/* Custom SVG Double-Stroke Accent Line */}
          <svg 
            className="w-24 h-auto mt-1.5 text-amber-500" 
            viewBox="0 0 100 20" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="3.5" 
            strokeLinecap="round"
          >
            <path d="M5 6 C 30 2, 70 2, 95 8" />
            <path d="M20 14 C 45 10, 65 14, 80 12" />
          </svg>
        </motion.div>

        {/* Right Side: Typography Column */}
        <div className="flex-1 max-w-4xl">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.15]"
          >
            <span className="block font-bold text-neutral-950 mb-1">
              {highlightText}
            </span>
            {mainText}
          </motion.h2>

          {description && (
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="mt-5 text-[15px] sm:text-base text-neutral-600 font-normal leading-relaxed max-w-3xl"
            >
              {description}
            </motion.p>
          )}
        </div>

      </div>
    </div>
  );
};

export default SectionHeading;