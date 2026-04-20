import { Link } from "react-router-dom";
import { CheckCircle2, Code2, Rocket, Paintbrush, MessageCircle } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

const plans = [
  {
    title: "Product Engineering",
    icon: <Code2 className="text-brand" />,
    badge: "Most Popular",
    description: "Next.js, React, Supabase, APIs. We build web apps, dashboards, SaaS, and internal tools that scale.",
    features: [
      "Auth + Database Architecture",
      "Stripe/Payment Integration",
      "Custom Admin Dashboard",
      "30 days post-launch support",
      "Scalable Cloud Deployment",
    ],
    price: "₦350,000",
    cta: "Start project"
  },
  {
    title: "Brand & Product Design",
    icon: <Paintbrush className="text-brand" />,
    description: "Logos, design systems, UI/UX, landing pages. We make your product look like it costs 10x more.",
    features: [
      "Full Logo + Brand Styleguide",
      "Comprehensive Figma UI Kit",
      "High-conversion Landing Page",
      "3 revision rounds included",
      "Export-ready Assets",
    ],
    price: "₦150,000",
    cta: "See case studies",
    href: "/projects"
  },
  {
    title: "MVP Sprint — 14 Days",
    icon: <Rocket className="text-brand" />,
    badge: "For Founders",
    description: "Have an idea? We design + build + deploy a testable MVP in 2 weeks. Launch fast, learn faster.",
    features: [
      "Discovery & Strategy Call",
      "Interactive Clickable Prototype",
      "Coded V1 Core MVP",
      "Production Deploy to Vercel",
      "Product Analytics Setup",
    ],
    price: "₦500,000",
    cta: "Book a sprint"
  }
];

const addons = [
  {
    title: "API Integration",
    description: "Connect your app with any 3rd-party service like Twilio, SendGrid, or custom ERPs.",
    price: ""
  },
  {
    title: "Site Maintenance",
    description: "Monthly security updates, performance monitoring, and bug fixes.",
    price: "₦30,000/mo"
  },
  {
    title: "Pitch Decks",
    description: "We design investor-ready decks that tell a compelling story and secure funding.",
    price: ""
  },
  {
    title: "Tech Consulting",
    description: "1-on-1 calls to discuss your architecture, stack choice, or product roadmap.",
    price: "₦25,000/hr"
  }
];

function PricingCard({ plan }: { plan: any }) {
  return (
    <div className="relative flex flex-col justify-between rounded-3xl bg-[#111] border border-white/5 p-8 transition-colors hover:border-brand/30">
      <div>
        <div className="mb-6 flex items-center justify-between">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
            {plan.icon}
          </div>
          {plan.badge && (
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {plan.badge}
            </span>
          )}
        </div>
        <h3 className="mb-4 text-2xl font-bold text-white">{plan.title}</h3>
        <p className="mb-8 text-sm text-gray-400">{plan.description}</p>
        
        <ul className="mb-12 space-y-4">
          {plan.features.map((f: string) => (
            <li key={f} className="flex gap-3 text-sm text-gray-300">
              <CheckCircle2 className="shrink-0 text-brand" size={18} />
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </div>
      
      <div>
        <p className="mb-6 flex flex-col text-sm text-gray-400">
          STARTING AT
          <span className="text-3xl font-bold text-white">{plan.price}</span>
        </p>
        <Link to={plan.href || "/contact"} className="block w-full">
          <Button variant={plan.badge === "Most Popular" ? "primary" : "secondary"} className="w-full">
            {plan.cta}
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        
        {/* Header */}
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">Premium Agency Services</span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-white">Services</h1>
          <p className="mb-10 text-lg text-gray-400">
            We take ideas from Figma to production. Pick a lane or hire us for the full journey. We specialize in building fast, scalable, and high-converting digital products.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="primary">Book free 15-min call</Button>
            </Link>
            <Link to="/projects">
              <Button variant="ghost">View Portfolio →</Button>
            </Link>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-32 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <PricingCard key={plan.title} plan={plan} />
          ))}
        </div>

        {/* Add-ons */}
        <div className="mb-32">
          <div className="mb-8 border-b border-white/10 pb-4">
            <h2 className="text-2xl font-bold">Add-ons</h2>
            <p className="text-gray-400">Extra services to boost your project after launch.</p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {addons.map((addon) => (
              <div key={addon.title} className="rounded-2xl border border-white/5 bg-[#111] p-6">
                <h3 className="mb-2 text-lg font-bold">{addon.title}</h3>
                <p className="mb-6 text-sm text-gray-400">{addon.description}</p>
                {addon.price && (
                  <span className="inline-block rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white">
                    {addon.price}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* How we work */}
        <div className="mb-32 rounded-3xl bg-[#050505] p-8 md:p-16 border border-white/5">
          <div className="mb-16">
            <h2 className="mb-4 text-3xl font-bold">How we work</h2>
            <p className="text-gray-400">A transparent, predictable process from kickoff to handoff.</p>
          </div>
          
          <div className="grid gap-12 md:grid-cols-4 relative">
            <div className="absolute top-6 left-0 w-full h-[1px] bg-white/10 hidden md:block" />
            
            {[
              { num: "01", title: "Brief", desc: "We align on goals, scope, and target audience through a discovery workshop." },
              { num: "02", title: "Design", desc: "High-fidelity wireframes and UI designs in Figma for your feedback." },
              { num: "03", title: "Build", desc: "Our engineers turn the designs into clean, performant, and bug-free code." },
              { num: "04", title: "Launch", desc: "We deploy to production and hand over all assets and documentation." },
            ].map((step, i) => (
              <div key={step.title} className="relative z-10">
                <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#111] border border-white/10">
                  <span className="text-brand text-sm font-bold">{step.num}</span>
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{step.title}</h3>
                <p className="text-sm text-gray-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="rounded-3xl bg-brand/5 p-8 md:p-16 flex flex-col md:flex-row items-center justify-between gap-8 border border-brand/20 relative overflow-hidden">
          <div className="relative z-10 max-w-xl">
            <h2 className="mb-4 text-3xl font-bold text-white">Not sure what you need?<br/>Let's talk.</h2>
            <p className="text-lg text-gray-300">
              We offer custom packages tailored specifically to your business needs and budget constraints.
            </p>
          </div>
          <Link relative="path" to="/contact" className="relative z-10">
            <Button className="bg-[#25D366] text-black hover:bg-[#20bd5a] border-none flex gap-2">
              <MessageCircle size={20} /> WhatsApp us
            </Button>
          </Link>

          {/* Abstract Bg */}
          <div className="absolute right-0 top-0 -z-0 opacity-10">
            <Code2 size={400} className="text-brand -rotate-12 translate-x-1/4 -translate-y-1/4" />
          </div>
        </div>
      </div>
    </div>
  );
}
