import { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const lines = [
      '*New enquiry from website*',
      formData.name && `Name: ${formData.name}`,
      formData.company && `Company: ${formData.company}`,
      formData.phone && `Phone: ${formData.phone}`,
      formData.email && `Email: ${formData.email}`,
      formData.message && `Message: ${formData.message}`,
    ].filter(Boolean);
    window.open(
      `https://wa.me/919822698811?text=${encodeURIComponent(lines.join('\n'))}`,
      '_blank'
    );
  };

  return (
    <section id="contact" className="bg-background py-24">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Reach Out</span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Get in Touch <span className="text-accent">with Us</span>
          </h2>
          <div className="w-16 h-1 bg-accent mx-auto mb-5 rounded-full" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Ready to start your project? Contact us today for quality precast solutions that meet your infrastructure needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="animate-slide-in-left space-y-8">
            <div>
              <h3 className="font-montserrat font-bold text-2xl text-primary mb-6">
                Contact Information
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "+91 98226 98811", href: "tel:+919822698811" },
                  { icon: Mail, label: "Email", value: "anujepipes@gmail.com", href: "mailto:anujepipes@gmail.com" },
                  {
                    icon: MapPin,
                    label: "Location",
                    value: "NH 48, Pune–Bengaluru Highway, near Halsiddhanath Sugar Factory, Yamgarni, Nipani, Karnataka 591241",
                    href: "https://maps.app.goo.gl/zmd1g8EHqawAxDU36",
                  },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex items-start gap-4">
                    <div className="w-11 h-11 bg-accent rounded-xl flex items-center justify-center shrink-0">
                      <Icon className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm mb-0.5">{label}</div>
                      {href ? (
                        <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="text-muted-foreground text-sm hover:text-accent transition-colors">
                          {value}
                        </a>
                      ) : (
                        <div className="text-muted-foreground text-sm leading-relaxed">{value}</div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* WhatsApp CTA */}
            <div className="bg-gradient-accent text-white p-6 rounded-2xl">
              <div className="flex items-start gap-4 mb-5">
                <div className="p-2 bg-white/20 rounded-xl">
                  <MessageSquare className="h-6 w-6" />
                </div>
                <div>
                  <div className="font-bold text-lg leading-tight">Quick WhatsApp Inquiry</div>
                  <div className="text-white/75 text-sm mt-1">Get instant responses to your queries</div>
                </div>
              </div>
              <button
                className="bg-white text-accent px-6 py-3 rounded-xl font-semibold text-sm hover:bg-gray-50 transition-colors w-full"
                onClick={() => window.open('https://wa.me/919822698811', '_blank')}
              >
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5 shadow-elegant">
              <h3 className="font-montserrat font-bold text-xl text-primary mb-2">Send Us a Message</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input-industrial w-full text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="input-industrial w-full text-sm"
                  />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="input-industrial w-full text-sm"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@company.com"
                    className="input-industrial w-full text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project requirements..."
                  rows={4}
                  className="input-industrial w-full text-sm resize-none"
                />
              </div>
              <button type="submit" className="btn-hero w-full">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Map */}
        <div className="mt-16">
          <div className="bg-muted-light/30 p-6 rounded-2xl border border-border">
            <h3 className="font-montserrat font-bold text-xl text-primary mb-5 text-center">
              Visit Our Manufacturing Facility
            </h3>
            <div className="h-96 rounded-xl overflow-hidden shadow-elegant">
              <iframe
                title="Anuje Precast Pipes Location"
                src="https://www.google.com/maps?q=Anuje+Precast+Pipes,+NH+48,+Halsiddhanath+Sugar+Factory,+Yamgarni,+Nipani,+Karnataka+591241&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
