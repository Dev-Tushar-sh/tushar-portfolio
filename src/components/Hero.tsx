
import React, { useEffect, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a backend developer who builds scalable systems and thrives on solving complex problems with code.";
  
  useEffect(() => {
    setIsVisible(true);
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setTypedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 30); // Faster typing speed
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 px-6">
      <div className="container mx-auto">
        <div className={`transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-accent mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>Hi, my name is</p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
            Tushar Sharma
          </h1>
          <h2 className="text-xl md:text-2xl lg:text-4xl font-bold text-foreground/80 mb-6 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            I build the logic behind the web<br />
            - APIs, systems, and intelligence.
          </h2>
          <div className="mb-8 animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <p className="text-foreground/70 text-lg">
              {typedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          <div className="flex gap-4 mb-12 animate-fade-in" style={{ animationDelay: '1s' }}>
            <Button asChild variant="outline" className="rounded-full">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button asChild variant="default" className="bg-accent hover:bg-accent/80 text-accent-foreground rounded-full">
              <a href="#projects">View Work & Projects</a>
            </Button>
          </div>
          <div className="flex gap-6 animate-fade-in" style={{ animationDelay: '1.2s' }}>
            <a href="https://github.com/dev-tushar-sh" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
              <Github size={24} />
            </a>
            <a href="https://linkedin.com/in/tushar-sharma-835ab31b8" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-accent transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:tusharsharma3216@gmail.com" className="text-foreground/70 hover:text-accent transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-float">
          <a href="#about" className="flex items-center justify-center text-foreground/50 hover:text-accent transition-colors">
            <ArrowDown size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
