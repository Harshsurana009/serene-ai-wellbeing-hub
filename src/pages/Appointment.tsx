
import { useState } from "react";
import { createConversation } from "@/services/tavusApi";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Video, Phone } from "lucide-react";

const Appointment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [joinUrl, setJoinUrl] = useState<string | null>(null);

  const startSession = async () => {
    setIsLoading(true);
    try {
      const response = await createConversation({
        userId: `user_${Math.random().toString(36).substring(2, 9)}`,
        sessionType: "therapy",
        duration: 30, // 30 minutes session
      });
      
      setJoinUrl(response.joinUrl);
      toast.success("Your session is ready!");
    } catch (error) {
      toast.error("Failed to create session. Please try again.");
      console.error("Session creation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-wellness-cream/50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-4xl font-bold text-wellness-dark mb-6">
            Start Your Wellness Journey
          </h1>
          <p className="text-lg text-wellness-dark/70 mb-8">
            Connect with your AI wellness guide for a free 30-minute consultation
          </p>
          
          {!joinUrl ? (
            <Button 
              onClick={startSession}
              disabled={isLoading}
              size="lg"
              className="bg-wellness-green text-white hover:bg-wellness-green/90 px-8 py-6 text-lg"
            >
              <Video className="mr-2" />
              {isLoading ? "Setting up your session..." : "Start Free Session"}
            </Button>
          ) : (
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-wellness-dark mb-4">
                  Your Session is Ready!
                </h2>
                <p className="text-wellness-dark/70 mb-6">
                  Click the button below to join your video session with your AI wellness guide
                </p>
                <Button
                  asChild
                  size="lg"
                  className="bg-wellness-green text-white hover:bg-wellness-green/90 px-8 py-6 text-lg"
                >
                  <a href={joinUrl} target="_blank" rel="noopener noreferrer">
                    <Phone className="mr-2" />
                    Join Video Session
                  </a>
                </Button>
              </div>
              <p className="text-sm text-wellness-dark/60">
                Please ensure your camera and microphone are enabled before joining
              </p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-wellness-dark mb-3">
              Private & Secure
            </h3>
            <p className="text-wellness-dark/70">
              Your sessions are completely private and encrypted end-to-end
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-wellness-dark mb-3">
              Available 24/7
            </h3>
            <p className="text-wellness-dark/70">
              Connect with your AI wellness guide any time, day or night
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold text-wellness-dark mb-3">
              No Commitment
            </h3>
            <p className="text-wellness-dark/70">
              Try your first session for free with no obligations
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Appointment;
