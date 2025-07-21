import { useState, useEffect } from 'react';
import Pniten from '../../assets/pasar/pasar-niten.jpg';
import Pjanten from '../../assets/pasar/pasar-janten.jpg';
import Pbarongan from '../../assets/pasar/pasar-barongan.jpg';

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Data carousel dengan gambar dan teks
  const slides = [
    {
      id: 1,
      image: Pniten,
      title: "SIGAPAN (SISTEM INFORMASI HARGA PANGAN)",
      subtitle: "DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN KABUPATEN BANTUL",
      textPosition: "left"
    },
    {
      id: 2,
      image: Pjanten,
      title: "SIGAPAN (SISTEM INFORMASI HARGA PANGAN)",
      subtitle: "",
      textPosition: "center"
    },
    {
      id: 3,
      image: Pbarongan,
      title: "SIGAPAN (SISTEM INFORMASI HARGA PANGAN)",
      subtitle: "",
      textPosition: "right"
    }
  ];

  // Auto slide setiap 4 detik
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const goToSlide = (index) => {
    if (isTransitioning || index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200);
  };

  const getTextPositionClass = (position) => {
    switch (position) {
      case 'left':
        return 'items-start text-left pl-8 md:pl-16 lg:pl-24 xl:pl-32';
      case 'right':
        return 'items-end text-right pr-8 md:pr-16 lg:pr-24 xl:pr-32';
      default:
        return 'items-center text-center';
    }
  };

  const getTextAnimationClass = (position, isActive) => {
    if (!isActive) return 'opacity-0 translate-y-8';
    
    switch (position) {
      case 'left':
        return 'opacity-100 translate-y-0 translate-x-0';
      case 'right':
        return 'opacity-100 translate-y-0 translate-x-0';
      default:
        return 'opacity-100 translate-y-0';
    }
  };

  return (
    <div className="relative w-full max-w-[1800px] mx-auto h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden rounded-lg shadow-2xl">
      {/* Container gambar */}
      <div className="relative w-full h-full">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
              index === currentSlide && !isTransitioning
                ? 'opacity-100'
                : 'opacity-0'
            }`}
          >
            {/* Gambar background */}
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            
            {/* Teks overlay dengan animasi posisi */}
            <div className={`absolute inset-0 flex flex-col justify-center ${getTextPositionClass(slide.textPosition)}`}>
              <div
                className={`transform transition-all duration-700 ease-out delay-300 ${getTextAnimationClass(
                  slide.textPosition,
                  index === currentSlide && !isTransitioning
                )}`}
              >
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 max-w-md md:max-w-lg lg:max-w-xl drop-shadow-md">
                  {slide.subtitle}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bar slider di tengah bawah */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-8 h-1 sm:w-10 sm:h-1 md:w-12 md:h-1.5 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? 'bg-white shadow-lg'
                : 'bg-white/50 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Fade overlay saat transisi */}
      {isTransitioning && (
        <div className="absolute inset-0 bg-black/20 transition-opacity duration-200" />
      )}
    </div>
  );
};

export default Carousel;