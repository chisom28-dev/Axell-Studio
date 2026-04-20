import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link?: string;
  featured?: boolean;
  builtBy?: string;
}

export function ProjectCard({ title, category, description, image, tags, link = "#", featured, builtBy }: ProjectCardProps) {
  return (
    <Link to={link} className="group block overflow-hidden rounded-3xl bg-[#111] border border-white/5 hover:border-brand/30 transition-all">
      <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
        {featured && (
          <div className="absolute top-4 right-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            Featured
          </div>
        )}
      </div>
      <div className="p-6 md:p-8">
        <div className="mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="rounded-full bg-brand/10 px-3 py-1 text-xs font-semibold text-brand">
              {category}
            </span>
            <span className="text-xs text-gray-400 font-mono">2025</span>
          </div>
        </div>
        <h3 className="mb-3 text-xl font-bold md:text-2xl">{title}</h3>
        <p className="mb-6 text-sm text-gray-400 line-clamp-2 md:text-base">{description}</p>
        
        {builtBy ? (
          <div className="flex items-center justify-between border-t border-white/10 pt-6">
            <div className="flex items-center gap-2">
              <div className="h-6 w-6 rounded-full bg-white/10 overflow-hidden flex items-center justify-center text-xs">
                {builtBy[1]}
              </div>
              <span className="text-sm font-medium text-gray-400">Built by {builtBy}</span>
            </div>
            <ArrowUpRight className="text-gray-500 group-hover:text-brand transition-colors" size={20} />
          </div>
        ) : (
          <div className="flex flex-wrap gap-2 pt-2">
            {tags.map((tag) => (
              <span key={tag} className="text-xs font-medium text-brand">{tag}</span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
