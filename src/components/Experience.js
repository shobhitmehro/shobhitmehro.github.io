import React from "react";

function Experience({ title, role, duration, description, image, techStack, setHighlightedTech }) {
  return (
    <div
      className="border border-gray-300 rounded-md p-4 transition-shadow flex items-stretch relative group"
      onMouseEnter={() => setHighlightedTech && techStack && setHighlightedTech(techStack)}
      onMouseLeave={() => setHighlightedTech && setHighlightedTech([])}
    >
      <div className="flex flex-col flex-1 min-w-0 justify-center">
        <div className="flex items-center space-x-2">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{title}</h3>
        </div>
        <p className="text-sm text-gray-500 truncate">{role}</p>
        <p className="text-sm text-gray-400 truncate">{duration}</p>
        <p className="mt-2 text-gray-600 break-words">{description}</p>
      </div>
      {image && (
        <div className="flex-shrink-0 flex items-center justify-center ml-4">
          <img
            src={image}
            alt={`${title} logo`}
            className="w-12 h-12 object-contain rounded-md grayscale group-hover:grayscale-0 group-hover:bg-green-500 transition duration-300"
            style={{ backgroundColor: 'transparent' }}
          />
        </div>
      )}
    </div>
  );
}

export default Experience;
