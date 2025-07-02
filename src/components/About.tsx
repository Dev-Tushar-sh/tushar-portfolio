import React from "react";

const About = () => {
  return (
    <section id="about" className="sm:p-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-8 flex items-center gap-2">
          <span className="text-accent">01.</span> About Me
          <div className="h-px bg-foreground/20 flex-grow ml-4"></div>
        </h2>

        <div className="flex flex-col-reverse md:flex-row gap-8 md:gap-4 xl:gap-10">
          <div className="w-full md:w-3/5 lg:w-1/2 space-y-4">
            <p className="text-foreground/80 text-justify sm:text-start">
              Hey, I’m Tushar — a backend engineer with a deep interest in
              system design, algorithms, and machine learning.
            </p>
            <p className="text-foreground/80 text-justify sm:text-start">
              My journey started in college, where I got obsessed with breaking
              down problems and building reliable systems to solve them. Since
              then, I've been focused on crafting performant APIs, working with
              databases, and scaling backend logic — all while sharpening my DSA
              skills like a maniac.
            </p>
            <p className="text-foreground/80 text-justify sm:text-start">
              I'm passionate about clean architecture, efficient code, and
              solving real-world problems that require more than just plugging
              in libraries. When I’m not coding, I’m either exploring ML/AI
              models, diving into new tech, or solving problems on platforms
              like LeetCode.
            </p>
            <p className="text-foreground/80 text-justify sm:text-start">
              I’m all about learning fast, building right, and pushing
              boundaries — both in tech and in myself.
            </p>
          </div>

          {/* <div className="w-full md:w-2/5 lg:w-1/2 relative group flex justify-center xl:items-center">
            <div className="relative z-10 overflow-hidden rounded-md w-3/4 md:w-full lg:w-3/4">
              <div className="flex justify-center overflow-hidden rounded-md">
                <img
                  src="/Chibi Tushar.png"
                  alt="Tushar Sharma"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>  */}
          <div className="w-full md:w-2/5 lg:w-1/2 relative group flex justify-center xl:items-center">
            {/* <div className="flex justify-center overflow-hidden rounded-md [filter:drop-shadow(8px_8px_12px_hsl(180_100%_35%))]"> */}
            <div className="relative z-10 overflow-hidden rounded-md w-3/4 md:w-full lg:w-3/4">
              <div className="flex justify-center overflow-hidden rounded-md [filter:drop-shadow(8px_8px_12px_#66d1d1)]">
                <img
                  src="/Chibi Tushar.png"
                  alt="Tushar Sharma"
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
