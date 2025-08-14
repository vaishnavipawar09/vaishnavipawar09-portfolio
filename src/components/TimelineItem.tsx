
import { useState } from 'react';
import { GraduationCap, Building2 } from 'lucide-react';

interface TimelineItemProps {
  title: string;
  company: string;
  period: string;
  points?: string[];
  gpa?: string;
  isEducation?: boolean;
  logo?: string;
}

const TimelineItem = ({ title, company, period, points, gpa, isEducation = false, logo }: TimelineItemProps) => {
  const [isExpanded, setIsExpanded] = useState(false);
  console.log("Logo for", title, "is", logo);

  // Get company/school initial for logo placeholder
  const getInitial = (name: string) => {
    return name.charAt(0).toUpperCase();
  };

  return (
    <div className="relative flex items-start mb-8">
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-3 h-3 bg-gray-400 rounded-full border-2 border-gray-900 z-10"></div>
      
      {/* Card */}
      <div className="w-full max-w-4xl min-h-[200px] bg-gray-800/50 rounded-lg p-6 shadow-lg ml-8 border border-gray-700/50">
        {/* Header with logo, title, company and period */}
        <div className="flex items-start justify-between mb-4">
          <div className="flex items-start space-x-4">
            {/* Company/School Logo Placeholder */}
           <div className="w-12 h-12 bg-purple-600/20 rounded-lg flex items-center justify-center flex-shrink-0 mt-1 overflow-hidden">
  {company === "Indiana University Bloomington"
    ? <img src="/logos/iulogo.jpeg" alt="IU Logo" className=" object-contain" />
    : company === "Heartland Community Network"
    ? <img src="/logos/hcn_logo.jpg" alt="HCN Logo" className="object-contain" />
    : company === "Olei Labs"
    ? <img src="/logos/oleilabs_logo.jpg" alt="Olei Logo" className="object-contain" />
    : company === "Kaizen Envirotech Industries"
    ? <img src="/logos/kaizenlogo.png" alt="Kaizen Logo" className=" object-contain" />
    : company === "Sparks Foundation"
    ? <img src="/logos/sparks.jpeg" alt="Sparks Logo" className="object-contain" />
    : company === "Indiana University Bloomington, USA"
    ? <img src="/logos/iulogo.jpeg" alt="IU Logo" className="object-contain" />
    : company === "University of Pune, India" 
    ? <img src="/logos/pune.jpeg" alt="Pune University Logo" className="object-contain" />
    : company === "Loyola High School and Jr. College, Pashan, Pune" 
    ? <img src="/logos/loyola.jpeg" alt="Loyola Logo" className="object-contain" />
    : company === "Mar Ivanios Convent High School, Pune" 
    ? <img src="/logos/mar.png" alt="Mar Ivanios Logo" className="object-contain" />
    : null
  }
</div>

            <div className="flex-1">
              <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
              <h4 className="text-purple-400 font-semibold text-lg">{company}</h4>
            </div>
          </div>
          
          <span className="text-gray-400 font-medium text-sm whitespace-nowrap ml-4">{period}</span>
        </div>
        
        {gpa && (
          <div className="mb-4">
            <span className="inline-block bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium">
              GPA: {gpa}
            </span>
          </div>
        )}
        
        {points && points.length > 0 && (
          <div className="space-y-3">
            <ul className="space-y-2">
              {points.map((point, index) => (
                <li key={index} className="text-gray-300 text-sm flex items-start">
                  <span className="text-purple-400 mr-3 mt-1.5 text-xs flex-shrink-0">•</span>
                  <span className="leading-relaxed">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TimelineItem;
