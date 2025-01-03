import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = ['Início', 'Serviços', 'Contato'];

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <span className="text-xl font-bold font-sora transform transition-all duration-300 hover:scale-110">MP</span>
          
          {/* Desktop Menu */}
          <nav className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 font-medium transform transition-all duration-300 hover:text-black hover:translate-y-[-2px]"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu}
            className="md:hidden transform transition-all duration-300 hover:scale-110"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`
        md:hidden fixed inset-x-0 bg-white shadow-lg transition-all duration-300 ease-in-out
        ${isMenuOpen ? 'top-16 opacity-100' : '-top-full opacity-0'}
      `}>
        <nav className="flex flex-col p-4">
          {menuItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={toggleMenu}
              className="py-3 px-4 text-gray-700 font-medium hover:bg-gray-50 rounded-lg transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;