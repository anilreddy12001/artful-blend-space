import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/src/assets/heroBg.jpg')",
          boxShadow:"inset 0 0 0 1000px #C5B097aa"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
          TOGETHER, WE ARE THE <br />
          <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">CHANGE!</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-4 mb-8 text-white text-sm md:text-base">
          <div>50,000+ Meals Served</div>
          <div className="hidden md:block">|</div>
          <div>10,000+ Animal Fed</div>
          <div className="hidden md:block">|</div>
          <div>15,000+ Plantation Done</div>
          <div className="hidden md:block">|</div>
          <div>1000+ Medicine Donated</div>
        </div>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg mb-12">
          VOLUNTEER
        </Button>
        
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">LUCKNOW</span>
          </div>
          <div className="flex items-center gap-2 bg-foreground text-white px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">DELHI</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary text-white px-6 py-3 rounded-full">
            <MapPin className="w-5 h-5" />
            <span className="font-semibold">VARANASI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
