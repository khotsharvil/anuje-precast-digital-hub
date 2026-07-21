import { Shield, Award, Star } from 'lucide-react';
const Clients = () => {
  const clients = ["R. B. Velhal Infra Pvt. Ltd.", "MKC Infrastructure Ltd.", "KMV Infra Ltd.", "S. M. Autade Pvt. Ltd.", "Megha Engg. & Infra Ltd.", "Shree Constructions", "Modern Infrastructure Co.", "Elite Engineering Works"];
  return <section id="clients" className="py-20 bg-muted-light/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Our Partners</span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Trusted by Leading <span className="text-accent">Infrastructure Companies</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
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

        {/* Client List */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card border border-border rounded-2xl overflow-hidden shadow-elegant">
            {clients.map((client, index) => (
              <div
                key={index}
                className="group flex items-center gap-5 px-8 py-5 border-b border-border last:border-b-0 hover:bg-accent/5 transition-all duration-300"
              >
                <span className="font-montserrat font-bold text-2xl text-accent/30 group-hover:text-accent transition-colors duration-300 w-10 shrink-0 select-none">
                  {String(index + 1).padStart(2, '0')}
                </span>
                <span className="font-semibold text-foreground text-lg leading-tight group-hover:text-accent transition-colors duration-300">
                  {client}
                </span>
                <div className="ml-auto w-2 h-2 rounded-full bg-accent/20 group-hover:bg-accent transition-colors duration-300 shrink-0" />
              </div>
            ))}
          </div>
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