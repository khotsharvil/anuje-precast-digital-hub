import { ArrowRight, CheckCircle } from 'lucide-react';

const rccPipesImage = '/lovable-uploads/fe9ae56f-afe9-4d7e-93d5-f3c922ce86a2.png';
const boxCulvertsImage = '/lovable-uploads/f8113a1c-7de7-4df1-ad1b-373ba789e31f.png';
import customPrecastImage from '@/assets/custom-precast-new.jpg';

const Products = () => {
  const products = [
    {
      title: "RCC Pipes",
      subtitle: "450mm – 1800mm",
      description: "High load-bearing capacity, smooth finish, and long service life for all drainage and infrastructure needs.",
      features: ["High load-bearing capacity", "Smooth finish", "Long service life"],
      applications: ["Drainage", "Sewage", "Stormwater", "Irrigation"],
      image: rccPipesImage,
      alt: "RCC pipes for drainage and infrastructure",
    },
    {
      title: "Box Culverts",
      subtitle: "Up to 1800mm",
      description: "Precise dimensions, quick installation, and easy maintenance for road underpasses and utility tunnels.",
      features: ["Precise dimensions", "Quick installation", "Easy maintenance"],
      applications: ["Road underpasses", "Railways", "Culverts", "Utility tunnels"],
      image: boxCulvertsImage,
      alt: "Box culverts for infrastructure projects",
    },
    {
      title: "Custom Precast Solutions",
      subtitle: "Tailored Designs",
      description: "Tailored designs, cost-effective and durable solutions for your unique infrastructure requirements.",
      features: ["Tailored designs", "Cost-effective", "Durable solutions"],
      applications: ["Unique infrastructure", "Specialized projects", "Custom requirements"],
      image: customPrecastImage,
      alt: "Custom precast concrete solutions",
    },
  ];

  return (
    <section id="products" className="py-24 bg-muted-light/30">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">What We Make</span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Our <span className="text-accent">Products</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Precision-engineered precast solutions built to the highest standards for lasting infrastructure performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl overflow-hidden group hover:shadow-elegant hover:border-accent/25 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up flex flex-col"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={product.image}
                  alt={product.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <span className="bg-accent text-white text-xs font-semibold px-3 py-1.5 rounded-full">
                    {product.subtitle}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 gap-4">
                <div>
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2.5">Key Features</h4>
                  <ul className="space-y-1.5">
                    {product.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <CheckCircle className="h-3.5 w-3.5 text-accent shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground text-sm mb-2.5">Applications</h4>
                  <div className="flex flex-wrap gap-1.5">
                    {product.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-primary/8 border border-primary/15 text-primary text-xs rounded-full font-medium"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-auto pt-2">
                  <button
                    onClick={() =>
                      window.open(
                        `https://wa.me/919822698811?text=${encodeURIComponent(
                          `Hi, I'd like to request details about ${product.title} (${product.subtitle}). Please share pricing and specifications.`
                        )}`,
                        '_blank'
                      )
                    }
                    className="btn-hero w-full inline-flex items-center justify-center gap-2 text-sm py-3"
                  >
                    Request Details
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
