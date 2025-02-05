import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Send, Sparkles, Wand2 } from "lucide-react";

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
    <div className="flex flex-col h-[calc(100vh-4rem)] bg-slate-950">
      <div className="border-b border-slate-800 p-4 flex items-center gap-4 bg-slate-900/50 backdrop-blur-lg">
        <div className="rounded-full bg-slate-800 p-2 shadow-inner border border-slate-700">
          <Wand2 className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h1 className="font-semibold text-slate-200">Ihre Lehrerhilfe</h1>
          <p className="text-sm text-slate-400">Immer mit Rat und Tat zur Seite</p>
        </div>
      </div>

      <div className="flex-1 p-4 overflow-auto bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="space-y-4 max-w-2xl mx-auto">
          {messages.map((message, index) => (
            <div key={index} className="space-y-4">
              <div className="flex items-start gap-3">
                {message.type === "bot" && (
                  <Avatar className="w-8 h-8 border border-slate-700 bg-slate-800">
                    <AvatarFallback className="bg-gradient-to-r from-purple-900 to-pink-900 text-purple-400">
                      AI
                    </AvatarFallback>
                  </Avatar>
                )}
                <Card className="p-4 max-w-[85%] bg-slate-900 border border-slate-800 shadow-lg">
                  <p className="text-sm text-slate-300">{message.content}</p>
                  {message.options && (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {message.options.map((option, optionIndex) => (
                        <Button
                          key={optionIndex}
                          variant="outline"
                          size="sm"
                          className="text-xs border-slate-700 bg-slate-800 hover:bg-slate-700 text-slate-300"
                        >
                          {option}
                        </Button>
                      ))}
                    </div>
                  )}
                  <span className="text-xs text-slate-500 mt-2 block">
                    {message.timestamp}
                  </span>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-4 border-t border-slate-800 bg-slate-900/50 backdrop-blur-lg">
        <div className="max-w-2xl mx-auto">
          <form className="flex gap-2">
            <Input 
              placeholder="Ihre Frage..." 
              className="flex-1 bg-slate-800 border-slate-700 text-slate-200 placeholder:text-slate-500 focus:border-purple-800"
            />
            <Button 
              size="icon" 
              className="shrink-0 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg"
            >
              <Send className="h-4 w-4" />
            </Button>
          </form>
          <div className="mt-2 flex items-center gap-2 justify-center text-xs text-slate-500">
            <Sparkles className="h-3 w-3 text-yellow-500" />
            <span>Ihre persönliche KI-Assistentin für den Schulalltag</span>
          </div>
        </div>
      </div>
    </div>
  );
}