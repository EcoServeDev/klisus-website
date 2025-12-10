import { ArrowRight, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export function CTASection() {
  return (
    <section className="py-20 lg:py-32 bg-muted/30" aria-labelledby="cta-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-card">
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
          
          {/* Content */}
          <div className="relative z-10 px-8 py-16 lg:px-16 lg:py-24 text-center">
            <h2 
              id="cta-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            >
              Ready to Drive <span className="gradient-text">Climate Impact</span>?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
              Whether you're looking to trade carbon credits, support sustainable farming, 
              implement MRV solutions, or develop ESG strategies – we're here to help.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/consulting">
                  Explore Consulting
                </Link>
              </Button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <a 
                href="mailto:hello@klisus.io" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Mail className="w-5 h-5" />
                hello@klisus.io
              </a>
              <a 
                href="tel:+1234567890" 
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <Phone className="w-5 h-5" />
                +1 (234) 567-890
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
