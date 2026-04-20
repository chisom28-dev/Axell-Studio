import { Activity } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#0a0a0a] pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 text-xl font-bold tracking-tight mb-4">
              <Activity className="h-6 w-6 text-brand" />
              <span>AxellStudio</span>
            </div>
            <p className="text-gray-400 max-w-xs">
              A high-end engineering collective from Nigeria building the digital infrastructure for tomorrow.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">QUICK LINKS</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="/projects" className="hover:text-brand transition-colors">Portfolio</a></li>
              <li><a href="/services" className="hover:text-brand transition-colors">Our Process</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Open Roles</a></li>
              <li><a href="#" className="hover:text-brand transition-colors">Manifesto</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">SERVICES</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>System Architecture</li>
              <li>Web Development</li>
              <li>UI/UX Design</li>
              <li>Brand Identity</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-sm font-semibold text-white">CONTACT</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Lagos, Nigeria (Remote First)</li>
              <li>hello@axellstudio.com</li>
              <li>+234 (0) 800-AXELL-DEV</li>
              <li><a href="/contact" className="text-brand hover:underline">Schedule a call</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} AxellStudio. Built by us, for you. No templates.</p>
          <div className="mt-4 flex gap-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
