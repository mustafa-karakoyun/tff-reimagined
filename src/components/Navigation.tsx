import { useState } from "react";
import { Menu, X, Search } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Ana Sayfa",
    "TFF",
    "Milli Takımlar",
    "Ligler",
    "Kupalar",
    "Kadın Futbolu",
    "FGD",
    "Bilgi Bankası"
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center font-display text-xl font-bold text-primary-foreground">
              TFF
            </div>
            <div className="hidden md:block">
              <div className="font-display text-base font-bold text-foreground leading-tight">
                Türkiye Futbol
              </div>
              <div className="font-display text-xs font-semibold text-muted-foreground">
                Federasyonu
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-0.5">
            {navItems.map((item) => (
              <a
                key={item}
                href="#"
                className="nav-link px-3 py-2 hover:bg-muted transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Search and Menu */}
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <Search className="w-5 h-5" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden pb-4 animate-fade-in">
            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="nav-link px-4 py-3 rounded-md hover:bg-secondary transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
