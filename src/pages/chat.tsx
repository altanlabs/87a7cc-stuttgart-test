import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Sparkles, GraduationCap } from "lucide-react";

const messages = [
  {
    type: "bot",
    content: "👋 Hallo! Ich bin Ihr KI-Assistent für den Schulalltag. Wie kann ich Ihnen helfen?",
    timestamp: "Gerade eben"
  },
  {
    type: "bot",
    content: "Ich kann Ihnen bei folgenden Themen helfen:",
    options: [
      "Unterrichtsvorbereitung",
      "Materialsuche",
      "Klassenorganisation",
      "Digitale Tools"
    ],
    timestamp: "Gerade eben"
  }
];

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b border-slate-200 p-4 flex items-center gap-4 bg-white">
        <div className="rounded-full bg-blue-50 p-2">
          <GraduationCap className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="font-semibold text-slate-800">Lehrer-Assistent</h1>
          <p className="text-sm text-slate-600">Immer für Sie da</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-3">
                {message.type === "bot" && (
                  <Avatar className="w-8 h-8">
                    <AvatarFallback className="bg-blue-100 text-blue-600">
                      AI
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card className="p-4 max-w-[85%] bg-white border-slate-200">
                  <p className="text-sm text-slate-700">{message.content}</p>
                  {message.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant="outline"
                          size="sm"
                          className="text-xs border-slate-200 hover:bg-slate-50 text-slate-700"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-slate-400 mt-2 block">
                    {message.timestamp}
                  </span>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>
      
      <div className="p-4 border-t border-slate-200 bg-white">
        <div className="max-w-2xl mx-auto">
          <form className="flex gap-2">
            <Input 
              placeholder="Ihre Nachricht..." 
              className="flex-1 border-slate-200"
            />
            <Button 
              size="icon" 
              className="shrink-0 bg-blue-500 hover:bg-blue-600"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-2 flex items-center gap-2 justify-center text-xs text-slate-500">
            <Sparkles className="h-3 w-3 text-yellow-400" />
            <span>KI-gestützte Antworten für Lehrer</span>
          </div>
        </div>
      </div>
    </div>
  );
}