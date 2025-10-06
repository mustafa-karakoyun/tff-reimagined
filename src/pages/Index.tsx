import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import NewsGrid from "@/components/NewsGrid";
import MatchSection from "@/components/MatchSection";
import SponsorsSection from "@/components/SponsorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <main>
        <HeroCarousel />
        <NewsGrid />
        <MatchSection />
        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
