import { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, Calendar, MessageCircle } from "lucide-react";
import { BlogCard } from "../components/ui/BlogCard";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const posts = [
  {
    title: "Why Minimalist UI is Winning in the Nigerian Startup",
    category: "DESIGN",
    description: "Exploring how local startups are moving away from cluttered interfaces to embrace speed and clarity in their product design.",
    image: "https://picsum.photos/seed/minimal/800/500",
    date: "Nov 12, 2023",
    readTime: "4 min read",
    slug: "minimalist-ui"
  },
  {
    title: "React Server Components: A Game Changer for Mobile",
    category: "ENGINEERING",
    description: "Deep diving into RSCs and how they help us deliver lightning-fast experiences on unstable networks.",
    image: "https://picsum.photos/seed/react/800/500",
    date: "Nov 08, 2023",
    readTime: "6 min read",
    slug: "react-server-components"
  },
  {
    title: "The MVP Trap: Why Shipping Too Fast Can Kill Your Product",
    category: "FOUNDERS",
    description: "Lessons learned from building 20+ MVPs at Axell Studio and knowing when to pivot versus when to persevere.",
    image: "https://picsum.photos/seed/trap/800/500",
    date: "Nov 02, 2023",
    readTime: "4 min read",
    slug: "the-mvp-trap"
  },
  {
    title: "Reimagining Digital Banking for the Unbanked",
    category: "CASE STUDIES",
    description: "How we partnered with a Tier 1 bank to design a mobile-first experience that reached over 500k active users.",
    image: "https://picsum.photos/seed/banking/800/500",
    date: "Oct 28, 2023",
    readTime: "7 min read",
    slug: "reimagining-digital-banking"
  },
  {
    title: "The Role of Micro-Animations in User Retention",
    category: "DESIGN",
    description: "Small movements, big impact. How we use motion to guide users and create elements of 'delight' in functional apps.",
    image: "https://picsum.photos/seed/motion/800/500",
    date: "Oct 20, 2023",
    readTime: "4 min read",
    slug: "micro-animations"
  },
  {
    title: "PostgreSQL Performance Tuning for Growing Datasets",
    category: "ENGINEERING",
    description: "Practical tips for optimizing queries and indexing strategies as your user base scales from 1k to 100k+ users.",
    image: "https://picsum.photos/seed/postgres/800/500",
    date: "Oct 15, 2023",
    readTime: "5 min read",
    slug: "postgres-tuning"
  }
];

const categories = ["All", "Engineering", "Design", "Founders", "Case Studies"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? posts 
    : posts.filter(p => p.category === activeCategory.toUpperCase());

  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl text-white">Blog</h1>
          <p className="text-lg text-gray-400">
            How we think about design, code, and shipping products in Nigeria. Insights from the heart of Lagos' digital frontier.
          </p>
        </div>

        {/* Featured Story */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px bg-white/10 flex-grow" />
            <span className="text-[10px] font-bold tracking-widest text-brand uppercase">FEATURED STORY</span>
            <div className="h-px bg-white/10 flex-grow" />
          </div>

          <Link to="/blog/scaling-fintech" className="group grid gap-0 overflow-hidden rounded-3xl bg-[#0f0f0f] border border-white/5 md:grid-cols-2 lg:grid-cols-5 hover:border-brand/30 transition-all">
            <div className="aspect-[4/3] md:aspect-auto lg:col-span-3 bg-white/5 relative">
              <img 
                src="https://picsum.photos/seed/fintech-feature/1200/800" 
                alt="Fintech Infrastructure" 
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col justify-center p-8 md:p-12 lg:col-span-2">
              <div className="mb-4">
                <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] uppercase font-semibold text-brand tracking-wider">
                  ENGINEERING
                </span>
              </div>
              <h2 className="mb-6 text-3xl font-bold md:text-4xl leading-tight group-hover:text-brand transition-colors">
                Scaling Fintech Infrastructure: How We Built for 1M+ Transactions
              </h2>
              <p className="mb-12 text-gray-400">
                An inside look at the architectural decisions, bottleneck resolutions, and security protocols required to handle high-volume financial data.
              </p>
              
              <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/5 pt-6 mt-auto">
                <div className="flex items-center gap-3">
                  <img src="https://picsum.photos/seed/chidi/100/100" className="w-8 h-8 rounded-full border border-white/10" alt="Chidi" />
                  <div className="flex flex-col gap-1">
                    <span className="text-white font-bold leading-none">Chidi</span>
                    <span className="leading-none text-gray-500">Oct 24, 2023</span>
                  </div>
                </div>
                <span className="flex items-center gap-1.5"><Clock size={12}/> 5 min read</span>
              </div>
            </div>
          </Link>
        </div>

        {/* Categories */}
        <div className="mb-12 flex flex-wrap gap-2 md:gap-4 border-b border-white/10 pb-6">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "rounded-full px-4 py-2 text-xs sm:text-sm font-medium transition-colors",
                activeCategory === cat ? "bg-brand text-black" : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
              )}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mb-32 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((p, i) => (
            <BlogCard key={i} {...p} />
          ))}
        </div>

        {/* Interstitial CTA */}
        <div className="rounded-3xl bg-[#111] p-12 md:p-20 text-center flex flex-col items-center border border-white/5 mx-auto max-w-5xl">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight md:text-5xl">
            Have a project? <br/>
            <span className="text-brand">Let's talk</span>
          </h2>
          <p className="mb-10 max-w-xl text-sm text-gray-400 leading-relaxed md:text-base">
            Whether you're looking to build an MVP from scratch or scale an existing product, our team of experts is ready to help.
          </p>
          <div className="flex shrink-0 flex-wrap justify-center gap-4">
            <Link to="/contact">
              <Button variant="primary" className="flex items-center gap-2 px-8">
                <MessageCircle size={18} /> Chat on WhatsApp
              </Button>
            </Link>
            <Link to="/projects">
              <Button variant="outline">View Our Work</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
