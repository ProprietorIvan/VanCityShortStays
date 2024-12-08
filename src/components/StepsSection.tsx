import React from 'react';
import Image from 'next/image';
import Link from 'next/link'; // Importing Link for proper navigation

const StepsSection = () => {
  const metrics = [
    {
      value: "500+",
      label: "HAPPY GUESTS"
    },
    {
      value: "50+",
      label: "LUXURY PROPERTIES"
    },
    {
      value: "4.9",
      label: "GUEST RATING"
    },
    {
      value: "97%",
      label: "BOOKING RATE"
    }
  ];

  const featuredProperties = [
    {
      id: 1,
      name: "Homer Street Suite",
      location: "Downtown Vancouver",
      image: "/photos/homer/HomerLaunder13.jpg",
      type: "Modern Downtown Living",
      href: "/homerproperty" // Updated to match the page filename
    },
    {
      id: 2,
      name: "Seymour Residence",
      location: "Downtown Vancouver",
      image: "/photos/seymour/1.jpeg",
      type: "Urban Luxury Suite"
    },
    {
      id: 3,
      name: "Howe Street Haven",
      location: "Downtown Vancouver",
      image: "/photos/howe/1.jpg",
      type: "Executive Accommodation"
    }
  ];

  return (
    <div className="w-full">
      {/* Metrics Section */}
      <div className="w-full bg-zinc-900 py-24">      
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Vancouver Stay</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Experience luxury living with our premium short-term rentals in Vancouver&apos;s most desired locations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-white mb-3">{metric.value}</div>
                  <div className="h-px w-12 bg-white/20 mb-3"></div>
                  <div className="text-sm text-gray-400 tracking-wider">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Properties Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Featured Properties</h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Discover our handpicked collection of luxury properties, each offering a unique blend 
              of comfort, style, and prime location in Vancouver&apos;s most coveted neighborhoods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <Link href={property.href || "#"} key={property.id}>
                <div className="group relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                  <div className="relative h-80 w-full">
                    <Image 
                      src={property.image}
                      alt={property.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <h3 className="text-xl font-semibold mb-1">{property.name}</h3>
                      <p className="text-sm opacity-90">{property.location}</p>
                      <p className="text-sm text-gray-300 mt-2">{property.type}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-black text-white px-8 py-3 rounded-full hover:bg-gray-900 transition-colors duration-300">
              View All Properties
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;