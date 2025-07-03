
import React from "react";

interface SkillLogoProps {
  name: string;
  logoUrl: string;
  index: number;
}

const SkillLogo: React.FC<SkillLogoProps> = ({ name, logoUrl, index }) => {
  return (
    <div
      className="animate-fade-in hover:scale-110 transition-transform duration-300 flex flex-col items-center justify-center"
      style={{ animationDelay: `${0.1 * index}s` }}
    >
      <img
        src={logoUrl}
        alt={`${name} logo`}
        className="w-24 h-24 object-contain mb-2"
        onError={(e) => {
          e.currentTarget.src = `https://ui-avatars.com/api/?name=${name.charAt(0)}&background=0ea5e9&color=ffffff&size=96`;
        }}
      />
      <span className="text-sm text-center font-medium text-foreground/80">{name}</span>
    </div>
  );
};

const Skills = () => {
  const programmingLanguages = [
    { 
      name: "C++", 
      logoUrl: "/logos/cpp.svg"
    },
    { 
      name: "JavaScript", 
      logoUrl: "/logos/javascript.svg"
    },
    { 
      name: "Python", 
      logoUrl: "/logos/python.svg"
    },
    { 
      name: "Go", 
      logoUrl: "/logos/go.svg"
    },
  ];

  const csFundamentals = [
    { 
      name: "Data Structures", 
      logoUrl: "/logos/data-structures.svg"
    },
    { 
      name: "Object Oriented Programming", 
      logoUrl: "/logos/oop.svg"
    },
    { 
      name: "Database Management", 
      logoUrl: "/logos/database.svg"
    },
    { 
      name: "Operating System", 
      logoUrl: "/logos/linux.svg"
    },
  ];

  const backendSkills = [
    { 
      name: "Node.js", 
      logoUrl: "/logos/nodejs.svg"
    },
    { 
      name: "Django", 
      logoUrl: "/logos/django.svg"
    },
    { 
      name: "Flask", 
      logoUrl: "/logos/flask.svg"
    },
  ];

  const databases = [
    { 
      name: "MongoDB", 
      logoUrl: "/logos/mongodb.svg"
    },
    { 
      name: "MySQL", 
      logoUrl: "/logos/mysql.svg"
    },
    { 
      name: "PostgreSQL", 
      logoUrl: "/logos/postgresql.svg"
    },
    { 
      name: "SQLite", 
      logoUrl: "/logos/sqlite.svg"
    },
    { 
      name: "Elasticsearch", 
      logoUrl: "/logos/elasticsearch.svg"
    },
  ];

  const tools = [
    { 
      name: "Git", 
      logoUrl: "/logos/git.svg"
    },
    { 
      name: "GitHub", 
      logoUrl: "/logos/github.svg"
    },
    { 
      name: "Postman", 
      logoUrl: "/logos/postman.svg"
    },
    { 
      name: "Termius", 
      logoUrl: "/logos/termius.svg"
    },
    { 
      name: "VS Code", 
      logoUrl: "/logos/vscode.svg"
    },
  ];

  const integrations = [
    { 
      name: "Twilio", 
      logoUrl: "/logos/twilio.svg"
    },
    { 
      name: "Zapier", 
      logoUrl: "/logos/zapier.svg"
    },
  ];

  const ml = [
    { 
      name: "OpenAI", 
      logoUrl: "/logos/openai.svg"
    },
    { 
      name: "Machine Learning", 
      logoUrl: "/logos/machine-learning.svg"
    },
  ];

  return (
    <section id="skills" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">02.</span> Skills
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>

        <div className="grid gap-12">
          {[
            { title: "Programming Languages", data: programmingLanguages },
            { title: "CS Fundamentals", data: csFundamentals },
            { title: "Backend Development", data: backendSkills },
            { title: "Databases", data: databases },
            { title: "AI Solutions & Integrations", data: ml },
            { title: "Tools", data: tools },
            { title: "Integrations", data: integrations },
          ].map((section, sectionIndex) => (
            <div key={section.title}>
              <h3 className="text-xl font-semibold mb-6 text-accent">
                {section.title}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
                {section.data.map((skill, index) => (
                  <SkillLogo
                    key={skill.name}
                    name={skill.name}
                    logoUrl={skill.logoUrl}
                    index={index + sectionIndex * 10}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
