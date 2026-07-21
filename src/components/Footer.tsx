import { Phone, Mail, MapPin, Award, Shield, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gradient-industrial text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        <div className="flex flex-col lg:flex-row gap-y-10 mb-12">
          {/* Company Info */}
          <div className="lg:w-[28%] lg:pr-10">
            <h3 className="font-montserrat font-bold text-xl mb-4">Anuje Precast Pipes</h3>
            <div className="w-8 h-0.5 bg-accent mb-5" />
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              One of the leading manufacturers of high-quality RCC Pipes, Box Culverts, and Custom
              Precast Solutions. Trusted by infrastructure companies across India.
            </p>
            <div className="flex gap-3">
              {[Award, Shield, CheckCircle].map((Icon, i) => (
                <div key={i} className="w-9 h-9 bg-accent/20 border border-accent/30 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                  <Icon className="h-4 w-4" />
                </div>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:w-[24%] lg:px-10 lg:border-l lg:border-white/10">
            <h4 className="font-montserrat font-bold text-base mb-4">Quick Links</h4>
            <div className="w-8 h-0.5 bg-accent mb-5" />
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/products", label: "Products" },
                { to: "/quality", label: "Quality" },
                { to: "/clients", label: "Clients" },
                { to: "/contact", label: "Contact" },
                { to: "/downloads", label: "Downloads" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-white/65 text-sm hover:text-accent transition-colors duration-200">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:w-[24%] lg:px-10 lg:border-l lg:border-white/10">
            <h4 className="font-montserrat font-bold text-base mb-4">Our Products</h4>
            <div className="w-8 h-0.5 bg-accent mb-5" />
            <ul className="space-y-2.5">
              {["RCC Pipes (NP3 & NP4)", "Box Culverts", "Custom Precast Solutions"].map((item) => (
                <li key={item} className="text-white/65 text-sm flex items-center gap-2">
                  <div className="w-1 h-1 bg-accent rounded-full shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:w-[24%] lg:pl-10 lg:border-l lg:border-white/10">
            <h4 className="font-montserrat font-bold text-base mb-4">Contact Info</h4>
            <div className="w-8 h-0.5 bg-accent mb-5" />
            <div className="space-y-4">
              <a href="tel:+919822698811" className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-accent shrink-0" />
                <span className="text-white/65 text-sm group-hover:text-accent transition-colors">+91 9822698811</span>
              </a>
              <a href="mailto:anujepipes@gmail.com" className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <span className="text-white/65 text-sm group-hover:text-accent transition-colors">anujepipes@gmail.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <span className="text-white/65 text-sm leading-relaxed">Nipani, Karnataka, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/15 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-white/50 text-sm">
              © {new Date().getFullYear()} Anuje Precast Pipes. All rights reserved.
            </div>
            <div className="flex gap-5 text-xs text-white/50">
              <span>ISO 9001:2015 Certified</span>
              <span>·</span>
              <span>ISI 458 Compliant</span>
              <span>·</span>
              <span>NHAI Approved</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
