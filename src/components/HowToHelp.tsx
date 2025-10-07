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
    <section className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          <div className="md:col-span-1">
            <h2 className="text-5xl font-bold text-foreground leading-tight">
              HOW<br />CAN<br />YOU<br />HELP<br />US?
            </h2>
          </div>
          
          <div className="md:col-span-3 grid md:grid-cols-3 gap-6">
            {helpOptions.map((option, index) => (
              <Card 
                key={index}
                className="bg-primary text-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold mb-4">{option.title}</h3>
                <p className="text-white/90 leading-relaxed">{option.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelp;
