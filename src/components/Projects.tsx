import React, { useState } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubLink: string;
  imageSrc: string;
  reverse?: boolean;
  index: number;
  bulletPoints?: string[]; // Added bulletPoints prop
}

const ProjectCard: React.FC<ProjectProps> = ({
  title,
  description,
  technologies,
  githubLink,
  imageSrc,
  reverse = false,
  index,
  bulletPoints,
}) => {
  const formatDescription = (desc: string, points?: string[]) => {
    // If bulletPoints are provided, show them instead of the main description
    console.log(points);
    return (
      <>
        <p className="text-left mb-5">{desc}</p>
        <ul className="list-disc pl-5 space-y-1 text-left">
          {points?.map((point, idx) => (
            <li key={idx}>{point.trim()}</li>
          ))}
        </ul>
      </>
    );
  };

  return (
    <div
      className={cn(
        "grid md:grid-cols-5 gap-6 items-center animate-fade-in",
        reverse ? "md:grid-flow-dense" : ""
      )}
      style={{ animationDelay: `${0.2 * index}s` }}
    >
      {/* Project Image/Preview */}
      <Dialog>
        <DialogTrigger asChild>
          <div
            className={cn(
              "md:col-span-3 relative group overflow-hidden rounded-2xl border border-white/20 shadow-lg cursor-pointer",
              reverse ? "md:col-start-3" : "md:col-start-1"
            )}
          >
            <div className="aspect-video bg-gradient-to-tr from-accent/30 to-secondary/40 relative overflow-hidden rounded-2xl">
              <img
                src={imageSrc}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-background/10 group-hover:bg-transparent transition-colors duration-300 flex items-center justify-center">
                <div className="bg-background/60 px-4 py-2 rounded-full flex items-center gap-2 backdrop-blur-sm">
                  <ExternalLink size={16} className="text-accent" />
                  <span className="text-sm font-medium">View Project</span>
                </div>
              </div>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className="w-full max-w-4xl h-[80vh] p-0 overflow-hidden bg-card flex flex-col">
          <div className="flex-shrink-0">
            <img src={imageSrc} alt={title} className="w-full h-auto max-h-[50vh] object-cover" />
          </div>
          <ScrollArea className="flex-1 p-6">
            <h3 className="text-xl font-bold mb-3">{title}</h3>
            <div className="text-left">
              {formatDescription(description, bulletPoints)}
            </div>
          </ScrollArea>
        </DialogContent>
      </Dialog>

      {/* Project Details */}
      <div
        className={cn(
          "md:col-span-2 z-10",
          reverse ? "md:col-start-1" : "md:col-start-4"
        )}
      >
        <p className="text-accent mb-2 text-sm">Featured Project</p>
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <div className="glass-card p-4 rounded-xl mb-4 text-left">
          {formatDescription(description, bulletPoints)}
        </div>
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="text-sm text-foreground/60 bg-accent/10 px-3 py-1 rounded-full transition-all duration-300 hover:bg-accent/30 hover:text-foreground hover:shadow-[0_0_10px_rgba(0,153,175,0.5)] tech-badge"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground/70 hover:text-accent transition-colors"
          >
            <Github size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Backend Developer — Current Company",
      description:
        "As a backend developer, I led the development of critical features and system integrations.",
      bulletPoints: [
        "Built and deployed a flexible rating & review system with detailed analytics.",
        "Integrated Grafana, Elastic APM, and Metricbeat for full observability and monitoring.",
        "Automated WhatsApp/SMS workflows via Twilio, Zapier, and Meta WABA APIs.",
        "Optimized search and availability with Elasticsearch for faster and scalable results.",
        "Resolved Docker and infra crashes, cutting 4GB+ heap spikes and improving stability.",
        "Developed admin modules for managing reviews and real-time analytics dashboards.",
        "Used OpenAI APIs to auto-generate blogs and dynamic image content.",
        "Implemented WebSockets and cron jobs for live updates and background automation.",
        "Built a real-time chat dashboard linking clients with agents over WhatsApp.",
      ],
      technologies: [
        "Node.js",
        "Express",
        "MongoDB",
        "Docker",
        "Elasticsearch",
        "Web Sockets",
        "Grafana",
        "Elastic APM",
        "Metricbeat",
        "Twilio",
        "Zapier",
        "WABA",
        "Google Analytics",
        "OpenAI API",
        "AWS",
        "JavaScript",
        "Socket.IO",
        "Cron Jobs",
        "Admin Panels",
        "Backend Architecture",
      ],
      githubLink: "",
      demoLink: "",
      imageSrc: "/fulls/Backend.png",
    },
    {
      title: "E-Commerce Website",
      description:
        "Developed a fully functional e-commerce platform using Django and Python. This project includes essential features like user authentication, shopping cart, and order tracking. It also integrates secure session management and provides a simple, responsive UI built with Bootstrap. The backend is powered by MySQLite, ensuring lightweight yet effective database operations ideal for small-scale deployments.",
      technologies: [
        "Django",
        "Python",
        "MySQLite",
        "Bootstrap",
        "JavaScript",
        "HTML",
        "CSS",
      ],
      githubLink: "https://github.com/Dev-Tushar-sh/TKart-Ecommerce-Website",
      imageSrc: "/fulls/01.png",
    },
    {
      title: "Social Media Platform",
      description:
        "Built a mini social media web app that supports features like user registration, following other users, posting content, liking posts, and maintaining a personalized feed. This project was developed using Django and Python with PostgreSQL as the backend. It focuses on implementing relational database concepts and efficient data handling while maintaining user experience with proper session and state management.",
      technologies: [
        "Django",
        "Python",
        "PostgreSQL",
        "HTML",
        "CSS",
        "JavaScript",
      ],
      githubLink:
        "https://github.com/Dev-Tushar-sh/CosmoLinks-Social-Media-Website",
      imageSrc: "/fulls/02.png",
    },
    {
      title: "Movie Recommender System",
      description:
        "A content-based recommendation system that suggests movies based on the description and genres of previously liked films. Implemented using machine learning techniques and libraries like Scikit-learn and Pandas. The user interface is built with Streamlit, making it fast to prototype and demo the ML pipeline. This project demonstrates my ability to work with ML models and deploy them via a lightweight web app.",
      technologies: ["Python", "Pandas", "Scikit-learn", "Streamlit", "NLP"],
      githubLink: "https://github.com/Dev-Tushar-sh/Movies-Recommender-System",
      imageSrc: "/fulls/03.png",
    },
    {
      title: "Virtual AI Desktop Assistant (VAIDA)",
      description:
        "Built a Python-powered AI assistant capable of voice-based interaction and multitasking.",
      bulletPoints: [
        "Integrated speech recognition, text-to-speech, and natural language understanding using OpenAI's GPT APIs",
        "Supported voice commands for opening applications, websites, sending emails, and web searching",
        "Implemented features like language translation, creative content generation, and informative Q&A",
        "Used machine learning algorithms for facial recognition of known users",
        "Leveraged modules like pyttsx3, speech_recognition, wikipedia, pywhatkit, os, datetime, and pyautogui",
      ],
      technologies: [
        "Python",
        "OpenAI API",
        "pyttsx3",
        "speech_recognition",
        "pyautogui",
        "pywhatkit",
        "os",
        "datetime",
        "wikipedia",
        "Machine Learning",
        "Face Recognition",
      ],
      githubLink:
        "https://github.com/Dev-Tushar-sh/Virtual-AI-Desktop-Assistant",
      imageSrc: "/fulls/vaida.png",
    },
  ];

  return (
    <section id="projects" className="section-spacing px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-12 flex items-center gap-2">
          <span className="text-accent">03.</span> Work & Projects
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>

        <div className="space-y-20">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              githubLink={project.githubLink}
              imageSrc={project.imageSrc}
              reverse={index % 2 !== 0}
              index={index}
              bulletPoints={project.bulletPoints}
            />
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-foreground/70 mb-6">
            Interested in seeing more of my work?
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full hover:bg-accent/20 hover:text-accent"
          >
            <a
              href="https://github.com/dev-tushar-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Github size={18} />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
