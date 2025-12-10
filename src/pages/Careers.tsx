import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Heart, Globe, Zap, Users, Leaf, Coffee } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";

const benefits = [
  {
    icon: Heart,
    title: "Meaningful Work",
    description: "Contribute to real climate solutions that impact millions of lives.",
  },
  {
    icon: Globe,
    title: "Remote-First",
    description: "Work from anywhere in the world with flexible hours.",
  },
  {
    icon: Zap,
    title: "Growth Opportunities",
    description: "Continuous learning with education budgets and mentorship.",
  },
  {
    icon: Users,
    title: "Amazing Team",
    description: "Collaborate with passionate experts in blockchain and sustainability.",
  },
  {
    icon: Leaf,
    title: "Sustainability Benefits",
    description: "Carbon-neutral operations and eco-friendly company perks.",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description: "Generous PTO, wellness programs, and team retreats.",
  },
];

const Careers = () => {
  return (
    <>
      <Helmet>
        <title>Careers at Klisus | Join Our Climate Tech Team</title>
        <meta 
          name="description" 
          content="Join Klisus and help build blockchain solutions for climate action. View open positions and apply to be part of our mission-driven team." 
        />
        <link rel="canonical" href="https://klisus.io/careers" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="relative py-20 lg:py-32 hero-section overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroForest} 
              alt="" 
              className="w-full h-full object-cover opacity-20"
              aria-hidden="true"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-hero/80 to-hero" />
          </div>
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">We're Hiring</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hero-foreground mb-6">
                Build the Future of{" "}
                <span className="gradient-text">Climate Tech</span>
              </h1>
              <p className="text-xl text-hero-muted mb-8">
                Join a team of passionate innovators working to solve climate 
                challenges through blockchain technology and expert consulting.
              </p>
              <Button variant="hero" size="xl" asChild>
                <a href="#apply">
                  View Open Positions
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32 bg-background" aria-labelledby="benefits-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 
                id="benefits-heading"
                className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4"
              >
                Why Work at Klisus?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We believe in creating an environment where talented people can do their best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <benefit.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Application Form */}
        <section id="apply" className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Apply to Join Our Team
                </h2>
                <p className="text-muted-foreground">
                  Submit your application below. We review every submission and 
                  respond within one week.
                </p>
              </div>

              {/* Embedded Google Form */}
              <div className="bg-card rounded-2xl p-4 border border-border shadow-soft overflow-hidden">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdExampleFormId/viewform?embedded=true"
                  width="100%"
                  height="800"
                  className="border-0"
                  title="Klisus Career Application Form"
                >
                  Loading application form...
                </iframe>
              </div>

              <div className="mt-8 text-center text-muted-foreground">
                <p>
                  Have questions about the application process?{" "}
                  <Link to="/contact" className="text-primary hover:underline">
                    Contact our HR team
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Careers;
