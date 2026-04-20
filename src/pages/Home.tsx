
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Code2, LayoutDashboard, Twitter, Github, Linkedin, ExternalLink, Palette, Share2 } from "lucide-react";
import { Button } from "../components/ui/Button";
import { ProjectCard } from "../components/ui/ProjectCard";

function Hero() {
  return (
    <section className="relative overflow-hidden pt-24 pb-32 md:pt-32 md:pb-40">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="max-w-4xl">
          <h1 className="text-5xl font-extrabold tracking-tight text-white md:text-7xl lg:text-8xl">
            We build <span className="text-brand">systems</span> that work. Websites that <span className="text-brand flex-inline border-b-4 border-brand">convert</span>. Brands that stick.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-gray-400 md:text-xl">
            AxellStudio is a connected collective of elite developers and designers from Nigeria, delivering high-performance digital products for global visionaries.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link to="/projects">
              <Button variant="primary">See Our Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Abstract graphic */}
      <div className="absolute right-0 top-1/2 -z-10 hidden -translate-y-1/2 translate-x-1/4 opacity-20 md:block">
        <div className="flex h-[600px] w-[600px] items-center justify-center rounded-full border border-brand p-12">
          <div className="flex h-full w-full items-center justify-center rounded-full border border-brand p-12">
            <div className="flex text-brand">
              <Code2 size={120} strokeWidth={1} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stats() {
  return (
    <div className="border-t border-b border-white/10 bg-white/5 py-6">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-8 px-4 text-sm font-medium tracking-widest text-brand md:px-8">
        <div className="flex items-center gap-2 uppercase"><span className="text-white">✓</span> 5 BUILDERS</div>
        <div className="flex items-center gap-2 uppercase"><span className="text-white">✓</span> 3 SPECIALTIES: SYSTEMS, LANDING PAGES, DESIGN</div>
        <div className="flex items-center gap-2 uppercase"><span className="text-white">✓</span> 100% PROJECT OWNERSHIP</div>
        <div className="flex items-center gap-2 uppercase"><span className="text-white">✓</span> BUILT IN NIGERIA, FOR THE WORLD</div>
      </div>
    </div>
  );
}

function Services() {
  const services = [
    {
      icon: <Code2 className="text-brand" />,
      title: "Systems & Web Apps",
      description: "Complex architectures, SaaS dashboards, and automated workflows designed for scalability and peak performance.",
      builtBy: ["Chidi", "Ahmed"],
    },
    {
      icon: <LayoutDashboard className="text-brand" />,
      title: "Landing Pages & Websites",
      description: "High-conversion marketing engines that turn visitors into loyal customers through speed and strategic UX.",
      builtBy: ["Ada", "Tunde"],
    },
    {
      icon: <Palette className="text-brand" />,
      title: "Brand & Graphic Design",
      description: "Visual identities that command attention. From typography systems to distinctive logo marks.",
      builtBy: ["Kemi"],
    },
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-3xl font-bold tracking-tight md:text-5xl">What we actually ship</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <div key={i} className="group flex flex-col justify-between rounded-3xl bg-[#111] p-8 border border-white/5 hover:border-brand/30 transition-colors">
              <div>
                <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-xl font-bold md:text-2xl">{service.title}</h3>
                <p className="mb-8 text-gray-400">{service.description}</p>
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold tracking-widest text-brand uppercase">BUILT BY</p>
                <div className="mb-6 flex gap-2">
                  {service.builtBy.map((name) => (
                    <span key={name} className="rounded-full bg-white/5 px-3 py-1 text-xs text-white">{name}</span>
                  ))}
                </div>
                <Link to="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-white">
                  View Systems <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Proof() {
  const projects = [
    {
      title: "School Portal v2",
      category: "Web Apps",
      description: "A comprehensive management system for 20k+ students, automating grading, payments, and scheduling.",
      image: "https://picsum.photos/seed/dashboard/800/600?blur=2",
      tags: ["React", "Node", "MySQL"],
      featured: true,
      builtBy: "@Chidi"
    },
    {
      title: "RealEstateNG",
      category: "Landing Pages",
      description: "Nigeria's premier property marketplace with real-time map searching and AI-driven valuation tools.",
      image: "https://picsum.photos/seed/code/800/600",
      tags: ["Next.js", "Tailwind", "Postgres"],
      featured: true,
      builtBy: "@Tunde"
    },
    {
      title: "JAMB Prep Logo Pack",
      category: "Brand Identity",
      description: "Minimalist brand system for West Africa's largest ed-tech platform, focusing on clarity and trust.",
      image: "https://picsum.photos/seed/design/800/600",
      tags: ["Figma", "Illustrator"],
      featured: true,
      builtBy: "@Kemi"
    }
  ];

  return (
    <section className="py-24 md:py-32 bg-black/50 border-t border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-5xl">Proof, not promises</h2>
            <p className="text-lg text-gray-400">We don't talk about theoretical excellence—we deliver tangible results that move the needle for our partners.</p>
          </div>
          <Link to="/projects">
            <Button variant="outline">View All Projects</Button>
          </Link>
        </div>
        
        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
}


function WhyHire() {
  // 1. Data array to easily change images, roles, and socials
  const team = [
    { 
      name: 'MacAnthony', 
      role: 'Founder', 
      image: 'https://picsum.photos/seed/founder/200/200', 
      bio: 'Visionary behind AxellStudio. Turning complex problems into elegant code.',
      socials: { twitter: '#', github: '#', linkedin: '#' }
    },
    { 
      name: 'Liberty', 
      role: 'Lead Designer', 
      image: 'https://picsum.photos/seed/person1/200/200', 
      bio: 'Crafting intuitive user experiences with a focus on minimalism.',
      socials: { twitter: '#', linkedin: '#' }
    },
    { 
      name: 'Chisom', 
      role: 'Lead Developer', 
      image: 'https://picsum.photos/seed/person2/200/200', 
      bio: 'Scaling infrastructure and ensuring data integrity at every node.',
      socials: { github: '#', linkedin: '#' }
    },
    { 
      name: 'Pascal', 
      role: 'Frontend Specialist', 
      image: 'https://picsum.photos/seed/person3/200/200', 
      bio: 'Bridging the gap between design and production-ready code.',
      socials: { twitter: '#', github: '#' }
    },
    { 
      name: 'Victor', 
      role: 'Product Strategist', 
      image: 'https://picsum.photos/seed/person4/200/200', 
      bio: 'Defining the roadmap and ensuring we ship what truly matters.',
      socials: { linkedin: '#', twitter: '#' }
    },
  ];

  const [hoveredNode, setHoveredNode] = useState(null);

  return (
    <section className="py-24 md:py-32 bg-black text-white overflow-visible">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-12 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-5xl">Why hire a collective?</h2>
            <p className="mb-6 text-lg text-gray-400">
              Agencies are too slow. Freelancers are too fragmented. We are the bridge—a connected collective of masters who ship faster because our communication is internal and our goals are shared.
            </p>
            <p className="text-lg text-gray-400">
              When you hire AxellStudio, you aren't hiring a company; you are hiring a dedicated strike team of builders who treat your project as their own.
            </p>
          </div>
          <div className="relative rounded-3xl bg-[#111] border border-white/5 p-8 md:p-12">
            <Share2 className="text-brand mb-8 text-blue-500" size={32} />
            <blockquote className="text-2xl font-medium italic leading-relaxed text-white">
              "Connected builders. Inside the brackets, we ship."
            </blockquote>
          </div>
        </div>

        <div className="mt-32 text-center">
          <h3 className="mb-4 text-2xl font-bold text-white">The nodes behind the code</h3>
          <p className="mb-12 text-gray-400">Expert hands, strategic minds, and relentless drive.</p>
          
          <div className="flex flex-wrap justify-center gap-8 md:gap-16">
            {team.map((member, i) => (
              <div 
                key={member.name} 
                className="group relative flex flex-col items-center gap-4 cursor-pointer"
                onMouseEnter={() => setHoveredNode(member.name)}
                onMouseLeave={() => setHoveredNode(null)}
              >
                {/* Hover Card */}
                {hoveredNode === member.name && (
                  <div className="absolute bottom-full mb-4 w-64 z-50 animate-in fade-in zoom-in duration-200">
                    <div className="bg-[#1a1a1a] border border-white/10 p-4 rounded-xl shadow-2xl text-left">
                      <p className="text-sm text-gray-300 mb-3">{member.bio}</p>
                      <div className="flex gap-3 border-t border-white/5 pt-3">
                        {member.socials.twitter && <Twitter size={16} className="text-gray-500 hover:text-blue-400" />}
                        {member.socials.github && <Github size={16} className="text-gray-500 hover:text-white" />}
                        {member.socials.linkedin && <Linkedin size={16} className="text-gray-500 hover:text-blue-600" />}
                      </div>
                    </div>
                    {/* Tooltip Arrow */}
                    <div className="w-3 h-3 bg-[#1a1a1a] border-r border-b border-white/10 rotate-45 mx-auto -mt-1.5"></div>
                  </div>
                )}

                <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-white/10 bg-[#111] transition-transform group-hover:scale-110 group-hover:border-blue-500">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" 
                    referrerPolicy="no-referrer" 
                  />
                  {i > 0 && <div className="absolute top-0 right-0 h-3 w-3 rounded-full bg-blue-500" />}
                </div>
                
                <div className="text-center">
                  <p className="font-bold text-white">{member.name}</p>
                  <p className="text-xs text-blue-500 uppercase tracking-wider font-semibold">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-24 md:py-32">
      <div className="mx-auto max-w-4xl px-4 text-center md:px-8">
        <h2 className="mb-6 text-4xl font-extrabold tracking-tight md:text-6xl text-white">
          Have an idea? <br/>
          <span className="text-brand">Let's make it real.</span>
        </h2>
        <p className="mb-10 text-lg text-gray-400">
          From initial sketch to global launch, we handle the heavy lifting of building digital systems that last.
        </p>
        <Link to="/contact">
          <Button variant="primary" className="text-lg px-8 py-4">Start Your Project</Button>
        </Link>
        <p className="mt-6 text-xs font-semibold tracking-widest text-brand uppercase">RESPONSE IN 24 HRS.</p>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <Services />
      <Proof />
      <WhyHire />
      <CTA />
    </div>
  );
}
