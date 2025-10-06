const SponsorsSection = () => {
  const sponsors = [
    "Sponsor 1",
    "Sponsor 2", 
    "Sponsor 3",
    "Sponsor 4",
    "Sponsor 5",
    "Sponsor 6"
  ];

  return (
    <section className="py-6 bg-muted border-y border-border">
      <div className="container mx-auto px-4">
        <h3 className="font-display text-sm font-bold mb-4 border-b border-border pb-2">Sponsorlarımız</h3>
        
        <div className="grid grid-cols-3 md:grid-cols-6 gap-4 items-center justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div
              key={index}
              className="sponsor-logo w-20 h-16 flex items-center justify-center"
            >
              <div className="w-full h-full bg-card rounded flex items-center justify-center border border-border">
                <span className="text-xs font-semibold text-muted-foreground text-center px-1">
                  {sponsor}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
