import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  return <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm border-b border-border/50">
          <div className="flex items-center space-x-4 text-muted-foreground">
            <a href="tel:+919822698811" className="flex items-center space-x-2 hover:text-accent transition-colors">
              <Phone className="h-4 w-4 text-accent" />
              <span>+91 9822698811</span>
            </a>
            <a href="mailto:anujepipes@gmail.com" className="flex items-center space-x-2 hover:text-accent transition-colors">
              <Mail className="h-4 w-4 text-accent" />
              <span>anujepipes@gmail.com</span>
            </a>
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
            <Link to="/" className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`}>Home</Link>
            <Link to="/about" className={`font-medium hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`}>About</Link>
            <Link to="/products" className={`font-medium hover:text-accent transition-colors ${isActive('/products') ? 'text-accent' : ''}`}>Products</Link>
            <Link to="/quality" className={`font-medium hover:text-accent transition-colors ${isActive('/quality') ? 'text-accent' : ''}`}>Quality</Link>
            <Link to="/clients" className={`font-medium hover:text-accent transition-colors ${isActive('/clients') ? 'text-accent' : ''}`}>Clients</Link>
            <Link to="/contact" className={`font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`}>Contact</Link>
            
          </div>

          <div className="hidden md:block">
            
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </nav>

        {/* Mobile menu */}
        {isMenuOpen && <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <Link to="/" className={`font-medium hover:text-accent transition-colors ${isActive('/') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>Home</Link>
              <Link to="/about" className={`font-medium hover:text-accent transition-colors ${isActive('/about') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>About</Link>
              <Link to="/products" className={`font-medium hover:text-accent transition-colors ${isActive('/products') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>Products</Link>
              <Link to="/quality" className={`font-medium hover:text-accent transition-colors ${isActive('/quality') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>Quality</Link>
              <Link to="/clients" className={`font-medium hover:text-accent transition-colors ${isActive('/clients') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>Clients</Link>
              <Link to="/contact" className={`font-medium hover:text-accent transition-colors ${isActive('/contact') ? 'text-accent' : ''}`} onClick={() => setIsMenuOpen(false)}>Contact</Link>
              
              
            </div>
          </div>}
      </div>
    </header>;
};
export default Header;