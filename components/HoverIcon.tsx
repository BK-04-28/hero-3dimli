import { ReactNode } from "react";

type HoverIconProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string; // Optional positioning class
};

const HoverIcon = ({ icon, title, description, className }: HoverIconProps) => {
  return (
    <div className={`absolute ${className} group`}>
      {/* Icon Circle */}
      <div className="w-14 h-14 flex items-center justify-center rounded-full bg-white shadow-lg">
        {icon}
      </div>

      {/* Hover Card */}
      <div className="absolute z-10 opacity-0 group-hover:opacity-100 scale-95 group-hover:scale-100 transition-all duration-300 bg-white shadow-lg border border-gray-200 rounded-xl px-4 py-3 text-left top-[-100px] left-1/2 -translate-x-1/2">
        <p className="text-sm font-semibold">{title}</p>
        <p className="text-xs text-gray-500 mt-1">{description}</p>
      </div>
    </div>
  );
};

export default HoverIcon;
