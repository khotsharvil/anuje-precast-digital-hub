import { Shield, Star, Award } from 'lucide-react';
const Clients = () => {
  const clients = ["R. B. Velhal Infra Pvt. Ltd.", "MKC Infrastructure Ltd.", "KMV Infra Ltd.", "S. M. Autade Pvt. Ltd.", "Megha Engg. & Infra Ltd.", "Shree Constructions", "Modern Infrastructure Co.", "Elite Engineering Works"];
  return <section id="clients" className="py-20 bg-muted-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Trusted by Leading <span className="text-accent">Infrastructure Companies</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We proudly supply to some of India's most respected construction & infrastructure companies, 
            building lasting partnerships based on quality and reliability.
          </p>
        </div>

        {/* NHAI Badge */}
        <div className="flex justify-center mb-12">
          <div className="bg-gradient-accent text-white px-8 py-4 rounded-full flex items-center space-x-3 shadow-accent">
            <Shield className="h-6 w-6" />
            <span className="font-montserrat font-bold text-lg">NHAI Approved Supplier</span>
            <Award className="h-6 w-6" />
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {clients.map((client, index) => <div key={index} className="card-industrial text-center group animate-fade-in-up" style={{
          animationDelay: `${index * 0.1}s`
        }}>
              <div className="p-6">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                  <Star className="h-8 w-8" />
                </div>
                <h3 className="font-semibold text-foreground text-lg leading-tight">
                  {client}
                </h3>
              </div>
            </div>)}
        </div>

        {/* Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-accent/20 rounded-2xl p-8 text-center shadow-elegant">
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-6 w-6 text-accent fill-current" />)}
            </div>
            <blockquote className="text-xl text-muted-foreground italic mb-6 leading-relaxed">
              "Anuje Precast Pipes has been our trusted partner for multiple infrastructure projects. 
              Their commitment to quality, timely delivery, and professional service makes them our 
              preferred choice for all precast solutions."
            </blockquote>
            <div className="font-semibold text-primary">
              Project Manager, Leading Infrastructure Company
            </div>
          </div>
        </div>

        
      </div>
    </section>;
};
export default Clients;