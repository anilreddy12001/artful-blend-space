const ImpactSection = () => {
  const impacts = [
    { label: "50k+ Meals Served" },
    { label: "19k+ Animal Fed" },
    { label: "19k+ Animal Fed" },
    { label: "19k+ Animal Fed" },
    { label: "19k+ Animal Fed" },
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 className="text-5xl font-bold text-center mb-16 text-foreground">OUR IMPACT</h2>
        
        <div className="relative">
          <div className="absolute inset-0 rounded-2xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=2073"
              alt="Volunteer work"
              className="w-full h-full object-cover opacity-50"
            />
          </div>
          
          <div className="relative grid grid-cols-2 md:grid-cols-3 gap-6 p-8">
            {impacts.map((impact, index) => (
              <div 
                key={index}
                className="bg-secondary text-white px-8 py-6 rounded-xl text-center font-semibold text-lg shadow-lg hover:scale-105 transition-transform"
              >
                {impact.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
