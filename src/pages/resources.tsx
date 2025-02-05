import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, Video, FileText, BookOpen, ArrowRight } from "lucide-react";

const resources = [
  {
    title: "Quick Start Guide",
    description: "Get up and running in less than 5 minutes",
    icon: <Book className="w-8 h-8 text-blue-500" />,
    badge: "Beginner",
    badgeColor: "bg-green-500/10 text-green-500",
  },
  {
    title: "Video Tutorials",
    description: "Step-by-step video guides for every feature",
    icon: <Video className="w-8 h-8 text-purple-500" />,
    badge: "New",
    badgeColor: "bg-purple-500/10 text-purple-500",
  },
  {
    title: "Documentation",
    description: "Complete API references and examples",
    icon: <FileText className="w-8 h-8 text-orange-500" />,
    badge: "Updated",
    badgeColor: "bg-orange-500/10 text-orange-500",
  },
  {
    title: "Best Practices",
    description: "Learn from real-world examples and tips",
    icon: <BookOpen className="w-8 h-8 text-teal-500" />,
    badge: "Advanced",
    badgeColor: "bg-teal-500/10 text-teal-500",
  }
];

export default function ResourcesPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-2xl font-bold tracking-tight">Resources</h1>
            <p className="text-muted-foreground">
              Everything you need to get started and become an expert.
            </p>
          </div>

          <div className="grid gap-4">
            {resources.map((resource, index) => (
              <Card key={index} className="relative overflow-hidden">
                <CardHeader className="flex flex-row items-center gap-4">
                  <div className="rounded-lg p-2 bg-background border">
                    {resource.icon}
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <CardTitle className="text-lg">{resource.title}</CardTitle>
                      <Badge 
                        variant="secondary" 
                        className={resource.badgeColor}
                      >
                        {resource.badge}
                      </Badge>
                    </div>
                    <CardDescription className="text-sm">
                      {resource.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button variant="ghost" size="sm" className="gap-2">
                    Learn more <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/10">
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
              <CardDescription>
                Our support team is available 24/7 to assist you with any questions.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="secondary" size="sm">Contact Support</Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  );
}