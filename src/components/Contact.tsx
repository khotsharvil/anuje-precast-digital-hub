import { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageSquare } from 'lucide-react';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    message: ''
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };
  return <section id="contact" className="bg-background py-0">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-montserrat font-bold text-4xl md:text-5xl text-primary mb-4">
            Get in Touch <span className="text-accent">with Us</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your project? Contact us today for quality precast solutions that meet your infrastructure needs.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="font-montserrat font-bold text-2xl text-primary mb-8">
              Contact Information
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Phone</div>
                  <div className="text-muted-foreground">+91 98226 98811</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Email</div>
                  <div className="text-muted-foreground">info@anujepipes.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                  <MapPin className="h-6 w-6 text-white px-0 mx-[12px]" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Location</div>
                  <div className="text-muted-foreground">NH 48, Pune -Bangluru Highway, near Halsiddhanath Sugar Factory, Yamgarni, Nipani, Karnataka 591241</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Button */}
            <div className="bg-gradient-accent text-white p-6 rounded-xl">
              <div className="flex items-center space-x-4 mb-4">
                <MessageSquare className="h-8 w-8" />
                <div>
                  <div className="font-bold text-lg">Quick WhatsApp Inquiry</div>
                  <div className="text-white/80">Get instant responses to your queries</div>
                </div>
              </div>
              <button className="bg-white text-accent px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors w-full">
                Chat on WhatsApp
              </button>
            </div>
          </div>

          {/* Contact Form */}
          
        </div>

        {/* Map Section */}
        <div className="mt-16">
          <div className="bg-muted-light/30 p-8 rounded-xl">
            <h3 className="font-montserrat font-bold text-2xl text-primary mb-6 text-center">
              Visit Our Manufacturing Facility
            </h3>
            <div className="h-64 rounded-lg overflow-hidden cursor-pointer hover:opacity-90 transition-opacity" onClick={() => window.open('https://maps.app.goo.gl/HuuV2FB2qQixpEuL9', '_blank')}>
              <img src="/lovable-uploads/7cc9360e-9920-4e93-a02d-4671504b4d17.png" alt="Anuje Precast Pipes Location Map - NH 48, Yamgarni, Nipani, Karnataka" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;