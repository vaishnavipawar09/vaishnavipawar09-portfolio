import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Download, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import TypewriterEffect from '../components/TypewriterEffect';
import ProjectCard from '../components/ProjectCard';
import SkillIcon from '../components/SkillIcon';
import TimelineItem from '../components/TimelineItem';
import { personalInfo, workExperience, education, achievements, skills, publications } from '../data/content';
import { projects, projectCategories, categoryFilters } from '../data/projects';

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState('All Projects');
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set([...prev, entry.target.id]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('[data-section]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const categoryProjectIds = categoryFilters[selectedCategory as keyof typeof categoryFilters] || [];
    const filtered = projects.filter(project => categoryProjectIds.includes(project.id));
    setFilteredProjects(filtered);
  }, [selectedCategory]);

  const getSectionClass = (sectionId: string) => {
    return visibleSections.has(sectionId) ? 'animate-fade-in' : 'opacity-0';
  };

  const updatedPersonalInfo = {
    ...personalInfo,
    bio: "I am a results-driven Software Engineer with 2+ years of hands-on experience building scalable products in cloud, DevOps, and data. I hold a Master's in Computer Science from Indiana University Bloomington and am passionate about solving real-world problems with code. As the first female engineer in my family, I'm also an anime/drama enthusiast and always eager to learn something new."
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" data-section className={`min-h-screen flex items-center justify-center px-4 pt-20 ${getSectionClass('hero')}`}>
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left side - Text content */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I'm <span className="text-purple-400">Vaishnavi Pawar</span>
              </h1>
              
              <div className="text-xl md:text-2xl text-gray-300 mb-6 h-8">
                <TypewriterEffect texts={personalInfo.titles} />
              </div>
              
              <blockquote className="text-lg text-purple-300 italic mb-6">
                "{personalInfo.quote}"
              </blockquote>
              
              <div className="max-w-xl">
                <p className="text-gray-300 leading-relaxed">
                  {updatedPersonalInfo.bio}
                </p>
              </div>
            </div>
            
            {/* Right side - Profile image placeholder */}
            <div className="flex justify-center">
              <div className="w-80 h-80 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
                <span className="text-gray-400 text-center">Profile Image<br />Placeholder</span>
              </div>
            </div>
          </div>
          
          {/* Social icons row */}
          <div className="flex justify-start space-x-6 mt-12">
            <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" 
               className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300">
              <Linkedin size={24} />
            </a>
            <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
               className="p-3 bg-gray-700 rounded-full hover:bg-gray-600 transition-colors duration-300">
              <Github size={24} />
            </a>
            <a href={`mailto:${personalInfo.email}`}
               className="p-3 bg-purple-600 rounded-full hover:bg-purple-700 transition-colors duration-300">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* Work Experience */}
      <section id="experience" data-section className={`py-20 px-4 ${getSectionClass('experience')}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Work Experience</h2>
          <div className="relative pl-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            {workExperience.map((job) => (
              <TimelineItem
                key={job.id}
                title={job.title}
                company={job.company}
                period={job.period}
                points={job.points}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('education')}`}>
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Education</h2>
          <div className="relative pl-8">
            {/* Vertical Timeline Line */}
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            {education.map((edu) => (
              <TimelineItem
                key={edu.id}
                title={edu.degree}
                company={edu.school}
                period={edu.period}
                gpa={edu.gpa}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" data-section className={`py-20 px-4 ${getSectionClass('achievements')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Achievements & Highlights</h2>
          <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
            <ul className="space-y-4">
              {achievements.map((achievement, index) => (
                <li key={index} className="text-gray-300 flex items-start">
                  <span className="text-purple-400 mr-3 mt-1">•</span>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('skills')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-8">
              <h3 className="text-xl font-semibold text-purple-300 mb-4 text-center">{category}</h3>
              <div className="flex flex-wrap justify-center gap-3">
                {skillList.map((skill) => (
                  <div key={skill} className="flex flex-col items-center p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors duration-300">
                    <div className="text-lg mb-1">
                      {/* Using simple emoji icons for compactness */}
                      {skill === 'Python' && '🐍'}
                      {skill === 'JavaScript' && '⚡'}
                      {skill === 'Java' && '☕'}
                      {skill === 'React' && '⚛️'}
                      {skill === 'Node.js' && '🟢'}
                      {skill === 'AWS' && '☁️'}
                      {skill === 'Docker' && '🐳'}
                      {!['Python', 'JavaScript', 'Java', 'React', 'Node.js', 'AWS', 'Docker'].includes(skill) && '🔧'}
                    </div>
                    <span className="text-xs text-gray-300 text-center">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section id="projects" data-section className={`py-20 px-4 ${getSectionClass('projects')}`}>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Projects</h2>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {projectCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section id="publications" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('publications')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Publications</h2>
          <div className="space-y-8">
            {publications.map((pub) => (
              <div key={pub.id} className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{pub.title}</h3>
                <p className="text-purple-400 mb-2">{pub.journal}</p>
                <p className="text-gray-400 mb-4">{pub.date}</p>
                <div className="flex flex-wrap gap-4">
                  <a href={pub.link} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors duration-300">
                    View Paper
                  </a>
                  <a href={pub.doi} target="_blank" rel="noopener noreferrer"
                     className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-500 transition-colors duration-300">
                    DOI
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Volunteering & Languages */}
      <section id="volunteering" data-section className={`py-20 px-4 ${getSectionClass('volunteering')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Volunteering & Languages</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Volunteering Experience</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-400">Logo</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300">TEDx PR Volunteer</h4>
                    <p className="text-gray-400">Event coordination and public relations</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg flex items-center justify-center">
                    <span className="text-xs text-gray-400">Logo</span>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-300">HelpAge India Volunteer</h4>
                    <p className="text-gray-400">Community service and elderly care support</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 rounded-lg p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-white mb-6">Languages</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-300">English</span>
                  <span className="text-purple-400 font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-300">Hindi</span>
                  <span className="text-purple-400 font-semibold">Native</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg text-gray-300">Marathi</span>
                  <span className="text-purple-400 font-semibold">Native</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('contact')}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Let's Connect</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Get In Touch</h3>
              <p className="text-gray-300 mb-8">
                I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and innovation.
              </p>
              
              <div className="space-y-4">
                <a href={`mailto:${personalInfo.email}`} 
                   className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <Mail size={24} />
                  <span>{personalInfo.email}</span>
                </a>
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <Linkedin size={24} />
                  <span>LinkedIn Profile</span>
                </a>
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer"
                   className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <Github size={24} />
                  <span>GitHub Profile</span>
                </a>
                <button className="flex items-center space-x-4 text-gray-300 hover:text-purple-400 transition-colors duration-300">
                  <Download size={24} />
                  <span>Download Resume</span>
                </button>
              </div>
            </div>
            
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                <input type="text" id="name" name="name" 
                       className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                <input type="email" id="email" name="email"
                       className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                <textarea id="message" name="message" rows={5}
                          className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white"></textarea>
              </div>
              <button type="submit" 
                      className="w-full bg-purple-600 text-white py-3 rounded-lg font-medium hover:bg-purple-700 transition-colors duration-300 flex items-center justify-center space-x-2">
                <Send size={20} />
                <span>Send Message</span>
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 bg-gray-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-6">
            <div className="w-16 h-16 mx-auto bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center mb-4">
              <span className="text-2xl">🌟</span>
            </div>
          </div>
          <p className="text-lg text-gray-300 mb-4">
            Stay awesome! Thanks for stopping by! Let's connect and grow together.
          </p>
          <p className="text-gray-500 text-sm">
            © 2024 Vaishnavi Pawar. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
