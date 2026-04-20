"use client";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Activity, Menu, X } from "lucide-react";
import { Button } from "../ui/Button";
import { cn } from "../../lib/utils";

export function Navbar() {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { name: "Home", href: "/" },
    { name: "Work", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between p-4 md:px-8">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-tight">
          <Activity className="h-6 w-6 text-brand" />
          <span>AxellStudio</span>
        </Link>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-white",
                location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href)) ? "text-white" : "text-gray-400"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Client Login */}
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="primary" className="py-2 px-4 text-sm">Book Now</Button>
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-400 hover:text-white transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0a0a0a] shadow-2xl relative z-40 animate-in slide-in-from-top-2 duration-200">
          <div className="flex flex-col px-4 pt-4 pb-8 space-y-4">
            {links.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className={cn(
                  "block text-base font-medium transition-colors p-2 rounded-lg",
                  location.pathname === link.href || (link.href !== "/" && location.pathname.startsWith(link.href)) 
                    ? "bg-white/5 text-brand" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-2">
              <Link to="/contact" className="block">
                <Button variant="primary" className="w-full text-sm">Book Now</Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
