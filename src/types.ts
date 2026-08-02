export interface AgencyDiagnosticForm {
  nome: string;
  agencia: string;
  site: string;
  whatsapp: string;
  email: string;
  clientes: string;
  nichos: string;
  vendeSEO: string;
  dificuldade: string;
  modelo: string;
}

export interface QuickWin {
  title: string;
  description: string;
}

export interface RoadmapStep {
  phase: string;
  actions: string;
}

export interface DiagnosticResult {
  radarScore: number;
  seoScore: number;
  geoScore: number;
  brandAuthorityScore: number;
  marketOpportunity: string;
  analysis: string;
  quickWins: QuickWin[];
  roadmap90Days: RoadmapStep[];
  growthEstimate: string;
  suggestedModel: string;
}

export interface AccordionItem {
  id: string;
  question: string;
  answer: string;
}

export interface SolutionCardItem {
  id: string;
  title: string;
  subtitle: string;
  idealFor: string;
}
