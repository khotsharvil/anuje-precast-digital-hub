import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 XXX-XXXXXXX</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="h-4 w-4 text-accent" />
              <span>info@anujepipes.com</span>
            </div>
          </div>
          <div className="text-primary font-medium">
            ISO 9001:2015 Certified | NHAI Approved
          </div>
        </div>

        {/* Main navigation */}
        <nav className="flex justify-between items-center py-4">
          <div className="font-montserrat font-bold text-2xl text-primary">
            Anuje Precast Pipes
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" className="font-medium hover:text-accent transition-colors">Home</a>
            <a href="#about" className="font-medium hover:text-accent transition-colors">About</a>
            <a href="#products" className="font-medium hover:text-accent transition-colors">Products</a>
            <a href="#quality" className="font-medium hover:text-accent transition-colors">Quality</a>
            <a href="#clients" className="font-medium hover:text-accent transition-colors">Clients</a>
            <a href="#contact" className="font-medium hover:text-accent transition-colors">Contact</a>
          </div>

          <div className="hidden md:block">
            <button className="btn-hero">
              Request Quote
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#home" className="font-medium hover:text-accent transition-colors">Home</a>
              <a href="#about" className="font-medium hover:text-accent transition-colors">About</a>
              <a href="#products" className="font-medium hover:text-accent transition-colors">Products</a>
              <a href="#quality" className="font-medium hover:text-accent transition-colors">Quality</a>
              <a href="#clients" className="font-medium hover:text-accent transition-colors">Clients</a>
              <a href="#contact" className="font-medium hover:text-accent transition-colors">Contact</a>
              <button className="btn-hero w-full mt-4">
                Request Quote
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;