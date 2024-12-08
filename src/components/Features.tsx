import React from 'react';
import { 
  Home,
  Trophy,
  Users,
  Clock,
  Shield,
  BadgeCheck,
  Star,
  Sparkles
} from 'lucide-react';

const FeaturesSection = () => {
  const features = [
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Unrivaled Excellence",
      subtitle: "The VanCityShortStays Standard",
      description: "We don't just manage properties – we elevate them. Our relentless pursuit of perfection has redefined luxury property management in Vancouver."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "A New Standard of Comfort",
      subtitle: "Elevating Your Property",
      description: "From elegant penthouse suites to serene waterfront homes, we curate exceptional properties for unforgettable experiences. This is more than just a stay—it's a refined approach to hospitality."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Elite Network",
      subtitle: "Exclusive Connections",
      description: "Our network spans global luxury markets, connecting your property with the world's most discerning travelers. Your success is built on relationships we've spent years cultivating."
    },
    {
      icon: <BadgeCheck className="w-8 h-8" />,
      title: "Absolute Perfection",
      subtitle: "Meticulous Attention",
      description: "Every detail matters. Our obsession with perfection ensures your property maintains its prestigious status through every guest experience."
    },
    {
      icon: <Clock className="w-8 h-8" />,
      title: "Complete Control",
      subtitle: "Ultimate Flexibility",
      description: "Your property, your terms. Our adaptive management approach puts you in complete control while we handle every aspect of execution."
    },
    {
      icon: <Star className="w-8 h-8" />,
      title: "Dominant Presence",
      subtitle: "Maximum Exposure",
      description: "Leverage our commanding market position and sophisticated marketing strategies to ensure your property stands above all others."
    }
  ];

  return (
    <section className="py-32 px-6 bg-white" id="features">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-24">
          <h1 className="text-7xl font-bold tracking-tight mb-8 text-gray-900">
            Dominate the Market
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light">
            Unmatched expertise. Unprecedented results.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-8">
          {features.map((feature, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="flex flex-col h-full p-10 bg-gray-50 rounded-3xl transition-all duration-500 hover:bg-gray-100">
                <div className="mb-8">
                  <div className="bg-black rounded-2xl p-4 inline-flex">
                    <div className="text-white">
                      {feature.icon}
                    </div>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 text-gray-900">
                  {feature.title}
                </h3>
                
                <h4 className="text-lg text-gray-600 mb-4 font-medium">
                  {feature.subtitle}
                </h4>
                
                <p className="text-gray-600 leading-relaxed flex-grow text-lg">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-24 text-center">
          <p className="text-xl text-gray-600 mb-8 font-light">Ready to dominate the Vancouver luxury market?</p>
          <button className="bg-black text-white px-12 py-6 rounded-full text-xl font-bold transition-all hover:bg-gray-900 hover:scale-105 transform duration-300">
            Partner with us
          </button>
        </div>

        <div className="mt-32 border-t border-gray-200 pt-16 text-center">
          <p className="text-6xl font-bold mb-6 text-gray-900">Vancouver Finest</p>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            When only the absolute best will do. VanCityShortStays – Redefining luxury property management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;