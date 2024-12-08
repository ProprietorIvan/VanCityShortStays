import { useRouter } from "next/router";
import { useState } from "react";
import { Menu, X } from 'lucide-react';

const Navigation = ({ currentPage, showActions = true, transparent }: any) => {
  const { push } = useRouter()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { text: 'Home', url: '/' },
    // { text: 'About', url: '/about' },
    // { text: 'Services', url: '/services' },
    // { text: 'Why hire us', url: '/why-chose-us', },
    // { text: 'Contact', url: '/contact' },
  ];

  return (
    <nav className={`relative ${transparent ? 'bg-transparent !absolute left-0 top-0 w-full z-50' : "bg-withe"}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20 sm:h-32">
          {/* Logo - Updated with responsive sizes */}
          <div className="flex items-center gap-2">
            <div className="w-20 sm:w-32">
              <img src="./logo.webp" alt='Handyman logo' className="w-full h-auto" />
            </div>
          </div>

          {/* Desktop Navigation */}

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            {showActions ? (
              <div className='flex flex-1 items-center justify-end gap-8 w-100'>
                {navLinks.map((link, index) => (
                  <a
                    key={index}
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      push(link.url)
                    }}
                    className={`text-xl hover:text-[#ffc526] transition-colors ${transparent ? 'text-white hover:text-[#FACC15]' : 'text-gray-500'}`}
                  >
                    {link.text}
                  </a>
                ))}
              </div>

            ) : (
              <button
                onClick={() => window.open('/services', '_current')}
                className="bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
              >
                Get Your Quote Now
              </button>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 stroke-white" />
              ) : (
                <Menu className="h-6 w-6 stroke-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className={`md:hidden absolute top-16 left-0 right-0 bg-white ${transparent ? 'bg-white' : null} border-b shadow-lg z-50`}>
            <div className="px-4 py-2 space-y-1">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    push(link.url)
                    setIsMenuOpen(false);
                  }}
                  className={`block py-2 px-4 text-gray-500 hover:bg-gray-50 rounded-lg transition-colors`}
                >
                  {link.text}
                </a>
              ))}

              {/* Mobile Actions */}
              <div>
                {showActions ? (
                  null
                ) : (
                  <button
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                    className="w-full bg-black text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
                  >
                    Get Started Now
                  </button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;