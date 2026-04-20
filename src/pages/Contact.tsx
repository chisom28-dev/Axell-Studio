import { Code2, HelpCircle, Mail, MapPin, MessageSquare, Paintbrush, Phone, Rocket } from "lucide-react";
import { Button } from "../components/ui/Button";
import { cn } from "../lib/utils";

function OptionCard({ 
  title, 
  desc, 
  price, 
  icon: Icon,
  isPrimary,
  isFullWidth
}: { 
  title: string, desc: string, price: string, icon: any, isPrimary?: boolean, isFullWidth?: boolean
}) {
  return (
    <div className={cn(
      "flex flex-col justify-between rounded-xl bg-[#0f0f0f] border border-white/5 p-6 hover:border-brand/30 transition-colors",
      isFullWidth ? "md:col-span-2" : ""
    )}>
      <div>
        <div className="mb-4 flex items-center justify-between">
          <div className={cn("flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-full text-brand", isPrimary ? "bg-brand/10" : "bg-white/5")}>
            <Icon size={18} />
          </div>
          <span className="rounded-full bg-white/5 px-2 py-1 text-[10px] sm:text-xs font-semibold text-gray-300">{price}</span>
        </div>
        <h3 className="mb-2 text-base sm:text-lg font-bold text-white">{title}</h3>
        <p className="mb-6 text-xs sm:text-sm text-gray-400">{desc}</p>
      </div>
      <div>
        <a href="#" className="block w-full">
          <Button variant={isPrimary ? "primary" : "secondary"} className={cn("w-full text-xs sm:text-sm px-4 py-2 sm:py-3", !isPrimary && "bg-[#1f1f1f] border-none text-gray-300 hover:bg-[#2a2a2a]")}>
            Continue to WhatsApp →
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="pt-24 pb-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid gap-16 lg:grid-cols-12">
          
          {/* Left Column */}
          <div className="lg:col-span-5">
            <div className="mb-12">
              <span className="mb-4 inline-block text-[10px] sm:text-xs font-bold tracking-widest text-brand uppercase">LET'S BUILD</span>
              <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-7xl text-white">
                Book Axell<br/><span className="text-brand">Studio</span>
              </h1>
              <p className="text-base sm:text-lg text-gray-400">Average reply time: 12 minutes</p>
            </div>

            <div className="mb-12 space-y-8 relative">
              <div className="absolute top-4 bottom-4 left-5 w-[1px] bg-white/10" />
              
              {[
                { step: "STEP 1", title: "Message us on WhatsApp", icon: MessageSquare },
                { step: "STEP 2", title: "15-min intro call", icon: Phone },
                { step: "STEP 3", title: "Get proposal in 24hrs", icon: Mail },
              ].map((s, i) => (
                <div key={i} className="flex gap-4 relative z-10">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#111] border border-white/10 text-gray-400">
                    <s.icon size={18} />
                  </div>
                  <div className="pt-2">
                    <p className="text-[10px] sm:text-xs font-bold text-gray-500 uppercase">{s.step}</p>
                    <p className="text-sm sm:text-lg font-medium text-white">{s.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mb-12 border-t border-white/5 pt-8">
              <div className="mb-3 flex items-center gap-4">
                <div className="flex -space-x-2 sm:-space-x-3">
                  {[1,2,3].map(i => (
                    <img key={i} src={`https://picsum.photos/seed/founder${i}/100/100`} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full border-2 border-[#0a0a0a]" alt="avatar" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm font-medium text-gray-400">Trusted by 10+ founders</p>
              </div>
              <div className="flex items-center gap-6 mt-4 opacity-50 grayscale">
                <div className="h-6 w-16 bg-white/20 rounded animate-pulse" />
                <div className="h-6 w-16 bg-white/20 rounded animate-pulse" />
                <div className="h-6 w-16 bg-white/20 rounded animate-pulse" />
              </div>
            </div>

            <div className="border-t border-white/5 pt-8">
              <h3 className="mb-6 text-[10px] sm:text-xs font-bold tracking-widest text-gray-500 uppercase">DIRECT LINES</h3>
              <ul className="space-y-4 text-xs sm:text-sm text-white">
                <li className="flex items-center gap-3">
                  <MessageSquare size={16} className="text-brand" />
                  WhatsApp: Chat with a PM
                </li>
                <li className="flex items-center gap-3">
                  <Mail size={16} className="text-brand" />
                  hello@axellstudio.dev
                </li>
                <li className="flex items-center gap-3">
                  <MapPin size={16} className="text-brand" />
                  Port Harcourt, Nigeria
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-7">
            <h2 className="mb-8 text-xl sm:text-2xl font-bold text-white">Pick how you want to start</h2>
            
            <div className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              <OptionCard 
                title="Book MVP Sprint"
                desc="Go from idea to a working product in 4 weeks. Best for early-stage validation."
                price="₦500k flat"
                icon={Rocket}
                isPrimary={true}
              />
              <OptionCard 
                title="Custom Web App"
                desc="Scalable, performant web applications tailored to your specific business logic."
                price="From ₦350k"
                icon={Code2}
              />
              <OptionCard 
                title="Design Only"
                desc="High-fidelity UI/UX design and prototyping. No code, just pixel perfection."
                price="From ₦150k"
                icon={Paintbrush}
              />
              {/* Force an empty div to maintain grid flow if needed, but since we use md:col-span-2 for the last one, it's fine */}
              <div className="hidden md:block"></div>
              
              <OptionCard 
                title="Not sure yet? Free 15-min call"
                desc="Chat with our lead strategist to figure out the best path for your project."
                price="FREE"
                icon={HelpCircle}
                isFullWidth={true}
              />
            </div>

            {/* FAQ */}
            <div className="mb-32">
              <h3 className="mb-6 text-lg sm:text-xl font-bold text-white">Common Questions</h3>
              <div className="space-y-4 rounded-xl border border-white/5 bg-[#0f0f0f] divide-y divide-white/5">
                {[
                  { q: "How fast can we start my project?", a: "Typically, we can kick off a new project within 3-5 business days of the initial discovery call and signed proposal. Our team maintains a focused rotation to ensure every client gets our full attention." },
                  { q: "Do you offer maintenance after launch?", a: "Yes, we offer ongoing maintenance and retainer options tailored to your project scope." },
                  { q: "What technologies do you specialize in?", a: "We primarily use React, Next.js, Node.js, standard robust SQL databases (PostgreSQL, MySQL), and modern CSS tooling." }
                ].map((faq, i) => (
                  <details key={i} className="group p-4 sm:p-6 open:bg-[#151515]">
                    <summary className="flex cursor-pointer text-sm sm:text-base items-center justify-between font-medium text-white marker:content-none">
                      {faq.q}
                      <span className="text-gray-500 group-open:rotate-180 transition-transform">↓</span>
                    </summary>
                    <p className="mt-4 text-xs sm:text-sm text-gray-400 leading-relaxed">
                      {faq.a}
                    </p>
                  </details>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
