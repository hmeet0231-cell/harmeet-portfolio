import { Code2, Palette, Globe, Github, Linkedin, Twitter, Mail, Paintbrush } from 'lucide-react';

export const personalInfo = {
  name: "Harmeet Singh",
  title: "Creative Developer",
  tagline: "I build things that matter",
  subtitle: "Young developer from Ludhiana, India 🇮🇳",
  about: "I'm a young developer and digital artist from Ludhiana, Punjab. I build beautiful things for the web.",
  email: "harmeet.singh@example.com",
  location: "Ludhiana, India"
};

export const socialLinks = [
  {
    id: 1,
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    handle: "@harmeetsingh"
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    handle: "/in/harmeetsingh"
  },
  {
    id: 3,
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    handle: "@harmeetsingh"
  },
  {
    id: 4,
    name: "Email",
    icon: Mail,
    url: "mailto:harmeet.singh@example.com",
    handle: "harmeet.singh@example.com"
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
  },
  {
    id: 4,
    name: "Drawing & Digital Art",
    icon: Paintbrush,
    description: "Creating stunning visual designs and illustrations",
    level: 88
  }
];

export const projects = [
  {
    id: 1,
    title: "EcoTrack",
    description: "A sustainability tracking app that helps users monitor their carbon footprint with beautiful data visualizations.",
    image: "https://images.unsplash.com/photo-1763718528755-4bca23f82ac3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNTl8MHwxfHNlYXJjaHwyfHx3ZWIlMjBhcHAlMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzc1NTYzNzk1fDA&ixlib=rb-4.1.0&q=85",
    tags: ["React", "Python", "Data Viz"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "DesignFlow",
    description: "A collaborative design system platform that streamlines the workflow between designers and developers.",
    image: "https://images.unsplash.com/photo-1772272935464-2e90d8218987?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjY2NzZ8MHwxfHNlYXJjaHwyfHxkZXNpZ24lMjBzeXN0ZW0lMjBpbnRlcmZhY2V8ZW58MHx8fHwxNzc1NTYzNzk5fDA&ixlib=rb-4.1.0&q=85",
    tags: ["TypeScript", "Figma API", "UI Kit"],
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "MindSpace",
    description: "A mindfulness and productivity app combining meditation timers with task management in a zen interface.",
    image: "https://images.pexels.com/photos/6941314/pexels-photo-6941314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    tags: ["Next.js", "Animation", "PWA"],
    demoUrl: "#",
    githubUrl: "#"
  }
];