import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Send, Sparkles, GraduationCap, Wand2 } from "lucide-react";

const messages = [
  {
    type: "bot",
    content: "👋 Hallo! Ich bin Ihre freundliche Lehrerhilfe! Wie kann ich Sie unterstützen?",
    timestamp: "Gerade eben"
  },
  {
    type: "bot",
    content: "Ich helfe Ihnen gerne bei diesen Themen:",
    options: [
      "✏️ Unterrichtsideen",
      "📚 Arbeitsmaterial",
      "🎨 Bastelprojekte",
      "🎵 Musikstunden"
    ],
    timestamp: "Gerade eben"
  }
];

export default function ChatPage() {
  return (
    <div className="flex flex-col h-[calc(100vh-4rem)]">
      <div className="border-b-2 border-purple-200 p-4 flex items-center gap-4 bg-gradient-to-r from-purple-50 to-pink-50">
        <div className="rounded-full bg-white p-2 shadow-sm border-2 border-purple-200">
          <Wand2 className="w-6 h-6 text-purple-500" />
        </div>
        <div>
          <h1 className="font-semibold text-slate-800">Ihre Lehrerhilfe</h1>
          <p className="text-sm text-slate-600">Immer mit Rat und Tat zur Seite</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4 bg-gradient-to-b from-white to-blue-50">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-3">
                {message.type === "bot" && (
                  <Avatar className="w-8 h-8 border-2 border-purple-200">
                    <AvatarFallback className="bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600">
                      AI
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card className="p-4 max-w-[85%] bg-white border-2 border-purple-100 shadow-sm">
                  <p className="text-sm text-slate-700">{message.content}</p>
                  {message.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant="outline"
                          size="sm"
                          className="text-xs border-2 border-purple-200 hover:bg-purple-50 text-slate-700"
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
      
      <div className="p-4 border-t-2 border-purple-200 bg-white">
        <div className="max-w-2xl mx-auto">
          <form className="flex gap-2">
            <Input 
              placeholder="Ihre Frage..." 
              className="flex-1 border-2 border-purple-200 focus:border-purple-300"
            />
            <Button 
              size="icon" 
              className="shrink-0 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-md"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-2 flex items-center gap-2 justify-center text-xs text-slate-500">
            <Sparkles className="h-3 w-3 text-yellow-400" />
            <span>Ihre persönliche KI-Assistentin für den Schulalltag</span>
          </div>
        </div>
      </div>
    </div>
  );
}