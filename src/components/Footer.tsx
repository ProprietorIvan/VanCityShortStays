import React from 'react';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Vancouver Stay</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Experience luxury living in Vancouver&apos;s finest neighborhoods. Our curated collection 
              of premium properties offers the perfect blend of comfort and sophistication.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-gray-400 transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Explore</h3>
            <ul className="space-y-3 text-gray-400">
              <li>
                <a href="/properties" className="hover:text-white transition-colors">Our Properties</a>
              </li>
              <li>
                <a href="/locations" className="hover:text-white transition-colors">Neighborhoods</a>
              </li>
              <li>
                <a href="/about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="/partner" className="hover:text-white transition-colors">Partner With Us</a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span>+1 (604) 555-0123</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span>info@vancouverstay.com</span>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span>Downtown Vancouver, BC</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Stay Updated</h3>
            <p className="text-gray-400 text-sm">
              Subscribe to receive updates about new properties and exclusive offers.
            </p>
            <div className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address"
                className="bg-white/10 px-4 py-2 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white/20"
              />
              <button className="bg-white text-black px-4 py-2 rounded-lg hover:bg-white/90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Vancouver Stay. All rights reserved.
            </p>
            <div className="flex space-x-8">
              <a href="/privacy" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;