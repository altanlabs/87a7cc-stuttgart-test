import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Bot, Sparkles } from "lucide-react";

const messages = [
  {
    type: "bot",
    content: "👋 Hello! I'm your AI assistant. How can I help you today?",
    timestamp: "Just now"
  },
  {
    type: "bot",
    content: "I can help you with:",
    options: [
      "Finding resources",
      "Technical questions",
      "Best practices",
      "Getting started"
    ],
    timestamp: "Just now"
  }
];

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b p-4 flex items-center gap-4">
        <Avatar>
          <AvatarFallback>AI</AvatarFallback>
          <AvatarImage src="/ai-avatar.png" />
        </Avatar>
        <div>
          <h1 className="font-semibold">AI Assistant</h1>
          <p className="text-sm text-muted-foreground">Always here to help</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-3">
                {message.type === "bot" && (
                  <div className="rounded-full bg-primary/10 p-2">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                )}
                <Card className="p-4 max-w-[85%] bg-muted/50">
                  <p className="text-sm">{message.content}</p>
                  {message.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant="secondary"
                          size="sm"
                          className="text-xs"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-muted-foreground mt-2 block">
                    {message.timestamp}
                  </span>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t bg-background">
        <div className="max-w-2xl mx-auto">
          <form className="flex gap-2">
            <Input 
              placeholder="Type your message..." 
              className="flex-1"
            />
            <Button size="icon" className="shrink-0">
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-2 flex items-center gap-2 justify-center text-xs text-muted-foreground">
            <Sparkles className="h-3 w-3" />
            <span>AI-powered responses</span>
          </div>
        </div>
      </div>
    </div>
  );
}