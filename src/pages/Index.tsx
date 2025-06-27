
import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin, Download, Send } from 'lucide-react';
import Navigation from '../components/Navigation';
import TypewriterEffect from '../components/TypewriterEffect';
import ProjectCard from '../components/ProjectCard';
import SkillIcon from '../components/SkillIcon';
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

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />

      {/* Hero Section */}
      <section id="hero" data-section className={`min-h-screen flex items-center justify-center px-4 ${getSectionClass('hero')}`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto mb-8 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full flex items-center justify-center">
              <span className="text-gray-400">Profile Image Placeholder</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-purple-400">Vaishnavi Pawar</span>
          </h1>
          
          <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
            <TypewriterEffect texts={personalInfo.titles} />
          </div>
          
          <blockquote className="text-lg md:text-xl text-purple-300 italic mb-8 max-w-2xl mx-auto">
            "{personalInfo.quote}"
          </blockquote>
          
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {personalInfo.bio}
          </p>
          
          <div className="flex justify-center space-x-6 mt-8">
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
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Work Experience</h2>
          <div className="space-y-8">
            {workExperience.map((job, index) => (
              <div key={job.id} className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white">{job.title}</h3>
                    <h4 className="text-xl text-purple-400">{job.company}</h4>
                  </div>
                  <span className="text-gray-400 font-medium">{job.period}</span>
                </div>
                <ul className="space-y-3">
                  {job.points.map((point, pointIndex) => (
                    <li key={pointIndex} className="text-gray-300 flex items-start">
                      <span className="text-purple-400 mr-3 mt-1">•</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section id="education" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('education')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Education</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {education.map((edu) => (
              <div key={edu.id} className="bg-gray-800 rounded-lg p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/30 to-blue-500/30 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-xs text-gray-400">Logo</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                <h4 className="text-lg text-purple-400 mb-2">{edu.school}</h4>
                <div className="flex justify-between text-gray-400">
                  <span>{edu.period}</span>
                  <span className="font-semibold">GPA: {edu.gpa}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section id="achievements" data-section className={`py-20 px-4 ${getSectionClass('achievements')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Achievements & Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" data-section className={`py-20 px-4 bg-gray-800/50 ${getSectionClass('skills')}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-400">Skills</h2>
          {Object.entries(skills).map(([category, skillList]) => (
            <div key={category} className="mb-12">
              <h3 className="text-2xl font-semibold text-purple-300 mb-6 text-center">{category}</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {skillList.map((skill) => (
                  <SkillIcon key={skill} skill={skill} />
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
