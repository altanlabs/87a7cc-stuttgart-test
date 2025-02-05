import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-slate-800">Ups!</h1>
        <p className="text-slate-600">
          Diese Seite konnten wir leider nicht finden.
        </p>
        <Button 
          onClick={() => navigate("/")}
          className="bg-blue-500 hover:bg-blue-600"
        >
          Zurück zur Startseite
        </Button>
      </div>
    </div>
  );
}