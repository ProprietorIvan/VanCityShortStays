import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X, ChevronLeft, ChevronRight, Bed, Bath, Users, Home, Star, Check,
  MapPin, Clock, Shield, Coffee, Utensils, Wine, Map, ChevronRight as ArrowRight
} from 'lucide-react';

const HoweProperty = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const images = Array.from({ length: 17 }, (_, i) => `/photos/howe/${i + 1}.jpg`);

  const nearbyRestaurants = [
    { name: "Parlour", cuisine: "Pizza & Cocktails", rating: "4.7", distance: "10 min", price: "$$$" },
    { name: "Earls Kitchen", cuisine: "Modern American", rating: "4.6", distance: "15 min", price: "$$$" },
    { name: "Vij's Restaurant", cuisine: "Indian", rating: "4.8", distance: "7 min", price: "$$$" },
    { name: "Joe Fortes", cuisine: "Seafood", rating: "4.7", distance: "10 min", price: "$$$$" }
  ];

  const walkingDistances = [
    { place: "Granville Street", time: "2 minutes" },
    { place: "Sunset Beach", time: "5 minutes" },
    { place: "Granville Island", time: "15 minutes" },
    { place: "Downtown Shopping", time: "8 minutes" },
    { place: "English Bay Beach", time: "12 minutes" }
  ];

  const features = {
    bedrooms: [
      "Master bedroom with queen bed",
      "Second bedroom with double bed",
      "Premium linens and pillows",
      "Built-in closets",
      "Black-out curtains"
    ],
    living: [
      "Spacious duplex layout",
      "Gas fireplace",
      "Designer furniture",
      "Private outdoor space",
      "City views"
    ],
    kitchen: [
      "Full-size appliances",
      "Dishwasher",
      "Coffee maker",
      "Complete cookware set",
      "Dining area for 6"
    ],
    amenities: [
      "High-speed WiFi",
      "55\" Smart TV",
      "In-unit laundry",
      "Air conditioning",
      "Building fitness center"
    ]
  };

  const handleNextImage = () => setCurrentImageIndex((prev) => (prev + 1) % images.length);
  const handlePrevImage = () => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
              <Home className="w-6 h-6 text-gray-700" />
              <span className="font-medium text-xl hidden md:inline">Stunning 2 Bedroom Duplex in Yaletown with Fireplace</span>
              <span className="font-medium text-xl md:hidden">2BR Duplex with Fireplace</span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                href="/" 
                className="text-gray-600 hover:text-gray-900 transition-colors duration-200"
              >
                Home
              </Link>
              <Link 
                href="/contact" 
                className="bg-black text-white px-4 py-2 rounded-lg 
                  hover:bg-gray-800 transition-colors duration-200"
              >
                Contact Us
              </Link>
            </div>
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={toggleMobileMenu}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t">
              <Link 
                href="/"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/contact"
                className="block py-2 text-gray-600 hover:text-gray-900"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          )}
        </div>
      </header>

 {/* Photo Grid */}
      <div className="relative">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-2 h-[50vh] md:h-[85vh]">
          {/* Main large image */}
          <div className="col-span-1 md:col-span-2 md:row-span-2 relative">
            <Image
              src={images[0]}
              alt="Main living space"
              fill
              className="object-cover brightness-105"
              priority
            />
          </div>
          
          {/* Small preview images - show 3x2 grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-1 md:gap-2 col-span-1 md:col-span-2 h-[50vh] md:h-auto">
            {images.slice(1, 7).map((image, index) => (
              <div key={index} className="relative w-full h-[25vh] md:h-[21vh]">
                <Image
                  src={image}
                  alt={`Interior view ${index + 1}`}
                  fill
                  className="object-cover brightness-105"
                />
              </div>
            ))}
          </div>
          
          <button
            onClick={() => setShowFullGallery(true)}
            className="absolute bottom-4 md:bottom-8 right-4 md:right-8 bg-white/90 backdrop-blur-sm 
            px-4 md:px-8 py-2 md:py-4 rounded-full text-sm md:text-base
            font-medium hover:bg-white transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            View All Photos ({images.length})
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4">
        {/* Property Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 py-8 md:py-16 border-b">
          <div className="col-span-1 md:col-span-2">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6 tracking-tight">
              Stunning 2 Bedroom Duplex in Yaletown with Fireplace
            </h1>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 text-base md:text-lg mb-6 md:mb-8">
              <div className="flex items-center gap-1">
                <Star className="w-5 h-5 md:w-6 md:h-6 text-yellow-500" />
                <span className="font-semibold">4.8</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">36 reviews</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">Yaletown, Vancouver</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-8 py-4 md:py-6 border-y">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="font-medium">Up to 5 guests</p>
                  <p className="text-sm text-gray-500">Comfortable space</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bed className="w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="font-medium">2 bedrooms</p>
                  <p className="text-sm text-gray-500">Queen & Double beds</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-5 h-5 md:w-6 md:h-6" />
                <div>
                  <p className="font-medium">2 bathrooms</p>
                  <p className="text-sm text-gray-500">Modern fixtures</p>
                </div>
              </div>
            </div>

            {/* Core Description */}
            <div className="mt-6 md:mt-8 text-base md:text-lg text-gray-600 leading-relaxed">
              <p>
                Welcome to our stunning duplex in the heart of downtown Vancouver! This stylish two-level retreat features a cozy gas fireplace, modern amenities, and a fantastic location just 5 minutes from the beach. The spacious layout, complete with two comfortable bedrooms and a fully equipped kitchen, makes it perfect for families or friends. Enjoy easy access to downtown best attractions, restaurants, and shopping, all while having a peaceful home base to return to.
              </p>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="md:sticky md:top-24 bg-white rounded-2xl shadow-2xl p-6 md:p-8 mt-8 md:mt-0">
            <div className="flex justify-between items-center mb-6">
              <div>
                <span className="text-2xl md:text-3xl font-bold">$289</span>
                <span className="text-gray-600"> /night</span>
              </div>
              <div className="flex items-center gap-1 bg-gray-100 px-3 py-1 rounded-full">
                <Star className="w-4 h-4 text-gray-900" />
                <span className="font-medium text-gray-900">4.8</span>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              <button className="w-full bg-gradient-to-r from-gray-900 to-black text-white py-3 md:py-4 rounded-xl
                font-medium hover:from-black hover:to-gray-900 transition-all duration-300 
                transform hover:scale-[1.02] shadow-lg hover:shadow-xl text-sm md:text-base">
                Book Directly - Best Rate
              </button>

              <a 
                href="https://www.booking.com/hotel/ca/stunning-2-bedroom-duplex-in-yaletown-with-fireplace-and-5-min-to-beach.en-gb.html"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full"
              >
                <button className="w-full bg-[#003580] text-white py-3 md:py-4 rounded-xl font-medium 
                  hover:bg-[#00264F] transition-all duration-300 transform hover:scale-[1.02] 
                  shadow-lg hover:shadow-xl text-sm md:text-base">
                  View on Booking.com
                </button>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 text-xs md:text-sm text-gray-500">
              <Shield className="w-4 h-4" />
              <span>Best price guarantee when booking direct</span>
            </div>
          </div>
        </div>

        {/* Neighborhood Section */}
        <div className="py-8 md:py-16 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Explore the Neighborhood</h2>
          
          {/* Restaurants Grid */}
          <div className="mb-8 md:mb-16">
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Utensils className="w-5 h-5 text-gray-900" />
              <span>Notable Restaurants</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
              {nearbyRestaurants.map((restaurant, index) => (
                <div key={index} className="flex items-center justify-between p-4 md:p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
                  <div>
                    <h4 className="font-medium mb-1 group-hover:text-gray-900 transition-colors">{restaurant.name}</h4>
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
            <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-2">
              <Map className="w-5 h-5 text-gray-900" />
              <span>Walking Distances</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
              {walkingDistances.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-3 md:p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-all duration-300 group">
                  <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item.place}</span>
                  <span className="font-medium">{item.time}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* Features Grid */}
        <div className="py-8 md:py-16 border-b">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Premium Amenities & Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div className="space-y-6 md:space-y-8">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                  <Bed className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  <span>Comfortable Bedrooms</span>
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {features.bedrooms.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                  <Home className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  <span>Living Space</span>
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {features.living.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="space-y-6 md:space-y-8">
              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                  <Utensils className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  <span>Fully Equipped Kitchen</span>
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {features.kitchen.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-gray-50 p-6 md:p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 flex items-center gap-3">
                  <Coffee className="w-5 h-5 md:w-6 md:h-6 text-gray-900" />
                  <span>Modern Amenities</span>
                </h3>
                <ul className="space-y-3 md:space-y-4">
                  {features.amenities.map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex-shrink-0 flex items-center justify-center">
                        <Check className="w-4 h-4 md:w-5 md:h-5 text-gray-900 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-sm md:text-base text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* Experience Section */}
        <div className="py-8 md:py-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 md:mb-12">Exceptional Stay Experience</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            <div className="p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-4 md:mb-6">
                <Shield className="w-8 h-8 md:w-10 md:h-10 text-gray-900 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Professional Hosting</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Dedicated property management with 24/7 support and professional cleaning services</p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-4 md:mb-6">
                <MapPin className="w-8 h-8 md:w-10 md:h-10 text-gray-900 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Prime Location</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Steps from the beach, downtown attractions, and Vancouver best dining</p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-4 md:mb-6">
                <Star className="w-8 h-8 md:w-10 md:h-10 text-gray-900 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Duplex Living</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Spacious two-level layout with modern furnishings and cozy fireplace</p>
            </div>

            <div className="p-6 md:p-8 rounded-2xl bg-gray-50 hover:bg-gray-100 transition-all duration-300 transform hover:scale-[1.02] group">
              <div className="mb-4 md:mb-6">
                <Coffee className="w-8 h-8 md:w-10 md:h-10 text-gray-900 group-hover:scale-110 transition-transform" />
              </div>
              <h3 className="text-lg md:text-xl font-semibold mb-2 md:mb-3">Local Experience</h3>
              <p className="text-sm md:text-base text-gray-600 leading-relaxed">Detailed guide to neighborhood attractions and personalized recommendations</p>
            </div>
          </div>
        </div>
      </div>

      {/* Full Gallery Modal */}
      {showFullGallery && (
        <div className="fixed inset-0 bg-black z-50">
          <button
            onClick={() => setShowFullGallery(false)}
            className="absolute top-4 md:top-8 right-4 md:right-8 text-white/90 hover:text-white transition-colors z-50"
          >
            <X className="w-6 h-6 md:w-8 md:h-8" />
          </button>
          
          <div className="h-full flex items-center justify-center">
            {/* Previous Button - Hidden on smallest screens */}
            <button
              onClick={handlePrevImage}
              className="absolute left-2 md:left-8 text-white/90 hover:text-white transition-colors hidden sm:block"
            >
              <ChevronLeft className="w-8 h-8 md:w-12 md:h-12" />
            </button>
            
            <div className="relative h-[80vh] w-[90vw] md:h-[85vh] md:w-[85vw]">
              <Image
                src={images[currentImageIndex]}
                alt={`Gallery image ${currentImageIndex + 1}`}
                fill
                className="object-contain"
              />
            </div>
            
            {/* Next Button - Hidden on smallest screens */}
            <button
              onClick={handleNextImage}
              className="absolute right-2 md:right-8 text-white/90 hover:text-white transition-colors hidden sm:block"
            >
              <ChevronRight className="w-8 h-8 md:w-12 md:h-12" />
            </button>

            {/* Mobile Swipe Instructions */}
            <div className="sm:hidden absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white/75 text-sm">
              Swipe left or right to navigate
            </div>
          </div>
          
          {/* Image Counter */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/90 font-medium text-sm md:text-base">
            {currentImageIndex + 1} / {images.length}
          </div>

          {/* Mobile Navigation Dots */}
          <div className="sm:hidden absolute bottom-12 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentImageIndex(idx)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  idx === currentImageIndex ? 'bg-white' : 'bg-white/50'
                }`}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default HoweProperty;