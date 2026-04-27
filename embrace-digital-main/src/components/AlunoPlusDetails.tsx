import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ALUNO_PLUS_FAQ, ALUNO_PLUS_STEPS } from "@/features/aluno-plus/content";
import { INTELLIGENCES } from "@/features/aluno-plus/vocationalTest";
import { ContactIcon, LucideMessageCircleQuestion, Workflow } from "lucide-react";

const stepIcons = [
  <LucideMessageCircleQuestion key="q" />,
  <ContactIcon key="c" />,
  <Workflow key="w" />,
];

type Props = {
  variant?: "modal" | "page";
};

export default function AlunoPlusDetails({ variant = "modal" }: Props) {
  const sectionClassName =
    variant === "page" ? "bg-card border border-border rounded-lg p-6" : "bg-card border border-border rounded-lg p-4";

  return (
    <div className={variant === "page" ? "flex flex-col gap-6" : "flex flex-col gap-4"}>
      <section className={sectionClassName}>
        <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-widest">Teste vocacional gratuito</p>
        <h4 className="text-lg sm:text-xl font-bold text-foreground mt-1">O que é e para que serve</h4>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
          A proposta é simples: você responde perguntas sobre preferências, interesses e atividades do dia a dia. A partir
          das respostas, o sistema identifica tendências e transforma isso em sugestões de perfis e áreas para você pesquisar.
        </p>
        <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
          A referência metodológica é a ideia de que existem diferentes tipos de inteligência, e não apenas uma única forma
          de “ser bom” em algo.
        </p>
      </section>

      <section className={variant === "page" ? "bg-muted rounded-lg p-6" : "bg-muted rounded-lg p-4"}>
        <h4 className="font-semibold text-foreground">Como funciona o teste vocacional online?</h4>
        <div className={variant === "page" ? "mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3" : "mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2"}>
          {ALUNO_PLUS_STEPS.map((step, idx) => (
            <div key={step.title} className="flex flex-col gap-2 bg-card border border-border rounded-md p-3">
              <div className="icon">{stepIcons[idx] ?? null}</div>
              <div className="text">
                <p className="text-xs sm:text-sm font-semibold text-foreground leading-tight">{step.title}</p>
                <p className="text-xs text-muted-foreground mt-1 leading-snug">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-3 text-xs sm:text-sm text-muted-foreground">
          Dica: responda pensando no que você realmente gosta de fazer — não no que você acha que “deveria” gostar.
        </div>
      </section>

      <section className={sectionClassName}>
        <div className="flex items-baseline justify-between gap-2">
          <h4 className="font-semibold text-foreground">Base do teste</h4>
          <p className="text-xs text-muted-foreground">Inteligências múltiplas (Howard Gardner)</p>
        </div>

        <div className={variant === "page" ? "mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3" : "mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"}>
          {INTELLIGENCES.map((item) => (
            <div key={item.key} className="rounded-md bg-muted p-3">
              <p className="text-sm font-semibold text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground mt-1 leading-snug">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className={sectionClassName}>
        <h4 className="font-semibold text-foreground">Tire suas dúvidas</h4>
        <Accordion type="single" collapsible className="mt-2">
          {ALUNO_PLUS_FAQ.map((item) => (
            <AccordionItem key={item.q} value={item.q}>
              <AccordionTrigger className="text-left text-sm">{item.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <section className={variant === "page" ? "bg-muted rounded-lg p-6" : "bg-muted rounded-lg p-4"}>
        <h4 className="font-semibold text-foreground">Instruções para o teste</h4>
        <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
          São 32 perguntas. Para cada frase, escolha um valor de 1 a 5: 1 quando tiver pouca relação com você e 5 quando for
          muito a sua cara.
        </p>
      </section>

      <section className={variant === "page" ? "bg-muted rounded-lg p-6 flex items-start gap-3" : "bg-muted rounded-lg p-4 flex items-start gap-3"}>
        <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
        <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
          Importante: o resultado é <span className="font-semibold">orientativo</span> e não deve ser o único critério para
          escolher uma carreira. Use-o para explorar possibilidades, organizar ideias e direcionar sua pesquisa.
        </p>
      </section>
    </div>
  );
}
