import { Button } from "@/components/ui/button";
import { MapPin } from "lucide-react";
import heroBgUrl from "@/assets/heroBg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroBgUrl})`,
          boxShadow:"inset 0 0 0 1000px #C5B097aa"
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 sm:px-6 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white mb-6 sm:mb-8 tracking-tight">
          TOGETHER, WE ARE THE <br />
          <span className="text-white drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">CHANGE!</span>
        </h1>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-6 sm:mb-8 text-white text-xs sm:text-sm md:text-base px-2">
          <div>50,000+ Meals Served</div>
          <div className="hidden md:block">|</div>
          <div>10,000+ Animal Fed</div>
          <div className="hidden md:block">|</div>
          <div>15,000+ Plantation Done</div>
          <div className="hidden md:block">|</div>
          <div>1000+ Medicine Donated</div>
        </div>
        
        <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg mb-8 sm:mb-12">
          VOLUNTEER
        </Button>
        
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4 px-2">
          <div className="flex items-center gap-2 bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">LUCKNOW</span>
          </div>
          <div className="flex items-center gap-2 bg-foreground text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">DELHI</span>
          </div>
          <div className="flex items-center gap-2 bg-secondary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm sm:text-base">
            <MapPin className="w-4 h-4 sm:w-5 sm:h-5" />
            <span className="font-semibold">VARANASI</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
