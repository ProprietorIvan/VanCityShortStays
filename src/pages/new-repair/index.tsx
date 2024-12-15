import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Bed, Bath, Users, Search } from 'lucide-react';

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  images?: string[];
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  location: string;
  amenities: string[];
  available: boolean;
}

const properties: Property[] = [
  {
    id: 'homer',
    title: 'Spacious 3BR Townhouse near Vibrant Yaletown',
    description: 'Modern townhouse with stunning views, perfect for families or groups.',
    price: 399,
    images: ['/photos/homer/HomerLaunder1.jpg'],
    bedrooms: 3,
    bathrooms: 3,
    maxGuests: 7,
    location: 'Yaletown, Vancouver',
    amenities: ['Fireplace', 'Full Kitchen', 'Washer/Dryer', 'WiFi', 'Parking'],
    available: true
  },
  {
    id: 'howe',
    title: 'Stunning 2 Bedroom Duplex in Yaletown with Fireplace',
    description: 'Luxurious duplex featuring modern amenities and prime location.',
    price: 289,
    images: ['/photos/howe/1.jpg'],
    bedrooms: 2,
    bathrooms: 2,
    maxGuests: 5,
    location: 'Downtown, Vancouver',
    amenities: ['Fireplace', 'Full Kitchen', 'Washer/Dryer', 'WiFi', 'City Views'],
    available: true
  },
  {
    id: 'richards',
    title: 'Elegant 1BR Loft with City Views',
    description: 'Contemporary suite offering comfort and convenience in the heart of the city.',
    price: 279,
    images: ['/photos/seymour/1.jpeg'],
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 4,
    location: 'Downtown, Vancouver',
    amenities: ['City Views', 'Full Kitchen', 'Washer/Dryer', 'WiFi'],
    available: true
  }
];

const PropertiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState<string>('');

  const filteredProperties = properties.filter(property => {
    const matchesSearch = property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         property.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLocation = !selectedLocation || property.location === selectedLocation;
    return matchesSearch && matchesLocation;
  });

  const locations = [...new Set(properties.map(p => p.location))];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Our Luxury Properties</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked collection of premium properties in Vancouver most desirable neighborhoods.
          </p>
        </div>

        {/* Filters */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search properties..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 
                       focus:outline-none focus:ring-2 focus:ring-black/5"
            />
          </div>
          <select
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-200 
                     focus:outline-none focus:ring-2 focus:ring-black/5
                     bg-white"
          >
            <option value="">All Locations</option>
            {locations.map(location => (
              <option key={location} value={location}>{location}</option>
            ))}
          </select>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map(property => (
            <Link 
              href={`/properties/${property.id}`} 
              key={property.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl 
                       transition-shadow duration-300"
            >
              {/* Property Image */}
              <div className="relative h-64">
                <Image
                  src={property.images?.[0] || '/placeholder.jpg'}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-black/80 text-white px-4 py-2 rounded-full">
                  ${property.price}/night
                </div>
              </div>

              {/* Property Details */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-2">{property.description}</p>

                {/* Property Features */}
                <div className="flex items-center gap-4 text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Bed className="w-4 h-4" />
                    <span>{property.bedrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bath className="w-4 h-4" />
                    <span>{property.bathrooms}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="w-4 h-4" />
                    <span>Up to {property.maxGuests}</span>
                  </div>
                </div>

                {/* Location */}
                <p className="text-gray-600">{property.location}</p>

                {/* Amenities */}
                <div className="mt-4 flex flex-wrap gap-2">
                  {property.amenities.slice(0, 3).map(amenity => (
                    <span 
                      key={amenity}
                      className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                  {property.amenities.length > 3 && (
                    <span className="text-gray-400 text-sm">
                      +{property.amenities.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* No Results */}
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600">No properties found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertiesPage;