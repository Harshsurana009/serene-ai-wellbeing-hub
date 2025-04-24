
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type TestimonialProps = {
  quote: string;
  name: string;
  title: string;
  avatarUrl?: string;
  initials: string;
};

const Testimonial = ({ quote, name, title, avatarUrl, initials }: TestimonialProps) => {
  return (
    <Card className="testimonial-card border-wellness-green/10">
      <CardContent className="p-6">
        <div className="mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 11C10 12.6569 8.65685 14 7 14C5.34315 14 4 12.6569 4 11C4 9.34315 5.34315 8 7 8C8.65685 8 10 9.34315 10 11Z" fill="rgba(76, 167, 113, 0.4)"></path>
            <path d="M17 14C18.6569 14 20 12.6569 20 11C20 9.34315 18.6569 8 17 8C15.3431 8 14 9.34315 14 11C14 12.6569 15.3431 14 17 14Z" fill="rgba(76, 167, 113, 0.4)"></path>
            <path d="M3 15C3 13.3431 4.34315 12 6 12H8C9.65685 12 11 13.3431 11 15V18C11 19.1046 10.1046 20 9 20H5C3.89543 20 3 19.1046 3 18V15Z" fill="rgba(76, 167, 113, 0.7)"></path>
            <path d="M13 15C13 13.3431 14.3431 12 16 12H18C19.6569 12 21 13.3431 21 15V18C21 19.1046 20.1046 20 19 20H15C13.8954 20 13 19.1046 13 18V15Z" fill="rgba(76, 167, 113, 0.7)"></path>
          </svg>
        </div>
        <p className="text-wellness-dark/80 italic mb-6">{quote}</p>
        <div className="flex items-center gap-3">
          <Avatar className="h-10 w-10 border-2 border-wellness-green/20">
            {avatarUrl ? (
              <AvatarImage src={avatarUrl} alt={name} />
            ) : null}
            <AvatarFallback className="bg-wellness-cream text-wellness-green">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div>
            <p className="font-medium text-wellness-dark">{name}</p>
            <p className="text-sm text-wellness-dark/60">{title}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-wellness-dark mb-4">What Our Users Say</h2>
          <p className="text-lg text-wellness-dark/70 max-w-2xl mx-auto">
            Real feedback from people who've experienced our AI wellness guides
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Testimonial
            quote="I was skeptical about AI therapy, but it felt like talking to a real therapist. The video call made all the difference - seeing a face respond to my emotions was incredibly comforting."
            name="Sarah J."
            title="Anxiety Management"
            initials="SJ"
          />
          <Testimonial
            quote="Available whenever I need it, day or night. The AI guide remembers our past conversations and builds on them, making each session feel connected. It's been crucial for my depression."
            name="Michael T."
            title="Depression Support"
            initials="MT"
          />
          <Testimonial
            quote="As someone who finds it hard to open up, talking to the AI was surprisingly easy. It never judges, and the advice is always thoughtful. The video format makes it feel like a real connection."
            name="Aisha K."
            title="Stress Management"
            initials="AK"
          />
          <Testimonial
            quote="I use it as a supplement to my regular therapy. It helps me practice the techniques my therapist taught me, and I can talk through my thoughts any time I need to."
            name="David L."
            title="Cognitive Behavioral Therapy"
            initials="DL"
          />
          <Testimonial
            quote="The privacy aspect was important to me. I love that I can have these conversations without worrying about being judged by a human therapist. The AI's responses are surprisingly insightful."
            name="Emma R."
            title="Life Transitions"
            initials="ER"
          />
          <Testimonial
            quote="I've tried text-based AI therapy before, but the video call format of Serene makes it so much more personal and effective. It's become part of my daily mental wellness routine."
            name="James W."
            title="Daily Wellness"
            initials="JW"
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
