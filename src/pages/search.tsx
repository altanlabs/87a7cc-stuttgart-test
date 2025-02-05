import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Star, Wand2, Sparkles, BookOpen, PenTool, Heart, Music, Palette } from "lucide-react";

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
  { icon: <BookOpen className="w-5 h-5 text-blue-400" />, name: "Schulfächer", color: "border-blue-800 hover:bg-blue-950" },
  { icon: <PenTool className="w-5 h-5 text-pink-400" />, name: "Basteln", color: "border-pink-800 hover:bg-pink-950" },
  { icon: <Music className="w-5 h-5 text-purple-400" />, name: "Musik", color: "border-purple-800 hover:bg-purple-950" },
  { icon: <Palette className="w-5 h-5 text-teal-400" />, name: "Kunst", color: "border-teal-800 hover:bg-teal-950" }
];

export default function SearchPage() {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto bg-slate-950">
      <div className="container p-4 pb-20 space-y-6">
        <div className="space-y-2 text-center">
          <Wand2 className="w-12 h-12 text-purple-400 mx-auto" />
          <h1 className="text-2xl font-bold tracking-tight text-slate-200">Suche</h1>
          <p className="text-slate-400">
            Entdecken Sie tolle Materialien für Ihren Unterricht
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-500" />
          <Input 
            type="search" 
            placeholder="Was möchten Sie finden?" 
            className="w-full pl-9 bg-slate-900 border-slate-800 text-slate-200 placeholder:text-slate-500 focus:border-purple-800"
          />
        </div>

        <div className="grid gap-4">
          <Card className="border border-slate-800 bg-slate-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-yellow-400" />
                <CardTitle className="text-lg text-slate-200">Beliebte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {trendingSearches.map((term, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-purple-950 text-purple-400 hover:bg-purple-900 cursor-pointer border border-purple-800"
                >
                  {term}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-slate-800 bg-slate-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                <CardTitle className="text-lg text-slate-200">Letzte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-slate-800 cursor-pointer border border-slate-800 hover:border-slate-700 transition-all"
                >
                  <span className="text-sm text-slate-300">{term}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-yellow-400 hover:text-yellow-300 hover:bg-slate-800"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border border-slate-800 bg-slate-900">
            <CardHeader>
              <CardTitle className="text-lg text-slate-200">Kategorien</CardTitle>
              <CardDescription className="text-slate-400">
                Finden Sie genau das, was Sie suchen
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-3">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className={`h-auto py-4 px-4 bg-slate-900 border ${category.color} transition-all hover:shadow-lg hover:shadow-slate-900/50`}
                >
                  <div className="flex flex-col items-center gap-2">
                    {category.icon}
                    <span className="text-sm text-slate-300">{category.name}</span>
                  </div>
                </Button>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}