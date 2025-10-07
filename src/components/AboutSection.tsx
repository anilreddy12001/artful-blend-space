import { Button } from "@/components/ui/button";
import img2Url from "@/assets/img2.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-xl">
            <img 
              src={img2Url}
              alt="Children receiving help"
              className="w-full h-[400px] object-cover"
            />
          </div>
          
          <div>
            <h3 className="text-4xl font-bold mb-6 text-foreground">
              At Anonymous Hope Foundation, 
              <span className="text-primary"> we are dedicated</span> to spreading compassion and support across communities—whether human or animal—without judgment or distinction.
            </h3>
            
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-white px-8">
              About Us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
