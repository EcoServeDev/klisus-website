import { TrendingDown, Coins, TreePine, Shield, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import farmerPlanting from "@/assets/farmer-planting.jpg";

const benefits = [
  {
    icon: TrendingDown,
    title: "Reduce emissions with tokenized credits",
    description: "Trade verified carbon credits on our blockchain marketplace",
  },
  {
    icon: Coins,
    title: "Support farmers with incentive tokens",
    description: "Reward sustainable practices with crypto-based incentives",
  },
  {
    icon: TreePine,
    title: "Verify forestation with MRV tools",
    description: "Real-time monitoring using IoT and satellite technology",
  },
  {
    icon: Shield,
    title: "Build resilient brands via consulting",
    description: "Expert ESG strategies aligned with global standards",
  },
];

export function WhyItMattersSection() {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="why-it-matters-heading">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
              Why It Matters
            </span>
            <h2 
              id="why-it-matters-heading"
              className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6"
            >
              From Climate Compliance to{" "}
              <span className="gradient-text">Innovation Leadership</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Climate risks are reshaping markets. Klisus shifts your organization from mere compliance 
              to innovation leadership through blockchain transparency, verified impact, and 
              data-driven sustainability strategies.
            </p>

            {/* Benefits List */}
            <ul className="space-y-6 mb-10">
              {benefits.map((benefit, index) => (
                <li 
                  key={index}
                  className="flex gap-4 group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{benefit.title}</h3>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" asChild>
              <Link to="/about">
                Learn More About Our Mission
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card">
              <img 
                src={farmerPlanting} 
                alt="Hands planting a seedling, representing sustainable farming and carbon sequestration"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
            
            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-6 shadow-card border border-border">
              <div className="text-3xl font-display font-bold text-primary mb-1">50M+</div>
              <div className="text-sm text-muted-foreground">Tons CO₂ Verified</div>
            </div>
            
            {/* Decorative Element */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
