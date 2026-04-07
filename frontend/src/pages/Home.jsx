import React, { useEffect, useState } from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { personalInfo, socialLinks, skills, projects } from '../data/mock';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';

const Home = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-nav">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold gradient-text">{personalInfo.name}</div>
          <div className="hidden md:flex gap-8">
            {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`nav-link ${
                  activeSection === item.toLowerCase() ? 'active' : ''
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-background" style={{ transform: `translateY(${scrollY * 0.5}px)` }}></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="hero-content">
            <div className="fade-in-up">
              <p className="text-lg md:text-xl text-gray-400 mb-4">Hi, I'm</p>
              <h1 className="text-5xl md:text-7xl font-bold mb-6">
                {personalInfo.name}
              </h1>
              <div className="text-3xl md:text-5xl font-bold mb-8">
                <span className="gradient-text animated-text">{personalInfo.tagline}</span>
              </div>
              <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-2xl">
                {personalInfo.title}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="glass-button"
                  onClick={() => scrollToSection('projects')}
                >
                  View My Work
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glass-button-outline"
                  onClick={() => scrollToSection('contact')}
                >
                  Get In Touch
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="scroll-indicator">
          <div className="mouse"></div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="fade-in-up">
            <h2 className="section-title">About Me</h2>
            <div className="glass-card max-w-3xl mx-auto">
              <p className="text-lg text-gray-300 leading-relaxed">
                {personalInfo.about}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Skills & Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div
                  key={skill.id}
                  className="skill-card fade-in-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card className="glass-card h-full hover-lift">
                    <CardHeader>
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-purple-400" />
                      </div>
                      <CardTitle className="text-2xl">{skill.name}</CardTitle>
                      <CardDescription className="text-gray-400">
                        {skill.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                        <div
                          className="skill-bar h-full bg-gradient-to-r from-purple-500 to-blue-500"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className="project-card fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Card className="glass-card h-full hover-lift overflow-hidden">
                  <div className="project-image-container">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="project-image"
                    />
                    <div className="project-overlay">
                      <div className="flex gap-4">
                        <Button size="sm" className="glass-button-small">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                        <Button size="sm" className="glass-button-small">
                          <Github className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <span key={i} className="tag">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="section-title">Let's Connect</h2>
          <div className="max-w-4xl mx-auto">
            <div className="glass-card text-center mb-12">
              <p className="text-xl text-gray-300 mb-8">
                I'm always open to new opportunities and interesting projects. Feel free to reach out!
              </p>
              <a href={`mailto:${personalInfo.email}`}>
                <Button size="lg" className="glass-button">
                  Send Me an Email
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-card fade-in-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="glass-card hover-lift text-center p-6">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-3">
                        <Icon className="h-6 w-6 text-purple-400" />
                      </div>
                      <p className="font-semibold text-sm">{social.name}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 {personalInfo.name}. Built with passion and code.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Home;