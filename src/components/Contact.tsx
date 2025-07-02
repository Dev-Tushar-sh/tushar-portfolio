
import React from 'react';
import { Mail, Github, Linkedin, Phone } from 'lucide-react';

interface ContactCardProps {
  icon: React.ReactNode;
  title: string;
  value: string;
  href: string;
}

const ContactCard = ({ icon, title, value, href }: ContactCardProps) => {
  return (
    <a 
      href={href}
      target={href.startsWith('http') ? '_blank' : undefined}
      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
      className="flex items-center gap-4 glass-card p-6 rounded-xl animate-fade-in transition-all duration-300 hover:bg-accent/10 hover:border-accent/30 cursor-pointer group"
    >
      <div className="bg-accent/20 p-3 rounded-full group-hover:bg-accent/30 transition-colors">
        {icon}
      </div>
      <div>
        <h4 className="font-medium">{title}</h4>
        <span className="text-foreground/70 group-hover:text-accent transition-colors">
          {value}
        </span>
      </div>
    </a>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-spacing px-6 bg-secondary/5">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">04.</span> Contact
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h3 className="text-2xl font-semibold mb-4">Let's Connect</h3>
          <p className="text-foreground/70">
            I'm currently open to new opportunities and collaborations. Feel free to reach out through any of these channels!
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-3xl mx-auto">
          <ContactCard 
            icon={<Mail size={24} className="text-accent" />}
            title="Email"
            value="tusharsharma3216@gmail.com"
            href="mailto:tusharsharma3216@gmail.com"
          />
          
          <ContactCard 
            icon={<Github size={24} className="text-accent" />}
            title="GitHub"
            value="github.com/dev-tushar-sh"
            href="https://github.com/dev-tushar-sh"
          />
          
          <ContactCard 
            icon={<Linkedin size={24} className="text-accent" />}
            title="LinkedIn"
            value="linkedin.com/in/tushar-sharma"
            href="https://linkedin.com/in/tushar-sharma-835ab31b8"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
