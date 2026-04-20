import { Link } from "react-router-dom";
import { ChevronRight, Clock, MessageCircle, Share2, Twitter, Linkedin, Copy } from "lucide-react";
import { Button } from "../components/ui/Button";

// Mock data that would normally come from an API/CMS
const articleData = {
  category: "ENGINEERING",
  date: "Oct 24, 2023",
  readTime: "8 min read",
  title: "How We Built a Real-time Design Collaboration Tool in 48 Hours",
  author: {
    name: "Chidi",
    role: "Team Lead at Axell Studio",
    avatar: "https://picsum.photos/seed/chidi/100/100"
  },
  coverImage: "https://picsum.photos/seed/gradientbg/1400/800",
  coverCaption: "Axell Studio's internal prototyping dashboard in action."
};

const relatedArticles = [
  {
    title: "The Case for Minimalist Product Design in 2024",
    category: "DESIGN",
    readTime: "6 min read",
    image: "https://picsum.photos/seed/minimal/400/300"
  },
  {
    title: "Scaling Your Engineering Team: A Founder's Guide",
    category: "FOUNDERS",
    readTime: "10 min read",
    image: "https://picsum.photos/seed/desk/400/300"
  }
];

export default function BlogPost() {
  return (
    <article className="pt-24 pb-32">
      <div className="mx-auto max-w-3xl px-4 md:px-8">
        
        {/* Top Meta */}
        <div className="mb-6 flex flex-wrap items-center justify-center gap-4 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-gray-500">
          <span className="rounded-full bg-brand/10 px-3 py-1 text-brand">
            {articleData.category}
          </span>
          <span>{articleData.date}</span>
          <span className="flex items-center gap-1.5"><Clock size={12}/> {articleData.readTime}</span>
        </div>

        {/* Title & Author */}
        <div className="mb-12 text-center">
          <h1 className="mb-8 text-4xl font-extrabold tracking-tight md:text-5xl lg:text-6xl text-white leading-tight">
            {articleData.title}
          </h1>
          <div className="flex items-center justify-center gap-3">
            <img src={articleData.author.avatar} alt={articleData.author.name} className="h-12 w-12 rounded-full border-2 border-white/10" referrerPolicy="no-referrer" />
            <div className="text-left">
              <p className="text-sm font-bold text-white leading-tight">{articleData.author.name}</p>
              <p className="text-[10px] text-gray-500">{articleData.author.role}</p>
            </div>
          </div>
        </div>

        {/* Hero Image */}
        <div className="mb-16">
          <div className="aspect-[16/9] md:aspect-[2/1] w-full overflow-hidden rounded-3xl bg-white/5 border border-white/5">
             <img src={articleData.coverImage} className="w-full h-full object-cover" alt="Article cover" referrerPolicy="no-referrer" />
          </div>
          <p className="mt-4 text-center text-xs italic text-gray-500">{articleData.coverCaption}</p>
        </div>

        {/* Article Body */}
        <div className="prose prose-invert prose-brand max-w-none text-gray-300">
          <p className="mb-8 text-lg leading-relaxed">
            When we started Axell Studio, our mission was simple: eliminate the friction between a founder's vision and a working product. Last month, we faced our biggest challenge yet. A client needed a fully functional collaborative design canvas—think Figma, but for architectural floor plans—in just under a weekend.
          </p>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-white">The Architecture of Speed</h2>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            To achieve this, we had to rethink our entire stack. We bypassed traditional REST APIs in favor of a robust WebSockets implementation using Socket.io. This allowed for sub-50ms latency between collaborators.
          </p>

          {/* Code Block Example */}
          <div className="mb-8 overflow-hidden rounded-2xl border border-white/10 bg-[#0f0f0f]">
            <div className="flex items-center justify-between border-b border-white/5 px-4 py-2 bg-black/50">
              <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase">Typescript</span>
              <button className="text-gray-500 hover:text-white"><Copy size={14}/></button>
            </div>
            <div className="p-6 overflow-x-auto text-xs sm:text-sm font-mono text-gray-300 leading-loose">
<pre><code><span className="text-pink-400">import</span> {'{'} Studio {'}'} <span className="text-pink-400">from</span> <span className="text-brand">'@axell/core'</span>;

<span className="text-pink-400">export default function</span> <span className="text-blue-400">shipMVP</span>() {'{'}
  <span className="text-pink-400">const</span> timeline = <span className="text-brand">"14 days"</span>;

  <span className="text-gray-500 italic">// Start the engine</span>
  Studio.<span className="text-blue-400">launch</span>({'{'}
    focus: 'Speed & Quality',
    deadline: timeline
  {'}'});

  <span className="text-pink-400">return</span> <span className="text-brand">"Success"</span>;
{'}'}
</code></pre>
            </div>
          </div>

          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            We utilized a specialized CRDT (Conflict-free Replicated Data Type) library to ensure that concurrent edits from different timezones never resulted in data loss. This was the "secret sauce" that made the 48-hour timeline possible.
          </p>

          {/* Blockquote */}
          <blockquote className="my-10 border-l-4 border-brand bg-brand/5 p-6 md:p-8 rounded-r-xl">
            <p className="text-lg md:text-xl font-medium italic leading-relaxed text-white">
              "At the end of the day, speed is a feature. If you can iterate faster than your competition, you've already won half the battle."
            </p>
            <footer className="mt-4 text-xs font-bold tracking-widest text-brand uppercase">
              — Chidi, Axell Studio
            </footer>
          </blockquote>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-white">Why Multi-user Presence Matters</h2>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            Modern SaaS isn't just about single-player utility anymore. Users expect to see their teammates in the same space. We implemented cursors and active user badges to provide that "live" feel that founders love.
          </p>

          {/* In-article CTA block */}
          <div className="my-12 rounded-2xl border border-brand/30 bg-[#0a0a0a] p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(0,229,255,0.05)]">
            <div className="max-w-xs">
              <h3 className="mb-2 text-xl font-bold text-white">Building something similar?</h3>
              <p className="text-sm text-gray-400">We specialize in turning complex ideas into high-performance MVPs. We ship in 14 days, guaranteed.</p>
            </div>
            <Link to="/contact" className="shrink-0 w-full sm:w-auto">
              <Button variant="primary" className="w-full sm:w-auto flex items-center justify-center gap-2">
                <MessageCircle size={16} /> Chat on WhatsApp
              </Button>
            </Link>
          </div>

          <h2 className="mb-6 mt-12 text-2xl font-bold text-white">Lessons Learned</h2>
          <p className="mb-8 leading-relaxed text-sm sm:text-base">
            Shipping fast doesn't mean shipping broken. By using automated unit tests for our CRDT logic and a strict TypeScript environment, we managed to launch with zero critical bugs on Monday morning.
          </p>

          <ul className="mb-12 space-y-4 text-sm sm:text-base">
            {[
              "Always prioritize the core user loop over peripheral features.",
              "WebSockets are non-negotiable for real-time multiplayer experiences.",
              "Invest in your boilerplate; it's the foundation of your speed."
            ].map((item, i) => (
              <li key={i} className="flex gap-3">
                <ChevronRight className="shrink-0 text-brand mt-0.5" size={18} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {/* Footer actions */}
        <div className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-white/10 py-8">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5">
              <Share2 size={16} className="text-gray-400" />
            </div>
            <div>
              <p className="font-bold text-white">Share this article</p>
              <p className="text-xs text-gray-500">Help other founders build better.</p>
            </div>
          </div>
          
          <div className="flex items-center gap-3">
            <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-xs font-semibold text-white hover:bg-white/5 transition-colors">
               Twitter
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-xs font-semibold text-white hover:bg-white/5 transition-colors">
               LinkedIn
            </button>
            <button className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-[#111] px-4 py-2 text-xs font-semibold text-white hover:bg-white/5 transition-colors">
               Copy Link
            </button>
          </div>
        </div>

      </div>

      <div className="mx-auto max-w-5xl px-4 md:px-8 mt-12 bg-black/30 border-t border-b border-white/5 py-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-bold text-white mb-2">Keep Reading</h2>
            <p className="text-sm text-gray-400">Hand-picked insights for curious minds.</p>
          </div>
          <Link to="/blog" className="text-sm font-semibold text-brand hover:text-white transition-colors flex items-center gap-1">
            View all articles <ChevronRight size={16} />
          </Link>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {relatedArticles.map((article, i) => (
            <Link key={i} to="/blog" className="group flex items-center gap-4 rounded-2xl bg-[#111] p-4 border border-white/5 hover:border-brand/30 transition-colors">
              <div className="h-20 w-24 shrink-0 overflow-hidden rounded-lg bg-white/5">
                <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" referrerPolicy="no-referrer" />
              </div>
              <div>
                <span className="mb-1 inline-block rounded-full bg-white/5 px-2 py-0.5 text-[8px] font-bold tracking-widest text-brand uppercase">
                  {article.category}
                </span>
                <h3 className="mb-1 text-sm font-bold text-white leading-tight group-hover:text-brand transition-colors line-clamp-2">
                  {article.title}
                </h3>
                <p className="text-[10px] text-gray-500">{article.readTime}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-4 mt-24 text-center md:px-8">
        <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-3xl bg-white/5 border border-white/10 text-brand">
          <MessageCircle size={28} />
        </div>
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-5xl text-white">
          Have a project? Let's talk.
        </h2>
        <p className="mb-10 text-gray-400 max-w-lg mx-auto">
          Ready to ship your next big idea? Our team of designers and engineers is standing by to help you launch in record time.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link to="/contact">
            <Button variant="primary">Schedule a Call</Button>
          </Link>
          <Link to="/projects">
            <Button variant="ghost">Explore More Work</Button>
          </Link>
        </div>
      </div>
    </article>
  );
}

