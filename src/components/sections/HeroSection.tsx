import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-wellness-dark">
              Meet Your{" "}
              <span className="text-wellness-green">AI Wellness Guide</span>
            </h1>
            <p className="text-xl text-wellness-dark/80 max-w-lg">
              Experience therapy sessions with our empathetic AI guides,
              designed to support your mental well-being through real-time video
              conversations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                className="bg-wellness-green text-white hover:bg-wellness-green/90 px-8 py-6 text-lg"
                asChild
              >
                <Link to="https://care.springhealth.com/browse/therapists">
                  Try Free Session
                </Link>
              </Button>
              <Button
                variant="outline"
                className="border-wellness-green text-wellness-green hover:bg-wellness-green hover:text-white px-8 py-6 text-lg"
              >
                Learn More <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-video rounded-xl overflow-hidden shadow-xl video-placeholder animate-float">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 h-20 bg-wellness-green/90 rounded-full flex items-center justify-center cursor-pointer">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-16 border-l-white border-b-8 border-b-transparent ml-1"></div>
                </div>
              </div>
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb"
                alt="Serene lake surrounded by trees"
                className="w-full h-full object-cover opacity-80"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-md animate-pulse-gentle">
              <p className="font-medium text-wellness-green">
                98% User Satisfaction
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
