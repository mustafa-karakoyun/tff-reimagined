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
    <div className="relative h-[500px] md:h-[600px] overflow-hidden bg-tff-gray-dark">
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
          
          <div className="absolute inset-0 container mx-auto px-4 flex items-center">
            <div className="max-w-2xl text-white animate-fade-in">
              <span className="hero-badge mb-4 inline-block">
                {slide.badge}
              </span>
              <h1 className="font-display text-4xl md:text-6xl mb-4 text-balance">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-6">
                {slide.description}
              </p>
              <Button size="lg" className="bg-primary hover:bg-primary-hover font-semibold">
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
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
      >
        <ChevronLeft className="w-6 h-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white rounded-full"
      >
        <ChevronRight className="w-6 h-6" />
      </Button>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentSlide 
                ? "bg-white w-8" 
                : "bg-white/50 hover:bg-white/75"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
