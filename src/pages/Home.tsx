import Header from '@/components/Header';
import Hero from '@/components/Hero';
import ManufacturingSlideshow from '@/components/ManufacturingSlideshow';
import Footer from '@/components/Footer';
import { ArrowRight, CheckCircle, Award, Shield, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
const Home = () => {
  const highlights = [{
    icon: Award,
    title: "ISO 9001:2015 Certified",
    description: "International quality standards"
  }, {
    icon: Shield,
    title: "ISI 458 Compliant",
    description: "Indian standard specifications"
  }, {
    icon: Users,
    title: "NHAI Approved",
    description: "Trusted government supplier"
  }, {
    icon: CheckCircle,
    title: "20+ Happy Clients",
    description: "Proven track record"
  }];
  const quickProducts = [{
    title: "RCC Pipes",
    subtitle: "NP3 & NP4 | 450mm – 1800mm",
    description: "High load-bearing capacity pipes for drainage and infrastructure",
    link: "/products"
  }, {
    title: "Box Culverts",
    subtitle: "Up to 2000mm",
    description: "Precision-engineered for road underpasses and utility tunnels",
    link: "/products"
  }, {
    title: "Custom Precast",
    subtitle: "Tailored Solutions",
    description: "Bespoke precast solutions for unique infrastructure needs",
    link: "/products"
  }];
  return <div className="min-h-screen">
      <Header />
      <Hero />
      <ManufacturingSlideshow />
      
      {/* Highlights Section */}
      <section className="py-16 bg-muted-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
              Why Choose <span className="text-accent">Anuje Precast Pipes</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((highlight, index) => <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-elegant transition-all duration-300">
                <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                  <highlight.icon className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {highlight.description}
                </p>
              </div>)}
          </div>
        </div>
      </section>

      {/* Quick Products Preview */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
              Our <span className="text-accent">Product Range</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Precision-engineered precast solutions for modern infrastructure projects
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {quickProducts.map((product, index) => <div key={index} className="card-industrial group">
                <div className="space-y-4">
                  <h3 className="font-montserrat font-bold text-xl text-primary">
                    {product.title}
                  </h3>
                  <p className="text-accent font-semibold">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground">
                    {product.description}
                  </p>
                  <Link to={product.link} className="btn-hero w-full group/btn">
                    Learn More
                    <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>)}
          </div>

          <div className="text-center">
            <Link to="/products" className="btn-industrial mr-4">
              View All Products
            </Link>
            
          </div>
        </div>
      </section>

      <Footer />
    </div>;
};
export default Home;