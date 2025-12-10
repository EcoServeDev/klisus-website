import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroForest from "@/assets/hero-forest.jpg";

export function HeroSection() {
  return (
    <section 
      className="relative min-h-[90vh] flex items-center hero-section overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroForest} 
          alt="Aerial view of forest with blockchain network visualization representing Klisus climate technology" 
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-hero/80 via-hero/60 to-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-hero/80 via-transparent to-transparent" />
      </div>

      {/* Animated Glow */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: "2s" }} />

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-8 animate-fade-up">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span className="text-sm font-medium">Pioneering Blockchain for Climate Action</span>
          </div>

          {/* Headline */}
          <h1 
            id="hero-heading"
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-display font-bold text-hero-foreground mb-6 animate-fade-up stagger-1"
          >
            Klisus: <span className="gradient-text">Blockchain Powerhouse</span> for Climate Action
          </h1>

          {/* Sub-headline */}
          <p className="text-lg md:text-xl text-hero-muted max-w-2xl mb-10 animate-fade-up stagger-2">
            Empowering sustainable futures through carbon credits, farmer plantations, forestation MRV, and expert ESG consulting.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 animate-fade-up stagger-3">
            <Button variant="hero" size="xl" asChild>
              <Link to="/products">
                Explore Products
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <Link to="/contact">
                <Play className="w-5 h-5" />
                Book a Consultation
              </Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 pt-8 border-t border-hero-foreground/10 animate-fade-up stagger-4">
            <p className="text-hero-muted text-sm mb-4">Trusted by forward-thinking organizations</p>
            <div className="flex flex-wrap gap-8 items-center opacity-60">
              {["Fortune 500 Partners", "100+ Projects", "50M+ Tons CO₂ Tracked", "30+ Countries"].map((stat, i) => (
                <div key={i} className="text-hero-foreground font-medium">
                  {stat}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-hero-foreground/30 flex justify-center pt-2">
          <div className="w-1 h-3 bg-hero-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
