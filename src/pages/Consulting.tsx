import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Target, 
  Award, 
  Leaf, 
  FileText, 
  Cpu, 
  Shield, 
  Users, 
  Megaphone, 
  Handshake,
  CheckCircle2
} from "lucide-react";
import consultingTeam from "@/assets/consulting-team.jpg";

const services = [
  {
    icon: Target,
    title: "ESG Strategy Development",
    description: "We design customised ESG strategies that translate sustainability ambitions into actionable outcomes.",
    features: ["ESG Framework Design", "Sustainability Roadmap Development", "Materiality Assessment"],
  },
  {
    icon: Award,
    title: "Sustainability Certification Advisory",
    description: "We support your journey towards recognised environmental certifications that enhance credibility and impact.",
    features: ["Green Certification Guidance", "Pre-Certification Assessment", "Post-Certification Implementation Support"],
  },
  {
    icon: Leaf,
    title: "Carbon & Net-Zero Strategy",
    description: "We help organisations measure, minimise, and offset carbon emissions, accelerating the transition to a low-carbon future.",
    features: ["Carbon Footprint Analysis", "Net-Zero Strategy Planning", "Carbon Offset Solutions"],
  },
  {
    icon: FileText,
    title: "ESG Reporting & Regulatory Compliance",
    description: "We enable transparent reporting and ensure your sustainability practices align with evolving local and global standards.",
    features: ["Sustainability & ESG Reporting", "Compliance with Regulatory Norms", "Impact Assessment & Monitoring"],
  },
  {
    icon: Cpu,
    title: "Smart & Sustainable Technology Integration",
    description: "Empowering sustainability through intelligent systems and digital innovation.",
    features: ["Smart Infrastructure Integration", "Digital Twin & Simulation", "Data-Backed Decision Intelligence"],
  },
  {
    icon: Shield,
    title: "Risk & Resilience Planning",
    description: "Preparing your business for climate, operational, and sustainability-related risks.",
    features: ["Climate Risk Profiling", "Resilience Strategy Formulation", "Supply Chain ESG Audit"],
  },
  {
    icon: Users,
    title: "Training & Capacity Building",
    description: "We build ESG competence across teams to embed sustainability at every decision level.",
    features: ["Stakeholder Workshops & Seminars", "ESG Awareness & Education", "Internal Leadership & Capability Building"],
  },
  {
    icon: Megaphone,
    title: "ESG Communication & Brand Positioning",
    description: "Enhancing brand value through credible sustainability storytelling and stakeholder engagement.",
    features: ["ESG Brand Strategy", "Communication Alignment", "Sustainability Campaign Development"],
  },
  {
    icon: Handshake,
    title: "Strategic Partnerships & Collaborations",
    description: "Connecting you with key institutions, innovators, and policymakers to scale sustainability outcomes.",
    features: ["Strategic Networking & Alliances", "Government & NGO Collaboration", "Global Sustainability Involvement"],
  },
];

const Consulting = () => {
  return (
    <>
      <Helmet>
        <title>ESG Services | Klisus - Sustainability Consulting & Strategy</title>
        <meta 
          name="description" 
          content="At Klisus, we help organizations navigate the growing complexity of sustainability with solutions shaped by science, data, and on-ground expertise." 
        />
        <meta name="keywords" content="ESG consulting, sustainability consulting, carbon strategy, net-zero planning, ESG reporting, climate risk assessment" />
        <link rel="canonical" href="https://klisus.com/services" />
      </Helmet>

      <Layout>
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 hero-section overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">Expert ESG Advisory</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hero-foreground mb-6">
                Our ESG{" "}
                <span className="gradient-text">Services</span>
              </h1>
              <p className="text-xl text-hero-muted mb-8">
                At Klisus, we help organizations navigate the growing complexity of sustainability 
                with solutions shaped by science, data, and on-ground expertise. Our approach is 
                tailored to your industry context and aligned with long-term business value.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="xl" asChild>
                  <Link to="/contact">
                    Book a Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
                <Button variant="heroOutline" size="xl" asChild>
                  <a href="/klisus-services-brochure.pdf" download>
                    Download Services Guide
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-32 bg-background" aria-labelledby="services-heading">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-display font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Section */}
        <section className="py-20 lg:py-32 relative overflow-hidden" aria-labelledby="why-choose-consulting-heading">
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${consultingTeam})` }}
          />
          <div className="absolute inset-0 bg-hero/90" />
          
          <div className="container mx-auto px-4 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <span className="inline-block text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                  Why Klisus
                </span>
                <h2 
                  id="why-choose-consulting-heading"
                  className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-hero-foreground mb-6"
                >
                  Why Choose <span className="gradient-text">Klisus</span>
                </h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Deep science-led expertise backed by strong environmental and tech credentials",
                  "Proven track record of driving measurable sustainability outcomes",
                  "Holistic methodology bridging technology, climate strategy, brand & governance",
                  "Commitment to long-term success: we don't just set targets—we build the capacity to achieve and sustain them",
                ].map((reason, index) => (
                  <div 
                    key={index} 
                    className="flex items-start gap-4 bg-hero-foreground/5 backdrop-blur-sm rounded-xl p-6 border border-hero-foreground/10"
                  >
                    <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                    </div>
                    <span className="text-hero-foreground text-lg">{reason}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="relative bg-card rounded-3xl overflow-hidden border border-border shadow-card p-8 lg:p-16 text-center">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
              
              <div className="relative z-10 max-w-2xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
                  Ready to turn ambition into impact?
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Let's build your next-gen sustainability programme.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button variant="hero" size="xl" asChild>
                    <Link to="/contact">
                      Contact Us
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                  <Button variant="outline" size="xl" asChild>
                    <a href="/klisus-brochure.pdf" download>
                      Download Our Brochure
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Consulting;
