import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Star, Clock, TrendingUp } from "lucide-react";

const trendingSearches = [
  "Getting Started Guide",
  "API Documentation",
  "Mobile Development",
  "Best Practices"
];

const recentSearches = [
  "React Components",
  "TypeScript Tutorial",
  "UI Design Tips"
];

export default function SearchPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20 space-y-6">
        <div className="space-y-2">
          <h1 className="text-2xl font-bold tracking-tight">Search</h1>
          <p className="text-muted-foreground">
            Find resources, documentation, and more
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input 
            type="search" 
            placeholder="Search everything..." 
            className="w-full pl-9"
          />
        </div>

        <div className="grid gap-4">
          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-blue-500" />
                <CardTitle className="text-lg">Trending</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {trendingSearches.map((term, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="cursor-pointer hover:bg-secondary/80"
                >
                  {term}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-500" />
                <CardTitle className="text-lg">Recent Searches</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-muted cursor-pointer"
                >
                  <span className="text-sm">{term}</span>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Advanced Search</CardTitle>
              <CardDescription>
                Use filters and categories to narrow down your search
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm">
                Open Filters
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}