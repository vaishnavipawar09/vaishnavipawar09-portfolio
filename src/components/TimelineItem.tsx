
import { useState } from 'react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  points?: string[];
  isLeft?: boolean;
  gpa?: string;
}

const TimelineItem = ({ title, company, period, points, isLeft = false, gpa }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex items-center mb-12">
      {/* Timeline dot */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-600 rounded-full border-4 border-gray-900 z-10"></div>
      
      {/* Content */}
      <div className={`w-full ${isLeft ? 'pr-8 text-right' : 'pl-8'}`}>
        <div 
          className={`bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer hover:bg-gray-750 ${
            isLeft ? 'ml-auto mr-4' : 'mr-auto ml-4'
          } max-w-md`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {/* Company logo placeholder */}
          <div className={`flex items-center mb-3 ${isLeft ? 'justify-end' : 'justify-start'}`}>
            <div className="w-8 h-8 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center mr-3">
              <span className="text-xs text-gray-400">Logo</span>
            </div>
            <span className="text-gray-400 font-medium">{period}</span>
          </div>
          
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <h4 className="text-purple-400 mb-2">{company}</h4>
          
          {gpa && (
            <p className="text-gray-400 text-sm mb-2">GPA: {gpa}</p>
          )}
          
          {points && (
            <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-16 opacity-60 overflow-hidden'}`}>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-2 mt-1 text-xs">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          
          {points && (
            <button className="text-purple-400 text-sm mt-2 hover:text-purple-300 transition-colors">
              {isExpanded ? 'Show less' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineItem;
