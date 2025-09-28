import { ArrowRight, CheckCircle } from 'lucide-react';
const rccPipesImage = '/lovable-uploads/fe9ae56f-afe9-4d7e-93d5-f3c922ce86a2.png';
const boxCulvertsImage = '/lovable-uploads/f8113a1c-7de7-4df1-ad1b-373ba789e31f.png';
import customPrecastImage from '@/assets/custom-precast-new.jpg';
import productsShowcaseImage from '@/assets/products-showcase.jpg';
const Products = () => {
  const products = [{
    title: "RCC Pipes",
    subtitle: "450mm – 1800mm",
    description: "High load-bearing capacity, smooth finish, long service life for all drainage and infrastructure needs.",
    features: ["High load-bearing capacity", "Smooth finish", "Long service life"],
    applications: ["Drainage", "Sewage", "Stormwater", "Irrigation"],
    image: rccPipesImage,
    alt: "RCC pipes for drainage and infrastructure"
  }, {
    title: "Box Culverts",
    subtitle: "Up to 2000mm",
    description: "Precise dimensions, quick installation, easy maintenance for road underpasses and utility tunnels.",
    features: ["Precise dimensions", "Quick installation", "Easy maintenance"],
    applications: ["Road underpasses", "Railways", "Culverts", "Utility tunnels"],
    image: boxCulvertsImage,
    alt: "Box culverts for infrastructure projects"
  }, {
    title: "Custom Precast Solutions",
    subtitle: "Tailored Designs",
    description: "Tailored designs, cost-effective, durable solutions for your unique infrastructure requirements.",
    features: ["Tailored designs", "Cost-effective", "Durable solutions"],
    applications: ["Unique infrastructure needs", "Specialized projects", "Custom requirements"],
    image: customPrecastImage,
    alt: "Custom precast concrete solutions"
  }];
  return <section id="products" className="py-20 bg-muted-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Our <span className="text-accent">Products</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Precision-engineered precast solutions built to the highest standards for lasting infrastructure performance.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => <div key={index} className="card-industrial group animate-fade-in-up" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img src={product.image} alt={product.alt} className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="font-montserrat font-bold text-2xl text-primary mb-2">
                    {product.title}
                  </h3>
                  <p className="text-accent font-semibold text-lg mb-3">
                    {product.subtitle}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {product.features.map((feature, idx) => <li key={idx} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>)}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-foreground mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.applications.map((app, idx) => <span key={idx} className="px-3 py-1 bg-secondary/20 text-secondary-foreground text-sm rounded-full">
                        {app}
                      </span>)}
                  </div>
                </div>

                <button className="btn-hero w-full group/btn text-gray-950">
                  Request Details
                  <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                </button>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Products;