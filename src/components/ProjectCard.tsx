
import { projects } from '../data/projects';

interface ProjectCardProps {
  project: typeof projects[0];
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fade-in">
      
    {project.image ? (
  <img
    src={project.image}
    alt={project.name + " image"}
    className="w-full h-48 object-cover rounded-lg mb-4"
  />
) : (
  <div className="h-32 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-lg mb-4 flex items-center justify-center">
    <span className="text-gray-400 text-sm">Project Image Placeholder</span>
  </div>
)}
      
      <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
      <p className="text-gray-300 mb-4">{project.overview}</p>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Key Features:</h4>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {project.keyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-2">Tech Stack:</h4>
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech, index) => (
            <span key={index} className="px-2 py-1 bg-gray-700 text-xs rounded-full text-gray-300">
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-purple-400 mb-1">Role:</h4>
        <p className="text-sm text-gray-300">{project.role}</p>
      </div>

           
      <div className="flex flex-wrap gap-2">
        {Object.entries(project.links).map(([type, url]) => (
          <a
            key={type}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 bg-purple-600 text-white text-xs rounded-md hover:bg-purple-700 transition-colors duration-300"
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
