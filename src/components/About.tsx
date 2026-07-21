import { Target, Users, Award, Truck } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "15+" },
    { icon: Users, label: "Happy Clients", value: "30+" },
    { icon: Target, label: "Projects Completed", value: "40+" },
    { icon: Truck, label: "Products Delivered", value: "10,000+" },
  ];

  return (
    <section id="about" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left: Text */}
          <div className="animate-slide-in-left">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 bg-accent" />
              <span className="text-accent font-semibold text-sm uppercase tracking-widest">Who We Are</span>
            </div>
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-5 leading-tight">
              About <span className="text-accent">Anuje Precast Pipes</span>
            </h2>
            <div className="w-16 h-1 bg-accent mb-8 rounded-full" />

            <div className="space-y-5 text-base text-muted-foreground">
              <p>
                At Anuje Precast Pipes, we specialize in manufacturing high-quality RCC Pipes,
                Box Culverts, and Custom Precast Solutions that meet the demanding requirements
                of modern infrastructure projects.
              </p>
              <p>
                With modern machinery and in-house testing laboratories, we deliver durable, precise,
                and reliable products that meet global standards — including ISO 9001:2015 certification
                and ISI 458 compliance.
              </p>
              <p>
                Whether it's large-scale infrastructure projects or specialized requirements,
                we ensure on-time delivery, competitive pricing, and unmatched quality that
                our clients can trust for generations.
              </p>
            </div>

            <div className="mt-8 p-6 bg-gradient-industrial rounded-xl text-white">
              <h3 className="font-montserrat font-bold text-lg mb-4">Our Commitment</h3>
              <ul className="space-y-2.5">
                {[
                  "Uncompromising quality standards",
                  "Timely project delivery",
                  "Cost-effective solutions",
                  "Customer satisfaction",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right: Stats */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-5">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center p-7 bg-card border border-border rounded-2xl hover:shadow-elegant hover:border-accent/25 transition-all duration-300"
                >
                  <div className="mx-auto w-14 h-14 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-7 w-7 text-accent" />
                  </div>
                  <div className="font-montserrat font-bold text-3xl text-primary mb-1">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
