const SponsorsSection = () => {
  // Placeholder sponsor logos - in production these would be actual sponsor images
  const sponsors = [
    { name: "Sponsor 1", width: "120" },
    { name: "Sponsor 2", width: "140" },
    { name: "Sponsor 3", width: "130" },
    { name: "Sponsor 4", width: "110" },
    { name: "Sponsor 5", width: "125" },
    { name: "Sponsor 6", width: "135" }
  ];

  return (
    <section className="py-12 bg-card border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="text-center text-sm font-semibold text-muted-foreground mb-8 uppercase tracking-wider">
          Resmi Sponsorlarımız
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="sponsor-logo flex items-center justify-center h-16"
              style={{ width: `${sponsor.width}px` }}
            >
              <div className="w-full h-full bg-muted rounded flex items-center justify-center text-xs font-semibold text-muted-foreground">
                {sponsor.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
