
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const CTASection = () => {
  return (
    <section className="py-20 bg-wellness-cream">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-xl bg-white overflow-hidden">
            <div className="relative">
              <div 
                className="absolute inset-0 bg-gradient-to-r from-wellness-green/20 to-wellness-teal/10"
                style={{ clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 70%)" }}
              ></div>
              <CardContent className="p-8 md:p-12 relative z-10">
                <div className="text-center mb-8">
                  <h2 className="text-3xl md:text-4xl font-bold text-wellness-dark mb-4">
                    Begin Your Wellness Journey Today
                  </h2>
                  <p className="text-lg text-wellness-dark/70 max-w-2xl mx-auto">
                    Experience the future of mental health support with our AI wellness guides
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-wellness-cream/70 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-wellness-dark mb-4">Free First Session</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">30-minute video session</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">Personalized AI guide</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">Initial wellness assessment</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">No credit card required</span>
                      </li>
                    </ul>
                    <Button className="w-full bg-wellness-green text-white hover:bg-wellness-green/90">
                      Try Free Session
                    </Button>
                  </div>

                  <div className="bg-wellness-green/10 p-6 rounded-lg">
                    <h3 className="text-xl font-semibold text-wellness-dark mb-4">Membership Benefits</h3>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">Unlimited video sessions</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">Session recordings & summaries</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">Wellness tracking tools</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <span className="w-5 h-5 bg-wellness-green/20 rounded-full flex items-center justify-center">
                          <span className="w-2 h-2 bg-wellness-green rounded-full"></span>
                        </span>
                        <span className="text-wellness-dark/80">24/7 support access</span>
                      </li>
                    </ul>
                    <Button variant="outline" className="w-full border-wellness-green text-wellness-green hover:bg-wellness-green hover:text-white">
                      View All Plans
                    </Button>
                  </div>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
