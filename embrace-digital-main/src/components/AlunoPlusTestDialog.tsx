import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  computeVocationalResult,
  type VocationalAnswers,
  type VocationalTestResult,
  VOCATIONAL_QUESTIONS,
} from "@/features/aluno-plus/vocationalTest";

type Props = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onFinish: (result: VocationalTestResult) => void;
};

export default function AlunoPlusTestDialog({ open, onOpenChange, onFinish }: Props) {
  const QUESTIONS_PER_STEP = 3;
  const STEPS = Math.ceil(VOCATIONAL_QUESTIONS.length / QUESTIONS_PER_STEP);
  const prefersReducedMotion = useReducedMotion();
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<VocationalAnswers>({});
  const [slideDirection, setSlideDirection] = useState<1 | -1>(1);

  const stepStart = useMemo(() => stepIndex * QUESTIONS_PER_STEP, [QUESTIONS_PER_STEP, stepIndex]);

  const stepQuestions = useMemo(() => {
    return VOCATIONAL_QUESTIONS.slice(stepStart, stepStart + QUESTIONS_PER_STEP);
  }, [QUESTIONS_PER_STEP, stepStart]);

  const isStepComplete = useMemo(() => {
    return stepQuestions.every((q) => answers[q.id] !== undefined);
  }, [answers, stepQuestions]);

  const answeredCount = useMemo(() => {
    return VOCATIONAL_QUESTIONS.reduce((acc, q) => (answers[q.id] !== undefined ? acc + 1 : acc), 0);
  }, [answers]);

  const progressValue = useMemo(() => {
    return Math.round((answeredCount / VOCATIONAL_QUESTIONS.length) * 100);
  }, [answeredCount]);

  const reset = () => {
    setAnswers({});
    setStepIndex(0);
    setSlideDirection(1);
  };

  const setAnswer = (questionId: string, value: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: value }));
  };

  const goPrev = () => {
    if (stepIndex === 0) return;
    setSlideDirection(-1);
    setStepIndex((idx) => idx - 1);
  };

  const goNext = () => {
    if (!isStepComplete) return;
    if (stepIndex < STEPS - 1) {
      setSlideDirection(1);
      setStepIndex((idx) => idx + 1);
      return;
    }

    const result = computeVocationalResult(answers);
    onFinish(result);
    onOpenChange(false);
  };

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) {
          // If user closes mid-test, keep their answers (so they can resume).
          // Reset is intentionally tied to the explicit "Recomeçar" button.
        }
        onOpenChange(nextOpen);
      }}
    >
      <DialogContent className="w-[92vw] max-w-2xl p-0 overflow-hidden">
        <div className="p-6 border-b border-border">
          <DialogHeader>
            <DialogTitle className="text-xl">Teste vocacional — Aluno+</DialogTitle>
          </DialogHeader>
          <div className="mt-3 flex items-center justify-between gap-3">
            <p className="text-sm text-muted-foreground">
              Etapa {stepIndex + 1} de {STEPS} • {answeredCount}/{VOCATIONAL_QUESTIONS.length} respondidas
            </p>
            <div className="w-40">
              <Progress value={progressValue} />
            </div>
          </div>
        </div>

        <div className="p-6">
          <div className="rounded-md bg-muted p-3">
            <p className="text-xs text-muted-foreground">Como responder</p>
            <p className="text-sm text-foreground mt-1">
              Para cada frase, escolha um valor de 1 a 5: 1 = pouco a ver comigo, 5 = muito a ver comigo.
            </p>
          </div>

          <div className="mt-5">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={stepIndex}
                custom={slideDirection}
                initial={prefersReducedMotion ? false : "enter"}
                animate={prefersReducedMotion ? undefined : "center"}
                exit={prefersReducedMotion ? undefined : "exit"}
                variants={{
                  enter: (direction: 1 | -1) => ({ x: direction === 1 ? 28 : -28, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (direction: 1 | -1) => ({ x: direction === 1 ? -28 : 28, opacity: 0 }),
                }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : {
                        x: { type: "tween", duration: 0.22, ease: "easeOut" },
                        opacity: { duration: 0.18 },
                      }
                }
                className="flex flex-col gap-5"
              >
                {stepQuestions.map((question, idx) => {
                  const absoluteIndex = stepStart + idx + 1;
                  const value = answers[question.id];

                  return (
                    <div key={question.id} className="rounded-md border border-border p-4">
                      <p className="text-xs text-muted-foreground">
                        Pergunta {absoluteIndex} de {VOCATIONAL_QUESTIONS.length}
                      </p>
                      <p className="text-sm font-semibold text-foreground mt-1">{question.title}</p>
                      <p className="text-sm text-muted-foreground mt-1">{question.statement}</p>

                      <div className="mt-4">
                        <RadioGroup
                          value={value !== undefined ? String(value) : ""}
                          onValueChange={(next) => setAnswer(question.id, Number(next))}
                          className="grid grid-cols-1 sm:grid-cols-5 gap-2"
                        >
                          {[1, 2, 3, 4, 5].map((n) => {
                            const id = `${question.id}-${n}`;
                            return (
                              <div key={id} className="flex items-center gap-2 rounded-md border border-border p-3">
                                <RadioGroupItem id={id} value={String(n)} className="peer" />
                                <Label htmlFor={id} className="cursor-pointer">
                                  {n}
                                </Label>
                              </div>
                            );
                          })}
                        </RadioGroup>
                        <div className="mt-2 flex items-center justify-between text-[11px] text-muted-foreground">
                          <span>1 = Pouco</span>
                          <span>5 = Muito</span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </AnimatePresence>
          </div>

          {!isStepComplete ? (
            <p className="text-xs text-muted-foreground mt-4">Responda todas as perguntas desta etapa para continuar.</p>
          ) : null}

          <div className="mt-6 flex items-center justify-between gap-2">
            <Button variant="outline" onClick={reset}>
              Recomeçar
            </Button>

            <div className="flex gap-2">
              <Button variant="outline" onClick={goPrev} disabled={stepIndex === 0}>
                Etapa anterior
              </Button>
              <Button onClick={goNext} disabled={!isStepComplete}>
                {stepIndex === STEPS - 1 ? "Finalizar" : "Próxima etapa"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
