import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

const resources = [
  {
    title: "Getting Started",
    description: "Learn the basics of our platform",
    link: "#"
  },
  {
    title: "Documentation",
    description: "Detailed guides and API references",
    link: "#"
  },
  {
    title: "Tutorials",
    description: "Step-by-step learning materials",
    link: "#"
  },
  {
    title: "Best Practices",
    description: "Tips and recommendations",
    link: "#"
  }
];

export default function ResourcesPage() {
  return (
    <ScrollArea className="h-[calc(100vh-4rem)]">
      <div className="container p-4 pb-20">
        <h1 className="text-2xl font-bold mb-4">Resources</h1>
        <div className="grid gap-4">
          {resources.map((resource, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="text-lg">{resource.title}</CardTitle>
                <CardDescription>{resource.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </ScrollArea>
  );
}