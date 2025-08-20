import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useState, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";
const ManufacturingSlideshow = () => {
  const slides = [{
    image: "/lovable-uploads/c45954e0-6e2d-4661-acfa-483399091a6e.png",
    title: "World-Class Manufacturing Facility",
    description: "State-of-the-art production facility with advanced concrete pipe manufacturing capabilities"
  }, {
    image: "/lovable-uploads/8c2b87ac-0872-42ad-b335-db8573002616.png",
    title: "Precision Engineering",
    description: "Advanced lifting and handling equipment ensures quality at every step of production"
  }, {
    image: "/lovable-uploads/d3978971-c3ad-4a2b-84bc-1bf2ebfd8017.png",
    title: "Rigorous Quality Testing",
    description: "Every pipe undergoes comprehensive water testing to ensure durability and performance"
  }, {
    image: "/lovable-uploads/43f4c169-7632-4387-b53d-7ef1c0175ffe.png",
    title: "Modern Infrastructure",
    description: "Our spacious facility houses cutting-edge machinery and quality control systems"
  }, {
    image: "/lovable-uploads/13cebaad-b5de-4eaa-b441-d424f165719d.png",
    title: "Reliable Delivery",
    description: "Efficient logistics ensure your precast solutions reach you on time, every time"
  }];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({
    delay: 4000,
    stopOnInteraction: true
  }));
  useEffect(() => {
    if (!api) {
      return;
    }
    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => {
      setCurrentSlide(api.selectedScrollSnap());
    });
  }, [api]);
  return <section className="py-16 bg-gradient-to-br from-background via-muted-light/20 to-background overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-4">
            Our <span className="text-accent">Manufacturing Excellence</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto mb-6"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look inside our state-of-the-art facility where precision meets innovation
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <Carousel className="w-full" plugins={[plugin.current]} opts={{
          align: "start",
          loop: true
        }} setApi={setApi}>
            <CarouselContent>
              {slides.map((slide, index) => <CarouselItem key={index}>
                  <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden group shadow-2xl">
                    {/* Image with overlay */}
                    <div className="absolute inset-0">
                      <img src={slide.image} alt={slide.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                      {/* Gradient overlay */}
                      
                    </div>

                    {/* Content overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 lg:p-12">
                      <div className="text-white max-w-3xl">
                        <h3 className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl mb-2 md:mb-4 animate-fade-in">
                          {slide.title}
                        </h3>
                        <p className="text-xs md:text-sm lg:text-base xl:text-lg text-white/90 animate-fade-in leading-relaxed">
                          {slide.description}
                        </p>
                      </div>
                    </div>

                    {/* Slide indicator */}
                    <div className="absolute top-4 right-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {index + 1} / {slides.length}
                    </div>
                  </div>
                </CarouselItem>)}
            </CarouselContent>

            {/* Navigation buttons */}
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary border-0 shadow-lg h-12 w-12 hidden md:flex" />
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-primary border-0 shadow-lg h-12 w-12 hidden md:flex" />
          </Carousel>

          {/* Progress dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {slides.map((_, index) => <button key={index} className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-accent scale-110' : 'bg-muted-foreground/40 hover:bg-muted-foreground/60'}`} onClick={() => {
            setCurrentSlide(index);
            api?.scrollTo(index);
          }} aria-label={`Go to slide ${index + 1}`} />)}
          </div>
        </div>
      </div>
    </section>;
};
export default ManufacturingSlideshow;