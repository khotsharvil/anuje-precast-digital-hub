import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { CheckCircle, Award, Shield, TestTube, Clock } from 'lucide-react';

const Quality = () => {
  const qualityFeatures = [
    {
      icon: TestTube,
      title: "In-House Testing Laboratory",
      description: "State-of-the-art testing facilities ensure every product meets stringent quality standards before delivery.",
    },
    {
      icon: Award,
      title: "ISO 9001:2015 Certified",
      description: "International quality management system certification guarantees consistent quality processes.",
    },
    {
      icon: Shield,
      title: "ISI 458 Compliance",
      description: "All products strictly adhere to Indian Standard specifications for precast concrete pipes.",
    },
    {
      icon: CheckCircle,
      title: "Quality Assurance",
      description: "Multi-stage quality checks from raw materials to finished products ensure superior performance.",
    },
    {
      icon: Clock,
      title: "Timely Delivery",
      description: "Robust production scheduling ensures projects are completed and delivered on time.",
    },
  ];

  const certifications = [
    "ISI 458 Standard Compliance",
    "NHAI Approved Supplier Status",
    "ISO 9001:2015 Quality Management System",
    "Bureau of Indian Standards (BIS) Certification",
    "Environmental Compliance Certificates",
    "Product Testing & Validation Reports",
  ];

  const testingParams = [
    "Hydrostatic test",
    "Three edge bearing test",
    "Permeability test",
    "Pipes tested per IS 458 regulations",
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Banner */}
        <section className="py-24 bg-gradient-industrial text-white">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Standards</span>
              <div className="w-8 h-0.5 bg-accent" />
            </div>
            <h1 className="font-montserrat font-bold text-4xl md:text-5xl mb-5 leading-tight">
              Quality You Can <span className="text-accent">Trust</span>
            </h1>
            <div className="w-16 h-1 bg-accent mx-auto mb-7 rounded-full" />
            <p className="text-base text-white/80 max-w-2xl mx-auto leading-relaxed">
              Our commitment to excellence is backed by rigorous testing, certifications, and a proven
              track record of delivering superior precast solutions for critical infrastructure projects.
            </p>
          </div>
        </section>

        {/* Quality Features */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-3">
                Our Quality <span className="text-accent">Standards</span>
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                Every step of our manufacturing process is designed to deliver products that exceed industry standards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-7">
              {qualityFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-7 hover:shadow-elegant hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-13 h-13 bg-accent/10 rounded-xl flex items-center justify-center mb-5 w-12 h-12">
                    <feature.icon className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testing Process */}
        <section className="py-20 bg-muted-light/30">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-0.5 bg-accent" />
                  <span className="text-accent font-semibold text-sm uppercase tracking-widest">How We Test</span>
                </div>
                <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-5 leading-tight">
                  Consistent Testing &amp; Assurance
                </h2>
                <div className="w-16 h-1 bg-accent mb-7 rounded-full" />

                <div className="space-y-4 text-base text-muted-foreground">
                  <p>
                    Our laboratory is equipped with modern machinery and sophisticated testing equipment
                    to ensure every product meets the highest standards.
                  </p>
                  <p>
                    From raw material inspection to final product validation, our multi-stage quality
                    control process guarantees consistent performance and reliability.
                  </p>
                  <p>
                    We conduct comprehensive tests including load-bearing capacity, dimensional accuracy,
                    water tightness, and durability assessments for all our products.
                  </p>
                </div>
              </div>

              <div className="animate-slide-in-right">
                <div className="bg-card border border-border rounded-2xl p-8 shadow-elegant">
                  <h3 className="font-montserrat font-bold text-xl text-primary mb-6">
                    Testing Parameters
                  </h3>
                  <ul className="space-y-4">
                    {testingParams.map((test, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center shrink-0">
                          <CheckCircle className="h-4 w-4 text-accent" />
                        </div>
                        <span className="text-muted-foreground text-sm">{test}</span>
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
          <div className="container mx-auto px-6">
            <div className="text-center mb-14">
              <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-3">
                Our <span className="text-accent">Certifications</span>
              </h2>
              <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
              <p className="text-base text-muted-foreground max-w-xl mx-auto">
                Recognized by leading industry bodies and government organizations for our commitment to quality.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-2xl p-6 text-center hover:shadow-elegant hover:border-accent/25 hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="font-semibold text-foreground text-sm leading-snug">{cert}</h3>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <button className="btn-hero">View All Certifications</button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Quality;
