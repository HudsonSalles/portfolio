import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Companies } from "./components/Companies";
import { Contact } from "./components/Contact";
import { Header } from "./components/Header";
import Hero from "./components/Hero";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";

// Scroll Reveal Hook
const useScrollReveal = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed");
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".scroll-reveal");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Back to Top Hook
const useBackToTop = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button when user scrolls down 300px
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { showBackToTop, scrollToTop };
};

function App() {
  useScrollReveal();
  const { showBackToTop, scrollToTop } = useBackToTop();

  return (
    <div className="min-h-screen bg-slate-900 text-white relative">
      {/* Global Background Effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800" />
      </div>

      {/* Main Content */}
      <div className="relative z-10">
        <Header />
        <main className="relative">
          <Hero />
          <About />
          <Skills />
          <Companies />
          <Projects />
          <Contact />
        </main>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 sm:bottom-8 sm:right-8 z-50 p-3 sm:p-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 ${
          showBackToTop
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
        aria-label="Back to top"
      >
        <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
      </button>
    </div>
  );
}

export default App;
