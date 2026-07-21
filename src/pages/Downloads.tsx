import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Download, FileText } from 'lucide-react';
const Downloads = () => {
  const downloads = [{
    category: "Company Profile",
    items: [{
      title: "Anuje Precast Pipes - Company Profile",
      description: "Complete overview of our company, products, and capabilities",
      type: "PDF",
      size: "20 MB",
      icon: FileText,
      file: "/Anuje-Precast-Pipes-Company-Profile.pdf"
    }]
  }];
  return <div className="min-h-screen">
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
            {downloads.map((category, categoryIndex) => <div key={categoryIndex} className="mb-16">
                <div className="mb-8">
                  <h2 className="font-montserrat font-bold text-3xl text-primary mb-4">
                    {category.category}
                  </h2>
                  <div className="w-24 h-1 bg-accent"></div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item, itemIndex) => <div key={itemIndex} className="card-industrial group hover:shadow-elegant transition-all duration-300">
                      <div className="space-y-4">
                        <div className="flex items-start justify-between">
                          <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                            <item.icon className="h-6 w-6 text-accent" />
                          </div>
                          
                        </div>
                        
                        <div>
                          <h3 className="font-montserrat font-bold text-lg text-primary mb-2">
                            {item.title}
                          </h3>
                          <p className="text-muted-foreground text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </div>

                        <a href={item.file} download className="btn-hero w-full group/btn inline-flex items-center justify-center">
                          <Download className="h-4 w-4 mr-2" />
                          Download
                        </a>
                      </div>
                    </div>)}
                </div>
              </div>)}
          </div>
        </section>
      </main>
      <Footer />
    </div>;
};
export default Downloads;