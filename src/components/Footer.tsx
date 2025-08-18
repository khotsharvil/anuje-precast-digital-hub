import { Phone, Mail, MapPin, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gradient-industrial text-white">
      <div className="container mx-auto px-4 py-[49px] my-[20px]">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mx-[18px]">
          {/* Company Info */}
          <div className="mx-0">
            <h3 className="font-montserrat font-bold text-2xl mb-6">
              Anuje Precast Pipes
            </h3>
            <p className="text-white/80 mb-6 leading-relaxed">
              Leading manufacturer of high-quality RCC Pipes, Box Culverts, and Custom Precast Solutions. 
              Trusted by infrastructure companies across India.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Award className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <Shield className="h-5 w-5" />
              </div>
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <CheckCircle className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link to="/" className="text-white/80 hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-white/80 hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/products" className="text-white/80 hover:text-accent transition-colors">Products</Link></li>
              <li><Link to="/quality" className="text-white/80 hover:text-accent transition-colors">Quality</Link></li>
              <li><Link to="/clients" className="text-white/80 hover:text-accent transition-colors">Clients</Link></li>
              <li><Link to="/contact" className="text-white/80 hover:text-accent transition-colors">Contact</Link></li>
              <li><Link to="/downloads" className="text-white/80 hover:text-accent transition-colors">Downloads</Link></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Our Products</h4>
            <ul className="space-y-3">
              <li className="text-white/80">RCC Pipes (NP3 & NP4)</li>
              <li className="text-white/80">Box Culverts</li>
              <li className="text-white/80">Custom Precast Solutions</li>
              <li className="text-white/80">Drainage Systems</li>
              <li className="text-white/80">Infrastructure Solutions</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-montserrat font-bold text-lg mb-6">Contact Info</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-accent" />
                <span className="text-white/80">+91 XXX-XXXXXXX</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-accent" />
                <span className="text-white/80">info@anujepipes.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <span className="text-white/80">Kolhapur, Maharashtra, India</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/80 text-sm">
              © {new Date().getFullYear()} Anuje Precast Pipes. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <span className="text-white/80">ISO 9001:2015 Certified</span>
              <span className="text-white/80">ISI 458 Compliant</span>
              <span className="text-white/80">NHAI Approved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;