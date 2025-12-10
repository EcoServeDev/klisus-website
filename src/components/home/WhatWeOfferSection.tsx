import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import blockchainNetwork from "@/assets/blockchain-network.jpg";
import farmerPlanting from "@/assets/farmer-planting.jpg";
import forestMonitoring from "@/assets/forest-monitoring.jpg";
import consultingTeam from "@/assets/consulting-team.jpg";

const offerings = [
  {
    id: "carbon-credits",
    title: "Blockchain Carbon Credits",
    subtitle: "Tokenize and Trade",
    description: "Our decentralized marketplace enables transparent trading of verified carbon offsets. Each credit is tokenized on the blockchain, ensuring traceability, preventing double-counting, and enabling fractional ownership.",
    image: blockchainNetwork,
    alt: "Blockchain network visualization representing carbon credit tokenization",
    link: "/products#carbon-credits",
  },
  {
    id: "farmer-support",
    title: "Farmer Plantation Support",
    subtitle: "Rewards for Sustainability",
    description: "Empower farmers with crypto-based incentive tokens for adopting sustainable practices. Our platform tracks and verifies eco-friendly farming, creating direct revenue streams from carbon sequestration.",
    image: farmerPlanting,
    alt: "Farmer hands planting seedling representing sustainable agriculture support",
    link: "/products#farmer-support",
  },
  {
    id: "mrv",
    title: "Forest MRV Platform",
    subtitle: "IoT & Satellite Monitoring",
    description: "Real-time Monitoring, Reporting, and Verification using IoT sensors and satellite imagery. Our MRV platform provides auditable proof of forestation impact, meeting international standards for carbon accounting.",
    image: forestMonitoring,
    alt: "Satellite view of forest with monitoring overlay representing MRV technology",
    link: "/products#mrv",
  },
  {
    id: "consulting",
    title: "ESG Consulting",
    subtitle: "Custom Strategies",
    description: "Expert guidance on ESG strategy, sustainability certification, carbon neutrality roadmaps, and regulatory compliance. We help organizations integrate blockchain solutions with traditional ESG frameworks.",
    image: consultingTeam,
    alt: "Business professionals reviewing ESG sustainability reports",
    link: "/consulting",
  },
];

export function WhatWeOfferSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % offerings.length);
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + offerings.length) % offerings.length);
  };

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const currentOffering = offerings[currentIndex];

  return (
    <section 
      className="py-20 lg:py-32 bg-muted/30" 
      aria-labelledby="what-we-offer-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            What We Offer
          </span>
          <h2 
            id="what-we-offer-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground"
          >
            Comprehensive Climate Solutions
          </h2>
        </div>

        {/* Slider */}
        <div className="relative">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] shadow-card">
                <img 
                  src={currentOffering.image} 
                  alt={currentOffering.alt}
                  className="w-full h-full object-cover transition-opacity duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 to-transparent" />
              </div>
              
              {/* Overlapping Label */}
              <div className="absolute -bottom-4 -right-4 lg:right-auto lg:-left-4 bg-accent text-accent-foreground px-6 py-3 rounded-xl shadow-glow font-semibold">
                {currentOffering.subtitle}
              </div>
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-soft border border-border">
                <div className="text-sm font-semibold text-primary mb-2">
                  {String(currentIndex + 1).padStart(2, "0")} / {String(offerings.length).padStart(2, "0")}
                </div>
                <h3 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  {currentOffering.title}
                </h3>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {currentOffering.description}
                </p>
                <Button variant="default" asChild>
                  <Link to={currentOffering.link}>
                    Learn More
                  </Link>
                </Button>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-10">
            <button
              onClick={prevSlide}
              className="p-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Previous slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            {/* Dots */}
            <div className="flex gap-2">
              {offerings.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? "bg-primary w-8" 
                      : "bg-border hover:bg-muted-foreground"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={index === currentIndex ? "true" : "false"}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-xl bg-card border border-border text-foreground hover:bg-muted transition-colors"
              aria-label="Next slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
