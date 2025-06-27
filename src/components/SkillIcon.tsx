
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
      Linux: "🐧",
      PHP: "🔧",
      "Tailwind CSS": "🎨",
      Bootstrap: "📱",
      "HTML/CSS": "🌐",
      Firebase: "🔥",
      GCP: "☁️",
      Terraform: "🏗️",
      Jenkins: "🔧",
      Jupyter: "📓",
      Eclipse: "🌑",
      Postman: "📮",
      JIRA: "📋",
      Tableau: "📊",
      "Linux/Unix": "🐧"
    };
    
    return iconMap[skillName] || "🔧";
  };

  return (
    <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group w-24 h-24">
      <div className="text-2xl mb-2 group-hover:scale-110 transition-transform duration-300">
        {getSkillIcon(skill)}
      </div>
      <span className="text-xs text-gray-300 text-center leading-tight">{skill}</span>
    </div>
  );
};

export default SkillIcon;
