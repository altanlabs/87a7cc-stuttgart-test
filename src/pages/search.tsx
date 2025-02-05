import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function SearchPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">Search</h1>
          <div className="relative">
            <Input 
              type="search" 
              placeholder="Search..." 
              className="w-full"
            />
          </div>
          <div className="mt-8 text-center text-muted-foreground">
            Start typing to search...
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}