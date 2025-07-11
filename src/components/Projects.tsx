import { ExternalLink } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Moniai - AI-Powered Digital Solutions",
      description:
        "Frontend development for Moniai, an innovative AI-powered solutions provider. Built with Next.js and React, utilizing AWS infrastructure including S3 and CloudFront for scalable content delivery. Implemented comprehensive analytics with Google Analytics and Google Tag Manager.",
      image: "/moniai.jpg",
      technologies: [
        "React",
        "Next.js",
        "AWS",
        "S3",
        "CloudFront",
        "Tailwind",
        "Google Analytics",
        "Google Tag Manager",
      ],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://www.moniai.com.br/",
      company: "Moniai",
    },
    {
      id: 2,
      title: "LP Digital - Influencer Platform",
      description:
        "Frontend development for LaunchPad Digital, an innovative influencer marketing platform. Built with NextJS and modern React technologies to create scalable solutions for digital marketing campaigns.",
      image: "/digital.jpg",
      technologies: ["NextJS", "TypeScript", "GraphQL", "AWS"],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://lpdigital.ai/",
      company: "LP Digital",
    },
    {
      id: 3,
      title: "Liqi - Digital Assets Platform",
      description:
        "Frontend development for Liqi, a comprehensive digital assets and investment platform. Created responsive interfaces with React and styled components, focusing on user experience and financial data visualization.",
      image: "/liqi.jpg",
      technologies: ["ReactJS", "Styled Components", "JavaScript", "AWS"],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://www.liqi.com.br/",
      company: "Liqi",
    },
    {
      id: 4,
      title: "Liqi Crypto Wallet & Trading App",
      description:
        "Mobile application development for Liqi's cryptocurrency wallet and trading platform. Built with React Native and Expo, featuring secure transactions, real-time market data, and intuitive trading interfaces. (No longer available)",
      image: "/liqi.jpg",
      technologies: ["React Native", "Expo", "TypeScript", "Crypto APIs"],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "#",
      company: "Liqi",
      status: "discontinued",
    },
    {
      id: 5,
      title: "RSTcom - Corporate Events Platform",
      description:
        "Frontend development for RSTcom, a specialized corporate events management platform. Created solutions for event planning, execution, and management with focus on technology and innovation.",
      image: "/rstcom.jpg",
      technologies: ["ReactJS", "CSS", "JavaScript", "Event Management"],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://rstcom.com.br/",
      company: "RSTcom",
    },
    {
      id: 6,
      title: "4YourLive - Digital Events Platform",
      description:
        "Frontend development for 4YourLive, a comprehensive digital events platform. Built interactive features for webinars, hybrid events, and virtual conferences with 3D environments and real-time streaming capabilities.",
      image: "/4yourlive.jpg",
      technologies: ["ReactJS", "3D Graphics", "Streaming APIs", "WebRTC"],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://4yourlive.com.br/",
      company: "4YourLive",
    },
    {
      id: 7,
      title: "English with Labelle - Learning Platform",
      description:
        "Currently developing a comprehensive educational platform with separate panels for students, teachers, and administrators. Built with modern AWS services including Cognito for authentication and AppSync for real-time data synchronization.",
      image: "/english-with-labelle.jpg",
      technologies: [
        "ReactJS",
        "TypeScript",
        "AWS Cognito",
        "AWS AppSync",
        "Tailwind",
        "Google Analytics",
        "Google Tag Manager",
      ],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://www.englishwithlabelle.com/",
      company: "English with Labelle",
      status: "in-development",
    },
    {
      id: 8,
      title: "Orav Projetos e Engenharia - Corporate Website",
      description:
        "WordPress development for Orav Projetos e Engenharia, a construction and engineering company founded in 2013. Implemented Google Analytics and Google Tags for comprehensive tracking and analytics. Features include project management, automation systems, and construction services showcase.",
      image: "/orav-engenharia.jpg",
      technologies: [
        "WordPress",
        "Google Analytics",
        "Google Tags",
        "PHP",
        "JavaScript",
        "CSS",
      ],
      githubUrl: "https://github.com/hudsonsalles",
      liveUrl: "https://oravengenharia.com.br/",
      company: "Orav Engenharia",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-slate-800 via-gray-900 to-slate-800 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-900 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden group hover:scale-105 hover:-translate-y-2 border border-gray-700"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="p-6 relative">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-900 text-primary-200 text-xs rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.liveUrl !== "#" && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 inline-flex items-center space-x-1 text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    <span className="text-sm font-medium">Visit</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                {project.liveUrl === "#" && (
                  <div className="absolute bottom-4 right-4 text-gray-500 text-sm">
                    Private Project
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
