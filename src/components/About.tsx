import { Target, Users, Award, Truck } from 'lucide-react';
const About = () => {
  const stats = [{
    icon: Award,
    label: "Years Experience",
    value: "15+"
  }, {
    icon: Users,
    label: "Happy Clients",
    value: "100+"
  }, {
    icon: Target,
    label: "Projects Completed",
    value: "500+"
  }, {
    icon: Truck,
    label: "Products Delivered",
    value: "10,000+"
  }];
  return <section id="about" className="bg-background py-0">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-in-left">
            <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-6">
              About <span className="text-accent">Anuje Precast Pipes</span>
            </h2>
            <div className="w-24 h-1 bg-accent mb-8"></div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                At Anuje Precast Pipes, we specialize in manufacturing high-quality RCC Pipes, 
                Box Culverts, and Custom Precast Solutions that meet the demanding requirements 
                of modern infrastructure projects.
              </p>
              
              <p>With modern machinery, in-house testing laboratories, and we deliver durable, precise, and reliable products that meet global standards including ISO 9001:2015 certification and ISI 458 compliance.</p>
              
              <p>
                Whether it's large-scale infrastructure projects or specialized requirements, 
                we ensure on-time delivery, competitive pricing, and unmatched quality that 
                our clients can trust for generations.
              </p>
            </div>

            
          </div>

          <div className="animate-slide-in-right">
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => <div key={index} className="text-center p-6 bg-card border border-border rounded-xl hover:shadow-elegant transition-all duration-300">
                  <div className="mx-auto w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mb-4">
                    <stat.icon className="h-8 w-8 text-accent" />
                  </div>
                  <div className="font-montserrat font-bold text-3xl text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>)}
            </div>

            <div className="mt-8 p-6 bg-gradient-industrial rounded-xl text-white">
              <h3 className="font-montserrat font-bold text-xl mb-4">Our Commitment</h3>
              <ul className="space-y-2">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Uncompromising quality standards</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Timely project delivery</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Cost-effective solutions</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Customer satisfaction</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default About;