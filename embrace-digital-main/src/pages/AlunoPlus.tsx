import { useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import AlunoPlusDetails from "@/components/AlunoPlusDetails";
import AlunoPlusTestDialog from "@/components/AlunoPlusTestDialog";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  getIntelligenceInfo,
  type VocationalTestResult,
  type IntelligenceKey,
} from "@/features/aluno-plus/vocationalTest";

type LocationState = {
  result?: VocationalTestResult;
  autoStart?: boolean;
};

export default function AlunoPlusPage() {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = (location.state as LocationState | null) ?? null;
  const initialResult = locationState?.result;
  const autoStart = Boolean(locationState?.autoStart);
  const [result, setResult] = useState<VocationalTestResult | undefined>(initialResult);
  const [testOpen, setTestOpen] = useState(false);

  useEffect(() => {
    if (!autoStart) return;
    setTestOpen(true);

    // Clear the autoStart flag so it doesn't re-open on refresh/back.
    navigate("/aluno-plus", { replace: true, state: { result: locationState?.result } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [autoStart]);

  const topLabel = useMemo(() => {
    if (!result || result.top.length === 0) return null;
    return result.top.map((k) => getIntelligenceInfo(k).name).join(" + ");
  }, [result]);

  return (
    <div className="min-h-screen">
      <Navbar />

      <main className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold text-secondary uppercase tracking-widest">Aluno+</p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
              Teste vocacional (Howard Gardner)
            </h1>
            <p className="text-muted-foreground text-lg mt-3">
              Resultado do teste e guia para organizar sua decisão.
            </p>

            <div className="mt-6 flex gap-2">
              <Button variant="outline" onClick={() => navigate("/")}>Voltar ao início</Button>
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
            <section className="lg:col-span-1 bg-card border border-border rounded-lg p-6">
              <h2 className="text-xl font-bold text-foreground">Seu resultado</h2>
              {result ? (
                <>
                  <p className="text-sm text-muted-foreground mt-2">
                    Você respondeu {result.answeredCount} de {result.totalQuestions} perguntas.
                  </p>
                  {topLabel ? (
                    <div className="mt-3 rounded-md bg-muted p-3">
                      <p className="text-xs text-muted-foreground">Destaque</p>
                      <p className="text-sm font-semibold text-foreground mt-1">{topLabel}</p>
                    </div>
                  ) : null}

                  <div className="mt-5 flex flex-col gap-3">
                    {result.ordered.map(({ key, score }) => {
                      const info = getIntelligenceInfo(key as IntelligenceKey);
                      const max = result.maxPerIntelligence[key as IntelligenceKey] || 1;
                      const value = Math.round((score / max) * 100);

                      return (
                        <div key={key} className="rounded-md border border-border p-3">
                          <div className="flex items-baseline justify-between gap-2">
                            <p className="text-sm font-semibold text-foreground">{info.name}</p>
                            <p className="text-xs text-muted-foreground">{score}/{max}</p>
                          </div>
                          <div className="mt-2">
                            <Progress value={value} />
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6">
                    <h3 className="text-sm font-semibold text-foreground">Sugestões de áreas (para começar a pesquisar)</h3>
                    <div className="mt-2 flex flex-col gap-2">
                      {result.ordered
                        .slice(0, 3)
                        .filter((x) => x.score > 0)
                        .map(({ key }) => {
                          const info = getIntelligenceInfo(key as IntelligenceKey);
                          return (
                            <div key={key} className="rounded-md bg-muted p-3">
                              <p className="text-sm font-semibold text-foreground">{info.name}</p>
                              <p className="text-xs text-muted-foreground mt-1">{info.suggestedAreas.join(" • ")}</p>
                            </div>
                          );
                        })}
                    </div>
                  </div>

                  <div className="mt-6 flex gap-2">
                    <Button onClick={() => setTestOpen(true)}>Refazer teste</Button>
                    <Button variant="outline" onClick={() => setResult(undefined)}>
                      Limpar resultado
                    </Button>
                  </div>
                </>
              ) : (
                <>
                  <p className="text-sm text-muted-foreground mt-2">
                    Comece o teste para ver seu resultado aqui.
                  </p>
                  <div className="mt-4">
                    <Button onClick={() => setTestOpen(true)}>Começar teste</Button>
                  </div>
                </>
              )}
            </section>

            <section className="lg:col-span-2">
              <AlunoPlusDetails variant="page" />
            </section>
          </div>
        </div>
      </main>

      <AlunoPlusTestDialog
        open={testOpen}
        onOpenChange={setTestOpen}
        onFinish={(nextResult) => setResult(nextResult)}
      />

      <Footer />
      <WhatsAppButton />
    </div>
  );
}
