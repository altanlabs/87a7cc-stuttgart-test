import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Book, Search, MessageSquare } from "lucide-react";

const navItems = [
  {
    label: "Resources",
    icon: Book,
    href: "/resources"
  },
  {
    label: "Search",
    icon: Search,
    href: "/search"
  },
  {
    label: "AI Chat",
    icon: MessageSquare,
    href: "/chat"
  }
];

export function BottomNav() {
  const location = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 h-16 bg-background/80 backdrop-blur-lg border-t border-border">
      <div className="grid h-full grid-cols-3 mx-auto max-w-md">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.href;
          
          return (
            <Link
              key={item.href}
              to={item.href}
              className={cn(
                "inline-flex flex-col items-center justify-center px-5 hover:bg-muted/50 transition-colors relative",
                isActive && "text-primary"
              )}
            >
              <Icon className={cn(
                "w-5 h-5 transition-all",
                isActive && "scale-110"
              )} />
              <span className={cn(
                "text-xs mt-1 transition-colors",
                isActive ? "text-primary font-medium" : "text-muted-foreground"
              )}>
                {item.label}
              </span>
              {isActive && (
                <span className="absolute -top-0.5 left-1/2 w-12 h-0.5 bg-primary -translate-x-1/2" />
              )}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}