import React, { useState } from 'react';

function PostCard({ title, description, paragraph, github }) {
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggle = () => {
        setIsExpanded(!isExpanded);
    };

    return (
        <div className="border border-gray-300 rounded-md p-4 mb-4">
            <div className="flex justify-between">
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                    <p className="text-sm text-gray-500">{description}</p>
                </div>
                <button
                    onClick={handleToggle}
                    className="text-sm text-black-500 hover:cursor-* focus:outline-none pr-4"
                >
                    {isExpanded ? <span style={{ fontSize: '20px' }}>↓</span> : <span style={{ fontSize: '20px' }}>←</span>}
                </button>
            </div>

            {isExpanded && (
                <div className="mt-2 text-sm text-gray-700 border-t border-gray-200 pt-2">
                    <pre className='pb-4 whitespace-pre-wrap break-words'>{paragraph}</pre>
                    {github && (
                        <a href={github} target="_blank" rel="noopener noreferrer" className="text-blue-500">
                            View on GitHub
                        </a>)}
                </div>
            )}
        </div>
    );
}

export default PostCard;
