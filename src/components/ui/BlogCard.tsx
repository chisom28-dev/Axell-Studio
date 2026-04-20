import { Calendar, Clock } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  slug: string;
}

export function BlogCard({ title, category, description, image, date, readTime, slug }: BlogCardProps) {
  return (
    <Link to={`/blog/${slug}`} className="flex flex-col rounded-2xl bg-[#0f0f0f] border border-white/5 overflow-hidden group hover:border-brand/30 transition-colors">
      <div className="aspect-[16/10] bg-white/5 overflow-hidden relative">
        <img 
          src={image} 
          alt={title} 
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="p-6">
        <div className="mb-3">
          <span className="rounded-full bg-brand/10 px-2 py-1 text-[10px] uppercase font-semibold text-brand tracking-wider">
            {category}
          </span>
        </div>
        <h3 className="mb-2 text-lg font-bold text-white group-hover:text-brand transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 mb-6 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-[10px] text-gray-500 uppercase tracking-widest border-t border-white/5 pt-4">
          <span className="flex items-center gap-1.5"><Calendar size={12}/> {date}</span>
          <span className="flex items-center gap-1.5"><Clock size={12}/> {readTime}</span>
        </div>
      </div>
    </Link>
  );
}
