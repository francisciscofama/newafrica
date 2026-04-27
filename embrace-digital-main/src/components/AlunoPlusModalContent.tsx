import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ContactIcon, icons, LucideMessageCircleQuestion, MailQuestionIcon, Workflow } from "lucide-react";

const intelligences = [
  {
    name: "Linguística",
    description: "Facilidade com palavras, leitura, escrita e comunicação.",
  },
  {
    name: "Lógico-matemática",
    description: "Raciocínio lógico, análise e resolução de problemas.",
  },
  {
    name: "Musical",
    description: "Sensibilidade a sons, ritmos, padrões e composição.",
  },
  {
    name: "Corporal-cinestésica",
    description: "Uso do corpo para criar, executar e aprender fazendo.",
  },
  {
    name: "Espacial",
    description: "Percepção visual e entendimento de formas e espaços.",
  },
  {
    name: "Interpessoal",
    description: "Compreensão e interação com outras pessoas.",
  },
  {
    name: "Intrapessoal",
    description: "Autoconhecimento: emoções, motivações, valores e desejos.",
  },
  {
    name: "Naturalista",
    description: "Identificar e classificar elementos do ambiente (natureza).",
  },
  {
    name: "Existencial",
    description: "Reflexão sobre propósito, sentido e questões mais profundas.",
  },
];

const steps = [
  {
    title: "Responda 32 perguntas",
    text: "Em poucos minutos, você indica interesses e preferências. Responda com sinceridade para um resultado mais fiel.",
    icon: <LucideMessageCircleQuestion/>
  },
  {
    title: "Veja seu perfil na hora",
    text: "O sistema combina suas respostas e sugere áreas e cursos mais compatíveis — com explicações.",
    icon: <ContactIcon/>
  },
  {
    title: "Aprofunde a decisão",
    text: "Use o resultado para pesquisar grade curricular, rotina da profissão e mercado.",
    icon: <Workflow/>
  },
];

const faqItems = [
  {
    q: "Como funciona um teste vocacional?",
    a: "Você responde perguntas sobre interesses e habilidades. A partir disso, aparecem áreas e cursos com maior compatibilidade para orientar sua pesquisa.",
  },
  {
    q: "O teste vocacional é confiável?",
    a: "Ele é orientativo: ajuda a enxergar possibilidades e organizar ideias, mas não substitui autoconhecimento, pesquisa e, quando necessário, orientação profissional.",
  },
  {
    q: "Quanto tempo leva?",
    a: "É rápido. Com 32 perguntas, normalmente dá para concluir em poucos minutos.",
  },
  {
    q: "O resultado escolhe uma profissão exata?",
    a: "Não. Ele sugere caminhos prováveis (áreas e cursos) para você avaliar com calma e comparar opções.",
  },
  {
    q: "Como interpretar o resultado?",
    a: "Observe as áreas sugeridas e as explicações. Use isso para pesquisar cursos, grades, rotina do dia a dia e conversar com pessoas da área.",
  },
  {
    q: "Posso refazer o teste?",
    a: "Sim. É normal que as respostas mudem com o tempo — e o resultado pode variar conforme seu momento e percepção.",
  },
  {
    q: "Qual a diferença entre teste vocacional e orientação profissional?",
    a: "O teste é uma ferramenta pontual. A orientação profissional é um processo mais completo, geralmente com um especialista, que aprofunda contexto, valores e decisões.",
  },
];

export default function AlunoPlusModalContent() {
  return (
    <div className="h-full w-full flex flex-col min-h-0">
      {/* Header fixed only on sm+ */}
      <header className="hidden sm:block px-5 py-4 sm:px-6 sm:py-5 border-b border-border">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-widest">Aluno+</p>
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground mt-1 leading-tight">
              Teste vocacional grátis: descubra seu perfil e o curso ideal
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 max-w-3xl">
              Um teste inspirado na Teoria das Inteligências Múltiplas (Howard Gardner) para relacionar seus interesses
              e habilidades com áreas de estudo e possíveis caminhos.
            </p>
          </div>

          <div className="shrink-0 flex gap-2 mt-6">
            <Button size="sm">Começar meu teste</Button>
          </div>
        </div>
      </header>

      <main
        className="flex-1 min-h-0 overflow-y-auto px-5 py-4 sm:px-6 sm:py-5 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        <div className="flex flex-col gap-4">
          {/* Header scrolls on mobile */}
          <header className="sm:hidden pb-4 border-b border-border">
            <p className="text-xs font-semibold text-secondary uppercase tracking-widest">Aluno+</p>
            <h3 className="text-xl font-bold text-foreground mt-1 leading-tight">
              Teste vocacional grátis: descubra seu perfil e o curso ideal
            </h3>
            <p className="text-sm text-muted-foreground mt-2">
              Um teste inspirado na Teoria das Inteligências Múltiplas (Howard Gardner) para relacionar seus interesses
              e habilidades com áreas de estudo e possíveis caminhos.
            </p>

            <div className="mt-3 flex gap-2">
              <Button size="sm" className="flex-1">
                Começar
              </Button>
            </div>
          </header>

          <section className="bg-card border border-border rounded-lg p-5">
            <p className="text-xs sm:text-sm font-semibold text-secondary uppercase tracking-widest">
              Teste vocacional gratuito
            </p>
            <h4 className="text-lg sm:text-xl font-bold text-foreground mt-1">
              O que é e para que serve
            </h4>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              A proposta é simples: você responde perguntas sobre preferências, interesses e atividades do dia a dia.
              A partir das respostas, o sistema identifica combinações de competências e transforma isso em sugestões
              de áreas, cursos e possíveis caminhos.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mt-2 leading-relaxed">
              A referência metodológica é a ideia de que existem diferentes tipos de inteligência, e não apenas uma
              única forma de “ser bom” em algo.
            </p>
          </section>

          <section className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-foreground">Como funciona o teste vocacional online?</h4>
            <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
              {steps.map((step) => (
                    
                    <div key={step.title} className="flex flex-column gap-2 bg-card border border-border rounded-md p-3">
                        <div className="icon">{step.icon}</div>
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

          <section className="bg-card border border-border rounded-lg p-4">
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="font-semibold text-foreground">Base do teste</h4>
              <p className="text-xs text-muted-foreground">Inteligências múltiplas (Howard Gardner)</p>
            </div>

            <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
              {intelligences.map((item) => (
                <div key={item.name} className="rounded-md bg-muted p-3">
                  <p className="text-sm font-semibold text-foreground">{item.name}</p>
                  <p className="text-xs text-muted-foreground mt-1 leading-snug">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-card border border-border rounded-lg p-4">
            <h4 className="font-semibold text-foreground">Tire suas dúvidas</h4>
            <Accordion type="single" collapsible className="mt-2">
              {faqItems.map((item) => (
                <AccordionItem key={item.q} value={item.q}>
                  <AccordionTrigger className="text-left text-sm">
                    {item.q}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.a}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          <section className="bg-muted rounded-lg p-4">
            <h4 className="font-semibold text-foreground">Instruções para o teste</h4>
            <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed">
              Para cada frase, escolha um valor de 1 a 5: 1 quando tiver pouca relação com você e 5 quando for muito a
              sua cara.
            </p>
            <div className="mt-3 grid grid-cols-5 gap-2">
              {[1, 2, 3, 4, 5].map((n) => (
                <div key={n} className="bg-card border border-border rounded-md py-3 text-center">
                  <div className="text-sm font-bold text-foreground">{n}</div>
                  <div className="text-[10px] text-muted-foreground mt-1">
                    {n === 1 ? "Pouco" : n === 5 ? "Muito" : ""}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section className="bg-muted rounded-lg p-4 flex items-start gap-3">
            <div className="w-2 h-2 rounded-full bg-secondary mt-2 shrink-0" />
            <p className="text-xs sm:text-sm text-muted-foreground leading-snug">
              Importante: o resultado é <span className="font-semibold">orientativo</span> e não deve ser o único critério
              para escolher uma carreira. Use-o para explorar possibilidades, organizar ideias e direcionar sua pesquisa.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
