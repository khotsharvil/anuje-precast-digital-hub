import { CheckCircle, Award, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-manufacturing.jpg';
const Hero = () => {
  return <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Precast concrete manufacturing facility with pipes and industrial equipment" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-0 my-0">
        <div className="max-w-4xl my-[12px]">
          <h1 className="font-montserrat font-bold text-5xl md:text-7xl text-white mb-6 animate-fade-in-up my-[11px]">
            Building Durable Futures with
            <span className="text-accent block mt-2">Trusted Precast Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-2xl animate-fade-in-up" style={{
          animationDelay: '0.2s'
        }}>ISO 9001:2015 Certified | ISI 458 Complaint | NHAI Approved</p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in-up" style={{
          animationDelay: '0.4s'
        }}>
            <button className="btn-hero">
              Request a Quote
            </button>
            <Link to="/products" className="btn-outline-hero text-slate-50">
              Explore Products
            </Link>
          </div>

          {/* Trust Indicators */}
          <div style={{
          animationDelay: '0.6s'
        }} className="grid grid-cols-2 md:grid-cols-4 gap-6 animate-fade-in-up py-0 my-0 mx-0 px-0">
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Award className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">ISO 9001:2015</div>
                <div className="text-sm text-white/80">Certified</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-accent/20 rounded-lg">
                <CheckCircle className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">ISI 458</div>
                <div className="text-sm text-white/80">Compliant</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white py-0 mx-0">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Shield className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">NHAI Approved</div>
                <div className="text-sm text-white/80">Supplier</div>
              </div>
            </div>
            
            <div className="flex items-center space-x-3 text-white">
              <div className="p-2 bg-accent/20 rounded-lg">
                <Users className="h-6 w-6 text-accent" />
              </div>
              <div>
                <div className="font-semibold">30+ Companies</div>
                <div className="text-sm text-white/80">Trust Us</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        
      </div>
    </section>;
};
export default Hero;