import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Search as SearchIcon, Star, Clock, Sparkles, BookOpen, PenTool } from "lucide-react";

const trendingSearches = [
  "Mathematik Grundschule",
  "Deutsch Arbeitsblätter",
  "Projektwochen Ideen",
  "Klassenführung"
];

const recentSearches = [
  "Leseverständnis Übungen",
  "Sachkunde Material",
  "Elternabend Vorlage"
];

const categories = [
  { icon: <BookOpen className="w-4 h-4 text-blue-400" />, name: "Fächer" },
  { icon: <PenTool className="w-4 h-4 text-pink-400" />, name: "Aktivitäten" },
];

export default function SearchPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20 space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-2xl font-bold tracking-tight text-slate-800">Suche</h1>
          <p className="text-slate-600">
            Finden Sie genau das, was Sie brauchen
          </p>
        </div>

        <div className="relative">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <Input 
            type="search" 
            placeholder="Wonach suchen Sie?" 
            className="w-full pl-9 border-slate-200"
          />
        </div>

        <div className="grid gap-4">
          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-yellow-400" />
                <CardTitle className="text-lg text-slate-800">Beliebte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="flex gap-2 flex-wrap">
              {trendingSearches.map((term, index) => (
                <Badge 
                  key={index}
                  variant="secondary"
                  className="bg-blue-50 text-blue-600 hover:bg-blue-100 cursor-pointer"
                >
                  {term}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-purple-400" />
                <CardTitle className="text-lg text-slate-800">Letzte Suchen</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-2">
              {recentSearches.map((term, index) => (
                <div 
                  key={index}
                  className="flex items-center justify-between p-2 rounded-md hover:bg-slate-50 cursor-pointer"
                >
                  <span className="text-sm text-slate-700">{term}</span>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="h-8 w-8 text-yellow-400 hover:text-yellow-500 hover:bg-yellow-50"
                  >
                    <Star className="h-4 w-4" />
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>

          <Card className="border-slate-200">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800">Kategorien</CardTitle>
              <CardDescription className="text-slate-600">
                Nach Bereichen durchsuchen
              </CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-2">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="h-auto py-4 px-4 border-slate-200 hover:bg-slate-50"
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