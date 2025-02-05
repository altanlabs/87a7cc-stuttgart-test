import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, PenTool, Users, Calendar, Lightbulb, Heart, Rocket, Star } from "lucide-react";

const resources = [
  {
    title: "Unterrichtsmaterialien",
    description: "Tolle Arbeitsblätter und Präsentationen",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    badge: "Beliebt",
    badgeColor: "bg-blue-950 text-blue-400",
    color: "hover:border-blue-800"
  },
  {
    title: "Kreative Ecke",
    description: "Basteln, Malen und kreative Projekte",
    icon: <PenTool className="w-8 h-8 text-purple-400" />,
    badge: "Neu",
    badgeColor: "bg-purple-950 text-purple-400",
    color: "hover:border-purple-800"
  },
  {
    title: "Klassenraum",
    description: "Ideen für eine schöne Lernumgebung",
    icon: <Users className="w-8 h-8 text-pink-400" />,
    badge: "Inspiration",
    badgeColor: "bg-pink-950 text-pink-400",
    color: "hover:border-pink-800"
  },
  {
    title: "Schuljahresplaner",
    description: "Termine und Aktivitäten im Überblick",
    icon: <Calendar className="w-8 h-8 text-teal-400" />,
    badge: "Praktisch",
    badgeColor: "bg-teal-950 text-teal-400",
    color: "hover:border-teal-800"
  }
];

const quickTips = [
  "💡 Tipp: Schöne Vorlagen für Elternbriefe",
  "🌟 Tipp: Lustige Lernspiele für zwischendurch",
  "🎨 Tipp: Kreative Wandgestaltung für den Klassenraum"
];

export default function ResourcesPage() {
  return (
    <div className="h-[calc(100vh-4rem)] overflow-auto bg-slate-950">
      <div className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Rocket className="w-12 h-12 text-yellow-400 animate-bounce" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-200">
              Willkommen im Lehrerbereich! 🎉
            </h1>
            <p className="text-slate-400">
              Hier finden Sie alles für einen bunten Schulalltag
            </p>
          </div>

          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className={`relative overflow-hidden border border-slate-800 bg-slate-900 transition-all ${resource.color} hover:shadow-lg hover:shadow-slate-900/50`}>
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-xl p-2 bg-slate-950 shadow-inner">
                    {resource.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg text-slate-200">{resource.title}</CardTitle>
                      <Badge className={resource.badgeColor}>
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm text-slate-400">
                      {resource.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button 
                    variant="ghost" 
                    size="sm" 
                    className="text-slate-400 hover:text-slate-200 hover:bg-slate-800"
                  >
                    Entdecken Sie mehr
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-gradient-to-r from-blue-950 to-purple-950 border border-blue-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <CardTitle className="text-lg text-slate-200">Tägliche Tipps</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {quickTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-sm text-slate-300 bg-slate-900 p-3 rounded-lg shadow-inner border border-slate-800"
                  >
                    {tip}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-pink-950 to-purple-950 border border-pink-900">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                <CardTitle className="text-lg text-slate-200">Brauchen Sie Hilfe?</CardTitle>
              </div>
              <CardDescription className="text-slate-400">
                Unser freundliches Team ist immer für Sie da!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                className="bg-slate-900 text-pink-400 border border-pink-800 hover:bg-slate-800"
              >
                Kontaktieren Sie uns
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}