import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStadium from "@/assets/hero-stadium.jpg";

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: heroStadium,
      badge: "Milli Takım",
      title: "A Milli Takım Avrupa Şampiyonası'na Hazırlanıyor",
      description: "Teknik heyet ve futbolcular yoğun tempo ile çalışmalara devam ediyor"
    },
    {
      image: heroStadium,
      badge: "Süper Lig",
      title: "Süper Lig'de Şampiyonluk Yarışı Kızışıyor",
      description: "Puan tablosunda üst sıralarda çekişme devam ediyor"
    },
    {
      image: heroStadium,
      badge: "Genç Takımlar",
      title: "U21 Milli Takımımız Önemli Galibiyetler Alıyor",
      description: "Genç yetenekler sahada göz dolduruyor"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[300px] md:h-[350px] overflow-hidden bg-tff-gray-dark border-b-2 border-primary">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-xl text-white">
              <span className="hero-badge mb-2 inline-block">
                {slide.badge}
              </span>
              <h1 className="font-display text-2xl md:text-3xl mb-2 font-bold leading-tight">
                {slide.title}
              </h1>
              <p className="text-sm md:text-base text-white/90 mb-3">
                {slide.description}
              </p>
              <Button size="sm" className="bg-white text-primary hover:bg-white/90 font-semibold text-xs">
                Detayları İncele
              </Button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="icon"
        onClick={prevSlide}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-8 h-8"
      >
        <ChevronLeft className="w-4 h-4" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full w-8 h-8"
      >
        <ChevronRight className="w-4 h-4" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-1.5 h-1.5 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-6" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
