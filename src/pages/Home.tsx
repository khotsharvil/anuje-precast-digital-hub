import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ManufacturingSlideshow from '@/components/ManufacturingSlideshow';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Award, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const highlights = [
    { icon: Shield, title: "ISI 458 Compliant", description: "Indian standard specifications" },
    { icon: Users, title: "NHAI Approved", description: "Trusted government supplier" },
    { icon: Award, title: "ISO 9001:2015 Certified", description: "International quality standards" },
    { icon: CheckCircle, title: "30+ Happy Clients", description: "Proven track record" },
  ];

  const quickProducts = [
    {
      title: "RCC Pipes",
      subtitle: "NP3 & NP4 · 450mm – 1800mm",
      description: "High load-bearing capacity pipes for drainage and infrastructure.",
      link: "/products",
    },
    {
      title: "Box Culverts",
      subtitle: "Up to 1800mm",
      description: "Precision-engineered for road underpasses and utility tunnels.",
      link: "/products",
    },
    {
      title: "Custom Precast",
      subtitle: "Tailored Solutions",
      description: "Bespoke precast solutions for unique infrastructure needs.",
      link: "/products",
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ManufacturingSlideshow />

      {/* Why Choose Us */}
      <section className="py-20 bg-muted-light/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Why Us</span>
              <div className="w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-3">
              Why Choose <span className="text-accent">Anuje Precast Pipes</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto rounded-full" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <div
                key={index}
                className="text-center p-7 bg-card border border-border rounded-2xl hover:shadow-elegant hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
              >
                <div className="mx-auto w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <highlight.icon className="h-7 w-7 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-base text-primary mb-1.5">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Range</span>
              <div className="w-8 h-0.5 bg-accent" />
            </div>
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-3">
              Our <span className="text-accent">Product Range</span>
            </h2>
            <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
            <p className="text-base text-muted-foreground max-w-xl mx-auto">
              Precision-engineered precast solutions for modern infrastructure projects
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-7 mb-10">
            {quickProducts.map((product, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-2xl p-7 hover:shadow-elegant hover:border-accent/25 hover:-translate-y-1 transition-all duration-300 flex flex-col gap-4"
              >
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-1">
                    {product.title}
                  </h3>
                  <p className="text-accent font-semibold text-sm">{product.subtitle}</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed flex-1">{product.description}</p>
                <Link
                  to={product.link}
                  className="btn-hero inline-flex items-center justify-center gap-2 text-sm py-3 mt-auto"
                >
                  Learn More
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-industrial">
              View All Products
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
