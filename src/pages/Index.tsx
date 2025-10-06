import TopBar from "@/components/TopBar";
import Navigation from "@/components/Navigation";
import HeroCarousel from "@/components/HeroCarousel";
import NewsGridCompact from "@/components/NewsGridCompact";
import MatchSection from "@/components/MatchSection";
import SponsorsSection from "@/components/SponsorsSection";
import SidebarAnnouncements from "@/components/SidebarAnnouncements";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navigation />
      <main>
        <HeroCarousel />
        
        {/* Two-column layout like TFF.org */}
        <div className="container mx-auto px-4 py-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main content - Left column */}
            <div className="lg:col-span-2 space-y-6">
              <div className="border-b-2 border-primary pb-2 mb-4">
                <h2 className="font-display text-lg font-bold">Son Haberler</h2>
              </div>
              <NewsGridCompact />
            </div>

            {/* Sidebar - Right column */}
            <div className="lg:col-span-1">
              <SidebarAnnouncements />
              <div className="mt-6">
                <MatchSection />
              </div>
            </div>
          </div>
        </div>

        <SponsorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
