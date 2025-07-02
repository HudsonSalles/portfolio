import {
  Bot,
  Brain,
  Cloud,
  Code,
  Cpu,
  Globe,
  Smartphone,
  Sparkles,
  Star,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";

export const Skills = () => {
  const [scrambledText, setScrambledText] = useState<string>("");
  const [activeSkill, setActiveSkill] = useState<number | null>(null);

  // Text scramble effect
  const scrambleText = (text: string) => {
    const chars = "!@#$%^&*()_+-=[]{}|;:,.<>?";
    const textArray = text.split("");
    let iterations = 0;

    const interval = setInterval(() => {
      setScrambledText(
        textArray
          .map((_, index) => {
            if (index < iterations) {
              return text[index];
            }
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }

      iterations += 1 / 3;
    }, 30);
  };

  useEffect(() => {
    scrambleText("TECHNICAL SKILLS");
  }, []);

  const skills = [
    {
      category: "Frontend",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      glow: "glow-primary",
      skills: [
        { name: "ReactJS", level: 95, icon: "⚛️" },
        { name: "NextJS", level: 90, icon: "🔷" },
        { name: "TypeScript", level: 85, icon: "📘" },
        { name: "Tailwind CSS", level: 95, icon: "🎨" },
        { name: "JavaScript", level: 95, icon: "💛" },
      ],
    },
    {
      category: "Mobile",
      icon: Smartphone,
      color: "from-purple-500 to-pink-500",
      glow: "glow-secondary",
      skills: [
        { name: "React Native", level: 90, icon: "📱" },
        { name: "Expo", level: 85, icon: "🚀" },
        { name: "iOS Development", level: 75, icon: "🍎" },
        { name: "Android Development", level: 80, icon: "🤖" },
      ],
    },
    {
      category: "AI & Emerging Tech",
      icon: Brain,
      color: "from-emerald-500 to-teal-500",
      glow: "glow-success",
      skills: [
        { name: "AI Agents", level: 40, icon: "🤖" },
        { name: "MCPs", level: 35, icon: "🔗" },
        { name: "Prompt Engineering", level: 45, icon: "💭" },
      ],
    },
    {
      category: "Backend & Cloud",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      glow: "glow-warning",
      skills: [
        { name: "AWS", level: 35, icon: "☁️" },
        { name: "GraphQL", level: 40, icon: "🔗" },
        { name: "REST APIs", level: 45, icon: "🌐" },
        { name: "Node.js", level: 30, icon: "💚" },
      ],
    },
    {
      category: "Tools & Workflow",
      icon: Cpu,
      color: "from-gray-500 to-slate-500",
      glow: "glow-accent",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "🔧" },
        { name: "Figma", level: 85, icon: "🎯" },
        { name: "UI/UX Design", level: 80, icon: "🎨" },
        { name: "VS Code", level: 95, icon: "💻" },
        { name: "npm/yarn", level: 85, icon: "📦" },
      ],
    },
  ];

  const techStack = [
    { name: "React", icon: "⚛️", category: "Frontend" },
    { name: "Next.js", icon: "🔷", category: "Framework" },
    { name: "TypeScript", icon: "📘", category: "Language" },
    { name: "React Native", icon: "📱", category: "Mobile" },
    { name: "Tailwind", icon: "🎨", category: "Styling" },
    { name: "AWS", icon: "☁️", category: "Cloud" },
    { name: "GraphQL", icon: "🔗", category: "API" },
    { name: "Git", icon: "🔧", category: "Version Control" },
    { name: "Figma", icon: "🎯", category: "Design" },
    { name: "UI/UX", icon: "🎨", category: "Design" },
    { name: "AI Agents", icon: "🤖", category: "AI", isNew: true },
    { name: "MCPs", icon: "🔗", category: "AI", isNew: true },
  ];

  return (
    <section id="skills" className="py-20 relative overflow-hidden noise-bg">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-800" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="floating absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl" />
        <div className="floating-delayed absolute top-1/2 right-20 w-40 h-40 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />
        <div className="floating-slow absolute bottom-20 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="mb-6">
            <h2 className="text-5xl md:text-6xl font-bold mb-4">
              <span className="holographic">
                {scrambledText || "TECHNICAL SKILLS"}
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-6 h-6 text-yellow-400 animate-pulse" />
              <span className="text-xl text-blue-400">
                Expertise & Technologies
              </span>
              <Zap className="w-6 h-6 text-purple-400 animate-pulse" />
            </div>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about modern technologies and constantly evolving
            skillset to deliver cutting-edge solutions. Currently exploring AI
            development and intelligent systems.
          </p>
        </div>

        {/* Tech Stack Cloud */}
        <div className="mb-20 scroll-reveal">
          <h3 className="text-3xl font-bold text-center mb-12 gradient-text">
            Technology Stack
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <div
                key={tech.name}
                className={`glass px-6 py-3 rounded-full ${
                  tech.isNew ? "glow-success" : "glow-primary"
                } micro-bounce group cursor-pointer relative overflow-hidden`}
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => scrambleText(tech.name.toUpperCase())}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${
                    tech.isNew
                      ? "from-emerald-600/20 to-teal-600/20"
                      : "from-blue-600/20 to-purple-600/20"
                  } opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="flex items-center gap-3 relative z-10">
                  <span className="text-2xl">{tech.icon}</span>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-white">
                        {tech.name}
                      </span>
                      {tech.isNew && (
                        <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                          Learning
                        </span>
                      )}
                    </div>
                    <div
                      className={`text-xs ${
                        tech.isNew ? "text-emerald-400" : "text-blue-400"
                      }`}
                    >
                      {tech.category}
                    </div>
                  </div>
                </div>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 scroll-reveal">
          {skills.map((skillGroup, groupIndex) => (
            <div
              key={skillGroup.category}
              className="glass p-8 rounded-3xl natural-shadow relative overflow-hidden group"
              style={{ animationDelay: `${groupIndex * 200}ms` }}
              onMouseEnter={() => setActiveSkill(groupIndex)}
              onMouseLeave={() => setActiveSkill(null)}
            >
              {/* Background Gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
              />

              {/* Header */}
              <div className="flex items-center gap-4 mb-8 relative z-10">
                <div
                  className={`p-4 bg-gradient-to-br ${skillGroup.color} rounded-2xl shadow-lg ${skillGroup.glow}`}
                >
                  <skillGroup.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">
                    {skillGroup.category}
                  </h3>
                  <div className="flex items-center gap-2">
                    <Star className="w-4 h-4 text-yellow-400" />
                    <span className="text-sm text-gray-400">
                      {skillGroup.category === "AI & Emerging Tech" ||
                      skillGroup.category === "Backend & Cloud"
                        ? "Learning Level"
                        : "Professional Level"}
                    </span>
                  </div>
                </div>
                {activeSkill === groupIndex && (
                  <div
                    className={`ml-auto w-3 h-3 ${
                      skillGroup.category === "AI & Emerging Tech" ||
                      skillGroup.category === "Backend & Cloud"
                        ? "bg-emerald-400"
                        : "bg-green-400"
                    } rounded-full animate-pulse`}
                  />
                )}
              </div>

              {/* Skills List */}
              <div className="space-y-6 relative z-10">
                {skillGroup.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <span className="text-xl">{skill.icon}</span>
                        <span className="font-semibold text-white">
                          {skill.name}
                        </span>
                        {(skillGroup.category === "AI & Emerging Tech" ||
                          skillGroup.category === "Backend & Cloud") && (
                          <span className="px-2 py-0.5 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30">
                            Learning
                          </span>
                        )}
                      </div>
                      <span
                        className={`text-sm font-bold ${
                          skillGroup.category === "AI & Emerging Tech" ||
                          skillGroup.category === "Backend & Cloud"
                            ? "text-emerald-400"
                            : "text-blue-400"
                        }`}
                      >
                        {skill.level}%
                      </span>
                    </div>

                    {/* Progress Bar */}
                    <div className="relative">
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${skillGroup.color} rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                          style={{
                            width: `${skill.level}%`,
                            animationDelay: `${
                              groupIndex * 200 + skillIndex * 100
                            }ms`,
                          }}
                        >
                          {/* Shine Effect */}
                          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover/skill:translate-x-[100%] transition-transform duration-1000" />
                        </div>
                      </div>

                      {/* Glow Effect */}
                      <div
                        className={`absolute top-0 h-2 bg-gradient-to-r ${skillGroup.color} rounded-full opacity-50 blur-sm transition-all duration-1000`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>

              {/* Special Note for AI Skills */}
              {skillGroup.category === "AI & Emerging Tech" && (
                <div className="mt-6 p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20 relative z-10">
                  <div className="flex items-center gap-2 mb-2">
                    <Bot className="w-4 h-4 text-emerald-400" />
                    <span className="text-sm font-semibold text-emerald-400">
                      Currently Exploring
                    </span>
                  </div>
                  <p className="text-xs text-gray-300">
                    Actively learning and experimenting with AI technologies.
                    These skills are in development as I explore the future of
                    intelligent applications.
                  </p>
                </div>
              )}

              {/* Decorative Elements */}
              <div className="absolute top-4 right-4 opacity-10">
                <div className="w-20 h-20 border border-white rounded-full" />
              </div>
              <div className="absolute bottom-4 left-4 opacity-5">
                <div className="w-16 h-16 border border-white rounded-full" />
              </div>

              {/* Hover Shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
            </div>
          ))}
        </div>

        {/* AI Learning Highlight */}
        <div className="mt-20 scroll-reveal">
          <div className="glass p-8 rounded-3xl natural-shadow relative overflow-hidden">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg glow-success">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold gradient-text">
                  AI Development Focus
                </h3>
                <p className="text-emerald-400">
                  Exploring the Future of Technology
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6 mb-6">
              <div className="text-center p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <Bot className="w-8 h-8 mx-auto mb-2 text-emerald-400" />
                <h4 className="font-semibold text-white mb-1">AI Agents</h4>
                <p className="text-xs text-gray-300">
                  Building intelligent automation
                </p>
              </div>
              <div className="text-center p-4 bg-teal-500/10 rounded-xl border border-teal-500/20">
                <Cpu className="w-8 h-8 mx-auto mb-2 text-teal-400" />
                <h4 className="font-semibold text-white mb-1">MCPs</h4>
                <p className="text-xs text-gray-300">
                  Model Context Protocol development
                </p>
              </div>
              <div className="text-center p-4 bg-cyan-500/10 rounded-xl border border-cyan-500/20">
                <Brain className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
                <h4 className="font-semibold text-white mb-1">Integration</h4>
                <p className="text-xs text-gray-300">
                  AI-powered web applications
                </p>
              </div>
            </div>

            <p className="text-gray-300 text-sm text-center">
              While I'm still learning these technologies, I'm excited about the
              potential of AI to transform how we build and interact with
              applications. I'm actively experimenting and building projects to
              deepen my understanding.
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center scroll-reveal">
          <div className="glass p-8 rounded-3xl natural-shadow inline-block">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <div className="text-left">
                <h3 className="text-xl font-bold gradient-text">
                  Ready to Build Something Amazing?
                </h3>
                <p className="text-gray-400">
                  Let's turn your ideas into reality with modern technology and
                  AI
                </p>
              </div>
            </div>
            <a href="#projects" className="btn-glow group">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5" />
                <span>View My Work</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Particle System */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `floating ${
                4 + Math.random() * 4
              }s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </section>
  );
};
