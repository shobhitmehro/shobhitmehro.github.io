import React from "react";

function TechIcon({ name, src, alt }) {
  return (
    <div className="relative group w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0 flex items-center justify-center">
      <img
        src={src}
        alt={alt || name}
        className="w-full h-full object-contain filter grayscale group-hover:filter-none transition duration-300"
      />
      <span className="absolute -top-7 left-1/2 -translate-x-1/2 scale-0 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-200 bg-gray-800 text-white text-xs px-2 py-1 rounded whitespace-nowrap z-10">
        {name}
      </span>
    </div>
  );
}

export default TechIcon;
