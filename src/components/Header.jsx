import { useState, useEffect } from 'react';
import logo from "../assets/logoBantul.png"; // Pastikan jalur ini benar relatif ke lokasi file Header.jsx

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMenuOpen(false); // Tutup menu setelah klik link
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      // Offset 80px untuk ruang di bawah header yang fixed
      const offsetTop = targetElement.offsetTop - 80; 
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <>
      <nav
        className={`border-gray-200 transition-all duration-300 fixed top-0 left-0 w-full z-50 px-4 sm:px-6 ${
          isScrolled 
            ? 'bg-[#3E5F44] shadow-lg py-0' 
            : 'bg-[#93DA97] bg-opacity-95'
        }`}
      >
        <div className="w-full flex items-center justify-between px-2 py-2 sm:py-4">
          {/* Logo dan Judul */}
          <a 
            href="#" 
            className="flex items-center space-x-2 sm:space-x-3 rtl:space-x-reverse min-w-0 flex-1 mr-4"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
              setIsMenuOpen(false);
            }}
          >
            <img
              src={logo}
              className={`transition-all duration-300 ${
                isScrolled ? 'h-8 sm:h-10' : 'h-8 sm:h-12 md:h-16'
              } flex-shrink-0`}
              alt="Bantul Logo"
            />
            <div className="flex flex-col min-w-0 flex-1 flex-wrap"> {/* Added flex-wrap */}
              <span className={`text-xs sm:text-sm md:text-lg font-medium truncate sm:whitespace-nowrap transition-colors duration-300 ${
                isScrolled ? 'text-[#E8FFD7]' : 'text-gray-800'
              }`}>
                Pemerintah Kabupaten Bantul
              </span>
              <span className={`transition-all duration-300 ${
                isScrolled ? 'text-sm sm:text-base font-semibold text-white' : 'text-sm sm:text-base md:text-lg font-semibold text-gray-800'
              }`}>
                {/* Teks panjang untuk desktop, singkat untuk mobile */}
                <span className="block sm:hidden text-xs">DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN</span>
                <span className="hidden sm:block lg:whitespace-nowrap">
                  DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN
                </span>
              </span>
            </div>
          </a>

          {/* Tombol Toggle Menu (Hamburger Icon) */}
          <button
            onClick={toggleMenu}
            type="button"
            className={`inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden hover:bg-[#E8FFD7] hover:bg-opacity-20 focus:outline-none focus:ring-2 focus:ring-[#5E936C] flex-shrink-0 transition-colors duration-300 ${
              isScrolled ? 'text-[#E8FFD7]' : 'text-gray-700'
            }`}
            aria-controls="navbar-solid-bg"
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          {/* Menu Navigasi */}
          <div
            className={`${isMenuOpen ? 'block' : 'hidden'} 
              w-full md:block md:w-auto absolute md:static 
              top-full left-0 right-0 
              z-40 md:z-auto`} 
            id="navbar-solid-bg"
          >
            <ul
              className={`flex flex-col font-medium mt-4 rounded-lg 
                md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 
                md:bg-transparent transition-colors duration-300 p-4 md:p-0 
                ${isScrolled 
                  ? 'bg-[#3E5F44] bg-opacity-95' 
                  : 'bg-[#93DA97] bg-opacity-95'
                }`}
            >
              <li>
                <a
                  href="#home"
                  className={`nvb block py-2 px-3 md:p-0 md:bg-transparent transition-all duration-500 ease-in-out transform md:hover:scale-105 font-bold md:decoration-2 ${
                    isScrolled
                      ? 'text-[#E8FFD7] bg-[#5E936C] md:text-[#E8FFD7] md:bg-transparent md:decoration-[#E8FFD7] hover:bg-[#93DA97] md:hover:bg-transparent md:hover:text-[#93DA97]'
                      : 'text-white bg-[#5E936C] md:text-[#3E5F44] md:bg-transparent md:decoration-[#3E5F44] hover:bg-[#3E5F44] hover:text-white md:hover:bg-transparent md:hover:text-[#5E936C]'
                  }`}
                  aria-current="page"
                  onClick={(e) => handleSmoothScroll(e, '#home')}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#harga-pangan"
                  className={`nvb block py-2 px-3 md:p-0 whitespace-nowrap md:border-0 transition-all duration-500 ease-in-out transform md:hover:scale-105 font-medium ${
                    isScrolled
                      ? 'text-[#E8FFD7] hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#93DA97] decoration-2'
                      : 'text-gray-800 hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#3E5F44] decoration-2'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, '#harga-pangan')}
                >
                  Harga Pangan
                </a>
              </li>
              <li>
                <a
                  href="#stok-bahanpokok"
                  className={`nvb block py-2 px-3 md:p-0 whitespace-nowrap md:border-0 transition-all duration-500 ease-in-out transform md:hover:scale-105 font-medium ${
                    isScrolled
                      ? 'text-[#E8FFD7] hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#93DA97] decoration-2'
                      : 'text-gray-800 hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#3E5F44] decoration-2'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, '#stok-bahanpokok')}
                >
                  Stok Bahan
                </a>
              </li>
              <li>
                <a
                  href="#pasar"
                  className={`nvb block py-2 px-3 md:p-0 md:border-0 transition-all duration-500 ease-in-out transform md:hover:scale-105 font-medium ${
                    isScrolled
                      ? 'text-[#E8FFD7] hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#93DA97] decoration-2'
                      : 'text-gray-800 hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#3E5F44] decoration-2'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, '#pasar')}
                >
                  Pasar
                </a>
              </li>
              <li>
                <a
                  href="#tabel-harga"
                  className={`nvb block py-2 px-3 md:p-0 whitespace-nowrap md:border-0 transition-all duration-500 ease-in-out transform md:hover:scale-105 font-medium ${
                    isScrolled
                      ? 'text-[#E8FFD7] hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#93DA97] decoration-2'
                      : 'text-gray-800 hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#3E5F44] decoration-2'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, '#tabel-harga')}
                >
                  Tabel Harga
                </a>
              </li>
              <li>
                <a
                  href="#kontak"
                  className={`nvb block py-2 px-3 md:p-0 whitespace-nowrap md:border-0 transition-all duration-500 ease-in-out transform md:hover:scale-105 font-medium ${
                    isScrolled
                      ? 'text-[#E8FFD7] hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#93DA97] decoration-2'
                      : 'text-gray-800 hover:bg-[#5E936C] hover:text-white md:hover:bg-transparent md:hover:text-[#3E5F44] decoration-2'
                  }`}
                  onClick={(e) => handleSmoothScroll(e, '#kontak')}
                >
                  Kontak Kami
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;