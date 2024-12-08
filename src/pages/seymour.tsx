import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  X, ChevronLeft, ChevronRight, Bed, Bath, Users, Home, Star, Check,
  MapPin, Clock, Shield, Coffee, Utensils, Wine, Map, ChevronRight as ArrowRight
} from 'lucide-react';

const SeymourProperty = () => {
  const [showFullGallery, setShowFullGallery] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = Array.from({ length: 10 }, (_, i) => `/photos/seymour/${i + 1}.jpeg`);

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation Menu */}
      <header className="sticky top-0 bg-white border-b z-50">
        <div className="max-w-7xl mx-auto px-4">
          <nav className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Home className="w-6 h-6 text-grey-700" />
              <span className="font-medium text-xl">Stylish One-Bedroom Loft in Downtown Core</span>
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
              Stylish One-Bedroom Loft in Downtown Core
            </h1>
            <div className="flex items-center gap-4 text-lg mb-8">
              <div className="flex items-center gap-1">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-semibold">4.9</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">28 reviews</span>
              <span className="text-gray-300">|</span>
              <span className="text-gray-600">Downtown Vancouver</span>
            </div>
            <div className="flex gap-8 py-6 border-y">
              <div className="flex items-center gap-3">
                <Users className="w-6 h-6" />
                <div>
                  <p className="font-medium">Up to 2 guests</p>
                  <p className="text-sm text-gray-500">Perfect for couples</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bed className="w-6 h-6" />
                <div>
                  <p className="font-medium">1 bedroom</p>
                  <p className="text-sm text-gray-500">Queen bed</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Bath className="w-6 h-6" />
                <div>
                  <p className="font-medium">1 bathroom</p>
                  <p className="text-sm text-gray-500">Modern fixtures</p>
                </div>
              </div>
            </div>

            {/* Core Description */}
            <div className="mt-8 text-lg text-gray-600 leading-relaxed">
              <p>
                Discover ultimate downtown living in this stylish one-bedroom penthouse! Enjoy breathtaking city views from a sleek, modern living space. The cozy bedroom features a plush queen bed, while the kitchen comes fully equipped for your cooking needs. Perfectly situated just steps from top dining, shopping, and entertainment spots, this penthouse offers an ideal retreat for both business and leisure travelers. Make your stay unforgettable with this blend of comfort and luxury in the heart of the city.
              </p>
            </div>
          </div>

          {/* Booking Widget */}
          <div className="sticky top-24">
            <div className="bg-white rounded-2xl shadow-2xl p-8">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <span className="text-3xl font-bold">$299</span>
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
                  Book Directly - Best Rate
                </button>

                <a 
                  href="https://www.airbnb.com/rooms/1284311915269371636?source_impression_id=p3_1733694162_P3q_uyHvl7BCFL3L"
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

                <a 
                  href="https://booking.com/hotel/ca/stunning-loft-in-yaletown-with-panoramic-city-views.en.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <button className="w-full bg-[#003580] text-white py-4 rounded-xl font-medium 
                    hover:bg-[#00357A] transition-all duration-300 transform hover:scale-[1.02] 
                    shadow-lg hover:shadow-xl">
                    View on Booking.com
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
              {[
                { name: "Joe Fortes", cuisine: "Seafood", rating: "4.7", distance: "5 min", price: "$$$$" },
                { name: "Nightingale", cuisine: "Modern Canadian", rating: "4.8", distance: "3 min", price: "$$$" },
                { name: "Glowbal", cuisine: "International", rating: "4.6", distance: "7 min", price: "$$$" },
                { name: "Hydra", cuisine: "Mediterranean", rating: "4.7", distance: "6 min", price: "$$$" }
              ].map((restaurant, index) => (
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
              {[
                { place: "Vancouver City Centre Station", time: "3 minutes" },
                { place: "Robson Street Shopping", time: "2 minutes" },
                { place: "Vancouver Art Gallery", time: "5 minutes" },
                { place: "Granville Entertainment", time: "4 minutes" },
                { place: "Canada Place", time: "12 minutes" }
              ].map((item, index) => (
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
            {/* Bedroom Features */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Bed className="w-6 h-6 text-emerald-700" />
                  <span>Luxurious Bedroom</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Luxurious queen bed with premium linens",
                    "Blackout curtains for optimal rest",
                    "Built-in closet with organizers",
                    "Smart TV in bedroom",
                    "City views from bedroom window"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Living Space Features */}
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Home className="w-6 h-6 text-emerald-700" />
                  <span>Living Space</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Floor-to-ceiling windows",
                    "Modern designer furniture",
                    "Dedicated workspace",
                    "Smart home controls",
                    "Stunning city views"
                  ].map((item, idx) => (
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

            {/* Kitchen and Amenities */}
            <div className="space-y-8">
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Utensils className="w-6 h-6 text-emerald-700" />
                  <span>Gourmet Kitchen</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "Full-size stainless appliances",
                    "Quartz countertops",
                    "Coffee maker & grinder",
                    "Complete cookware set",
                    "Wine glasses & bar tools"
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3 group">
                      <div className="w-5 h-5 flex items-center justify-center">
                        <Check className="w-5 h-5 text-emerald-700 group-hover:scale-110 transition-transform" />
                      </div>
                      <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Modern Amenities */}
              <div className="bg-gray-50 p-8 rounded-xl hover:bg-gray-100 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-6 flex items-center gap-3">
                  <Coffee className="w-6 h-6 text-emerald-700" />
                  <span>Modern Amenities</span>
                </h3>
                <ul className="space-y-4">
                  {[
                    "High-speed fiber WiFi",
                    "55\" 4K Smart TV",
                    "Sonos speaker",
                    "In-suite laundry",
                    "Central air conditioning"
                  ].map((item, idx) => (
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
              <p className="text-gray-600 leading-relaxed">Prime downtown location with easy access to Vancouver best attractions</p>
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
              onClick={() => setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)}
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
              onClick={() => setCurrentImageIndex((prev) => (prev + 1) % images.length)}
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

export default SeymourProperty;