
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-wellness-dark mb-4">How Our AI Therapy Works</h2>
          <p className="text-lg text-wellness-dark/70 max-w-2xl mx-auto">
            Our advanced AI provides human-like therapeutic interactions through real-time video conversations using Tavus.io technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border border-wellness-green/20 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-wellness-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-wellness-green">1</span>
              </div>
              <h3 className="text-xl font-semibold text-wellness-dark mb-3 text-center">Connect with AI Guide</h3>
              <p className="text-wellness-dark/70 text-center">
                Schedule a session and connect with your personalized AI wellness guide through our secure platform.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-wellness-green/20 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-wellness-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-wellness-green">2</span>
              </div>
              <h3 className="text-xl font-semibold text-wellness-dark mb-3 text-center">Share Your Thoughts</h3>
              <p className="text-wellness-dark/70 text-center">
                Speak naturally to your AI guide who intelligently processes your emotions and adapts responses in real-time.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-wellness-green/20 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="pt-6">
              <div className="w-16 h-16 bg-wellness-cream rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl font-bold text-wellness-green">3</span>
              </div>
              <h3 className="text-xl font-semibold text-wellness-dark mb-3 text-center">Receive Support</h3>
              <p className="text-wellness-dark/70 text-center">
                Experience empathetic responses, practical advice, and personalized mental wellness strategies.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16 pt-10 border-t border-wellness-green/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-wellness-dark">Advanced AI Technology</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-wellness-green flex-shrink-0" />
                  <span className="text-wellness-dark/80">Real-time emotion recognition</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-wellness-green flex-shrink-0" />
                  <span className="text-wellness-dark/80">Natural language processing for human-like conversations</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-wellness-green flex-shrink-0" />
                  <span className="text-wellness-dark/80">Secure end-to-end encrypted video sessions</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="h-6 w-6 text-wellness-green flex-shrink-0" />
                  <span className="text-wellness-dark/80">Personalized therapeutic approaches based on your needs</span>
                </li>
              </ul>
              <Button className="bg-wellness-green text-white hover:bg-wellness-green/90">
                Learn About Our Technology
              </Button>
            </div>
            <div className="bg-wellness-cream rounded-xl p-6 shadow-inner">
              <h4 className="font-semibold text-wellness-dark mb-4">How the AI Processes Your Session:</h4>
              <ol className="space-y-4">
                <li className="pl-4 border-l-2 border-wellness-green">
                  <p className="font-medium text-wellness-dark">1. Secure Video Connection</p>
                  <p className="text-wellness-dark/70 text-sm">Connects to Tavus.io API for real-time video conversation</p>
                </li>
                <li className="pl-4 border-l-2 border-wellness-green">
                  <p className="font-medium text-wellness-dark">2. Emotion Analysis</p>
                  <p className="text-wellness-dark/70 text-sm">Processes verbal and non-verbal cues to understand your emotions</p>
                </li>
                <li className="pl-4 border-l-2 border-wellness-green">
                  <p className="font-medium text-wellness-dark">3. Response Generation</p>
                  <p className="text-wellness-dark/70 text-sm">Creates empathetic, therapeutic responses using evidence-based techniques</p>
                </li>
                <li className="pl-4 border-l-2 border-wellness-green">
                  <p className="font-medium text-wellness-dark">4. Continuous Learning</p>
                  <p className="text-wellness-dark/70 text-sm">Adapts to your communication style and needs over time</p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
