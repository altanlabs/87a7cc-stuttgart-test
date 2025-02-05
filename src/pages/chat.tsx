import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Send } from "lucide-react";

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4">
          <Card className="p-4 bg-muted">
            <p className="text-sm">Hello! How can I help you today?</p>
          </Card>
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t">
        <form className="flex gap-2">
          <Input 
            placeholder="Type your message..." 
            className="flex-1"
          />
          <Button size="icon">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}