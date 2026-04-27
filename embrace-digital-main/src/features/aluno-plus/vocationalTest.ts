export type IntelligenceKey =
  | "linguistic"
  | "logicalMathematical"
  | "musical"
  | "bodilyKinesthetic"
  | "spatial"
  | "interpersonal"
  | "intrapersonal"
  | "naturalist";

export type IntelligenceInfo = {
  key: IntelligenceKey;
  name: string;
  description: string;
  suggestedAreas: string[];
};

export const INTELLIGENCES: IntelligenceInfo[] = [
  {
    key: "linguistic",
    name: "Linguística",
    description: "Facilidade com palavras, leitura, escrita e comunicação.",
    suggestedAreas: ["Direito", "Jornalismo", "Marketing e Conteúdo"],
  },
  {
    key: "logicalMathematical",
    name: "Lógico-matemática",
    description: "Raciocínio lógico, análise e resolução de problemas.",
    suggestedAreas: ["Engenharias", "Ciência de Dados", "Programação"],
  },
  {
    key: "musical",
    name: "Musical",
    description: "Sensibilidade a sons, ritmos, padrões e composição.",
    suggestedAreas: ["Produção Musical", "Audiovisual", "Artes"],
  },
  {
    key: "bodilyKinesthetic",
    name: "Corporal-cinestésica",
    description: "Uso do corpo para criar, executar e aprender fazendo.",
    suggestedAreas: ["Educação Física", "Fisioterapia", "Artes Cênicas"],
  },
  {
    key: "spatial",
    name: "Espacial",
    description: "Percepção visual e entendimento de formas e espaços.",
    suggestedAreas: ["Arquitetura", "Design", "Multimídia"],
  },
  {
    key: "interpersonal",
    name: "Interpessoal",
    description: "Compreensão e interação com outras pessoas.",
    suggestedAreas: ["Psicologia", "Recursos Humanos", "Vendas"],
  },
  {
    key: "intrapersonal",
    name: "Intrapessoal",
    description: "Autoconhecimento: emoções, motivações, valores e desejos.",
    suggestedAreas: ["Psicologia", "Coaching/Mentoria", "Gestão"],
  },
  {
    key: "naturalist",
    name: "Naturalista",
    description: "Identificar e classificar elementos do ambiente (natureza).",
    suggestedAreas: ["Biologia", "Agronomia", "Ciências Ambientais"],
  },
];

export type VocationalQuestion = {
  id: string;
  title: string;
  statement: string;
  intelligence: IntelligenceKey;
};

const q = (id: string, title: string, statement: string, intelligence: IntelligenceKey): VocationalQuestion => ({
  id,
  title,
  statement,
  intelligence,
});

export const VOCATIONAL_QUESTIONS: VocationalQuestion[] = [
  q("q1", "Comunicação", "Gosto de ler e/ou escrever com frequência.", "linguistic"),
  q("q2", "Argumentação", "Consigo explicar ideias com clareza usando palavras.", "linguistic"),
  q("q3", "Linguagem", "Aprendo melhor quando faço anotações e organizo informações em texto.", "linguistic"),
  q("q4", "Expressão", "Tenho facilidade em contar histórias ou apresentar um tema.", "linguistic"),

  q("q5", "Raciocínio", "Gosto de desafios com lógica, padrões e resolução de problemas.", "logicalMathematical"),
  q("q6", "Estrutura", "Prefiro tarefas com etapas claras e regras bem definidas.", "logicalMathematical"),
  q("q7", "Análise", "Antes de decidir, costumo pesar prós e contras de forma racional.", "logicalMathematical"),
  q("q8", "Curiosidade", "Tenho interesse por entender como as coisas funcionam.", "logicalMathematical"),

  q("q9", "Ritmo", "Percebo ritmo e variações de som com facilidade.", "musical"),
  q("q10", "Música", "Uso música para me concentrar, relaxar ou me motivar.", "musical"),
  q("q11", "Memória sonora", "Lembro melodias/letras com facilidade.", "musical"),
  q("q12", "Sensibilidade", "Gosto de explorar sons, batidas e estilos musicais.", "musical"),

  q("q13", "Prática", "Aprendo melhor fazendo e experimentando na prática.", "bodilyKinesthetic"),
  q("q14", "Movimento", "Atividades físicas, dança ou esportes fazem bem para mim.", "bodilyKinesthetic"),
  q("q15", "Mão na massa", "Gosto de tarefas manuais (montar, construir, consertar, artesanato).", "bodilyKinesthetic"),
  q("q16", "Ação", "Quando estou inquieto(a), prefiro agir do que apenas pensar.", "bodilyKinesthetic"),

  q("q17", "Visualização", "Consigo imaginar como algo vai ficar antes de existir (layout, desenho, espaço).", "spatial"),
  q("q18", "Imagens", "Aprendo melhor com imagens, gráficos, mapas mentais e exemplos visuais.", "spatial"),
  q("q19", "Detalhes", "Percebo detalhes de forma, cor e organização do espaço.", "spatial"),
  q("q20", "Design", "Tenho interesse por estética, composição e organização visual.", "spatial"),

  q("q21", "Empatia", "Consigo perceber emoções e intenções das pessoas.", "interpersonal"),
  q("q22", "Colaboração", "Trabalhar em equipe me ajuda a render melhor.", "interpersonal"),
  q("q23", "Liderança", "Gosto de organizar grupos, alinhar objetivos e mediar conversas.", "interpersonal"),
  q("q24", "Comunicação social", "Gosto de conversar e conhecer diferentes pontos de vista.", "interpersonal"),

  q("q25", "Autoconhecimento", "Tenho clareza do que me motiva e do que eu quero para meu futuro.", "intrapersonal"),
  q("q26", "Reflexão", "Costumo refletir sobre minhas escolhas e aprender com meus erros.", "intrapersonal"),
  q("q27", "Autonomia", "Prefiro estudar/trabalhar sozinho(a) quando preciso me concentrar.", "intrapersonal"),
  q("q28", "Objetivos", "Defino metas pessoais e tento seguir um plano para alcançá-las.", "intrapersonal"),

  q("q29", "Ambiente", "Gosto de observar o ambiente ao meu redor e perceber mudanças.", "naturalist"),
  q("q30", "Natureza", "Me interesso por plantas, animais e assuntos ambientais.", "naturalist"),
  q("q31", "Classificação", "Gosto de identificar, comparar e classificar coisas em categorias.", "naturalist"),
  q("q32", "Ar livre", "Me sinto melhor quando passo tempo em ambientes abertos/ar livre.", "naturalist"),
];

export type VocationalTestResult = {
  scores: Record<IntelligenceKey, number>;
  ordered: Array<{ key: IntelligenceKey; score: number }>;
  top: IntelligenceKey[];
  answeredCount: number;
  totalQuestions: number;
  maxPerIntelligence: Record<IntelligenceKey, number>;
};

export const emptyScores = (): Record<IntelligenceKey, number> => ({
  linguistic: 0,
  logicalMathematical: 0,
  musical: 0,
  bodilyKinesthetic: 0,
  spatial: 0,
  interpersonal: 0,
  intrapersonal: 0,
  naturalist: 0,
});

export const getMaxPerIntelligence = (): Record<IntelligenceKey, number> => {
  const max = emptyScores();
  for (const question of VOCATIONAL_QUESTIONS) {
    max[question.intelligence] += 5;
  }
  return max;
};

export type VocationalAnswers = Record<string, number | undefined>;

export const computeVocationalResult = (answers: VocationalAnswers): VocationalTestResult => {
  const scores = emptyScores();
  let answeredCount = 0;

  for (const question of VOCATIONAL_QUESTIONS) {
    const value = answers[question.id];
    if (value === undefined) continue;
    if (value < 1 || value > 5) continue;
    answeredCount += 1;
    scores[question.intelligence] += value;
  }

  const ordered = (Object.keys(scores) as IntelligenceKey[])
    .map((key) => ({ key, score: scores[key] }))
    .sort((a, b) => b.score - a.score);

  const topScore = ordered[0]?.score ?? 0;
  const top = ordered.filter((x) => x.score === topScore && topScore > 0).map((x) => x.key);

  return {
    scores,
    ordered,
    top,
    answeredCount,
    totalQuestions: VOCATIONAL_QUESTIONS.length,
    maxPerIntelligence: getMaxPerIntelligence(),
  };
};

export const getIntelligenceInfo = (key: IntelligenceKey): IntelligenceInfo => {
  const info = INTELLIGENCES.find((i) => i.key === key);
  if (!info) {
    throw new Error(`Unknown intelligence key: ${key}`);
  }
  return info;
};
