import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, CarouselApi } from "@/components/ui/carousel";
import { useState, useRef, useEffect } from "react";
import Autoplay from "embla-carousel-autoplay";

const ManufacturingSlideshow = () => {
  const slides = [
    {
      image: "/lovable-uploads/c45954e0-6e2d-4661-acfa-483399091a6e.png",
      title: "World-Class Manufacturing Facility",
      description: "State-of-the-art production facility with advanced concrete pipe manufacturing capabilities",
    },
    {
      image: "/lovable-uploads/8c2b87ac-0872-42ad-b335-db8573002616.png",
      title: "Precision Engineering",
      description: "Advanced lifting and handling equipment ensures quality at every step of production",
    },
    {
      image: "/lovable-uploads/d3978971-c3ad-4a2b-84bc-1bf2ebfd8017.png",
      title: "Rigorous Quality Testing",
      description: "Every pipe undergoes comprehensive water testing to ensure durability and performance",
    },
    {
      image: "/lovable-uploads/43f4c169-7632-4387-b53d-7ef1c0175ffe.png",
      title: "Modern Infrastructure",
      description: "Our spacious facility houses cutting-edge machinery and quality control systems",
    },
    {
      image: "/lovable-uploads/13cebaad-b5de-4eaa-b441-d424f165719d.png",
      title: "Reliable Delivery",
      description: "Efficient logistics ensure your precast solutions reach you on time, every time",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [api, setApi] = useState<CarouselApi>();
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: true }));

  useEffect(() => {
    if (!api) return;
    setCurrentSlide(api.selectedScrollSnap());
    api.on("select", () => setCurrentSlide(api.selectedScrollSnap()));
  }, [api]);

  return (
    <section className="py-20 bg-gradient-to-br from-background via-muted-light/20 to-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5 bg-accent" />
            <span className="text-accent font-semibold text-sm uppercase tracking-widest">Inside Our Plant</span>
            <div className="w-8 h-0.5 bg-accent" />
          </div>
          <h2 className="font-montserrat font-bold text-3xl md:text-4xl text-primary mb-3">
            Our <span className="text-accent">Manufacturing Excellence</span>
          </h2>
          <div className="w-16 h-0.5 bg-border mx-auto mb-4" />
          <p className="text-base text-muted-foreground max-w-xl mx-auto">
            Take a look inside our state-of-the-art facility where precision meets innovation
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          <Carousel
            className="w-full"
            plugins={[plugin.current]}
            opts={{ align: "start", loop: true }}
            setApi={setApi}
          >
            <CarouselContent>
              {slides.map((slide, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[280px] sm:h-[380px] md:h-[460px] rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={slide.image}
                      alt={slide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Strong gradient overlay so text is readable */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />

                    {/* Slide counter */}
                    <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                      {index + 1} / {slides.length}
                    </div>

                    {/* Text overlay */}
                    <div className="absolute bottom-0 left-0 right-0 px-6 pb-8 pt-12">
                      <div className="w-8 h-0.5 bg-accent mb-3" />
                      <h3 className="font-montserrat font-bold text-lg md:text-xl lg:text-2xl text-white mb-2 leading-tight">
                        {slide.title}
                      </h3>
                      <p className="text-sm md:text-base text-white/80 leading-relaxed max-w-2xl">
                        {slide.description}
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-primary border-0 shadow-lg h-11 w-11 hidden md:flex" />
            <CarouselNext className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/95 hover:bg-white text-primary border-0 shadow-lg h-11 w-11 hidden md:flex" />
          </Carousel>

          {/* Progress dots */}
          <div className="flex justify-center gap-2 mt-6">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-accent w-6 h-2.5'
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50 w-2.5 h-2.5'
                }`}
                onClick={() => { setCurrentSlide(index); api?.scrollTo(index); }}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSlideshow;
