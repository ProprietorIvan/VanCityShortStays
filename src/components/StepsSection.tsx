
import React from 'react';

const StepsSection = () => {
  const metrics = [
    {
      value: "2200+",
      label: "HAPPY CLIENTS"
    },
    {
      value: "1000+",
      label: "PROJECTS COMPLETED"
    },
    {
      value: "4.8",
      label: "AVERAGE RATINGS"
    },
    {
      value: "15",
      label: "QUALIFIED STAFS"
    }
  ];

  const projects = [
    {
      id: 1,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/renovation-services-2.jpg",
      alt: "Home renovation transformation"
    },
    {
      id: 2,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/Untitled-21-1.jpg",
      alt: "Living room renovation"
    },
    {
      id: 3,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/BeforeAfter.jpg",
      alt: "Floor renovation before and after"
    },
    {
      id: 4,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/1-90s-reno-before-and-after-listing-photos.jpg",
      alt: "Complete home renovation"
    },
    {
      id: 5,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/introTileVR.jpg",
      alt: "Tile renovation work"
    },
    {
      id: 6,
      imgUrl: "https://azhandyman.ca/wp-content/uploads/2022/07/house-renovation-cost-scaled-1.jpg",
      alt: "House renovation project"
    }
  ];

  return (
    <div className="w-full">
      <div className="w-full bg-black py-20">      
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-2">OUR SUCCESS RATE</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-yellow-500"></div>
              <p className="text-white mx-4">What We have Done</p>
              <div className="h-px w-12 bg-yellow-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="h-px w-12 bg-yellow-500 mb-4"></div>
                  <div className="text-sm text-white tracking-wider">{metric.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-2">RECENT PROJECTS</h2>
            <div className="flex items-center justify-center">
              <div className="h-px w-12 bg-yellow-500"></div>
              <p className="mx-4">A Small Gallery of Us</p>
              <div className="h-px w-12 bg-yellow-500"></div>
            </div>
            <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
              Lets see some of our top projects. You can ensure that every project on our platform 
              is rated and reviewed by their past customers. We cone up with the results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.imgUrl}
                  alt={project.alt}
                  className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default StepsSection;