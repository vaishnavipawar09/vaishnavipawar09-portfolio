interface SkillIconProps {
  skill: string;
}

const SkillIcon = ({ skill }: SkillIconProps) => {
  const getSkillIcon = (skillName: string) => {
    const iconMap: { [key: string]: string } = {
      Python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      JavaScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      Java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
      "C++": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
      C: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
      SQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg",
      TypeScript: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      React: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      "Node.js": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      ExpressJS: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      MySQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
      MongoDB: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      PostgreSQL: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      AWS: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      Azure: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      VSCode: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      Docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      Kubernetes: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
      GitHub: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
      Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      "Linux/Unix": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      PHP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
      "Tailwind CSS": "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
      Bootstrap: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
      HTML5: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      CSS:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      Firebase: "https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg",
      GCP: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg",
      Terraform: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg",
      Jenkins: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
      Jupyter: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg",
      Eclipse: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eclipse/eclipse-original.svg",
      Postman: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
      JIRA: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg",
      Tableau: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tableau/tableau-original.svg",
      Ansible: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg",
      Prometheus: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prometheus/prometheus-original.svg"
    };
    return iconMap[skillName] || "🔧";
  };

  const iconValue = getSkillIcon(skill);
  const isImage = typeof iconValue === "string" && iconValue.startsWith("http");

  return (
    <div className="flex flex-col items-center p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300 group w-24 h-24">
      <div className="mb-2 group-hover:scale-110 transition-transform duration-300 text-2xl">
        {isImage ? (
          <img
            src={iconValue}
            alt={skill + " icon"}
            className="w-10 h-10 object-contain"
            loading="lazy"
          />
        ) : (
          iconValue
        )}
      </div>
      <span className="text-xs text-gray-300 text-center leading-tight">{skill}</span>
    </div>
  );
};

export default SkillIcon;
