import {
  Bot,
  Brain,
  Calendar,
  Code,
  Cpu,
  Heart,
  Lightbulb,
  MapPin,
  Rocket,
  Users,
  Zap,
} from "lucide-react";

export const About = () => {
  // const [activeCard, setActiveCard] = useState<number | null>(null);

  const bentoItems = [
    {
      id: 1,
      title: "13+ Years Experience",
      subtitle: "IT Professional",
      icon: Calendar,
      description:
        "Over a decade of experience in technology, evolving from systems to frontend development",
      gradient: "from-blue-500 to-cyan-500",
      size: "col-span-1 row-span-1",
      glow: "glow-primary",
    },
    {
      id: 2,
      title: "Frontend Specialist",
      subtitle: "Mobile & Web",
      icon: Code,
      description:
        "Specialized in React, NextJS, and React Native development with modern frameworks",
      gradient: "from-purple-500 to-pink-500",
      size: "col-span-2 row-span-1",
      glow: "glow-secondary",
    },
    {
      id: 3,
      title: "AI Development",
      subtitle: "Learning & Exploring",
      icon: Brain,
      description:
        "Exploring AI integration, developing with MCPs (Model Context Protocol), and building intelligent agents",
      gradient: "from-emerald-500 to-teal-500",
      size: "col-span-1 row-span-2",
      glow: "glow-success",
    },
    {
      id: 4,
      title: "6 Companies",
      subtitle: "Diverse Industries",
      icon: Users,
      description:
        "Worked across fintech, digital marketing, events, education, and engineering sectors",
      gradient: "from-orange-500 to-red-500",
      size: "col-span-1 row-span-1",
      glow: "glow-warning",
    },
    {
      id: 5,
      title: "São Paulo, Brazil",
      subtitle: "Remote Friendly",
      icon: MapPin,
      description:
        "Based in São Paulo, working with teams globally and embracing remote collaboration",
      gradient: "from-indigo-500 to-blue-500",
      size: "col-span-1 row-span-1",
      glow: "glow-accent",
    },
    {
      id: 6,
      title: "Innovation Driven",
      subtitle: "Always Learning",
      icon: Lightbulb,
      description:
        "Passionate about exploring new technologies and pushing the boundaries of web development",
      gradient: "from-yellow-500 to-orange-500",
      size: "col-span-2 row-span-1",
      glow: "glow-warning",
    },
  ];

  const stats = [
    { label: "Years in IT", value: "13+", icon: Calendar },
    { label: "Frontend Focus", value: "3+", icon: Code },
    { label: "Projects Delivered", value: "20+", icon: Rocket },
    { label: "AI Learning", value: "2024", icon: Brain },
  ];

  return (
    <section id="about" className="py-20 relative overflow-hidden noise-bg">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="holographic">About</span>{" "}
            <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate frontend developer with over a decade of IT experience,
            specializing in creating beautiful, functional, and innovative web
            and mobile applications. Currently exploring the exciting world of
            AI development and intelligent systems.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 scroll-reveal">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass text-center p-6 rounded-2xl group relative overflow-hidden border border-white/10 hover:border-blue-400/30 transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <stat.icon className="w-8 h-8 mx-auto mb-3 text-blue-400 group-hover:scale-105 transition-transform duration-300" />
              <div className="text-3xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 scroll-reveal">
          {bentoItems.map((item, index) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/20 p-6 rounded-xl transition-all duration-300 hover:bg-white/8 group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Content */}
              <div className="h-full flex flex-col">
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`p-3 rounded-lg bg-gradient-to-br ${item.gradient} flex-shrink-0`}
                  >
                    <item.icon className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold mb-1 text-white">
                      {item.title}
                    </h3>
                    <p className="text-blue-400 text-sm font-medium">
                      {item.subtitle}
                    </p>
                  </div>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* AI Learning Section */}
        <div className="mt-20 scroll-reveal">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border border-emerald-400 rounded-full" />
              <div className="absolute top-20 right-20 w-16 h-16 border border-teal-400 rounded-full" />
              <div className="absolute bottom-20 left-20 w-12 h-12 border border-cyan-400 rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-2xl shadow-lg glow-success">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    AI Development Journey
                  </h3>
                  <p className="text-emerald-400">
                    Exploring the Future of Intelligent Systems
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8 mb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Bot className="w-4 h-4 text-emerald-400" />
                        AI Agents Development
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Learning to build intelligent agents that can automate
                        tasks and provide smart assistance.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-teal-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Cpu className="w-4 h-4 text-teal-400" />
                        Model Context Protocol (MCP)
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Exploring MCP for building more efficient and
                        context-aware AI applications.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Brain className="w-4 h-4 text-cyan-400" />
                        AI Integration
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Integrating AI capabilities into web applications for
                        enhanced user experiences.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Zap className="w-4 h-4 text-purple-400" />
                        Vibe Coding
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Embracing intuitive, flow-state programming where
                        creativity meets code, building with passion and natural
                        rhythm.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2 flex items-center gap-2">
                        <Lightbulb className="w-4 h-4 text-blue-400" />
                        Continuous Learning
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Staying updated with the latest AI trends and
                        experimenting with new technologies.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* AI Learning Status */}
              <div className="bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                  <span className="text-emerald-400 font-semibold">
                    Currently Learning
                  </span>
                </div>
                <p className="text-gray-300 text-sm mb-4">
                  While I'm not yet a professional in AI development, I'm
                  actively learning and experimenting with:
                </p>
                <div className="flex flex-wrap gap-3">
                  {[
                    "AI Agents",
                    "MCPs",
                    "Prompt Engineering",
                    "RAG Systems",
                    "Backend",
                    "Cloud",
                    "Vibe Coding",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-xs rounded-full border border-emerald-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Story Section */}
        <div className="mt-20 scroll-reveal">
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 p-8 md:p-12 rounded-2xl relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-10 left-10 w-20 h-20 border border-blue-400 rounded-full" />
              <div className="absolute top-20 right-20 w-16 h-16 border border-purple-400 rounded-full" />
              <div className="absolute bottom-20 left-20 w-12 h-12 border border-cyan-400 rounded-full" />
            </div>

            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-3xl font-bold gradient-text">
                    My Journey
                  </h3>
                  <p className="text-blue-400">
                    From IT Professional to Frontend Developer & AI Enthusiast
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Started in IT (2010)
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Began my technology journey with a passion for
                        problem-solving and innovation.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-purple-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Frontend Transition (2021)
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Discovered my passion for frontend development and user
                        experience design.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        Specialization Focus
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Specialized in React, NextJS, and React Native
                        development.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-2 h-2 bg-emerald-400 rounded-full mt-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        AI Exploration (2024)
                      </h4>
                      <p className="text-gray-300 text-sm">
                        Started exploring AI development, agents, and modern AI
                        integration patterns.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      Let's Work Together
                    </h4>
                    <p className="text-gray-300">
                      Ready to bring your ideas to life with modern technology
                      and AI.
                    </p>
                  </div>
                  <a href="#contact" className="btn-glow group">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5" />
                      <span>Start a Project</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="floating absolute top-1/4 left-10 w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" />
        <div className="floating-delayed absolute top-1/2 right-20 w-20 h-20 bg-gradient-to-br from-purple-500/15 to-cyan-500/15 rounded-full blur-2xl" />
        <div className="floating-slow absolute bottom-1/4 left-1/3 w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-lg" />
      </div>
    </section>
  );
};
