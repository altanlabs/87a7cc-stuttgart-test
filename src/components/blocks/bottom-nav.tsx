import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Search, MessageCircle } from "lucide-react";

const navItems = [
  {
    label: "Material",
    icon: BookOpen,
    href: "/resources",
    color: "text-blue-400",
    hoverColor: "hover:text-blue-300",
    bgColor: "bg-blue-950"
  },
  {
    label: "Suche",
    icon: Search,
    href: "/search",
    color: "text-purple-400",
    hoverColor: "hover:text-purple-300",
    bgColor: "bg-purple-950"
  },
  {
    label: "Chat",
    icon: MessageCircle,
    href: "/chat",
    color: "text-pink-400",
    hoverColor: "hover:text-pink-300",
    bgColor: "bg-pink-950"
  }
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-slate-900/80 backdrop-blur-lg border-t border-slate-800">
      <div className="grid h-full grid-cols-3 mx-auto max-w-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center transition-all relative",
                isActive ? item.color : "text-slate-600",
                !isActive && item.hoverColor
              )}
            >
              <div className={cn(
                "p-1.5 rounded-full transition-all",
                isActive && item.bgColor
              )}>
                <Icon className={cn(
                  "w-5 h-5 transition-all",
                  isActive && "scale-110"
                )} />
              </div>
              <span className={cn(
                "text-xs transition-all",
                isActive ? "font-medium" : "text-slate-500"
              )}>
                {item.label}
              </span>
              {isActive && (
                <span className={cn(
                  "absolute -top-0.5 left-1/2 w-12 h-0.5 -translate-x-1/2",
                  item.color
                )} />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}