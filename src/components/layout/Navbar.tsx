import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import SpringLogoIcon from "@/components/icons/SpringLogoIcon";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white py-4 px-6 shadow-sm fixed w-full z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full flex items-center justify-center">
            <SpringLogoIcon />
          </div>
          <span className="text-wellness-green font-bold text-xl">
            SpringAI
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            to="/"
            className="text-wellness-dark hover:text-wellness-green transition-colors"
          >
            Home
          </Link>
          <a
            href="#how-it-works"
            className="text-wellness-dark hover:text-wellness-green transition-colors"
          >
            How It Works
          </a>
          <a
            href="#features"
            className="text-wellness-dark hover:text-wellness-green transition-colors"
          >
            Features
          </a>
          <a
            href="#testimonials"
            className="text-wellness-dark hover:text-wellness-green transition-colors"
          >
            Testimonials
          </a>
        </div>

        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="border-wellness-green text-wellness-green hover:bg-wellness-green hover:text-white"
          >
            Sign In
          </Button>
          <Button
            asChild
            className="bg-wellness-green text-white hover:bg-wellness-green/90"
          >
            <Link to="https://care.springhealth.com/browse/therapists">
              Free Session
            </Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-wellness-dark focus:outline-none"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md py-4 px-6">
          <div className="flex flex-col space-y-4">
            <Link
              to="/"
              className="text-wellness-dark hover:text-wellness-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <a
              href="#how-it-works"
              className="text-wellness-dark hover:text-wellness-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="#features"
              className="text-wellness-dark hover:text-wellness-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-wellness-dark hover:text-wellness-green transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Testimonials
            </a>
            <div className="pt-4 flex flex-col space-y-2">
              <Button
                variant="outline"
                className="border-wellness-green text-wellness-green hover:bg-wellness-green hover:text-white w-full"
              >
                Sign In
              </Button>
              <Button
                asChild
                className="bg-wellness-green text-white hover:bg-wellness-green/90 w-full"
              >
                <Link to="https://care.springhealth.com/browse/therapists">
                  Free Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
