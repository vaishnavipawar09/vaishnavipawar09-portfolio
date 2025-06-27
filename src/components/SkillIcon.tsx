
interface SkillIconProps {
  skill: string;
}

const SkillIcon = ({ skill }: SkillIconProps) => {
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: string } = {
      Python: "🐍",
      JavaScript: "⚡",
      Java: "☕",
      "C++": "⚙️",
      SQL: "🗃️",
      TypeScript: "📘",
      React: "⚛️",
      "Node.js": "🟢",
      MySQL: "🐬",
      MongoDB: "🍃",
      PostgreSQL: "🐘",
      AWS: "☁️",
      Azure: "🔷",
      Docker: "🐳",
      Kubernetes: "⚓",
      Git: "📚",
      Linux: "🐧"
    };
    
    return iconMap[skillName] || "🔧";
  };

  return (
    <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group">
      <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {getSkillIcon(skill)}
      </div>
      <span className="text-sm text-gray-300 text-center">{skill}</span>
    </div>
  );
};

export default SkillIcon;
