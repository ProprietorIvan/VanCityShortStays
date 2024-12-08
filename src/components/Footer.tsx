import React from 'react';
import { Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <div className="relative mt-16">
      <footer className="bg-gradient-to-b from-gray-900/95 to-black backdrop-blur-sm text-white py-12 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* We are here to help Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              We are here to help
            </h3>
            <div className="h-1 w-12 bg-orange-600 mb-4"></div>
            <p className="text-gray-300">
              If you do not see the service you need, contact us. At A-Z Handyman, no task is too big or small—we are ready to take on new challenges and get the job done right.
            </p>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              USEFUL <span className="text-yellow-500">LINKS</span>
            </h3>
            <div className="h-1 w-12 bg-orange-600 mb-4"></div>
            <ul className="space-y-2 text-gray-300">
              <li>About Us</li>
              <li>Services</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Opening Hours Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              OPENING <span className="text-yellow-500">HOURS</span>
            </h3>
            <div className="h-1 w-12 bg-orange-600 mb-4"></div>
            <p className="text-gray-300">
              Open 24 hours a day, 7 days a week!
            </p>
          </div>

          {/* Contact Here Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">
              CONTACT <span className="text-yellow-500">HERE</span>
            </h3>
            <div className="h-1 w-12 bg-orange-600 mb-4"></div>
            <div className="text-gray-300 space-y-2">
              <p>Address: 1217 Howe St. Vancouver, BC V6Z 1R3</p>
              <p>Phone: +1 778-653-4862</p>
              <p>Email: info@azhandyman.ca</p>
              <div className="flex space-x-4 mt-4">
                <div className="p-2 bg-neutral-900 hover:bg-neutral-800 cursor-pointer">
                  <Facebook size={20} />
                </div>
                <div className="p-2 bg-neutral-900 hover:bg-neutral-800 cursor-pointer">
                  <Twitter size={20} />
                </div>
                <div className="p-2 bg-neutral-900 hover:bg-neutral-800 cursor-pointer">
                  <Linkedin size={20} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()}. ALL RIGHTS RESERVED</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white">TERMS & CONDITION</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;