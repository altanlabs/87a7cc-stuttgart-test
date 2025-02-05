import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { BookOpen, PenTool, Users, Calendar, Lightbulb, Heart } from "lucide-react";

const resources = [
  {
    title: "Unterrichtsmaterialien",
    description: "Arbeitsblätter, Präsentationen und mehr",
    icon: <BookOpen className="w-8 h-8 text-blue-400" />,
    badge: "Beliebt",
    badgeColor: "bg-blue-100 text-blue-600",
  },
  {
    title: "Kreative Ideen",
    description: "Inspirierende Projektvorschläge",
    icon: <PenTool className="w-8 h-8 text-pink-400" />,
    badge: "Neu",
    badgeColor: "bg-pink-100 text-pink-600",
  },
  {
    title: "Klassenorganisation",
    description: "Hilfreiche Tools für den Schulalltag",
    icon: <Users className="w-8 h-8 text-purple-400" />,
    badge: "Praktisch",
    badgeColor: "bg-purple-100 text-purple-600",
  },
  {
    title: "Terminplaner",
    description: "Schuljahresplanung leicht gemacht",
    icon: <Calendar className="w-8 h-8 text-green-400" />,
    badge: "Aktuell",
    badgeColor: "bg-green-100 text-green-600",
  }
];

const quickTips = [
  "Tipp: Nutzen Sie unsere Vorlagen für Elternbriefe",
  "Tipp: Wöchentliche Lernziele einfach planen",
  "Tipp: Digitale Klassenbuch-Vorlagen"
];

export default function ResourcesPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              <Lightbulb className="w-10 h-10 text-yellow-400" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-slate-800">
              Willkommen im Lehrerbereich
            </h1>
            <p className="text-slate-600">
              Entdecken Sie hilfreiche Materialien für Ihren Unterricht
            </p>
          </div>

          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className="relative overflow-hidden border-slate-200 hover:border-blue-200 transition-colors">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg p-2 bg-slate-50">
                    {resource.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg text-slate-800">{resource.title}</CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={resource.badgeColor}
                      >
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
                    className="text-blue-500 hover:text-blue-600 hover:bg-blue-50"
                  >
                    Mehr erfahren
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-blue-50 border-blue-100">
            <CardHeader>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-pink-400" />
                <CardTitle className="text-lg text-slate-800">Tägliche Tipps</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {quickTips.map((tip, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-2 text-sm text-slate-700 bg-white p-2 rounded-md"
                  >
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    {tip}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-purple-100">
            <CardHeader>
              <CardTitle className="text-lg text-slate-800">Brauchen Sie Hilfe?</CardTitle>
              <CardDescription className="text-slate-600">
                Unser Support-Team steht Ihnen zur Verfügung
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button 
                variant="secondary" 
                size="sm"
                className="bg-white text-purple-500 hover:bg-purple-50"
              >
                Support kontaktieren
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}