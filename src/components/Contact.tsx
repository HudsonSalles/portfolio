import { Github, Linkedin, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Get In Touch
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting
            projects. Feel free to reach out!
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Information */}
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Email */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/8 hover:border-primary-400/30 transition-all duration-300 text-center">
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Email Me
              </h3>
              <a
                href="mailto:hudsonsalless@gmail.com"
                className="text-gray-300 hover:text-primary-400 transition-colors duration-300 text-lg font-medium"
              >
                hudsonsalless@gmail.com
              </a>
            </div>

            {/* Location */}
            <div className="group bg-white/5 backdrop-blur-sm border border-white/10 p-8 rounded-xl hover:bg-white/8 hover:border-primary-400/30 transition-all duration-300 text-center">
              <div className="inline-flex w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-xl items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">
                Location
              </h3>
              <p className="text-gray-300 text-lg font-medium">
                São Paulo, Brazil
              </p>
            </div>
          </div>

          {/* Social Media Links */}
          <div className="text-center">
            <h3 className="text-xl font-semibold text-white mb-6">
              Connect with me
            </h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/hudsonsalles"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <Github className="w-8 h-8 text-gray-300 group-hover:text-white transition-colors duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/hudsonsalles"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <Linkedin className="w-8 h-8 text-gray-300 group-hover:text-blue-400 transition-colors duration-300" />
              </a>
              <a
                href="mailto:hudsonsalless@gmail.com"
                className="group p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:scale-110 transition-all duration-300"
              >
                <Mail className="w-8 h-8 text-gray-300 group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
