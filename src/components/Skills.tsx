
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
      logoUrl: "public/logos/cpp.svg"
    },
    { 
      name: "JavaScript", 
      logoUrl: "public/logos/javascript.svg"
    },
    { 
      name: "Python", 
      logoUrl: "public/logos/python.svg"
    },
    { 
      name: "Go", 
      logoUrl: "public/logos/go.svg"
    },
  ];

  const csFundamentals = [
    { 
      name: "Data Structures", 
      logoUrl: "public/logos/data-structures.svg"
    },
    { 
      name: "Object Oriented Programming", 
      logoUrl: "public/logos/oop.svg"
    },
    { 
      name: "Database Management", 
      logoUrl: "public/logos/database.svg"
    },
    { 
      name: "Operating System", 
      logoUrl: "public/logos/linux.svg"
    },
  ];

  const backendSkills = [
    { 
      name: "Node.js", 
      logoUrl: "public/logos/nodejs.svg"
    },
    { 
      name: "Django", 
      logoUrl: "public/logos/django.svg"
    },
    { 
      name: "Flask", 
      logoUrl: "public/logos/flask.svg"
    },
  ];

  const databases = [
    { 
      name: "MongoDB", 
      logoUrl: "public/logos/mongodb.svg"
    },
    { 
      name: "MySQL", 
      logoUrl: "public/logos/mysql.svg"
    },
    { 
      name: "PostgreSQL", 
      logoUrl: "public/logos/postgresql.svg"
    },
    { 
      name: "SQLite", 
      logoUrl: "public/logos/sqlite.svg"
    },
    { 
      name: "Elasticsearch", 
      logoUrl: "public/logos/elasticsearch.svg"
    },
  ];

  const tools = [
    { 
      name: "Git", 
      logoUrl: "public/logos/git.svg"
    },
    { 
      name: "GitHub", 
      logoUrl: "public/logos/github.svg"
    },
    { 
      name: "Postman", 
      logoUrl: "public/logos/postman.svg"
    },
    { 
      name: "Termius", 
      logoUrl: "public/logos/termius.svg"
    },
    { 
      name: "VS Code", 
      logoUrl: "public/logos/vscode.svg"
    },
  ];

  const integrations = [
    { 
      name: "Twilio", 
      logoUrl: "public/logos/twilio.svg"
    },
    { 
      name: "Zapier", 
      logoUrl: "public/logos/zapier.svg"
    },
  ];

  const ml = [
    { 
      name: "OpenAI", 
      logoUrl: "public/logos/openai.svg"
    },
    { 
      name: "Machine Learning", 
      logoUrl: "public/logos/machine-learning.svg"
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
