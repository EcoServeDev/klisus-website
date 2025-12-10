import { Search, Cog, Monitor, TrendingUp } from "lucide-react";

const steps = [
  {
    icon: Search,
    number: "01",
    title: "Assess & Design",
    description: "Map your sustainability needs, identify opportunities, and set measurable KPIs aligned with your business goals and global standards.",
  },
  {
    icon: Cog,
    number: "02",
    title: "Build & Integrate",
    description: "Deploy blockchain tools, tokenization systems, and consulting frameworks. Seamlessly integrate with existing operations and workflows.",
  },
  {
    icon: Monitor,
    number: "03",
    title: "Monitor & Verify",
    description: "Use our MRV platform for real-time tracking. IoT sensors and satellite data provide auditable proof of environmental impact.",
  },
  {
    icon: TrendingUp,
    number: "04",
    title: "Scale & Impact",
    description: "Expand globally with proven models. Generate revenue from carbon credits while driving meaningful climate action at scale.",
  },
];

export function ApproachSection() {
  return (
    <section className="py-20 lg:py-32 bg-background" aria-labelledby="approach-heading">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-4">
            Our Approach
          </span>
          <h2 
            id="approach-heading"
            className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
          >
            A Proven Path to Climate Impact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our systematic approach combines blockchain innovation with traditional ESG expertise 
            to deliver measurable, scalable sustainability outcomes.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-2xl p-8 lg:p-10 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card overflow-hidden"
            >
              {/* Background Number */}
              <div className="absolute top-4 right-4 text-8xl font-display font-bold text-muted/20 select-none">
                {step.number}
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                  <step.icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl lg:text-2xl font-display font-bold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
