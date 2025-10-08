import { Card } from "@/components/ui/card";

const HowToHelp = () => {
  const helpOptions = [
    {
      title: "Volunteering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Join us in creating a brighter future.",
    },
    {
      title: "Partnering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Join us in creating a brighter future.",
    },
    {
      title: "Volunteering",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Join us in creating a brighter future.",
    },
  ];

  return (
    <section className="py-12 sm:py-20 bg-accent">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-4 gap-8 sm:gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-3xl sm:text-5xl font-bold text-foreground leading-tight">
              HOW<br />CAN<br />YOU<br />HELP<br />US?
            </h2>
          </div>
          
          <div className="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
            {helpOptions.map((option, index) => (
              <Card 
                key={index}
                className="bg-primary text-white p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{option.title}</h3>
                <p className="text-white/90 leading-relaxed text-sm sm:text-base">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
