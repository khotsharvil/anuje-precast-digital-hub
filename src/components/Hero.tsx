import { CheckCircle, Award, Shield, Users, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroImage from '@/assets/hero-manufacturing.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Precast concrete manufacturing facility"
          className="w-full h-full object-cover"
        />
        {/* Strong gradient overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/80 to-primary/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 relative z-10 py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
            <div className="w-10 h-0.5 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">
              Trusted Precast Manufacturer
            </span>
          </div>

          {/* Title */}
          <h1 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl text-white mb-6 animate-fade-in-up leading-tight">
            Building Durable Futures
            <span className="text-accent block mt-1">with Trusted Precast Solutions</span>
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-white/80 mb-10 max-w-xl animate-fade-in-up leading-relaxed" style={{ animationDelay: '0.2s' }}>
            ISO 9001:2015 Certified &nbsp;·&nbsp; ISI 458 Compliant &nbsp;·&nbsp; NHAI Approved Supplier
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <button className="btn-hero inline-flex items-center justify-center gap-2">
              Request a Quote
              <ArrowRight className="h-4 w-4" />
            </button>
            <Link to="/products" className="btn-outline-hero inline-flex items-center justify-center text-white">
              Explore Products
            </Link>
          </div>

          {/* Trust Badges */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-in-up"
            style={{ animationDelay: '0.5s' }}
          >
            {[
              { icon: Award, label: 'ISO 9001:2015', sub: 'Certified' },
              { icon: CheckCircle, label: 'ISI 458', sub: 'Compliant' },
              { icon: Shield, label: 'NHAI Approved', sub: 'Supplier' },
              { icon: Users, label: '30+ Companies', sub: 'Trust Us' },
            ].map(({ icon: Icon, label, sub }) => (
              <div
                key={label}
                className="flex items-center gap-2.5 bg-white/10 backdrop-blur-sm border border-white/15 rounded-xl px-3 py-2.5"
              >
                <div className="p-1.5 bg-accent/25 rounded-lg shrink-0">
                  <Icon className="h-4 w-4 text-accent" />
                </div>
                <div>
                  <div className="font-semibold text-white text-xs leading-tight">{label}</div>
                  <div className="text-white/60 text-[11px] mt-0.5">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-white/50">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-white/30" />
      </div>
    </section>
  );
};

export default Hero;
