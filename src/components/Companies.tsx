export const Companies = () => {
  const companies = [
    {
      name: "Moniai",
      description: "AI-Powered Digital Solutions",
      image: "/moniai.jpg",
      url: "https://www.moniai.com.br/",
      role: "Frontend Developer",
      technologies: [
        "AWS",
        "S3",
        "CloudFront",
        "Google Analytics",
        "Google Tag Manager",
        "React",
        "Next.js",
        "Tailwind",
      ],
    },
    {
      name: "LP Digital",
      description: "Influencer Marketing Platform",
      image: "/digital.jpg",
      url: "https://lpdigital.ai/",
      role: "Frontend Developer",
      technologies: ["NextJS", "TypeScript", "GraphQL"],
    },
    {
      name: "Liqi",
      description: "Digital Assets & Investment Platform",
      image: "/liqi.jpg",
      url: "https://www.liqi.com.br/",
      role: "Frontend Developer",
      technologies: ["ReactJS", "Styled Components", "React Native"],
    },
    {
      name: "RSTcom",
      description: "Corporate Events Management",
      image: "/rstcom.jpg",
      url: "https://rstcom.com.br/",
      role: "Frontend Developer",
      technologies: ["ReactJS", "CSS", "JavaScript"],
    },
    {
      name: "4YourLive",
      description: "Digital Events Platform",
      image: "/4yourlive.jpg",
      url: "https://4yourlive.com.br/",
      role: "Frontend Developer",
      technologies: ["ReactJS", "3D Graphics", "WebRTC"],
    },
    {
      name: "English with Labelle",
      description: "Educational Learning Platform",
      image: "/english-with-labelle.jpg",
      url: "https://www.englishwithlabelle.com/",
      role: "Frontend Developer",
      technologies: [
        "ReactJS",
        "AWS Cognito",
        "TypeScript",
        "Google Analytics",
        "Google Tag Manager",
        "Tailwind",
      ],
    },
    {
      name: "Orav Engenharia",
      description: "Construction & Engineering Services",
      image: "/orav-engenharia.jpg",
      url: "https://oravengenharia.com.br/",
      role: "WordPress Developer",
      technologies: ["WordPress", "Google Analytics", "Google Tags"],
    },
  ];

  return (
    <section id="companies" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Companies I've Worked With
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Collaborated with diverse companies across various industries,
            delivering high-quality solutions and driving innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div
              key={company.name}
              className="group bg-gradient-to-br from-gray-800 to-gray-700 rounded-2xl p-6 hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:scale-105 border border-gray-600"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-white rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                  <img
                    src={company.image}
                    alt={`${company.name} logo`}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${company.name}&background=3b82f6&color=fff&size=80`;
                    }}
                  />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {company.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3">
                    {company.description}
                  </p>
                  <div className="text-primary-400 text-sm font-medium mb-4">
                    {company.role}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {company.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-primary-900 text-primary-200 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
