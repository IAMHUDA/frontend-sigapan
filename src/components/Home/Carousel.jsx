import { useState, useEffect } from 'react';
import Pniten from '../../assets/pasar/Niten.jpg';
import Pjanten from '../../assets/pasar/Janten.jpg';
import Pbarongan from '../../assets/pasar/Barongan.jpg';

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
      subtitle: "DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN KABUPATEN BANTUL",
      textPosition: "center"
    },
    {
      id: 3,
      image: Pbarongan,
      title: "SIGAPAN (SISTEM INFORMASI HARGA PANGAN)",
      subtitle: "DINAS KOPERASI, UKM, PERINDUSTRIAN DAN PERDAGANGAN KABUPATEN BANTUL",
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
    // Slight delay before changing slide index to allow opacity transition to start
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      // Short delay after changing slide to reset transitioning state
      // This allows the new slide's content to animate in
      setTimeout(() => setIsTransitioning(false), 100);
    }, 200); // This delay controls when the new image appears
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
        // Added max-w-2xl to the flex container for left/right to allow text to spread
        return 'items-start text-left pl-8 md:pl-16 lg:pl-24 xl:pl-32 max-w-[80%] md:max-w-[70%] lg:max-w-[60%]';
      case 'right':
        // Added max-w-2xl to the flex container for left/right to allow text to spread
        return 'items-end text-right pr-8 md:pr-16 lg:pr-24 xl:pr-32 max-w-[80%] md:max-w-[70%] lg:max-w-[60%] ml-auto'; // ml-auto pushes it to the right
      default:
        return 'items-center text-center max-w-[90%] md:max-w-[80%] lg:max-w-[70%] mx-auto'; // Centered text, with mx-auto
    }
  };

  const getTextAnimationClass = (position, isActive) => {
    if (!isActive) {
      // For inactive slides, hide and reset position
      switch (position) {
        case 'left':
          return 'opacity-0 -translate-x-full'; // Animate from left out
        case 'right':
          return 'opacity-0 translate-x-full'; // Animate from right out
        default:
          return 'opacity-0 translate-y-8'; // Animate from bottom out
      }
    }
    
    // For active slide, animate into view
    return 'opacity-100 translate-y-0 translate-x-0';
  };

  return (
    <div className="relative w-full max-w-[1800px] mx-auto h-64 sm:h-80 md:h-96 lg:h-[500px] xl:h-[600px] overflow-hidden shadow-2xl">
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
            {/* This div itself is now directly handling position and width constraints */}
            <div className={`absolute inset-0 flex flex-col justify-center ${getTextPositionClass(slide.textPosition)}`}>
              <div
                className={`transform transition-all duration-700 ease-out delay-300 ${getTextAnimationClass(
                  slide.textPosition,
                  index === currentSlide && !isTransitioning
                )}`}
              >
                <h2 className="text-xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-4xl font-bold text-white mb-2 md:mb-4 drop-shadow-lg">
                  {slide.title}
                </h2>
                {/* Removed max-w from <p> as it's now handled by the parent div in getTextPositionClass */}
                <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-200 drop-shadow-md">
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