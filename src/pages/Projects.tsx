import { useState } from "react";
import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ui/ProjectCard";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const projects = [
  {
    title: "Paythru Dashboard",
    category: "Web Apps",
    description: "A comprehensive fintech dashboard for cross-border payments and real-time liquidity management.",
    image: "https://picsum.photos/seed/paythru/800/600",
    tags: ["React", "TypeScript", "Tailwind"],
    builtBy: "@Chidi",
    date: "2025"
  },
  {
    title: "Ngari Web App",
    category: "Landing Pages",
    description: "A high-conversion landing page for a logistics startup, featuring 3D asset integration.",
    image: "https://picsum.photos/seed/ngari/800/600",
    tags: ["Next.js", "Three.js"],
    builtBy: "@Ada",
    date: "2024"
  },
  {
    title: "Kemi Brand Kit",
    category: "Brand Identity",
    description: "Complete visual identity overhaul including logo architecture, typography systems, and digital assets.",
    image: "https://picsum.photos/seed/kemi/800/600",
    tags: ["Illustrator", "Photoshop"],
    builtBy: "@Kemi",
    date: "2025"
  },
  {
    title: "Pulse Commerce",
    category: "Web Apps",
    description: "Next-gen e-commerce engine with headless architecture and lightning-fast checkout.",
    image: "https://picsum.photos/seed/pulse/800/600",
    tags: ["Remix", "Shopify"],
    builtBy: "@Chidi",
    date: "2025"
  },
  {
    title: "Solaris UI Kit",
    category: "UI/UX",
    description: "A massive design system built for enterprise-grade SaaS products with 400+ components.",
    image: "https://picsum.photos/seed/solaris/800/600",
    tags: ["Figma"],
    builtBy: "@Ada",
    date: "2024"
  },
  {
    title: "Aura Skincare",
    category: "Brand Identity",
    description: "Elegant packaging design and digital storefront for a premium sustainable skincare brand.",
    image: "https://picsum.photos/seed/aura/800/600",
    tags: ["Figma", "Next.js"],
    builtBy: "@Kemi",
    date: "2023"
  }
];

const categories = ["All", "Web Apps", "Landing Pages", "Brand Identity", "UI/UX"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-16 max-w-3xl">
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-white">Our Work</h1>
          <p className="text-lg text-gray-400 md:text-xl">
            Systems, websites, and brands we built at Axell Studio. We focus on high-performance digital products for the next generation of builders.
          </p>
        </div>

        <div className="mb-12 flex flex-wrap gap-6 border-b border-white/10 pb-4">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "relative pb-4 text-sm font-medium transition-colors hover:text-white",
                activeCategory === cat ? "text-white" : "text-gray-500"
              )}
            >
              {cat}
              {activeCategory === cat && (
                <span className="absolute bottom-0 left-0 h-0.5 w-full bg-brand" />
              )}
            </button>
          ))}
        </div>

        <div className="mb-32 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>

        <div className="rounded-3xl bg-[#111] p-8 md:p-16 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 border border-white/5">
          <div className="max-w-xl">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Have a project in mind?</h2>
            <p className="text-lg text-gray-400">
              We're currently accepting new clients for Q3 2025. Let's build something extraordinary together.
            </p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="primary">Get in touch →</Button>
            </Link>
            <Link to="/services">
              <Button variant="outline">View services</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
