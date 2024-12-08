
import React,{ useState } from 'react';
import { Check } from 'lucide-react';
import Image from 'next/image';

interface Feature {
  title: string;
  description: string;
  buttonText: string;
  image: string;
  orientation: 'left' | 'right';
  url: string;
}

interface FeatureCardProps {
  feature: Feature;
}

const ComparisonSection = () => {
  const features: Feature[] = [
    {
      title: "Luxury Living",
      description: "Experience Vancouver&apos;s finest neighborhoods in our carefully selected luxury apartments. Each property is chosen for its premium location, high-end amenities, and exceptional design, ensuring your stay exceeds expectations.",
      buttonText: "View Properties",
      image: "/photos/homer/HomerLaunder10.jpg",
      orientation: "right",
      url: "/properties"
    },
    {
      title: "Prime Locations",
      description: "From the vibrant streets of Yaletown to the scenic views of Coal Harbour, our properties are situated in Vancouver&apos;s most desirable areas. Walk to world-class restaurants, shopping, and entertainment venues.",
      buttonText: "Explore Areas",
      image: "/photos/homepage/1.jpg",
      orientation: "left",
      url: "/locations"
    },
    {
      title: "Concierge Service",
      description: "Our 24/7 concierge service ensures a seamless stay. From restaurant reservations to local recommendations, we&apos;re here to make your Vancouver experience unforgettable.",
      buttonText: "Learn More",
      image: "/photos/homepage/2.jpg",
      orientation: "right",
      url: "/services"
    },
    {
      title: "Extended Stays",
      description: "Whether you&apos;re in Vancouver for business or pleasure, our properties are perfect for extended stays. Fully furnished with premium amenities, they offer all the comforts of home.",
      buttonText: "Long-Term Options",
      image: "/photos/seymour/1.jpeg",
      orientation: "left",
      url: "/extended-stays"
    }
  ];

  const FeatureCard: React.FC<FeatureCardProps> = ({ feature }) => (
    <div className={`flex flex-col md:flex-row items-center w-full gap-8 py-16 ${
      feature.orientation === 'left' ? 'md:flex-row-reverse' : ''
    }`}>
      <div className="w-full md:w-1/2 relative group overflow-hidden">
        <div className="relative overflow-hidden rounded-xl shadow-2xl transform transition-transform duration-500 hover:-translate-y-2">
          <div className="relative w-full h-[600px]">
            <Image 
              src={feature.image} 
              alt={feature.title}
              fill
              className="object-cover transition-all duration-700 group-hover:scale-110 brightness-110 group-hover:brightness-125"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/20 group-hover:to-black/30 transition-all duration-300"/>
        </div>
      </div>
      
      <div className="w-full md:w-1/2 px-6">
        <h2 className="text-4xl font-bold mb-6 tracking-tight">{feature.title}</h2>
        <p className="text-lg text-gray-700 mb-8 leading-relaxed">{feature.description}</p>
        <button 
          className="group inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-all duration-300"
        >
          {feature.buttonText}
          <svg 
            className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300"
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M5 12h14"/>
            <path d="m12 5 7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );

  return (
    <section className="py-16 px-5 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h1 className="text-5xl font-bold mb-6">Experience Vancouver</h1>
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="h-px w-16 bg-gray-300" />
            <p className="text-lg text-gray-600">Luxury Short-Term Rentals</p>
            <div className="h-px w-16 bg-gray-300" />
          </div>
          <p className="max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Discover our curated collection of premium properties in Vancouver&apos;s most coveted neighborhoods. 
            Experience the perfect blend of luxury, comfort, and convenience for your stay in one of the 
            world&apos;s most beautiful cities.
          </p>
        </div>

        {/* Features List */}
        <div className="space-y-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonSection;


