import React, { useState } from "react";

export const Header = (): JSX.Element => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="flex flex-col items-start bg-transparent relative self-stretch w-full flex-[0_0_auto]">
      {/* Navigation Bar */}
      <nav className="w-full bg-[#1D1F1A] px-4 z-50" style={{ height: '90px' }}>
        <div className="flex items-center justify-between max-w-7xl mx-auto h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img
              className="h-5 w-auto"
              alt="Logo"
              src="https://c.animaapp.com/K3FjWwF5/img/logo-icon.png"
            />
          </div>

          {/* Desktop Menu - Center */}
          <div className="hidden md:flex items-center space-x-12">
            <a href="#" className="text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide font-['Chakra_Petch']">
              HOME
            </a>
            <a href="#" className="text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide font-['Chakra_Petch']">
              ABOUT
            </a>
            <a href="#" className="text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide font-['Chakra_Petch']">
              SERVICES
            </a>
            <a href="#" className="text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide font-['Chakra_Petch']">
              BLOG
            </a>
            <a href="#" className="text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide font-['Chakra_Petch']">
              SHOP
            </a>
          </div>

          {/* Mobile/Desktop Hamburger Menu */}
          <button
            className="flex items-center justify-center bg-transparent p-0 m-0 border-0 outline-none ring-0 focus:outline-none focus:ring-0 active:outline-none appearance-none transition-transform duration-200 active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="메뉴 열기"
          >
            <img
              className={`h-5 w-auto bg-transparent transform transition-transform duration-300 ${isMobileMenuOpen ? 'rotate-90 scale-110' : 'rotate-0'}`}
              alt="Menu"
              src="https://c.animaapp.com/K3FjWwF5/img/menu-icon.png"
            />
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className={`md:hidden absolute top-[90px] left-0 w-full bg-[#1D1F1A] border-b border-[#444] transition-all duration-300 transform origin-top ${
          isMobileMenuOpen ? 'opacity-100 visible translate-y-0 scale-y-100' : 'opacity-0 invisible -translate-y-2 scale-y-95'
        }`}>
          <div className="px-4 py-4 space-y-4">
            <a href="#" className="block text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide py-2 font-['Chakra_Petch']">
              HOME
            </a>
            <a href="#" className="block text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide py-2 font-['Chakra_Petch']">
              ABOUT
            </a>
            <a href="#" className="block text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide py-2 font-['Chakra_Petch']">
              SERVICES
            </a>
            <a href="#" className="block text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide py-2 font-['Chakra_Petch']">
              BLOG
            </a>
            <a href="#" className="block text-white hover:text-[#adff00] transition-colors font-medium text-[16px] uppercase tracking-wide py-2 font-['Chakra_Petch']">
              SHOP
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative self-stretch w-full h-[200px] sm:h-[300px] lg:h-[400px]">
        <div className="flex flex-col w-full h-full items-center justify-center gap-2 sm:gap-[9px] px-4 sm:px-5 py-0 relative bg-[url(https://c.animaapp.com/K3FjWwF5/img/img.png)] bg-cover bg-[50%_50%]">
          <div className="relative self-stretch font-h2 font-[number:var(--h2-font-weight)] text-white text-[32px] sm:text-[48px] lg:text-[length:var(--h2-font-size)] text-center tracking-[var(--h2-letter-spacing)] leading-[var(--h2-line-height)] [font-style:var(--h2-font-style)]">
            WISDOM
          </div>

          <div className="flex items-center justify-center gap-2 sm:gap-[9px] relative self-stretch w-full flex-[0_0_auto]">
            <p className="relative w-fit mt-[-1.00px] font-sub-heading font-[number:var(--sub-heading-font-weight)] text-white text-[12px] sm:text-[length:var(--sub-heading-font-size)] text-center tracking-[var(--sub-heading-letter-spacing)] leading-[var(--sub-heading-line-height)] [font-style:var(--sub-heading-font-style)] px-4">
              영상을 보고 위즈덤을 작성한 후 표현행위를 완료 해주세요!
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
