import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { BookOpen, Search, MessageCircle } from "lucide-react";

const navItems = [
  {
    label: "Materialien",
    icon: BookOpen,
    href: "/resources"
  },
  {
    label: "Suche",
    icon: Search,
    href: "/search"
  },
  {
    label: "Chat",
    icon: MessageCircle,
    href: "/chat"
  }
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-white border-t border-slate-200 shadow-sm">
      <div className="grid h-full grid-cols-3 mx-auto max-w-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 hover:bg-slate-50 transition-colors relative",
                isActive && "text-blue-500"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-all",
                isActive && "scale-110"
              )} />
              <span className={cn(
                "text-xs mt-1 transition-colors",
                isActive ? "text-blue-500 font-medium" : "text-slate-600"
              )}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 w-12 h-0.5 bg-blue-500 -translate-x-1/2" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}