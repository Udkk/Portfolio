import {
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiExpress,
  SiMongodb,
  SiGithub,
  SiCplusplus,
} from "react-icons/si";

import { Shield, Cpu, Lock, Blocks, Package } from "lucide-react";

export const skillCategories = [
  {
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        description: "Object-Oriented Programming",
      },
      {
        name: "Python",
        icon: FaPython,
        description: "Automation & AI",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        description: "Modern Web Development",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        description: "Data Structures & Algorithms",
      },
    ],
  },

  {
    title: "Frontend",
    skills: [
      {
        name: "React",
        icon: FaReact,
        description: "UI Development",
      },
      {
        name: "HTML5",
        icon: SiHtml5,
        description: "Semantic Markup",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        description: "Responsive Design",
      },
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        description: "Utility-first CSS",
      },
    ],
  },

  {
    title: "Backend",
    skills: [
      {
        name: "Node.js",
        icon: FaNodeJs,
        description: "JavaScript Runtime",
      },
      {
        name: "Express",
        icon: SiExpress,
        description: "Backend Framework",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        description: "NoSQL Database",
      },
    ],
  },

  {
    title: "Cybersecurity",
    skills: [
      {
        name: "Network Security",
        icon: Shield,
        description: "Network Protection",
      },
      {
        name: "Cryptography",
        icon: Lock,
        description: "Encryption & Secure Communication",
      },
      {
        name: "Post-Quantum Cryptography",
        icon: Lock,
        description: "Quantum-Resistant Security",
      },
      {
        name: "Blockchain",
        icon: Blocks,
        description: "Distributed Ledger Technology",
      },
    ],
  },

  {
    title: "AI / ML",
    skills: [
      {
        name: "Machine Learning",
        icon: Cpu,
        description: "Predictive Models",
      },
      {
        name: "Python",
        icon: FaPython,
        description: "AI & Data Processing",
      },
    ],
  },

  {
    title: "Tools",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        description: "Version Control",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        description: "Code Hosting",
      },
      {
        name: "Maven",
        icon: Package,
        description: "Java Build & Dependency Management",
      },
    ],
  },
];