import { CheckCircle2, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import heroForest from "@/assets/hero-forest.jpg";

const reasons = [
  "Industry-leading blockchain expertise for carbon markets",
  "Measurable, verifiable impact with MRV technology",
  "Holistic integration of technology and consulting",
  "Deep commitment to environmental sustainability",
  "Global network of partners and projects",
  "Compliance with international carbon standards",
];

export function WhyChooseSection() {
  return (
    <section 
      className="relative py-20 lg:py-32 overflow-hidden"
      aria-labelledby="why-choose-heading"
    >
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroForest} 
          alt="" 
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-hero/90" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
              Why Choose Klisus
            </span>
            <h2 
              id="why-choose-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero-foreground mb-6"
            >
              Your Partner in{" "}
              <span className="gradient-text">Climate Innovation</span>
            </h2>
            <p className="text-lg text-hero-muted max-w-2xl mx-auto">
              We combine cutting-edge blockchain technology with deep ESG expertise 
              to deliver solutions that drive real environmental impact.
            </p>
          </div>

          {/* Reasons Grid */}
          <div className="grid md:grid-cols-2 gap-4 lg:gap-6 mb-12">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="flex items-start gap-4 bg-hero-foreground/5 backdrop-blur-sm rounded-xl p-4 border border-hero-foreground/10"
              >
                <CheckCircle2 className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-hero-foreground">{reason}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Contact Us
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="/klisus-brochure.pdf" download>
                Download Brochure
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
