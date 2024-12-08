import { Wrench } from 'lucide-react';
import Navigation from '../../components/Navigation';

const Services = () => {
  const availableServices = [
    {
      title: "General Handyman Services",
      description: "Comprehensive solutions for repairs, installations, and upgrades tailored to your needs.",
      link: '/general-handyman'
    },
    {
      title: "Drywall Installation & Repair",
      description: "Professional drywall services, including patching, installation, and painting.",
      link: '/drywall'
    },
    {
      title: "Flood Repair",
      description: "Swift response to prevent further damage and ensure a seamless repair process.",
      link: '/flood-repair'
    },
    {
      title: 'Demolition',
      description: "Professional demolition services for both residential and commercial projects. From interior wall removal to complete structure demolition, we ensure safe, efficient, and controlled demolition work with proper debris removal and disposal.",
      link: '/demolition'
    },
    {
      title: 'Air Conditioning Services',
      description: "Regular servicing to keep your AC running efficiently and reliably.",
      link: '/hvac'
    }
  ];

  const handleOpenService = (link: string) => {
    window.open(link, '_current')
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-4 py-6 md:py-8">
        {/* Header Section */}
        <div className="text-center mb-8 md:mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Wrench className="w-6 h-6 md:w-8 md:h-8" />
            <h1 className="text-2xl md:text-3xl font-bold">
              One Call Solves All Your Home Problems
            </h1>
          </div>
          <p className="text-sm md:text-base text-gray-600">
            We handle a wide variety of repairs and maintenance tasks for your home, saving you time and stress.
          </p>
        </div>

        {/* Available Services Section */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center gap-2 mb-4 md:mb-6">
            <Wrench className="w-5 h-5 md:w-6 md:h-6" />
            <h2 className="text-xl md:text-2xl font-bold">Available Services</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {availableServices.map((service, index) => (
              <div
                onClick={() => handleOpenService(service.link)}
                key={index}
                className="
                  p-4 md:p-6 rounded-lg border bg-white 
                  transition-all duration-300 ease-in-out
                  hover:border-gray-300 hover:shadow-lg hover:bg-gray-50
                  transform hover:-translate-y-1 cursor-pointer
                "
              >
                <h3 className="text-lg md:text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm md:text-base text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Services
