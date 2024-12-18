import React from 'react';

function Experience({ title, role, duration, description }) {
  return (
    <div className="border border-gray-300 rounded-md p-4 transition-shadow">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-sm text-gray-500">{role}</p>
      <p className="text-sm text-gray-400">{duration}</p>
      <p className="mt-2 text-gray-600">{description}</p>
    </div>
  );
}

export default Experience;
