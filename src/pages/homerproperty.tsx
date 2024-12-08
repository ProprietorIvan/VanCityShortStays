import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X, ChevronLeft, ChevronRight, Bed, Bath, Users, Home, Star, Check,
  MapPin, Clock, Shield, Coffee, Utensils, Wine, Map, ChevronRight as ArrowRight
} from 'lucide-react';

const HomerProperty = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.from({ length: 23 }, (_, i) => `/photos/homer/HomerLaunder${i + 1}.jpg`);

  const nearbyRestaurants = [
    { name: "Blue Water Cafe", cuisine: "Seafood", rating: "4.8", distance: "3 min", price: "$$$$" },
    { name: "Minami Restaurant", cuisine: "Japanese", rating: "4.7", distance: "5 min", price: "$$$" },
    { name: "Homer St. Cafe", cuisine: "Modern Canadian", rating: "4.6", distance: "1 min", price: "$$$" },
    { name: "Medina Cafe", cuisine: "Mediterranean", rating: "4.9", distance: "8 min", price: "$$" }
  ];

  const walkingDistances = [
    { place: "Yaletown-Roundhouse Station", time: "4 minutes" },
    { place: "Vancouver Seawall", time: "7 minutes" },
    { place: "Rogers Arena", time: "15 minutes" },
    { place: "Vancouver City Centre", time: "12 minutes" },
    { place: "Granville Island", time: "20 minutes" }
  ];

  const features = {
    bedrooms: [
      "Master suite with king bed and ensuite",
      "Second bedroom with queen bed",
      "Third bedroom with two singles",
      "Premium linens and blackout curtains",
      "Built-in closets in all rooms"
    ],
    living: [
      "Open concept living area",
      "Floor-to-ceiling windows",
      "Designer furniture",
      "Private balcony",
      "Smart home controls"
    ],
    kitchen: [
      "Wolf gas range",
      "Sub-Zero refrigerator",
      "Wine fridge",
      "Nespresso machine",
      "Full cookware set"
    ],
    amenities: [
      "High-speed fiber WiFi",
      "65\" 4K Smart TV",
      "Sonos sound system",
      "Washer/dryer",
      "Central air conditioning"
    ]
  };

  const handleNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handlePrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-grey-700" />
              <span className="font-medium text-xl">Spacious 3BR Townhouse near Vibrant Yaletown</span>
            </Link>
            <div className="flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-emerald-700 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="bg-emerald-700 text-white px-4 py-2 rounded-lg 
                  hover:bg-emerald-800 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Photo Grid */}
      <div className="relative">
        <div className="grid grid-cols-4 gap-2 h-[85vh]">
          <div className="col-span-2 row-span-2 relative">
            <Image
              src={images[0]}
              alt="Main living space"
              fill
              className="object-cover brightness-105"
              priority
            />
          </div>
          {images.slice(1, 5).map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image}
                alt={`Interior view ${index + 1}`}
                fill
                className="object-cover brightness-105"
              />
            </div>
          ))}
          <button
            onClick={() => setShowFullGallery(true)}
            className="absolute bottom-8 right-8 bg-white/90 backdrop-blur-sm px-8 py-4 rounded-full
            font-medium hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Photos ({images.length})
          </button>
        </div>
      </div>
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Property Overview */}
        <div className="grid grid-cols-3 gap-16 py-16 border-b">
          <div className="col-span-2">
            <h1 className="text-5xl font-bold mb-6 tracking-tight">
              Spacious 3BR Townhouse near Vibrant Yaletown
            </h1>
            <div className="flex items-center gap-4 text-lg mb-8">
              <div className="flex items-center gap-1">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold">4.9</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">42 reviews</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">Yaletown, Vancouver</span>
            </div>
            <div className="flex gap-8 py-6 border-y">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="font-medium">Up to 7 guests</p>
                  <p className="text-sm text-gray-500">Perfect for families</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bed className="w-6 h-6" />
                <div>
                  <p className="font-medium">3 bedrooms</p>
                  <p className="text-sm text-gray-500">King & Queen beds</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-6 h-6" />
                <div>
                  <p className="font-medium">3 bathrooms</p>
                  <p className="text-sm text-gray-500">Ensuite in master</p>
                </div>
              </div>
            </div>

            {/* Core Description */}
            <div className="mt-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Welcome to our spacious 3BR townhouse near vibrant Yaletown! This stylish retreat offers a modern kitchen, cozy living space, and three comfy bedrooms, ideal for families or groups. Located steps from Yaletown top restaurants, shops, and nightlife, it is perfect for exploring Vancouver. Relax on the private patio or unwind in the bright, open living area. Your perfect getaway awaits!
              </p>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold">$399</span>
                  <span className="text-gray-600"> /night</span>
                </div>
                <div className="flex items-center gap-1 bg-emerald-50 px-3 py-1 rounded-full">
                  <Star className="w-4 h-4 text-emerald-700" />
                  <span className="font-medium text-emerald-700">4.9</span>
                </div>
              </div>

              <div className="space-y-4 mb-6">
                <button className="w-full bg-gradient-to-r from-stone-800 to-stone-950 text-white py-4 rounded-xl
                  font-medium hover:from-stone-900 hover:to-black transition-all duration-300 
                  transform hover:scale-[1.02] shadow-lg hover:shadow-xl">
                  Book Directly - Discounted Rate
                </button>

                <a 
                  href="https://www.airbnb.com/rooms/1298798891023705536?source_impression_id=p3_1733617424_P36JLGxP1GUd99Ac"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-[#FF5A5F] text-white py-4 rounded-xl font-medium 
                    hover:bg-[#FF4B4F] transition-all duration-300 transform hover:scale-[1.02] 
                    shadow-lg hover:shadow-xl">
                    View on Airbnb
                  </button>
                </a>
              </div>

              <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                <Shield className="w-4 h-4" />
                <span>Best rates when booking directly</span>
              </div>
            </div>
          </div>
        </div>

        {/* Neighborhood Section */}
        <div className="py-16 border-b">
          <h2 className="text-3xl font-bold mb-12">Explore the Neighborhood</h2>
          
          {/* Restaurants Grid */}
          <div className="mb-16">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-emerald-700" />
              <span>Notable Restaurants</span>
            </h3>
            <div className="grid grid-cols-2 gap-8">
              {nearbyRestaurants.map((restaurant, index) => (
                <div key={index} className="flex items-center justify-between p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-emerald-700 transition-colors">{restaurant.name}</h4>
                    <p className="text-sm text-gray-500">{restaurant.cuisine} · {restaurant.price}</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 justify-end mb-1">
                      <Star className="w-4 h-4 text-yellow-500" />
                      <span className="font-medium">{restaurant.rating}</span>
                    </div>
                    <p className="text-sm text-gray-500">{restaurant.distance} walk</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Walking Distances */}
          <div>
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <Map className="w-5 h-5 text-emerald-700" />
              <span>Walking Distances</span>
            </h3>
            <div className="grid grid-cols-3 gap-6">
              {walkingDistances.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
                  <span className="text-gray-600 group-hover:text-emerald-700 transition-colors">{item.place}</span>
                  <span className="font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="py-16 border-b">
          <h2 className="text-3xl font-bold mb-12">Premium Amenities & Features</h2>
          <div className="grid grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Bed className="w-6 h-6 text-emerald-700" />
                  <span>Luxurious Bedrooms</span>
                </h3>
                <ul className="space-y-4">
                  {features.bedrooms.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6 text-emerald-700" />
                  <span>Living Space</span>
                </h3>
                <ul className="space-y-4">
                  {features.living.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-emerald-700" />
                  <span>Gourmet Kitchen</span>
                </h3>
                <ul className="space-y-4">
                  {features.kitchen.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-emerald-700" />
                  <span>Modern Amenities</span>
                </h3>
                <ul className="space-y-4">
                  {features.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold mb-12">Exceptional Stay Experience</h2>
          <div className="grid grid-cols-4 gap-8">
            <div className="p-8 rounded-2xl bg-emerald-50 hover:bg-emerald-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-6">
                <Shield className="w-10 h-10 text-emerald-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Professional Hosting</h3>
              <p className="text-gray-600 leading-relaxed">Experienced property management with 24/7 guest support and rigorous cleaning protocols</p>
            </div>

            <div className="p-8 rounded-2xl bg-blue-50 hover:bg-blue-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-6">
                <MapPin className="w-10 h-10 text-blue-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Unbeatable Location</h3>
              <p className="text-gray-600 leading-relaxed">Prime Yaletown location with easy access to Vancouver best attractions</p>
            </div>

            <div className="p-8 rounded-2xl bg-purple-50 hover:bg-purple-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-6">
                <Star className="w-10 h-10 text-purple-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Luxury Living</h3>
              <p className="text-gray-600 leading-relaxed">High-end finishes, premium appliances, and thoughtful amenities throughout</p>
            </div>

            <div className="p-8 rounded-2xl bg-amber-50 hover:bg-amber-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-6">
                <Coffee className="w-10 h-10 text-amber-700 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Local Experience</h3>
              <p className="text-gray-600 leading-relaxed">Curated guide to neighborhood gems and insider recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            onClick={() => setShowFullGallery(false)}
            className="absolute top-8 right-8 text-white/90 hover:text-white transition-colors z-50"
          >
            <X className="w-8 h-8" />
          </button>
          
          <div className="h-full flex items-center justify-center">
            <button
              onClick={handlePrevImage}
              className="absolute left-8 text-white/90 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-12 h-12" />
            </button>
            
            <div className="relative h-[85vh] w-[85vw]">
              <Image
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            <button
              onClick={handleNextImage}
              className="absolute right-8 text-white/90 hover:text-white transition-colors"
            >
              <ChevronRight className="w-12 h-12" />
            </button>
          </div>
          
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/90 font-medium">
            {currentImageIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </div>
  );
};

export default HomerProperty;