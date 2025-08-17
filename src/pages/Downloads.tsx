import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, FileText, Image, Award, CheckCircle } from 'lucide-react';

const Downloads = () => {
  const downloads = [
    {
      category: "Company Profile",
      items: [
        {
          title: "Anuje Precast Pipes - Company Profile",
          description: "Complete overview of our company, products, and capabilities",
          type: "PDF",
          size: "2.4 MB",
          icon: FileText
        },
        {
          title: "Manufacturing Capabilities Brochure",
          description: "Detailed information about our production capacity and processes",
          type: "PDF",
          size: "1.8 MB",
          icon: FileText
        }
      ]
    },
    {
      category: "Product Specifications",
      items: [
        {
          title: "RCC Pipes Technical Datasheet",
          description: "Complete specifications for NP3 & NP4 pipes (450mm - 1800mm)",
          type: "PDF",
          size: "1.2 MB",
          icon: FileText
        },
        {
          title: "Box Culverts Specification Sheet",
          description: "Technical details and dimensions for box culverts up to 2000mm",
          type: "PDF",
          size: "980 KB",
          icon: FileText
        },
        {
          title: "Custom Precast Solutions Guide",
          description: "Options and specifications for tailored precast products",
          type: "PDF",
          size: "1.5 MB",
          icon: FileText
        }
      ]
    },
    {
      category: "Certifications",
      items: [
        {
          title: "ISO 9001:2015 Certificate",
          description: "Quality management system certification",
          type: "PDF",
          size: "356 KB",
          icon: Award
        },
        {
          title: "ISI 458 Compliance Certificate",
          description: "Indian standard specification compliance document",
          type: "PDF",
          size: "445 KB",
          icon: Award
        },
        {
          title: "NHAI Approval Letter",
          description: "National Highways Authority of India approval documentation",
          type: "PDF",
          size: "267 KB",
          icon: Award
        }
      ]
    },
    {
      category: "Project Gallery",
      items: [
        {
          title: "Completed Projects Portfolio",
          description: "High-resolution images of our major infrastructure projects",
          type: "ZIP",
          size: "15.2 MB",
          icon: Image
        },
        {
          title: "Manufacturing Facility Photos",
          description: "Images of our state-of-the-art production facility",
          type: "ZIP",
          size: "8.7 MB",
          icon: Image
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-industrial text-white">
          <div className="container mx-auto px-4 text-center">
            <h1 className="font-montserrat font-bold text-4xl md:text-6xl mb-6">
              Downloads & <span className="text-accent">Resources</span>
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-8"></div>
            <p className="text-xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              Access our complete collection of company profiles, technical specifications, 
              certifications, and project documentation.
            </p>
          </div>
        </section>

        {/* Downloads Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            {downloads.map((category, categoryIndex) => (
              <div key={categoryIndex} className="mb-16">
                <div className="mb-8">
                  <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">
                    {category.category}
                  </h2>
                  <div className="w-24 h-1 bg-accent"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="card-industrial group hover:shadow-elegant transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                          <span className="text-xs bg-secondary/20 text-secondary-foreground px-2 py-1 rounded-full">
                            {item.type} • {item.size}
                          </span>
                        </div>
                        
                        <div>
                          <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <button className="btn-hero w-full group/btn">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Download All Section */}
        <section className="py-16 bg-muted-light/30">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-montserrat font-bold text-3xl text-primary mb-6">
                Download Complete Package
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Get all our company documents, product specifications, and certifications in one convenient package.
              </p>
              
              <div className="bg-card border border-border rounded-xl p-8 mb-8">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <FileText className="h-8 w-8 text-accent" />
                  <div className="text-left">
                    <h3 className="font-montserrat font-bold text-xl text-primary">
                      Complete Information Package
                    </h3>
                    <p className="text-muted-foreground">ZIP • 25.8 MB</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-4 mb-6 text-left">
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Company profile & brochures</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">All product specifications</span>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Certification documents</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-accent" />
                      <span className="text-sm text-muted-foreground">Project gallery & photos</span>
                    </div>
                  </div>
                </div>
                
                <button className="btn-industrial">
                  <Download className="h-5 w-5 mr-2" />
                  Download Complete Package
                </button>
              </div>
              
              <p className="text-sm text-muted-foreground">
                For additional documents or custom requirements, please <a href="/contact" className="text-accent hover:underline">contact us directly</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Downloads;