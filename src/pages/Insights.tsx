import { Helmet } from "react-helmet-async";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import blockchainNetwork from "@/assets/blockchain-network.jpg";
import forestMonitoring from "@/assets/forest-monitoring.jpg";
import farmerPlanting from "@/assets/farmer-planting.jpg";
import heroForest from "@/assets/hero-forest.jpg";

const featuredPost = {
  slug: "blockchain-carbon-credits-future",
  title: "The Future of Carbon Credits: How Blockchain is Transforming Climate Finance",
  excerpt: "Discover how tokenized carbon credits are revolutionizing the voluntary carbon market, enabling greater transparency, liquidity, and accessibility for organizations of all sizes.",
  image: blockchainNetwork,
  alt: "Blockchain network visualization",
  author: "Dr. Sarah Chen",
  date: "December 1, 2024",
  readTime: "8 min read",
  category: "Technology",
};

const posts = [
  {
    slug: "mrv-technology-forest-conservation",
    title: "MRV Technology: The Key to Credible Forest Conservation",
    excerpt: "How satellite imagery and IoT sensors are providing unprecedented verification of forestation projects.",
    image: forestMonitoring,
    alt: "Forest monitoring technology",
    author: "Mark Johnson",
    date: "November 28, 2024",
    readTime: "6 min read",
    category: "MRV",
  },
  {
    slug: "farmer-incentives-sustainable-agriculture",
    title: "Empowering Farmers Through Crypto Incentives",
    excerpt: "Real stories of how blockchain-based reward systems are transforming agricultural communities.",
    image: farmerPlanting,
    alt: "Farmer planting seedling",
    author: "Ana Martinez",
    date: "November 22, 2024",
    readTime: "5 min read",
    category: "Agriculture",
  },
  {
    slug: "esg-reporting-csrd-compliance",
    title: "Navigating CSRD: Your Guide to ESG Reporting Compliance",
    excerpt: "Essential strategies for meeting the EU's Corporate Sustainability Reporting Directive requirements.",
    image: heroForest,
    alt: "Forest aerial view",
    author: "James Wilson",
    date: "November 15, 2024",
    readTime: "7 min read",
    category: "Compliance",
  },
];

const categories = ["All", "Technology", "MRV", "Agriculture", "Compliance", "Strategy"];

const Insights = () => {
  return (
    <>
      <Helmet>
        <title>Insights & Resources | Klisus - Climate Tech Blog</title>
        <meta 
          name="description" 
          content="Expert insights on blockchain carbon credits, MRV technology, sustainable agriculture, and ESG strategy from the Klisus team." 
        />
        <link rel="canonical" href="https://klisus.com/insights" />
      </Helmet>

      <Layout>
        {/* Hero */}
        <section className="py-16 lg:py-24 hero-section">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-display font-bold text-hero-foreground mb-4">
                Insights & Resources
              </h1>
              <p className="text-xl text-hero-muted">
                Expert perspectives on blockchain climate solutions, ESG strategy, 
                and the future of sustainability.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-12 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <Link 
              to={`/insights/${featuredPost.slug}`}
              className="block group"
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card">
                <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full">
                  <img 
                    src={featuredPost.image}
                    alt={featuredPost.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-accent text-accent-foreground text-sm font-medium rounded-full">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <span className="text-sm font-medium text-primary mb-2 block">
                    {featuredPost.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 bg-background border-b border-border">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === "All"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted text-muted-foreground hover:bg-muted/80"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Posts Grid */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post) => (
                <Link
                  key={post.slug}
                  to={`/insights/${post.slug}`}
                  className="group block"
                >
                  <article className="bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-card h-full">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img 
                        src={post.image}
                        alt={post.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                        {post.category}
                      </span>
                      <h3 className="text-lg font-display font-bold text-foreground mt-2 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-display font-bold text-foreground mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
              Get the latest insights on blockchain climate solutions 
              delivered to your inbox monthly.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-background rounded-xl border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button variant="hero" size="lg">
                Subscribe
              </Button>
            </form>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Insights;
