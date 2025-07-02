import { ArrowDown, Code2, Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const techBadges = [
    { name: "React", icon: "⚛️", glow: "glow-accent" },
    { name: "Next.js", icon: "🔷", glow: "glow-primary" },
    { name: "TypeScript", icon: "📘", glow: "glow-secondary" },
    { name: "React Native", icon: "📱", glow: "glow-accent" },
    { name: "AWS", icon: "☁️", glow: "glow-warning" },
    { name: "Tailwind", icon: "🎨", glow: "glow-primary" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 md:pt-0"
    >
      {/* Simple Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-xl" />
        <div className="floating-delayed absolute top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-full blur-2xl" />
        <div className="floating-slow absolute bottom-32 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-lg" />
      </div>

      <div className="container mx-auto px-6 relative z-10 py-8 md:py-0">
        <div className="max-w-4xl mx-auto text-center">
          {/* Profile Image */}
          <div
            className={`relative lg:mt-12 mb-4 md:mb-6 transform transition-all duration-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="relative inline-block">
              <div className="w-32 h-32 md:w-36 md:h-36 lg:w-40 lg:h-40 mx-auto rounded-full overflow-hidden border-4 border-white/20 shadow-2xl">
                <img
                  src="/profile.jpg"
                  alt="Hudson Salles"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-400/20 to-purple-400/20 animate-pulse" />
            </div>
          </div>

          {/* Name and Title */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-300 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Hudson
              </span>{" "}
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Salles
              </span>
            </h1>
            <div className="text-lg md:text-xl text-gray-300 mb-4">
              <span className="text-blue-400 font-semibold">
                Frontend Developer
              </span>{" "}
              • Mobile & Web Specialist
            </div>
          </div>

          {/* Description */}
          <div
            className={`mb-8 transform transition-all duration-1000 delay-500 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Passionate about creating beautiful, functional applications with{" "}
              <span className="text-blue-400 font-semibold">React</span>,{" "}
              <span className="text-purple-400 font-semibold">Next.js</span>,
              and{" "}
              <span className="text-cyan-400 font-semibold">React Native</span>.
              Currently exploring the exciting world of{" "}
              <span className="text-emerald-400 font-semibold">
                AI development
              </span>
              .
            </p>
          </div>

          {/* Tech Badges */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transform transition-all duration-1000 delay-700 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            {techBadges.map((tech, index) => (
              <div
                key={tech.name}
                className="flex items-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-3 py-1.5 hover:bg-white/10 hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${800 + index * 100}ms` }}
              >
                <span className="text-sm">{tech.icon}</span>
                <span className="text-gray-300 font-medium text-sm">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex justify-center items-center mb-12 transform transition-all duration-1000 delay-1000 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="#projects"
              className="group bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2 text-sm"
            >
              <Code2 className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div
            className={`flex justify-center gap-6 mb-12 transform transition-all duration-1000 delay-1200 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="https://github.com/hudsonsalles"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-6 h-6 text-gray-300 group-hover:text-white transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com/in/hudsonsalles"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-6 h-6 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="mailto:hudsonsalless@gmail.com"
              className="group p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full hover:bg-white/10 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-6 h-6 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className={`transform transition-all duration-1000 delay-1400 ${
              isLoaded
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <a
              href="#about"
              className="group inline-flex flex-col items-center text-gray-400 hover:text-white transition-colors duration-300"
            >
              <span className="text-sm mb-2 group-hover:mb-3 transition-all duration-300">
                Scroll to explore
              </span>
              <ArrowDown className="w-5 h-5 animate-bounce group-hover:scale-110 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
