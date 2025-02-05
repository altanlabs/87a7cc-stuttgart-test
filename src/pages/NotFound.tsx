import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-200">Ups!</h1>
        <p className="text-slate-400">
          Diese Seite konnten wir leider nicht finden.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
}