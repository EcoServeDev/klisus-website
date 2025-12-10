import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Target, Eye, Heart, Globe, Users, Award } from "lucide-react";
import heroForest from "@/assets/hero-forest.jpg";

const values = [
  {
    icon: Target,
    title: "Impact-Driven",
    description: "Every solution we build is measured by its real-world environmental impact.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description: "Blockchain technology ensures complete visibility and accountability.",
  },
  {
    icon: Heart,
    title: "Sustainability First",
    description: "Environmental responsibility guides every business decision we make.",
  },
  {
    icon: Globe,
    title: "Global Reach",
    description: "Our solutions scale across borders to maximize climate action.",
  },
];

const stats = [
  { value: "50M+", label: "Tons CO₂ Tracked" },
  { value: "200+", label: "Projects Delivered" },
  { value: "30+", label: "Countries Served" },
  { value: "500+", label: "Partners Worldwide" },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Klisus | Blockchain Climate Technology Leaders</title>
        <meta 
          name="description" 
          content="Learn about Klisus - pioneers in blockchain-powered climate solutions. Our mission is to drive sustainable futures through technology and expert consulting." 
        />
        <link rel="canonical" href="https://klisus.io/about" />
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
                <span className="text-sm font-medium">Our Story</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hero-foreground mb-6">
                Building the Future of{" "}
                <span className="gradient-text">Climate Action</span>
              </h1>
              <p className="text-xl text-hero-muted">
                Klisus was founded on a simple belief: technology can accelerate 
                the world's transition to sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
              <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                  <Target className="w-7 h-7" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  Our Mission
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to climate solutions by leveraging blockchain technology, 
                  creating transparent carbon markets, supporting sustainable farming communities, 
                  and providing expert ESG guidance that drives measurable environmental impact.
                </p>
              </div>

              <div className="bg-card rounded-2xl p-8 lg:p-12 border border-border">
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center text-accent mb-6">
                  <Eye className="w-7 h-7" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                  Our Vision
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every organization can participate in the climate solution economy, 
                  where sustainability efforts are transparently verified, and where technology 
                  bridges the gap between environmental intent and measurable action.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-32 bg-background" aria-labelledby="values-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12 lg:mb-16">
              <h2 
                id="values-heading"
                className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-4"
              >
                Our Core Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                These principles guide everything we do at Klisus.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card text-center"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-4 mx-auto group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <value.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-lg font-display font-bold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Join Us in Driving Climate Impact
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you're an organization looking for solutions or a professional 
              passionate about sustainability, we'd love to connect.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Get in Touch
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/careers">
                  View Careers
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default About;
