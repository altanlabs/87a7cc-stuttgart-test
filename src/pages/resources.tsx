import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, PenTool, Users, Calendar, Lightbulb, Heart, Rocket, Star } from "lucide-react";

const resources = [
  {
    title: "Unterrichtsmaterialien",
    description: "Tolle Arbeitsblätter und Präsentationen",
    icon: <BookOpen className="w-8 h-8 text-pink-500" />,
    badge: "Beliebt",
    badgeColor: "bg-pink-100 text-pink-600",
    color: "hover:border-pink-200",
  },
  {
    title: "Kreative Ecke",
    description: "Basteln, Malen und kreative Projekte",
    icon: <PenTool className="w-8 h-8 text-purple-500" />,
    badge: "Neu",
    badgeColor: "bg-purple-100 text-purple-600",
    color: "hover:border-purple-200",
  },
  {
    title: "Klassenraum",
    description: "Ideen für eine schöne Lernumgebung",
    icon: <Users className="w-8 h-8 text-blue-500" />,
    badge: "Inspiration",
    badgeColor: "bg-blue-100 text-blue-600",
    color: "hover:border-blue-200",
  },
  {
    title: "Schuljahresplaner",
    description: "Termine und Aktivitäten im Überblick",
    icon: <Calendar className="w-8 h-8 text-green-500" />,
    badge: "Praktisch",
    badgeColor: "bg-green-100 text-green-600",
    color: "hover:border-green-200",
  }
];

const quickTips = [
  "💡 Tipp: Schöne Vorlagen für Elternbriefe",
  "🌟 Tipp: Lustige Lernspiele für zwischendurch",
  "🎨 Tipp: Kreative Wandgestaltung für den Klassenraum"
];

export default function ResourcesPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Rocket className="w-12 h-12 text-yellow-500 animate-bounce" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Willkommen im Lehrerbereich! 🎉
            </h1>
            <p className="text-slate-600">
              Hier finden Sie alles für einen bunten Schulalltag
            </p>
          </div>

          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className={\`relative overflow-hidden border-2 transition-all \${resource.color} hover:shadow-lg\`}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-xl p-2 bg-white shadow-sm">
                    {resource.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg text-slate-800">{resource.title}</CardTitle>
                      <Badge className={resource.badgeColor}>
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-slate-600">
                      {resource.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-slate-600 hover:text-slate-900"
                  >
                    Entdecken Sie mehr
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                <CardTitle className="text-lg text-slate-800">Tägliche Tipps</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-sm text-slate-700 bg-white p-3 rounded-lg shadow-sm border border-slate-100"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-50 to-orange-50 border-2 border-pink-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-500" />
                <CardTitle className="text-lg text-slate-800">Brauchen Sie Hilfe?</CardTitle>
              </div>
              <CardDescription className="text-slate-600">
                Unser freundliches Team ist immer für Sie da!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-white text-pink-500 border-2 border-pink-200 hover:bg-pink-50"
              >
                Kontaktieren Sie uns
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}