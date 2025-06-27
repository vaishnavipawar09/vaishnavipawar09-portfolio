
import { useState } from 'react';
import { GraduationCap } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  points?: string[];
  gpa?: string;
}

const TimelineItem = ({ title, company, period, points, gpa }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="relative flex items-start mb-8 ml-8">
      {/* Timeline dot */}
      <div className="absolute -left-8 top-6 w-3 h-3 bg-gray-500 rounded-full border-2 border-gray-900 z-10"></div>
      
      {/* Card - Fixed width and height */}
      <div className="w-full max-w-2xl min-h-[200px] bg-gray-800 rounded-lg p-6 shadow-lg ml-6">
        {/* Header with logo and period */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded flex items-center justify-center mr-3">
              <GraduationCap size={14} className="text-purple-400" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{title}</h3>
              <h4 className="text-purple-400 font-semibold">{company}</h4>
            </div>
          </div>
          <span className="text-gray-400 font-medium text-sm">{period}</span>
        </div>
        
        {gpa && (
          <p className="text-gray-400 text-sm mb-4">GPA: {gpa}</p>
        )}
        
        {points && (
          <div className="flex-1">
            <div className={`transition-all duration-300 ${isExpanded ? 'max-h-96' : 'max-h-20'} overflow-hidden`}>
              <ul className="space-y-2">
                {points.map((point, index) => (
                  <li key={index} className="text-gray-300 text-sm flex items-start">
                    <span className="text-purple-400 mr-3 mt-1 text-xs">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {points.length > 2 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-purple-400 text-sm mt-3 hover:text-purple-300 transition-colors"
              >
                {isExpanded ? 'Show less' : 'Show more'}
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
