
import { Button } from "@/components/ui/button";
import { Mic, Video, MessageCircle, Heart, User } from "lucide-react";

const VideoCallSection = () => {
  return (
    <section id="features" className="py-20 bg-wellness-cream/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-wellness-dark mb-4">Experience AI Video Therapy</h2>
          <p className="text-lg text-wellness-dark/70 max-w-2xl mx-auto">
            Our intuitive interface makes connecting with your AI wellness guide simple and comfortable
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="flex flex-col">
            {/* Video call header */}
            <div className="bg-wellness-green text-white p-4 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-wellness-green" />
                </div>
                <span className="font-medium">Session with Emma - AI Wellness Guide</span>
              </div>
              <span className="text-sm">25:12 remaining</span>
            </div>

            {/* Video call main content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 h-[400px]">
              {/* Main video */}
              <div className="lg:col-span-2 bg-gray-100 relative">
                <img 
                  src="https://images.unsplash.com/photo-1518495973542-4542c06a5843" 
                  alt="AI therapist" 
                  className="w-full h-full object-cover opacity-90"
                />
                <div className="absolute top-4 right-4 bg-wellness-green/80 text-white text-xs py-1 px-2 rounded">
                  AI Wellness Guide
                </div>
              </div>

              {/* User video */}
              <div className="bg-gray-800 relative">
                {/* Mini user video */}
                <div className="w-full h-full flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1582562124811-c09040d0a901" 
                    alt="User view" 
                    className="w-full h-full object-cover opacity-50"
                  />
                </div>
                <div className="absolute bottom-4 left-4 bg-black/50 text-white text-xs py-1 px-2 rounded">
                  You
                </div>

                {/* Chat messages */}
                <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-3">
                  <div className="mb-2 text-sm">
                    <span className="font-medium text-wellness-green">Emma:</span> 
                    <span className="text-wellness-dark/80"> How are you feeling today?</span>
                  </div>
                  <div className="flex gap-2">
                    <input 
                      type="text" 
                      placeholder="Type a message..."
                      className="flex-1 text-sm px-3 py-2 border border-wellness-green/30 rounded-full focus:outline-none focus:ring-1 focus:ring-wellness-green"
                    />
                    <button className="bg-wellness-green text-white p-2 rounded-full">
                      <MessageCircle className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Video call controls */}
            <div className="bg-wellness-dark p-4 flex justify-center items-center gap-4">
              <button className="bg-wellness-green/90 hover:bg-wellness-green text-white p-3 rounded-full">
                <Mic className="h-5 w-5" />
              </button>
              <button className="bg-wellness-green/90 hover:bg-wellness-green text-white p-3 rounded-full">
                <Video className="h-5 w-5" />
              </button>
              <button className="bg-white text-wellness-green p-3 rounded-full">
                <Heart className="h-5 w-5" />
              </button>
              <Button className="bg-red-500 hover:bg-red-600 text-white px-6">
                End Session
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-wellness-dark/80 mb-4">
            Start your journey towards better mental well-being today
          </p>
          <Button className="bg-wellness-green text-white hover:bg-wellness-green/90 px-8 py-6 text-lg">
            Schedule Your Free Session
          </Button>
        </div>
      </div>
    </section>
  );
};

export default VideoCallSection;
