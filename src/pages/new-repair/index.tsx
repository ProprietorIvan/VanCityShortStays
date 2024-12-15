import React, { useState } from 'react';
import Image from 'next/image';
import { Calendar, Users, Search, Mail, Phone, Star, MapPin, Wifi, Home, ArrowRight } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  images?: string[];
  bedrooms: number;
  maxGuests: number;
  location: string;
  neighborhood: string;
  amenities: string[];
  available: boolean;
  minimumStay: number;
}

const properties: Property[] = [
  {
    id: 'yaletown-luxury',
    title: 'Luxury Suite in Yaletown',
    description: 'Stylish accommodation in Vancouver\'s trendy Yaletown district. Walking distance to restaurants, cafes, and the seawall.',
    price: 399,
    images: ['/photos/homer/HomerLaunder1.jpg'],
    bedrooms: 3,
    maxGuests: 7,
    location: 'Vancouver',
    neighborhood: 'Yaletown',
    amenities: ['High-Speed WiFi', 'Full Kitchen', 'In-suite Laundry', 'Parking', 'Air Conditioning'],
    available: true,
    minimumStay: 3
  },
  {
    id: 'downtown-haven',
    title: 'Downtown Vancouver Haven',
    description: 'Modern suite in the heart of downtown. Perfect location for exploring Vancouver\'s attractions.',
    price: 289,
    images: ['/photos/howe/1.jpg'],
    bedrooms: 2,
    maxGuests: 5,
    location: 'Vancouver',
    neighborhood: 'Downtown',
    amenities: ['High-Speed WiFi', 'Full Kitchen', 'City Views', 'Gym Access', 'Air Conditioning'],
    available: true,
    minimumStay: 2
  },
  {
    id: 'urban-loft',
    title: 'Modern Urban Loft',
    description: 'Contemporary loft-style suite with stunning city views. Ideal for both business and leisure travelers.',
    price: 289,
    images: ['/photos/seymour/1.jpeg'],
    bedrooms: 1,
    maxGuests: 4,
    location: 'Vancouver',
    neighborhood: 'Downtown',
    amenities: ['High-Speed WiFi', 'Full Kitchen', 'Work Space', 'City Views', 'Air Conditioning'],
    available: true,
    minimumStay: 2
  }
];

const Properties = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');
  const [showBookingForm, setShowBookingForm] = useState(false);

  const filteredProperties = properties.filter(property => {
    const matchesSearch = 
      property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      property.neighborhood.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || property.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const locations = [...new Set(properties.map(p => p.location))];

  return (
    <div className="min-h-screen bg-white">

      {/* Hero Section */}
      <div className="relative bg-black text-white py-10 mb-16">
        <div className="absolute inset-0 opacity-40 bg-[url('/vancouver-skyline.jpg')] bg-cover bg-center" />
        <div className="relative max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Exclusive Vancouver Luxury Rentals
          </h1>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Preview our featured collection below. Contact us to explore our complete portfolio 
            of premium properties and receive personalized recommendations for your Vancouver stay.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => setShowBookingForm(true)}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 
                       transition-colors inline-flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Email to View Full Portfolio
            </button>
            <a href="tel:+1234567890" 
              className="bg-transparent border-2 border-white px-6 py-3 rounded-xl font-semibold
                     hover:bg-white/10 transition-colors inline-flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5" />
              Call to Get Personalized Options
            </a>
          </div>
        </div>
      </div>

       {/* Stats Bar */}
       <div className="max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-2xl shadow-xl">
          <div className="grid grid-cols-2 md:grid-cols-4">
            <div className="py-14 px-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold mb-4">Premium</div>
              <div className="text-gray-600 text-lg">Handpicked Locations</div>
            </div>
            <div className="py-14 px-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold mb-4">24/7</div>
              <div className="text-gray-600 text-lg">Concierge Support</div>
            </div>
            <div className="py-14 px-8 text-center border-b md:border-b-0 md:border-r border-gray-100">
              <div className="text-4xl font-bold mb-4">Flexible</div>
              <div className="text-gray-600 text-lg">Travel Options</div>
            </div>
            <div className="py-14 px-8 text-center">
              <div className="text-4xl font-bold mb-4">5★</div>
              <div className="text-gray-600 text-lg">Guest Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Contact Bar */}
      <div className="max-w-6xl mx-auto px-4 mt-16">
        <div className="bg-gray-900 rounded-xl p-10 flex flex-col sm:flex-row items-center justify-between">
          <div>
            <h2 className="text-white text-2xl font-semibold mb-3">
              Discover Our Full Collection of Premium Properties
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-xl">
              These featured properties are just a glimpse of our exclusive portfolio. 
              Contact our local team to unlock access to our complete collection of luxury 
              Vancouver accommodations and receive personalized recommendations.
            </p>
          </div>
          <div className="flex gap-4 mt-8 sm:mt-0 sm:ml-8">
            <a href="mailto:stay@example.com" 
              className="bg-white text-black px-6 py-3 rounded-xl font-medium hover:bg-gray-100 
                     transition-colors inline-flex items-center gap-2 text-lg whitespace-nowrap"
            >
              <Mail className="w-5 h-5" />
              Email Us
            </a>
            <a href="tel:+1234567890"
              className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-xl font-medium
                     hover:bg-white/10 transition-colors inline-flex items-center gap-2 text-lg whitespace-nowrap"
            >
              <Phone className="w-5 h-5" />
              Call Us
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16">

        {/* Search Section */}
        <div className="flex flex-col md:flex-row gap-4 mb-12">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search by location or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-black/5 text-lg"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-4 rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-black/5
                     bg-white min-w-[200px] text-lg"
          >
            <option value="">All Areas</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProperties.map(property => (
            <div
              key={property.id}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl 
                       transition-all duration-300"
            >
              {/* Property Image */}
              <div className="relative h-64">
                <Image
                  src={property.images?.[0] || '/placeholder.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 
                               rounded-xl text-lg font-medium">
                  ${property.price}/night
                </div>
              </div>

              {/* Property Details */}
              <div className="p-8">
                <div className="flex items-center gap-2 text-gray-600 text-base mb-2">
                  <MapPin className="w-5 h-5" />
                  <span>{property.neighborhood}</span>
                </div>
                
                <h3 className="text-xl font-semibold mb-3">{property.title}</h3>
                
                <div className="flex items-center gap-6 text-gray-600 mb-6">
                  <div className="flex items-center gap-2">
                    <Home className="w-5 h-5" />
                    <span>{property.bedrooms} {property.bedrooms === 1 ? 'Bedroom' : 'Bedrooms'}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>Up to {property.maxGuests} guests</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {property.amenities.slice(0, 3).map(amenity => (
                    <span 
                      key={amenity}
                      className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="text-gray-500">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>

                {/* Booking Section */}
                <div className="flex flex-col gap-4">
                  <button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-black text-white px-6 py-4 rounded-xl font-semibold text-lg
                             hover:bg-gray-800 transition-colors flex items-center justify-center gap-2"
                  >
                    <Calendar className="w-5 h-5" />
                    Check Availability
                  </button>
                  <div className="text-gray-600 text-center">
                    Minimum stay: {property.minimumStay} nights
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-600 text-xl">No properties found matching your criteria.</p>
          </div>
        )}

        {/* Closing Section */}
        <div className="bg-black text-white rounded-2xl p-12 md:p-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">
              Experience Vancouver in Style
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Star className="w-10 h-10 mb-4 mx-auto text-white" />
                <h3 className="text-xl font-semibold mb-3">Prime Locations</h3>
                <p className="text-gray-300 text-lg">
                  Stay in Vancouver most coveted neighborhoods
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Users className="w-10 h-10 mb-4 mx-auto text-white" />
                <h3 className="text-xl font-semibold mb-3">Concierge Service</h3>
                <p className="text-gray-300 text-lg">
                  24/7 dedicated local support
                </p>
              </div>
              <div className="bg-white/10 p-8 rounded-xl backdrop-blur-sm">
                <Home className="w-10 h-10 mb-4 mx-auto text-white" />
                <h3 className="text-xl font-semibold mb-3">Luxury Living</h3>
                <p className="text-gray-300 text-lg">
                  Fully equipped with premium amenities
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button
                onClick={() => setShowBookingForm(true)}
                className="bg-white text-black px-8 py-4 rounded-xl text-lg font-semibold 
                         hover:bg-gray-100 transition-colors inline-flex items-center 
                         justify-center gap-2"
              >
                <Calendar className="w-6 h-6" />
                Book Your Stay
              </button>
              <a 
                href="tel:+1234567890"
                className="border-2 border-white px-8 py-4 rounded-xl text-lg font-semibold
                         hover:bg-white/10 transition-colors inline-flex items-center 
                         justify-center gap-2"
              >
                <Phone className="w-6 h-6" />
                Call Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;