import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Search, MessageCircle } from "lucide-react";

const navItems = [
  {
    label: "Material",
    icon: BookOpen,
    href: "/resources",
    color: "text-pink-500",
    hoverColor: "hover:text-pink-600",
    bgColor: "bg-pink-100"
  },
  {
    label: "Suche",
    icon: Search,
    href: "/search",
    color: "text-purple-500",
    hoverColor: "hover:text-purple-600",
    bgColor: "bg-purple-100"
  },
  {
    label: "Chat",
    icon: MessageCircle,
    href: "/chat",
    color: "text-blue-500",
    hoverColor: "hover:text-blue-600",
    bgColor: "bg-blue-100"
  }
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t-2 border-slate-200 shadow-lg">
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
                isActive ? item.color : "text-slate-400",
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
                isActive ? "font-medium" : "text-slate-600"
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