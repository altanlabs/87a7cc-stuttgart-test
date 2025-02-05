import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";

interface FormData {
  subject: string;
  grade: string;
  topic: string;
  duration: string;
  learningGoals: string;
}

const grades = [
  "5. Klasse",
  "6. Klasse",
  "7. Klasse",
  "8. Klasse",
  "9. Klasse",
  "10. Klasse",
  "11. Klasse",
  "12. Klasse",
  "13. Klasse",
];

const subjects = [
  "Mathematik",
  "Deutsch",
  "Englisch",
  "Biologie",
  "Chemie",
  "Physik",
  "Geschichte",
  "Geographie",
  "Politik",
  "Kunst",
  "Musik",
  "Sport",
  "Informatik",
  "Religion",
  "Ethik",
  "Wirtschaft",
];

export default function LessonPlanner() {
  const [step, setStep] = useState(1);
  const [lessonPlan, setLessonPlan] = useState<string | null>(null);
  const form = useForm<FormData>();

  const nextStep = () => {
    if (step < 5) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const onSubmit = (data: FormData) => {
    // Here we would normally make an API call to generate the lesson plan
    // For now, we'll just set a sample response
    const samplePlan = `
    Unterrichtsplan für ${data.subject} - ${data.grade}
    
    Thema: ${data.topic}
    Dauer: ${data.duration} Minuten
    
    Lernziele:
    ${data.learningGoals}
    
    Ablaufplan:
    
    1. Einstieg (10 min)
    - Begrüßung und Vorstellung des Themas
    - Aktivierung von Vorwissen durch Brainstorming
    
    2. Erarbeitungsphase (20 min)
    - Einführung der wichtigsten Konzepte
    - Gemeinsame Bearbeitung von Beispielen
    
    3. Übungsphase (15 min)
    - Selbstständige Arbeit der Schüler
    - Partnerarbeit zur gegenseitigen Unterstützung
    
    4. Sicherung (10 min)
    - Besprechung der Ergebnisse
    - Klärung offener Fragen
    
    5. Abschluss (5 min)
    - Zusammenfassung der wichtigsten Punkte
    - Ausblick auf die nächste Stunde
    
    Materialien:
    - Arbeitsblätter
    - Präsentation
    - Anschauungsmaterial
    
    Differenzierung:
    - Zusatzaufgaben für schnelle Lerner
    - Hilfekarten für Schüler mit Unterstützungsbedarf
    `;
    
    setLessonPlan(samplePlan);
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fach</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wähle ein Fach" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {subjects.map((subject) => (
                        <SelectItem key={subject} value={subject}>
                          {subject}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="grade"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Klassenstufe</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Wähle eine Klassenstufe" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {grades.map((grade) => (
                        <SelectItem key={grade} value={grade}>
                          {grade}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        );
      case 2:
        return (
          <FormField
            control={form.control}
            name="topic"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Thema der Unterrichtsstunde</FormLabel>
                <FormControl>
                  <Input placeholder="z.B. Pythagoras, Gedichtanalyse, Present Perfect..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 3:
        return (
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Dauer der Unterrichtsstunde</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Wähle die Dauer" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="45">45 Minuten</SelectItem>
                    <SelectItem value="60">60 Minuten</SelectItem>
                    <SelectItem value="90">90 Minuten</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 4:
        return (
          <FormField
            control={form.control}
            name="learningGoals"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Lernziele</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Was sollen die Schüler am Ende der Stunde können?"
                    className="min-h-[150px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        );
      case 5:
        return (
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Zusammenfassung</h3>
            <div className="space-y-2">
              <p><span className="font-medium">Fach:</span> {form.getValues("subject")}</p>
              <p><span className="font-medium">Klassenstufe:</span> {form.getValues("grade")}</p>
              <p><span className="font-medium">Thema:</span> {form.getValues("topic")}</p>
              <p><span className="font-medium">Dauer:</span> {form.getValues("duration")} Minuten</p>
              <p><span className="font-medium">Lernziele:</span> {form.getValues("learningGoals")}</p>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-2xl mx-auto p-6">
        {!lessonPlan ? (
          <>
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Unterrichtsplanung mit KI</h2>
              <div className="flex justify-between mb-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full flex items-center justify-center ${
                      step === i
                        ? "bg-primary text-primary-foreground"
                        : "bg-secondary text-secondary-foreground"
                    }`}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderStep()}
                  </motion.div>
                </AnimatePresence>

                <div className="flex justify-between mt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={prevStep}
                    disabled={step === 1}
                  >
                    Zurück
                  </Button>
                  {step < 5 ? (
                    <Button type="button" onClick={nextStep}>
                      Weiter
                    </Button>
                  ) : (
                    <Button type="submit">
                      Unterrichtsplan erstellen
                    </Button>
                  )}
                </div>
              </form>
            </Form>
          </>
        ) : (
          <div className="space-y-4">
            <h2 className="text-2xl font-bold mb-4">Ihr Unterrichtsplan</h2>
            <pre className="whitespace-pre-wrap font-mono text-sm bg-secondary p-4 rounded-lg">
              {lessonPlan}
            </pre>
            <div className="flex justify-between mt-6">
              <Button
                variant="outline"
                onClick={() => {
                  setLessonPlan(null);
                  form.reset();
                  setStep(1);
                }}
              >
                Neuer Plan
              </Button>
              <Button
                onClick={() => {
                  // Here we would implement the download functionality
                  const blob = new Blob([lessonPlan], { type: 'text/plain' });
                  const url = window.URL.createObjectURL(blob);
                  const a = document.createElement('a');
                  a.href = url;
                  a.download = 'unterrichtsplan.txt';
                  a.click();
                }}
              >
                Herunterladen
              </Button>
            </div>
          </div>
        )}
      </Card>
    </div>
  );
}