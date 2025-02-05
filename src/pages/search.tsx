import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Star, Magic, Sparkles, BookOpen, PenTool, Heart, Music, Palette } from "lucide-react";

const trendingSearches = [
  "Grundschule Mathe",
  "Basteln mit Kindern",
  "Lesespiele",
  "Klassenregeln"
];

const recentSearches = [
  "Frühlingsgedichte",
  "Bewegungsspiele",
  "Buchstaben lernen"
];

const categories = [
  { icon: <BookOpen className="w-5 h-5 text-blue-500" />, name: "Schulfächer", color: "border-blue-200 hover:bg-blue-50" },
  { icon: <PenTool className="w-5 h-5 text-pink-500" />, name: "Basteln", color: "border-pink-200 hover:bg-pink-50" },
  { icon: <Music className="w-5 h-5 text-purple-500" />, name: "Musik", color: "border-purple-200 hover:bg-purple-50" },
  { icon: <Palette className="w-5 h-5 text-orange-500" />, name: "Kunst", color: "border-orange-200 hover:bg-orange-50" },
];

export default function SearchPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20 space-y-6">
        <div className="space-y-2 text-center">
          <Magic className="w-12 h-12 text-purple-500 mx-auto" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">Suche</h1>
          <p className="text-slate-600">
            Entdecken Sie tolle Materialien für Ihren Unterricht
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input 
            type="search" 
            placeholder="Was möchten Sie finden?" 
            className="w-full pl-9 border-2 border-slate-200 focus:border-blue-300"
          />
        </div>

        <div className="grid gap-4">
          <Card className="border-2 border-purple-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-500" />
                <CardTitle className="text-lg text-slate-800">Beliebte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {trendingSearches.map((term, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-gradient-to-r from-purple-50 to-pink-50 text-purple-600 hover:from-purple-100 hover:to-pink-100 cursor-pointer border-2 border-purple-200"
                >
                  {term}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2 border-pink-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <CardTitle className="text-lg text-slate-800">Letzte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-pink-50 cursor-pointer border-2 border-transparent hover:border-pink-200 transition-all"
                >
                  <span className="text-sm text-slate-700">{term}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-yellow-500 hover:text-yellow-600 hover:bg-yellow-50"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-2 border-blue-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800">Kategorien</CardTitle>
              <CardDescription className="text-slate-600">
                Finden Sie genau das, was Sie suchen
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={\`h-auto py-4 px-4 border-2 \${category.color} transition-all hover:shadow-md\`}
                >
                  <div className="flex flex-col items-center gap-2">
                    {category.icon}
                    <span className="text-sm text-slate-700">{category.name}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}