import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Coins, Sprout, Satellite, BarChart3, CheckCircle2 } from "lucide-react";
import blockchainNetwork from "@/assets/blockchain-network.jpg";
import farmerPlanting from "@/assets/farmer-planting.jpg";
import forestMonitoring from "@/assets/forest-monitoring.jpg";

const products = [
  {
    id: "carbon-credits",
    icon: Coins,
    title: "Blockchain Carbon Credits",
    subtitle: "Tokenized Carbon Marketplace",
    description: "Our decentralized marketplace revolutionizes carbon trading with complete transparency and security. Each carbon credit is tokenized on the blockchain, ensuring traceability from source to retirement.",
    image: blockchainNetwork,
    alt: "Blockchain network visualization",
    features: [
      "Tokenized carbon credits with full audit trail",
      "Prevention of double-counting through smart contracts",
      "Fractional ownership enabling broader participation",
      "Instant settlement and reduced transaction costs",
      "Integration with major carbon registries",
      "Real-time pricing and market analytics",
    ],
  },
  {
    id: "farmer-support",
    icon: Sprout,
    title: "Farmer Plantation Support",
    subtitle: "Sustainable Agriculture Incentives",
    description: "Empower farming communities with crypto-based incentive tokens for sustainable practices. Our platform directly rewards farmers for carbon sequestration and eco-friendly agriculture.",
    image: farmerPlanting,
    alt: "Hands planting a seedling",
    features: [
      "Token rewards for verified sustainable practices",
      "Direct payments without intermediaries",
      "Mobile-first platform for rural accessibility",
      "Training and certification programs",
      "Community-based verification systems",
      "Market access for certified products",
    ],
  },
  {
    id: "mrv",
    icon: Satellite,
    title: "Forest MRV Platform",
    subtitle: "IoT & Satellite Monitoring",
    description: "Real-time Monitoring, Reporting, and Verification using cutting-edge IoT sensors and satellite imagery. Provides auditable proof of forestation impact meeting international standards.",
    image: forestMonitoring,
    alt: "Satellite monitoring visualization",
    features: [
      "Real-time satellite imagery analysis",
      "Ground-based IoT sensor integration",
      "AI-powered deforestation detection",
      "Automated carbon sequestration calculation",
      "Compliance with Verra, Gold Standard, and ART",
      "Custom reporting dashboards",
    ],
  },
  {
    id: "dashboard",
    icon: BarChart3,
    title: "ESG Dashboard",
    subtitle: "Unified Sustainability Intelligence",
    description: "A comprehensive dashboard that brings together all your sustainability data, from carbon credits to farmer programs to MRV metrics, in one unified view.",
    image: null,
    alt: "",
    features: [
      "Real-time KPI tracking and alerts",
      "Automated ESG report generation",
      "Stakeholder sharing portals",
      "Integration with existing ERP systems",
      "Predictive analytics and forecasting",
      "Customizable visualization widgets",
    ],
  },
];

const Products = () => {
  return (
    <>
      <Helmet>
        <title>Blockchain Climate Products | Klisus - Carbon Credits, MRV, Farmer Support</title>
        <meta 
          name="description" 
          content="Explore Klisus blockchain products: tokenized carbon credits marketplace, farmer plantation support, forest MRV monitoring, and ESG dashboards." 
        />
        <meta name="keywords" content="blockchain carbon credits, sustainable forestation MRV, climate farmer incentives, carbon marketplace, ESG dashboard" />
        <link rel="canonical" href="https://klisus.com/products" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-20 lg:py-32 hero-section">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent mb-6">
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
                <span className="text-sm font-medium">Our Platform</span>
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-hero-foreground mb-6">
                Blockchain-Powered{" "}
                <span className="gradient-text">Climate Solutions</span>
              </h1>
              <p className="text-xl text-hero-muted mb-8">
                From carbon credit tokenization to real-time forest monitoring, 
                our integrated platform delivers end-to-end sustainability solutions.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request a Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Products */}
        <section className="py-20 lg:py-32 bg-background">
          <div className="container mx-auto px-4 lg:px-8 space-y-20 lg:space-y-32">
            {products.map((product, index) => (
              <div
                key={product.id}
                id={product.id}
                className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6">
                    <product.icon className="w-7 h-7" />
                  </div>
                  <span className="text-sm font-semibold text-primary uppercase tracking-wider">
                    {product.subtitle}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mt-2 mb-4">
                    {product.title}
                  </h2>
                  <p className="text-muted-foreground mb-8 leading-relaxed">
                    {product.description}
                  </p>

                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button variant="default" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                {/* Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  {product.image ? (
                    <div className="relative rounded-2xl overflow-hidden shadow-card">
                      <img 
                        src={product.image}
                        alt={product.alt}
                        className="w-full h-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent" />
                    </div>
                  ) : (
                    <div className="relative rounded-2xl overflow-hidden shadow-card bg-gradient-to-br from-primary/20 to-accent/20 aspect-[4/3] flex items-center justify-center">
                      <product.icon className="w-32 h-32 text-primary/30" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us for a personalized demo and discover how Klisus 
              can transform your sustainability operations.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Request Demo
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button variant="outline" size="xl" asChild>
                <Link to="/consulting">
                  Explore Consulting
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Products;
