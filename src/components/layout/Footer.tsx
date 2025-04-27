import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import SpringLogoIcon from "@/components/icons/SpringLogoIcon";

const Footer = () => {
  return (
    <footer className="bg-wellness-cream pt-12 pb-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full flex items-center justify-center">
                <SpringLogoIcon />
              </div>
              <span className="text-wellness-green font-bold text-xl">
                SpringAI
              </span>
            </div>
            <p className="text-wellness-dark/80 mb-4">
              Your AI wellness companion for mental health support, available
              anytime.
            </p>
          </div>

          <div>
            <h4 className="text-wellness-green font-medium mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#how-it-works"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  How It Works
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-wellness-green font-medium mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Mental Health Tips
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-wellness-dark/80 hover:text-wellness-green transition-colors"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-wellness-green font-medium mb-4">
              Stay Updated
            </h4>
            <p className="text-wellness-dark/80 mb-4">
              Subscribe to our newsletter for tips and updates.
            </p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Your email"
                className="bg-white border-wellness-green/30 focus-visible:ring-wellness-green"
              />
              <Button className="bg-wellness-green text-white hover:bg-wellness-green/90">
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-wellness-green/20 text-center text-wellness-dark/60">
          <p>
            &copy; {new Date().getFullYear()} SpringAI Therapy. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
