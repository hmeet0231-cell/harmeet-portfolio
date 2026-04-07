import { Code2, Palette, Globe, Github, Linkedin, Twitter, Mail } from 'lucide-react';

export const personalInfo = {
  name: "Alex Chen",
  title: "Creative Developer",
  tagline: "I build things that matter",
  about: "Passionate about crafting beautiful, functional digital experiences. I blend design thinking with technical expertise to create products that users love.",
  email: "alex.chen@example.com",
  location: "San Francisco, CA"
};

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    handle: "@alexchen"
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    handle: "/in/alexchen"
  },
  {
    id: 3,
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    handle: "@alexchen"
  },
  {
    id: 4,
    name: "Email",
    icon: Mail,
    url: "mailto:alex.chen@example.com",
    handle: "alex.chen@example.com"
  }
];

export const skills = [
  {
    id: 1,
    name: "UI/UX Design",
    icon: Palette,
    description: "Creating intuitive and beautiful user interfaces",
    level: 90
  },
  {
    id: 2,
    name: "Python",
    icon: Code2,
    description: "Building scalable backend systems and data pipelines",
    level: 85
  },
  {
    id: 3,
    name: "Web Development",
    icon: Globe,
    description: "Full-stack development with modern frameworks",
    level: 95
  }
];

export const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A sustainability tracking app that helps users monitor their carbon footprint with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
    tags: ["React", "Python", "Data Viz"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "DesignFlow",
    description: "A collaborative design system platform that streamlines the workflow between designers and developers.",
    image: "https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&q=80",
    tags: ["TypeScript", "Figma API", "UI Kit"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "MindSpace",
    description: "A mindfulness and productivity app combining meditation timers with task management in a zen interface.",
    image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?w=800&q=80",
    tags: ["Next.js", "Animation", "PWA"],
    demoUrl: "#",
    githubUrl: "#"
  }
];