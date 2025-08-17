import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Shield, TestTube, Users, Clock } from 'lucide-react';

const Quality = () => {
  const qualityFeatures = [
    {
      icon: TestTube,
      title: "In-House Testing Laboratory",
      description: "State-of-the-art testing facilities ensure every product meets stringent quality standards before delivery."
    },
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "International quality management system certification guarantees consistent quality processes."
    },
    {
      icon: Shield,
      title: "ISI 458 Compliance",
      description: "All products strictly adhere to Indian Standard specifications for precast concrete pipes."
    },
    {
      icon: Users,
      title: "Skilled Professionals",
      description: "Expert team with years of experience in precast concrete manufacturing and quality control."
    },
    {
      icon: Clock,
      title: "Rigorous Testing Process",
      description: "Every product undergoes comprehensive testing for strength, durability, and dimensional accuracy."
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-stage quality checks from raw materials to finished products ensure superior performance."
    }
  ];

  const certifications = [
    "ISO 9001:2015 Quality Management System",
    "ISI 458 Standard Compliance",
    "NHAI Approved Supplier Status",
    "Bureau of Indian Standards (BIS) Certification",
    "Environmental Compliance Certificates",
    "Product Testing & Validation Reports"
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-industrial text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
              Quality You Can <span className="text-accent">Trust</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Our commitment to excellence is backed by rigorous testing, international certifications, 
              and a proven track record of delivering superior precast solutions for critical infrastructure projects.
            </p>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
                Our Quality <span className="text-accent">Standards</span>
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Every step of our manufacturing process is designed to deliver products that exceed industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {qualityFeatures.map((feature, index) => (
                <div key={index} className="card-industrial group">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                      <feature.icon className="h-8 w-8 text-accent" />
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-primary">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-20 bg-muted-light/30">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
                  Rigorous <span className="text-accent">Testing Process</span>
                </h2>
                <div className="w-24 h-1 bg-accent mb-8"></div>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p>
                    Our state-of-the-art testing laboratory is equipped with modern machinery and 
                    sophisticated testing equipment to ensure every product meets the highest standards.
                  </p>
                  
                  <p>
                    From raw material inspection to final product validation, our multi-stage 
                    quality control process guarantees consistent performance and reliability.
                  </p>
                  
                  <p>
                    We conduct comprehensive tests including load-bearing capacity, dimensional 
                    accuracy, water tightness, and durability assessments for all our products.
                  </p>
                </div>

                <button className="btn-industrial mt-8">
                  Schedule Factory Visit
                </button>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-card border border-border rounded-xl p-8">
                  <h3 className="font-montserrat font-bold text-2xl text-primary mb-6">
                    Testing Parameters
                  </h3>
                  <ul className="space-y-4">
                    {[
                      "Load-bearing capacity testing",
                      "Dimensional accuracy verification",
                      "Water tightness assessment",
                      "Crack load and ultimate load testing",
                      "Absorption and permeability tests",
                      "Three-edge bearing strength",
                      "Joint performance evaluation",
                      "Durability and weather resistance"
                    ].map((test, index) => (
                      <li key={index} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{test}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
                Our <span className="text-accent">Certifications</span>
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Recognized by leading industry bodies and government organizations for our commitment to quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300">
                  <Award className="h-12 w-12 text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground">{cert}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <button className="btn-hero">
                View All Certifications
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;