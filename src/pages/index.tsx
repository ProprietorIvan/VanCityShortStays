import React, { useState, useEffect } from "react";
import { Navigation as NavIcon } from "lucide-react";
import ComparisonSection from '@/components/ComparisonSection';
import StepsSection from '@/components/StepsSection';
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import FeaturesSection from "@/components/Features";

const Button = ({
  children,
  className = "",
  onClick = () => {},
}: {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}) => {
  return (
    <button onClick={onClick} className={`${className}`}>
      {children}
    </button>
  );
};

const AnimatedTitle = ({ text }: { text: string }) => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    setDisplayText("");
    let index = 0;
    const timer = setInterval(() => {
      if (index <= text.length) {
        setDisplayText(text.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 80);

    return () => clearInterval(timer);
  }, [text]);

  return (
    <span className="block">
      {displayText}
      <span className="animate-blink">|</span>
    </span>
  );
};

const SLIDES = [
  {
    title: "Luxury in Vancouver",
    subtitle: "Experience the epitome of luxury living in Vancouver's most prestigious locations.",
  },
  {
    title: "Curated Elegance",
    subtitle: "Meticulously designed spaces that blend comfort with sophistication.",
  },
  {
    title: "Premium Service",
    subtitle: "24/7 concierge, personalized check-in, and world-class amenities.",
  },
  {
    title: "Elite Locations",
    subtitle: "Exclusive addresses in Coal Harbour, Yaletown, and Downtown Vancouver.",
  },
] as const;

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const slideCount = SLIDES.length;
    const intervalDuration = 8000; // 8 seconds

    const interval = setInterval(() => {
      setCurrentSlide((current) => (current + 1) % slideCount);
    }, intervalDuration);

    // Add video loading handler
    const video = document.querySelector('video');
    if (video) {
      video.onloadeddata = () => {
        setIsLoading(false);
      };
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen">
      <style jsx global>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-blink {
          animation: blink 1s infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 0.5s;
        }
        .animate-fade-up {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
          animation-delay: 1s;
        }
      `}</style>

      {/* Hero Section */}
      <div className="relative h-screen">
        {/* Video Background */}
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="h-full w-full object-cover"
          >
            <source src="/videos/background.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/50" />
        </div>

        {/* Navigation */}
        <nav className="absolute top-0 left-0 right-0 z-50">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex justify-between items-center h-20">
              <div className="flex items-center">
                <NavIcon className="h-6 w-6 text-white hover:text-white/80 transition-colors duration-300" />
                <span className="ml-3 text-lg font-medium text-white hover:text-white/80 transition-colors duration-300">
                  Vancouver Luxury Stays
                </span>
              </div>
            </div>
          </div>
        </nav>

        {/* Content Overlay */}
        <div className="absolute inset-0 flex flex-col">
          {/* Main Text */}
          <div className="flex-1 flex items-center justify-center">
            <div className="text-center px-4">
              <h1 className="text-white text-6xl sm:text-7xl md:text-8xl font-bold mb-6 tracking-tight min-h-[6rem] leading-tight">
                <AnimatedTitle text={SLIDES[currentSlide].title} />
              </h1>
              <p className="text-white/90 text-xl md:text-2xl font-medium tracking-wide opacity-0 animate-fade-in max-w-3xl mx-auto">
                {SLIDES[currentSlide].subtitle}
              </p>
            </div>
          </div>

          {/* Buttons Container */}
          <div className="pb-24 px-6">
            <div className="max-w-2xl mx-auto space-y-4">
              <Button className="w-full h-14 bg-white hover:bg-white/90 text-zinc-900 hover:text-black text-lg font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
                Browse Luxury Properties
              </Button>
              <Button className="w-full h-14 bg-black/20 hover:bg-black/30 text-white text-lg font-semibold rounded-xl backdrop-blur-md transition-all duration-300 transform hover:scale-105 border border-white/30 hover:border-white/40 shadow-lg">
                Contact Concierge
              </Button>
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {SLIDES.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
              }`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
      </div>

      {/* Other Sections */}
      <ComparisonSection />
      <StepsSection />
      <Contact />
      <FeaturesSection />
      <FAQ />
    </div>
  );
};

export default Home;
