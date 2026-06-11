import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  Activity,
  TrendingUp,
  BrainCircuit,
  ShieldCheck,
  BookOpen,
  BarChart3,
  PieChart,
  AlertTriangle,
  BriefcaseBusiness,
  Settings,
  Search,
  Bell,
  Moon,
  Maximize,
  CalendarDays,
  Filter,
  FileText,
  Clock3,
  Users,
  Cpu,
  User,
  ChevronDown,
  Download,
  FileDown,
  Presentation,
  FileSpreadsheet,
  Database,
  WandSparkles,
  SlidersHorizontal,
  RefreshCw,
  Play,
  Bot,
  Zap,
  CheckCircle2,
  Layers,
  GitBranch,
  Sparkles,
  Upload,
  Share2,
  Eye,
  Plus,
  FolderOpen,
  Pencil,
  Save,
  MoreVertical,
  ArrowLeft,
  ArrowRight,
  PanelRightOpen,
  Copy,
  Trash2,
  Globe2,
  Shield,
  Link as LinkIcon,
  Table2,
  Server,
  Lock,
  KeyRound,
  UserCog,
  Mail,
  Archive,
  Target,
  Gauge,
  Radar,
  Flame,
  Route,
  Map,
  ListChecks,
  Workflow,
  Briefcase,
  Building2,
  Network,
  Bug,
  Wrench,
  ClipboardCheck,
  ClipboardList,
  MonitorCheck,
  Boxes,
  Timer,
  CircleDollarSign,
  HardDrive,
  Cloud,
  Code2,
  BookMarked,
  Megaphone,
  Send,
  Power,
  RotateCcw,
  Webhook,
  Plug,
  ScanSearch,
  BadgeCheck,
  X,
  ExternalLink,
  MessageSquare,
  CheckSquare,
  ClipboardPlus,
  Info,
  MousePointerClick,
} from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart as RPieChart,
  Pie,
  Cell,
  ComposedChart,
  ReferenceLine,
  RadialBarChart,
  RadialBar,
} from "recharts";
import "./styles/global.css";

type Page =
  | "dashboard"
  | "operacao"
  | "forecast"
  | "books"
  | "sai"
  | "governanca"
  | "analytics"
  | "executive"
  | "alertas"
  | "projetos"
  | "administracao"
  | "configuracoes";

type ForecastTab =
  | "visao"
  | "volume"
  | "backlog"
  | "sla"
  | "recursos"
  | "projetos"
  | "cenarios"
  | "simulacoes";
type OperationTab =
  | "visao"
  | "chamados"
  | "incidentes"
  | "problemas"
  | "mudancas"
  | "requisicoes"
  | "base";
type GenericTab =
  | "visao"
  | "indicadores"
  | "automacoes"
  | "riscos"
  | "relatorios";

const colors = [
  "#11a8ff",
  "#16e0bd",
  "#f6c84c",
  "#ff9f1c",
  "#8957ff",
  "#ff4d5e",
  "#20e074",
  "#82aaff",
];

type DemoDetail = {
  title: string;
  subtitle?: string;
  kind?: "book" | "project" | "agent" | "automation" | "export" | "generic";
  metric?: string;
  status?: string;
  description?: string;
  steps?: string[];
  actions?: string[];
};

function openDemoDetail(detail: DemoDetail) {
  window.dispatchEvent(new CustomEvent("cyberone-open-detail", { detail }));
}

function demoNotify(message: string) {
  openDemoDetail({
    title: "Fluxo demonstrativo",
    subtitle: "Ação conectada ao sistema",
    kind: "generic",
    status: "Em demonstração",
    description: message,
    steps: [
      "Validar contexto da ação",
      "Consultar dados fake relacionados",
      "Exibir resultado operacional",
      "Registrar histórico demonstrativo",
    ],
    actions: [
      "Abrir detalhe completo",
      "Gerar evidência",
      "Enviar para o book",
    ],
  });
}

const forecastData = [
  {
    mes: "Mai/25",
    realizado: 18500,
    previsto: 18500,
    minimo: 18500,
    maximo: 18500,
    backlog: 2870,
    capacidade: 4000,
    sla: 92.8,
    recursos: 88,
    risco: 28,
    resolvidos: 15100,
    incidentes: 780,
    problemas: 120,
    mudancas: 240,
  },
  {
    mes: "Jun/25",
    realizado: 22000,
    previsto: 24500,
    minimo: 23000,
    maximo: 26300,
    backlog: 3420,
    capacidade: 4050,
    sla: 91.4,
    recursos: 89,
    risco: 45,
    resolvidos: 17800,
    incidentes: 930,
    problemas: 148,
    mudancas: 310,
  },
  {
    mes: "Jul/25",
    realizado: 26000,
    previsto: 28540,
    minimo: 25200,
    maximo: 31700,
    backlog: 4870,
    capacidade: 4100,
    sla: 89.2,
    recursos: 91,
    risco: 65,
    resolvidos: 19400,
    incidentes: 1120,
    problemas: 190,
    mudancas: 390,
  },
  {
    mes: "Ago/25",
    realizado: null,
    previsto: 32600,
    minimo: 28500,
    maximo: 37100,
    backlog: 5680,
    capacidade: 4150,
    sla: 86.5,
    recursos: 92,
    risco: 72,
    resolvidos: 22100,
    incidentes: 1320,
    problemas: 240,
    mudancas: 430,
  },
  {
    mes: "Set/25",
    realizado: null,
    previsto: 35100,
    minimo: 30900,
    maximo: 40300,
    backlog: 5240,
    capacidade: 4200,
    sla: 87.8,
    recursos: 94,
    risco: 48,
    resolvidos: 24600,
    incidentes: 1180,
    problemas: 205,
    mudancas: 460,
  },
  {
    mes: "Out/25",
    realizado: null,
    previsto: 38200,
    minimo: 33100,
    maximo: 43100,
    backlog: 4910,
    capacidade: 4300,
    sla: 89.5,
    recursos: 96,
    risco: 33,
    resolvidos: 27100,
    incidentes: 1050,
    problemas: 170,
    mudancas: 510,
  },
];

const categories = [
  {
    categoria: "Infraestrutura",
    volume: 12450,
    perc: 43.7,
    tendencia: 18.2,
    risco: "Alto",
  },
  {
    categoria: "Sistemas",
    volume: 7260,
    perc: 25.5,
    tendencia: 12.4,
    risco: "Médio",
  },
  {
    categoria: "Aplicações",
    volume: 4980,
    perc: 17.5,
    tendencia: 8.7,
    risco: "Médio",
  },
  {
    categoria: "Acessos",
    volume: 2350,
    perc: 8.2,
    tendencia: -3.1,
    risco: "Baixo",
  },
  {
    categoria: "Serviços",
    volume: 1500,
    perc: 5.3,
    tendencia: -5.6,
    risco: "Baixo",
  },
];

const tickets = [
  [
    "INC-84231",
    "Serviço indisponível para usuários",
    "Infraestrutura",
    "Alta",
    "23/05/2025 08:42",
    "SLA 90%",
    "Em andamento",
  ],
  [
    "CHM-56021",
    "Falha ao salvar documento",
    "Sistemas",
    "Alta",
    "23/05/2025 08:30",
    "SLA 85%",
    "Em andamento",
  ],
  [
    "CHM-88765",
    "Lentidão no sistema de relatórios",
    "Aplicações",
    "Média",
    "23/05/2025 09:15",
    "SLA 72%",
    "Em andamento",
  ],
  [
    "CHM-33120",
    "Erro ao gerar relatório",
    "Aplicações",
    "Média",
    "23/05/2025 07:50",
    "SLA 65%",
    "Aguardando",
  ],
  [
    "CHM-77891",
    "Solicitação de novo acesso",
    "Acessos",
    "Baixa",
    "23/05/2025 07:30",
    "SLA 85%",
    "Novo",
  ],
];

const drivers = [
  { nome: "Projetos Estratégicos", impacto: 32.8 },
  { nome: "Mudanças Programadas", impacto: 18.4 },
  { nome: "Sazonalidade", impacto: 15.6 },
  { nome: "Campanhas / Promoções", impacto: 9.7 },
  { nome: "Mudanças Tecnológicas", impacto: 7.2 },
  { nome: "Fatores Externos", impacto: 3.1 },
];

const scenarios = [
  {
    nome: "Atual (Sem Ação)",
    backlog: 4870,
    sla: 89.2,
    custo: "R$ 0",
    risco: "Alto",
    tag: "Base",
  },
  {
    nome: "Reforço de Equipe +15%",
    backlog: 2980,
    sla: 93.1,
    custo: "R$ 42k",
    risco: "Médio",
    tag: "Impacto alto",
  },
  {
    nome: "Otimização de Processos",
    backlog: 3420,
    sla: 91.0,
    custo: "R$ 18k",
    risco: "Médio",
    tag: "Custo baixo",
  },
  {
    nome: "Reforço + Otimização",
    backlog: 2150,
    sla: 95.2,
    custo: "R$ 55k",
    risco: "Baixo",
    tag: "Recomendado",
  },
];

const heatRows = ["Mai/25", "Jun/25", "Jul/25", "Ago/25", "Set/25", "Out/25"];
const heatCols = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sáb", "Dom"];
const heat = [
  [22, 34, 46, 43, 36, 18, 12],
  [35, 48, 58, 62, 54, 29, 17],
  [56, 63, 72, 76, 69, 38, 22],
  [70, 78, 86, 82, 75, 42, 25],
  [50, 58, 67, 63, 55, 30, 19],
  [28, 35, 42, 39, 34, 20, 14],
];

const bookPages = [
  {
    title: "ANS | Executive Cyber Review",
    subtitle: "Book executivo premium · Dados demonstrativos fake",
    type: "executive-cover",
    content:
      "Uma leitura executiva, qualitativa e visual sobre o valor entregue pela Stefanini na evolução da postura de segurança da ANS.",
  },
  {
    title: "Executive Briefing",
    subtitle: "O que a diretoria precisa saber em 30 segundos",
    type: "briefing",
    content:
      "Durante o ciclo demonstrativo, a Stefanini manteve a operação da ANS estável, aumentou a visibilidade sobre riscos relevantes e transformou dados técnicos em decisões executivas.",
  },
  {
    title: "Valor Entregue pela Stefanini",
    subtitle: "Evidências do trabalho executado no mês",
    type: "value",
    content:
      "A tela mostra o que foi entregue: monitoramento, análises, recomendações, evolução de cobertura e redução de exposição percebida.",
  },
  {
    title: "Cyber Health Score",
    subtitle: "Leitura simples da postura de segurança",
    type: "health",
    content:
      "Um score executivo fake resume maturidade, exposição, resposta e evolução da segurança em uma única visão.",
  },
  {
    title: "Security Journey",
    subtitle: "Evolução do ambiente com narrativa mensal",
    type: "journey",
    content:
      "A jornada mostra a evolução da operação: do mapeamento inicial à melhoria contínua, com marcos fáceis de apresentar ao cliente.",
  },
  {
    title: "Threat Landscape",
    subtitle: "Cenário de ameaças traduzido para negócio",
    type: "threat",
    content:
      "Mapa fake de ameaças, tendências e vetores monitorados para dar contexto ao cliente sem expor dados sensíveis.",
  },
  {
    title: "SOC Storytelling",
    subtitle: "Da detecção ao encerramento",
    type: "soc-story",
    content:
      "Um caso fictício mostra como a Stefanini detecta, investiga, correlaciona, recomenda e acompanha a resolução.",
  },
  {
    title: "MITRE Coverage Heatmap",
    subtitle: "Cobertura por tática em visão executiva",
    type: "mitre-heatmap",
    content:
      "Heatmap fake inspirado em ferramentas enterprise para demonstrar cobertura, gaps e evolução dos casos de uso.",
  },
  {
    title: "Risk Intelligence",
    subtitle: "Principais riscos e recomendações priorizadas",
    type: "risks-premium",
    content:
      "Top riscos fake com impacto, probabilidade, dono e ação recomendada para transformar análise em plano.",
  },
  {
    title: "Business Impact",
    subtitle: "Tradução de cyber para valor de negócio",
    type: "business",
    content:
      "Mostra o que a atuação da Stefanini protegeu: continuidade, reputação, disponibilidade, governança e capacidade de resposta.",
  },
  {
    title: "Roadmap 30 · 60 · 90 dias",
    subtitle: "Próximos passos executivos",
    type: "roadmap-premium",
    content:
      "Plano visual fake para evolução da maturidade: hardening, MITRE, automação, exposição externa e governança.",
  },
  {
    title: "Board Summary",
    subtitle: "Resumo final para diretoria",
    type: "board",
    content:
      "Uma página final objetiva: o que melhorou, o que preocupa, decisões necessárias e próximos passos.",
  },
];

const books = [
  {
    name: "Resumo Executivo",
    pages: 12,
    status: "Concluído",
    owner: "Sistema IA",
    color: "#11a8ff",
    icon: FileText,
  },
  {
    name: "Indicadores Operacionais",
    pages: 24,
    status: "Atualizado",
    owner: "Operação",
    color: "#20e074",
    icon: BarChart3,
  },
  {
    name: "Forecast & Tendências",
    pages: 18,
    status: "Em revisão",
    owner: "Forecast IA",
    color: "#16e0bd",
    icon: TrendingUp,
  },
  {
    name: "Projetos & Demandas",
    pages: 20,
    status: "Rascunho",
    owner: "PMO",
    color: "#f6c84c",
    icon: BriefcaseBusiness,
  },
  {
    name: "Governança & Compliance",
    pages: 16,
    status: "Concluído",
    owner: "Governança",
    color: "#8957ff",
    icon: ShieldCheck,
  },
];

function Sidebar({
  page,
  setPage,
  operationTab,
  setOperationTab,
}: {
  page: Page;
  setPage: (p: Page) => void;
  operationTab: OperationTab;
  setOperationTab: (t: OperationTab) => void;
}) {
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>({
    dashboard: true,
    operacao: true,
    forecast: true,
    books: true,
    sai: true,
    governanca: true,
    analytics: true,
    executive: true,
    alertas: true,
    projetos: true,
    administracao: true,
    configuracoes: true,
  });
  const [activeSub, setActiveSub] = useState<Record<string, string>>({
    dashboard: "Visão Geral",
    operacao: "Visão Geral",
    forecast: "Visão Geral",
    books: "Meus Books",
    sai: "Agentes",
    governanca: "Compliance",
    analytics: "Performance",
    executive: "Resumo",
    alertas: "Críticos",
    projetos: "Portfólio",
    administracao: "Usuários",
    configuracoes: "Tema",
  });

  const items: [Page, string, React.ReactNode, string[]?][] = [
    [
      "dashboard",
      "Dashboard",
      <LayoutDashboard size={18} />,
      ["Visão Geral", "Executive Summary", "Situação por Cliente"],
    ],
    [
      "operacao",
      "Operação",
      <Activity size={18} />,
      [
        "Visão Geral",
        "Chamados",
        "Incidentes",
        "Problemas",
        "Mudanças",
        "Requisições",
        "Base de Conhecimento",
      ],
    ],
    [
      "forecast",
      "Forecast",
      <TrendingUp size={18} />,
      [
        "Visão Geral",
        "Volume",
        "Backlog",
        "SLA",
        "Recursos",
        "Projetos",
        "Cenários",
        "Simulações",
      ],
    ],
    [
      "books",
      "Books",
      <BookOpen size={18} />,
      ["Meus Books", "Biblioteca", "Modelos", "Automações"],
    ],
    [
      "sai",
      "SAI - Agentes IA",
      <BrainCircuit size={18} />,
      ["Agentes", "Anomalias", "Recomendações", "Treinamento"],
    ],
    [
      "governanca",
      "Governança",
      <ShieldCheck size={18} />,
      ["Compliance", "Políticas", "Auditoria", "Riscos"],
    ],
    [
      "analytics",
      "Analytics",
      <BarChart3 size={18} />,
      ["Performance", "Drilldown", "Cruzamentos", "Relatórios"],
    ],
    [
      "executive",
      "Executive",
      <PieChart size={18} />,
      ["Resumo", "Diretoria", "Decisões", "OKRs"],
    ],
    [
      "alertas",
      "Alertas",
      <AlertTriangle size={18} />,
      ["Críticos", "SLA", "Backlog", "Capacidade"],
    ],
    [
      "projetos",
      "Projetos",
      <BriefcaseBusiness size={18} />,
      ["Portfólio", "Roadmap", "Demandas", "Impacto"],
    ],
    [
      "administracao",
      "Administração",
      <UserCog size={18} />,
      ["Usuários", "Permissões", "Integrações", "Ambientes"],
    ],
    [
      "configuracoes",
      "Configurações",
      <Settings size={18} />,
      ["Tema", "Segurança", "Notificações", "Preferências"],
    ],
  ];

  const handleMain = (key: Page) => {
    setPage(key);
    setOpenGroups((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSub = (key: Page, label: string) => {
    const opMap: Record<string, OperationTab> = {
      "Visão Geral": "visao",
      Chamados: "chamados",
      Incidentes: "incidentes",
      Problemas: "problemas",
      Mudanças: "mudancas",
      Requisições: "requisicoes",
      "Base de Conhecimento": "base",
    };
    const forecastMap: Record<string, ForecastTab> = {
      "Visão Geral": "visao",
      Volume: "volume",
      Backlog: "backlog",
      SLA: "sla",
      Recursos: "recursos",
      Projetos: "projetos",
      Cenários: "cenarios",
      Simulações: "simulacoes",
    };
    setPage(key);
    setActiveSub((prev) => ({ ...prev, [key]: label }));
    if (key === "operacao" && opMap[label]) setOperationTab(opMap[label]);
    if (key !== "operacao")
      demoNotify(
        `${label} aberto em ${items.find((i) => i[0] === key)?.[1]}. Este clique já está conectado ao módulo demonstrativo.`,
      );
  };

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="orb">
          <Cpu size={29} />
        </div>
        <div>
          <h1>CYBERONE</h1>
          <p>INTELIGÊNCIA OPERACIONAL</p>
        </div>
      </div>
      <nav>
        {items.map(([key, label, icon, subs]) => (
          <div key={key} className="nav-group">
            <button
              onClick={() => handleMain(key)}
              className={page === key ? "active" : ""}
              aria-expanded={!!openGroups[key]}
            >
              {icon}
              <span>{label}</span>
              {key === "alertas" && <em>12</em>}
              <ChevronDown
                className={openGroups[key] ? "chev open" : "chev"}
                size={14}
              />
            </button>
            {openGroups[key] && subs && (
              <div className="subnav">
                {subs.map((sub) => {
                  const opActive: Record<string, OperationTab> = {
                    "Visão Geral": "visao",
                    Chamados: "chamados",
                    Incidentes: "incidentes",
                    Problemas: "problemas",
                    Mudanças: "mudancas",
                    Requisições: "requisicoes",
                    "Base de Conhecimento": "base",
                  };
                  const selected =
                    page === key &&
                    (key === "operacao"
                      ? operationTab === opActive[sub]
                      : activeSub[key] === sub);
                  return (
                    <button
                      key={sub}
                      className={selected ? "sub-on" : ""}
                      onClick={() => handleSub(key, sub)}
                    >
                      {sub}
                    </button>
                  );
                })}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="profile">
        <div className="avatar">
          <User size={22} />
        </div>
        <div>
          <strong>Olá, Gestor</strong>
          <p>Administrador</p>
        </div>
      </div>
    </aside>
  );
}

function Header({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <header className="header">
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="header-actions">
        <div className="search">
          <Search size={17} />
          <span>Buscar módulos, indicadores, relatórios...</span>
          <kbd>Ctrl + K</kbd>
        </div>
        <Bell size={20} />
        <Moon size={20} />
        <Maximize size={20} />
        <button
          onClick={() =>
            demoNotify(
              "Período alterável no protótipo: Maio/2025. Na versão final pode abrir calendário e comparar meses.",
            )
          }
        >
          <CalendarDays size={16} />
          Maio/2025
        </button>
        <button
          onClick={() =>
            demoNotify(
              "Filtros demonstrativos: cliente, severidade, área, status, responsável e período.",
            )
          }
        >
          <Filter size={16} />
          Filtros
        </button>
      </div>
    </header>
  );
}

function Kpi({
  icon,
  label,
  value,
  trend,
  color = "#11a8ff",
  bad = false,
}: any) {
  return (
    <motion.div
      className="kpi"
      whileHover={{ y: -4 }}
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
    >
      <div className="kpi-head">
        <div
          className="kpi-icon"
          style={{ color, boxShadow: `0 0 28px ${color}55` }}
        >
          {icon}
        </div>
        <div>
          <p>{label}</p>
          <h3>{value}</h3>
          <span className={bad ? "bad" : "good"}>{trend}</span>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={48}>
        <LineChart data={forecastData}>
          <Line dataKey="previsto" stroke={color} strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>
  );
}

function Panel({ title, subtitle, children, className = "", action }: any) {
  return (
    <section className={`panel ${className}`}>
      <div className="panel-head">
        <div>
          <h3>{title}</h3>
          {subtitle && <p>{subtitle}</p>}
        </div>
        {action}
      </div>
      {children}
    </section>
  );
}

function Tag({ children, tone = "blue" }: any) {
  return <span className={`tag ${tone}`}>{children}</span>;
}

function MiniPie() {
  const data = categories.map((c) => ({ name: c.categoria, value: c.perc }));
  return (
    <div className="pie-wrap pie-fixed">
      <div className="pie-chart-box">
        <ResponsiveContainer width="100%" height={260}>
          <RPieChart margin={{ top: 18, right: 18, bottom: 18, left: 18 }}>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={58}
              outerRadius={92}
              paddingAngle={2}
            >
              {data.map((_, i) => (
                <Cell key={i} fill={colors[i]} />
              ))}
            </Pie>
            <Tooltip />
          </RPieChart>
        </ResponsiveContainer>
      </div>
      <div className="legend">
        {data.map((d, i) => (
          <div key={d.name}>
            <span style={{ background: colors[i] }}></span>
            <b>{d.name}</b>
            <em>{d.value}%</em>
          </div>
        ))}
      </div>
    </div>
  );
}

function ForecastLine({ mode = "volume" }: { mode?: string }) {
  const key =
    mode === "backlog" ? "backlog" : mode === "sla" ? "sla" : "previsto";
  const stroke =
    mode === "backlog" ? "#f6c84c" : mode === "sla" ? "#20e074" : "#11a8ff";
  return (
    <ResponsiveContainer width="100%" height={310}>
      <ComposedChart data={forecastData}>
        <defs>
          <linearGradient id={`area-${mode}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor={stroke} stopOpacity={0.38} />
            <stop offset="95%" stopColor={stroke} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid stroke="#19304a" />
        <XAxis dataKey="mes" stroke="#8ba5c0" />
        <YAxis stroke="#8ba5c0" />
        <Tooltip />
        <ReferenceLine
          x="Jul/25"
          stroke="#ffffff55"
          label={{ value: "Hoje", fill: "#cde5ff", position: "top" }}
        />
        {mode === "volume" && (
          <Area dataKey="maximo" stroke="none" fill="#11a8ff12" />
        )}
        {mode === "volume" && (
          <Line
            dataKey="realizado"
            stroke="#20e074"
            strokeWidth={3}
            dot={{ r: 4 }}
          />
        )}
        <Area
          dataKey={key}
          stroke={stroke}
          fill={`url(#area-${mode})`}
          strokeWidth={3}
        />
        {mode === "volume" && (
          <Line
            dataKey="minimo"
            stroke="#11a8ff"
            strokeDasharray="4 4"
            dot={false}
          />
        )}
      </ComposedChart>
    </ResponsiveContainer>
  );
}

function Insights({ title = "Insights Inteligentes" }: { title?: string }) {
  const insights = [
    [
      "Aumento de 15,3%",
      "no volume previsto para os próximos 30 dias.",
      "#11a8ff",
    ],
    [
      "Risco alto de sobrecarga",
      "em Ago/25, principalmente na Infraestrutura.",
      "#ff4d5e",
    ],
    ["SLA abaixo da meta", "previsto a partir de Jul/25.", "#f6c84c"],
    ["Reforço recomendado", "equipe +15% reduz backlog em 38,8%.", "#20e074"],
  ];
  return (
    <Panel title={title} subtitle="Gerados por IA">
      <div className="insights">
        {insights.map(([t, d, c]) => (
          <div key={t}>
            <Sparkles style={{ color: c }} />
            <div>
              <strong>{t}</strong>
              <p>{d}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        className="full-btn"
        onClick={() =>
          demoNotify(
            "Abrindo central de insights fake: riscos, causas prováveis, recomendações e próximos passos.",
          )
        }
      >
        <Bot size={16} /> Ver todos os insights
      </button>
    </Panel>
  );
}

function CategoryTable() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Categoria</th>
          <th>Volume</th>
          <th>% Total</th>
          <th>Tendência</th>
          <th>Risco</th>
        </tr>
      </thead>
      <tbody>
        {categories.map((c) => (
          <tr key={c.categoria}>
            <td>{c.categoria}</td>
            <td>{c.volume.toLocaleString("pt-BR")}</td>
            <td>{c.perc}%</td>
            <td className={c.tendencia > 0 ? "bad" : "good"}>
              {c.tendencia > 0 ? "↑" : "↓"} {Math.abs(c.tendencia)}%
            </td>
            <td>
              <Tag
                tone={
                  c.risco === "Alto"
                    ? "red"
                    : c.risco === "Médio"
                      ? "yellow"
                      : "green"
                }
              >
                {c.risco}
              </Tag>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function TicketTable() {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Título</th>
          <th>Categoria</th>
          <th>Prioridade</th>
          <th>Abertura</th>
          <th>SLA</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((t) => (
          <tr key={t[0]}>
            {t.map((x, i) => (
              <td key={i}>
                {i === 3 ? (
                  <Tag
                    tone={
                      x === "Alta" ? "red" : x === "Média" ? "yellow" : "green"
                    }
                  >
                    {x}
                  </Tag>
                ) : i === 6 ? (
                  <Tag>{x}</Tag>
                ) : (
                  x
                )}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Drivers() {
  return (
    <div className="drivers">
      {drivers.map((d, i) => (
        <div key={d.nome}>
          <span>{d.nome}</span>
          <div>
            <em
              style={{ width: `${d.impacto * 2.2}%`, background: colors[i] }}
            ></em>
          </div>
          <b>+{d.impacto}%</b>
        </div>
      ))}
    </div>
  );
}

function ScenarioCards() {
  return (
    <div className="scenario-grid">
      {scenarios.map((s, i) => (
        <motion.div
          key={s.nome}
          whileHover={{ y: -6 }}
          className={
            s.tag === "Recomendado" ? "scenario recommended" : "scenario"
          }
        >
          <div className="scenario-top">
            <span style={{ background: colors[i] }}></span>
            <strong>{s.nome}</strong>
            <em>{s.tag}</em>
          </div>
          <div className="scenario-metrics">
            <div>
              <b>{s.backlog.toLocaleString("pt-BR")}</b>
              <small>Backlog</small>
            </div>
            <div>
              <b>{s.sla}%</b>
              <small>SLA</small>
            </div>
            <div>
              <b>{s.custo}</b>
              <small>Custo</small>
            </div>
          </div>
          <div className="scenario-footer">
            <Tag
              tone={
                s.risco === "Alto"
                  ? "red"
                  : s.risco === "Médio"
                    ? "yellow"
                    : "green"
              }
            >
              Risco {s.risco}
            </Tag>
            <button
              onClick={() =>
                demoNotify(
                  `Simulação executada: ${s.nome} altera backlog, SLA, custo e risco no modo demonstrativo.`,
                )
              }
            >
              <Play size={14} /> Simular
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

function Heatmap() {
  return (
    <div className="heatmap">
      <div></div>
      {heatCols.map((c) => (
        <b key={c}>{c}</b>
      ))}
      {heatRows.map((r, i) => (
        <React.Fragment key={r}>
          <b>{r}</b>
          {heat[i].map((v, j) => (
            <span
              key={j}
              className={
                v > 75 ? "hot" : v > 55 ? "warm" : v > 35 ? "med" : "cold"
              }
            ></span>
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}

function RiskRings() {
  return (
    <div className="rings">
      {forecastData.map((d, i) => (
        <div key={d.mes} className="ring-card">
          <div className={`ring r${i}`}>{d.risco}%</div>
          <strong>{d.mes}</strong>
          <Tag tone={d.risco > 65 ? "red" : d.risco > 40 ? "yellow" : "green"}>
            {d.risco > 65 ? "Alto" : d.risco > 40 ? "Médio" : "Baixo"}
          </Tag>
        </div>
      ))}
    </div>
  );
}

function ExportActions() {
  const actions = [
    ["Relatório PDF", FileDown, "#ff4d5e"],
    ["Apresentação PPT", Presentation, "#ff9f1c"],
    ["Planilha Excel", FileSpreadsheet, "#20e074"],
    ["Dados CSV", Database, "#8957ff"],
    ["Enviar Book", Share2, "#16e0bd"],
    ["Atualizar Dados", RefreshCw, "#11a8ff"],
  ];
  return (
    <div className="export-grid">
      {actions.map(([label, Icon, color]: any) => (
        <motion.button
          key={label}
          whileHover={{ y: -4 }}
          onClick={() =>
            demoNotify(
              `${label} executado em modo demonstração. Na implantação, isso chama o backend/exportador real.`,
            )
          }
          style={{ "--accent": color } as React.CSSProperties}
        >
          <Icon size={25} />
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
}

function SimulationPanel() {
  const [team, setTeam] = useState(15),
    [automation, setAutomation] = useState(30),
    [demand, setDemand] = useState(12);
  const backlog = Math.max(
    1200,
    Math.round(4870 - team * 85 - automation * 28 + demand * 70),
  );
  const sla = Math.min(
    98,
    Math.round((89.2 + team * 0.12 + automation * 0.06 - demand * 0.08) * 10) /
      10,
  );
  return (
    <Panel
      title="Simulador Inteligente"
      subtitle="Altere variáveis e veja o impacto previsto"
      className="span-2"
    >
      <div className="simulator">
        <div className="sliders">
          <label>
            Reforço de equipe: <b>{team}%</b>
            <input
              type="range"
              min="0"
              max="40"
              value={team}
              onChange={(e) => setTeam(Number(e.target.value))}
            />
          </label>
          <label>
            Automação de processos: <b>{automation}%</b>
            <input
              type="range"
              min="0"
              max="60"
              value={automation}
              onChange={(e) => setAutomation(Number(e.target.value))}
            />
          </label>
          <label>
            Aumento de demanda: <b>{demand}%</b>
            <input
              type="range"
              min="0"
              max="30"
              value={demand}
              onChange={(e) => setDemand(Number(e.target.value))}
            />
          </label>
        </div>
        <div className="sim-results">
          <div>
            <strong>{backlog.toLocaleString("pt-BR")}</strong>
            <span>Backlog projetado</span>
          </div>
          <div>
            <strong>{sla}%</strong>
            <span>SLA projetado</span>
          </div>
          <div>
            <strong>
              {backlog < 2500 ? "Baixo" : backlog < 4000 ? "Médio" : "Alto"}
            </strong>
            <span>Risco operacional</span>
          </div>
        </div>
      </div>
    </Panel>
  );
}

function ForecastPage() {
  const [tab, setTab] = useState<ForecastTab>("visao");
  const tabs: [ForecastTab, string, any][] = [
    ["visao", "Visão Geral", Eye],
    ["volume", "Volume", TrendingUp],
    ["backlog", "Backlog", Layers],
    ["sla", "SLA", ShieldCheck],
    ["recursos", "Recursos", Users],
    ["projetos", "Projetos", BriefcaseBusiness],
    ["cenarios", "Cenários", GitBranch],
    ["simulacoes", "Simulações", SlidersHorizontal],
  ];
  return (
    <>
      <Header
        title="Forecast"
        subtitle="Previsões, tendências e simulações para tomada de decisão estratégica"
      />
      <main className="content">
        <div className="tabs">
          {tabs.map(([key, label, Icon]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={tab === key ? "selected" : ""}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
        {tab === "visao" && <ForecastOverview />}
        {tab === "volume" && (
          <div className="grid">
            <Panel className="span-2" title="Volume Previsto">
              <ForecastLine mode="volume" />
            </Panel>
            <Panel title="Previsão por Categoria" className="span-2">
              <CategoryTable />
            </Panel>
            <Panel title="Calendário de Picos">
              <Heatmap />
            </Panel>
          </div>
        )}
        {tab === "backlog" && (
          <div className="grid">
            <Panel className="span-2" title="Forecast de Backlog">
              <ForecastLine mode="backlog" />
            </Panel>
            <Panel title="Backlog por Cenário" className="span-2">
              <ScenarioCards />
            </Panel>
            <Panel title="Drivers">
              <Drivers />
            </Panel>
          </div>
        )}
        {tab === "sla" && (
          <div className="grid">
            <Panel className="span-2" title="Projeção de SLA">
              <ForecastLine mode="sla" />
            </Panel>
            <Insights title="Riscos de SLA" />
            <Panel title="Probabilidade de Violação" className="span-2">
              <RiskRings />
            </Panel>
          </div>
        )}
        {tab === "recursos" && <ResourcePanels />}
        {tab === "projetos" && <ProjectPanels />}
        {tab === "cenarios" && (
          <div className="grid">
            <Panel className="span-2" title="Cenários comparativos">
              <ScenarioCards />
            </Panel>
            <SimulationPanel />
            <Insights title="Recomendação IA" />
          </div>
        )}
        {tab === "simulacoes" && (
          <div className="grid">
            <SimulationPanel />
            <Panel title="Cenários salvos" className="span-2">
              <ScenarioCards />
            </Panel>
            <Panel title="Exportações">
              <ExportActions />
            </Panel>
          </div>
        )}
      </main>
    </>
  );
}

function ForecastOverview() {
  return (
    <>
      <div className="kpi-grid five">
        <Kpi
          icon={<FileText />}
          label="Volume Previsto"
          value="28.540"
          trend="+15,3% vs período atual"
        />
        <Kpi
          icon={<Layers />}
          label="Backlog Previsto"
          value="4.870"
          trend="+22,8% vs período atual"
          color="#8957ff"
          bad
        />
        <Kpi
          icon={<ShieldCheck />}
          label="SLA Previsto"
          value="89,2%"
          trend="-3,6 p.p. vs período atual"
          color="#20e074"
          bad
        />
        <Kpi
          icon={<Clock3 />}
          label="MTTR Previsto"
          value="5h 48m"
          trend="+8,7% vs período atual"
          color="#f6c84c"
          bad
        />
        <Kpi
          icon={<Users />}
          label="Aderência de Recursos"
          value="91,4%"
          trend="+4,2 p.p. vs período atual"
          color="#16e0bd"
        />
      </div>
      <div className="grid">
        <Panel
          title="Previsão de Volume de Chamados"
          subtitle="Próximos 6 meses com intervalo de confiança"
          className="span-2"
        >
          <ForecastLine mode="volume" />
        </Panel>
        <Panel title="Previsão de Backlog">
          <ForecastLine mode="backlog" />
        </Panel>
        <Panel title="Projeção de SLA">
          <ForecastLine mode="sla" />
        </Panel>
        <Insights title="Insights do Forecast" />
        <Panel title="Previsão por Categoria" className="span-2">
          <CategoryTable />
        </Panel>
        <Panel title="Cenários de Simulação" className="span-2">
          <ScenarioCards />
        </Panel>
        <Panel title="Drivers de Influência">
          <Drivers />
        </Panel>
        <Panel title="Tendência de Sobrecarga" className="span-2">
          <RiskRings />
        </Panel>
        <Panel title="Calendário de Picos">
          <Heatmap />
        </Panel>
        <Panel title="Exportar Forecast">
          <ExportActions />
        </Panel>
      </div>
    </>
  );
}

type OperationPreviewKind =
  | "insight"
  | "shortcut"
  | "backlog"
  | "center"
  | "timeline"
  | "assistant"
  | null;

const operationInsights = [
  {
    title: "Aumento de 15,3%",
    desc: "no volume previsto para os próximos 30 dias.",
    color: "#11a8ff",
    causa: [
      "Crescimento de chamados de Infraestrutura",
      "Projeto SAP com maior volume de acionamentos",
      "Aumento de acessos remotos no período",
    ],
    impacto: [
      "+4.200 tickets previstos",
      "SLA pode reduzir 2,3 p.p.",
      "N2 pode atingir 91% de capacidade",
    ],
    recomendacoes: [
      "Reforçar equipe N2 temporariamente",
      "Automatizar triagem de chamados repetidos",
      "Criar monitoramento de pico por cliente",
    ],
    confianca: 93,
  },
  {
    title: "Risco alto de sobrecarga",
    desc: "em Ago/25, principalmente na Infraestrutura.",
    color: "#ff4d5e",
    causa: [
      "Backlog acima da capacidade planejada",
      "Maior concentração em filas críticas",
      "Incidentes recorrentes sem tratativa definitiva",
    ],
    impacto: [
      "Risco de violação de SLA",
      "Aumento de MTTR",
      "Escalonamentos para gestão",
    ],
    recomendacoes: [
      "Criar plano de contenção",
      "Priorizar tickets acima de 16 dias",
      "Acionar squad de apoio",
    ],
    confianca: 88,
  },
  {
    title: "SLA abaixo da meta",
    desc: "previsto a partir de Jul/25.",
    color: "#f6c84c",
    causa: [
      "Volume crescendo mais rápido que resolução",
      "Chamados antigos consumindo capacidade",
      "Mudanças operacionais concentradas",
    ],
    impacto: [
      "SLA previsto em 89,2%",
      "Meta de 92% em risco",
      "Aumento de chamados críticos",
    ],
    recomendacoes: [
      "Redistribuir filas",
      "Revisar priorização",
      "Ativar alerta automático de SLA",
    ],
    confianca: 91,
  },
  {
    title: "Reforço recomendado",
    desc: "equipe +15% reduz backlog em 38,8%.",
    color: "#20e074",
    causa: [
      "Simulação de capacidade aplicada",
      "Histórico de resolução por analista",
      "Crescimento previsto de volume",
    ],
    impacto: [
      "Backlog cai de 4.870 para 2.980",
      "SLA sobe para 93,1%",
      "Risco sai de Alto para Médio",
    ],
    recomendacoes: [
      "Aprovar reforço temporário",
      "Focar em Infraestrutura e Sistemas",
      "Reavaliar após 15 dias",
    ],
    confianca: 96,
  },
];

const operationShortcuts = [
  {
    key: "novo",
    title: "Novo Chamado",
    icon: Plus,
    color: "#11a8ff",
    desc: "Simula a abertura de um chamado operacional.",
    preview: {
      id: "CHM-90241",
      status: "Novo",
      campos: [
        "Cliente: Mercado Livre",
        "Categoria: Infraestrutura",
        "Prioridade: Média",
        "Responsável: Triagem N1",
      ],
    },
  },
  {
    key: "incidente",
    title: "Registrar Incidente",
    icon: AlertTriangle,
    color: "#ff4d5e",
    desc: "Simula um incidente crítico com impacto operacional.",
    preview: {
      id: "INC-84521",
      status: "Crítico",
      campos: [
        "Serviço afetado: Portal Meli",
        "Usuários impactados: 3.421",
        "SLA: 45%",
        "Responsável: Equipe N2",
      ],
    },
  },
  {
    key: "mudanca",
    title: "Solicitar Mudança",
    icon: GitBranch,
    color: "#f6c84c",
    desc: "Simula uma RFC com fluxo de aprovação.",
    preview: {
      id: "RFC-2025-042",
      status: "Aguardando CAB",
      campos: [
        "Mudança: Atualização SAP",
        "Janela: 24/05 22:00",
        "Risco: Médio",
        "Aprovadores: Gestor, Segurança, CAB",
      ],
    },
  },
  {
    key: "base",
    title: "Base de Conhecimento",
    icon: BookMarked,
    color: "#ff9f1c",
    desc: "Abre exemplo de artigo recomendado pela IA.",
    preview: {
      id: "KB-1182",
      status: "Publicado",
      campos: [
        "Tema: Lentidão em relatórios",
        "Categoria: Aplicações",
        "Uso: 42 vezes no mês",
        "Efetividade: 87%",
      ],
    },
  },
  {
    key: "relatorio",
    title: "Relatório Operacional",
    icon: FileDown,
    color: "#8957ff",
    desc: "Simula a geração de um relatório operacional.",
    preview: {
      id: "RPT-OP-0525",
      status: "Pronto para exportar",
      campos: [
        "Formato: PDF + Excel",
        "Período: Maio/2025",
        "Inclui: KPIs, SLA, backlog, incidentes",
        "Destino: Diretoria",
      ],
    },
  },
  {
    key: "atualizar",
    title: "Atualizar Dados",
    icon: RefreshCw,
    color: "#16e0bd",
    desc: "Simula atualização da base operacional.",
    preview: {
      id: "SYNC-0525",
      status: "Sincronizado",
      campos: [
        "Fonte: ServiceNow / CSV",
        "Última carga: agora",
        "Registros atualizados: 24.752",
        "Falhas: 0",
      ],
    },
  },
];

const backlogBuckets = [
  { faixa: "0 - 7 dias", total: 1245, cor: "#20e074" },
  { faixa: "8 - 15 dias", total: 986, cor: "#f6c84c" },
  { faixa: "16 - 30 dias", total: 673, cor: "#ff9f1c" },
  { faixa: "31 - 60 dias", total: 312, cor: "#ff4d5e" },
  { faixa: "+ 60 dias", total: 156, cor: "#8957ff" },
];

const fakeBacklogTickets = [
  ["INC-8452", "Mercado Livre", "Infraestrutura", "72%", "Em andamento"],
  ["INC-8478", "Mercado Livre", "SAP", "68%", "Aguardando N2"],
  ["INC-8499", "Mercado Livre", "Cloud", "63%", "Escalonado"],
  ["INC-8501", "Mercado Livre", "Acessos", "59%", "Pendente cliente"],
];

function OperationPage({
  tab,
  setTab,
}: {
  tab: OperationTab;
  setTab: (t: OperationTab) => void;
}) {
  const [previewKind, setPreviewKind] = useState<OperationPreviewKind>(null);
  const [previewData, setPreviewData] = useState<any>(null);
  const [assistantQuestion, setAssistantQuestion] = useState(
    "Qual cliente possui mais incidentes?",
  );
  const [bookLoading, setBookLoading] = useState(false);

  const openPreview = (kind: OperationPreviewKind, data: any) => {
    setPreviewKind(kind);
    setPreviewData(data);
  };
  const generateBook = () => {
    setBookLoading(true);
    openPreview("center", {
      title: "Gerando Book Executivo",
      desc: "Fluxo demonstrativo conectando Operação → Forecast → Books.",
      value: "5 etapas",
      steps: [
        "Coletando dados operacionais",
        "Analisando SLA e backlog",
        "Gerando recomendações IA",
        "Montando páginas do Book",
        "Book criado com sucesso",
      ],
    });
    setTimeout(() => setBookLoading(false), 1400);
  };

  const tabs: [OperationTab, string, any][] = [
    ["visao", "Visão Geral", Eye],
    ["chamados", "Chamados", FileText],
    ["incidentes", "Incidentes", AlertTriangle],
    ["problemas", "Problemas", Bug],
    ["mudancas", "Mudanças", GitBranch],
    ["requisicoes", "Requisições", ClipboardList],
    ["base", "Base de Conhecimento", BookMarked],
  ];

  return (
    <>
      <Header
        title="Operação"
        subtitle="Gestão operacional em tempo real: chamados, incidentes, problemas, mudanças e requisições"
      />
      <main className="content operation-page">
        <div className="tabs">
          {tabs.map(([key, label, Icon]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={tab === key ? "selected" : ""}
            >
              <Icon size={16} />
              {label}
            </button>
          ))}
        </div>
        <div className="operation-hero">
          <div>
            <span>Preview funcional</span>
            <h2>Centro de Operações CyberOne</h2>
            <p>
              Todos os cards abaixo são exemplos clicáveis para mostrar como a
              plataforma pode abrir detalhes, simular ações, gerar relatórios e
              conectar a operação ao Forecast e aos Books.
            </p>
          </div>
          <button
            onClick={generateBook}
            className={bookLoading ? "loading" : ""}
          >
            <WandSparkles size={19} />
            {bookLoading ? "Gerando..." : "Gerar Book Executivo"}
          </button>
        </div>
        <div className="kpi-grid five">
          <Kpi
            icon={<FileText />}
            label="Total de Chamados"
            value="24.752"
            trend="+12,5%"
          />
          <Kpi
            icon={<AlertTriangle />}
            label="Incidentes"
            value="1.120"
            trend="+8,2%"
            color="#ff4d5e"
            bad
          />
          <Kpi
            icon={<Bug />}
            label="Problemas"
            value="190"
            trend="+4,8%"
            color="#f6c84c"
            bad
          />
          <Kpi
            icon={<GitBranch />}
            label="Mudanças"
            value="390"
            trend="+10,4%"
            color="#8957ff"
          />
          <Kpi
            icon={<ShieldCheck />}
            label="SLA Operação"
            value="92,8%"
            trend="+4,3 p.p."
            color="#16e0bd"
          />
        </div>
        {tab === "visao" && (
          <div className="grid">
            <Panel
              className="span-2"
              title="Evolução Operacional"
              subtitle="Clique nos demais painéis para abrir previews laterais"
            >
              <ResponsiveContainer width="100%" height={310}>
                <LineChart data={forecastData}>
                  <CartesianGrid stroke="#19304a" />
                  <XAxis dataKey="mes" stroke="#8ba5c0" />
                  <YAxis stroke="#8ba5c0" />
                  <Tooltip />
                  <Line dataKey="previsto" stroke="#11a8ff" strokeWidth={3} />
                  <Line dataKey="resolvidos" stroke="#20e074" strokeWidth={3} />
                  <Line dataKey="incidentes" stroke="#ff4d5e" strokeWidth={3} />
                </LineChart>
              </ResponsiveContainer>
            </Panel>
            <OperationInsights onOpen={(i: any) => openPreview("insight", i)} />
            <OperationCenter onOpen={(d: any) => openPreview("center", d)} />
            <Panel
              title="Chamados Abertos"
              className="span-2"
              subtitle="Tabela demonstrativa"
            >
              <TicketTable />
            </Panel>
            <BacklogInteractive
              onOpen={(b: any) => openPreview("backlog", b)}
            />
            <OperationShortcuts
              onOpen={(s: any) => openPreview("shortcut", s)}
            />
            <OperationTimeline
              onOpen={(t: any) => openPreview("timeline", t)}
            />
            <CyberAssistant
              question={assistantQuestion}
              setQuestion={setAssistantQuestion}
              onOpen={(d: any) => openPreview("assistant", d)}
            />
            <OperationalHeatmap />
          </div>
        )}
        {tab !== "visao" && (
          <OperationTabPreview tab={tab} onOpen={openPreview} />
        )}
        <OperationDrawer
          type={previewKind}
          data={previewData}
          onClose={() => {
            setPreviewKind(null);
            setPreviewData(null);
          }}
        />
      </main>
    </>
  );
}

function OperationInsights({ onOpen }: { onOpen: (data: any) => void }) {
  return (
    <Panel
      title="Insights Inteligentes"
      subtitle="Clique para abrir a análise IA"
    >
      <div className="op-insight-list">
        {operationInsights.map((insight) => (
          <motion.button
            key={insight.title}
            whileHover={{ x: 4 }}
            onClick={() => onOpen(insight)}
            className="op-insight"
            style={{ "--accent": insight.color } as React.CSSProperties}
          >
            <Sparkles />
            <div>
              <strong>{insight.title}</strong>
              <p>{insight.desc}</p>
            </div>
            <ExternalLink size={16} />
          </motion.button>
        ))}
      </div>
    </Panel>
  );
}

function OperationCenter({ onOpen }: { onOpen: (data: any) => void }) {
  const cards = [
    ["Chamados abertos", "3.247", FileText, "#11a8ff"],
    ["Incidentes críticos", "12", AlertTriangle, "#ff4d5e"],
    ["Mudanças hoje", "28", GitBranch, "#f6c84c"],
    ["Problemas recorrentes", "6", Bug, "#8957ff"],
    ["Analistas online", "42", Users, "#20e074"],
  ];
  return (
    <Panel title="Centro de Operações" subtitle="NOC/SOC em tempo real">
      <div className="operation-center">
        {cards.map(([label, value, Icon, color]: any) => (
          <button
            key={label}
            onClick={() =>
              onOpen({
                title: label,
                value,
                color,
                desc: `Preview operacional de ${label.toLowerCase()}.`,
                steps: [
                  "Monitoramento ativo",
                  "Correlação com SLA",
                  "Sugestão de ação pela IA",
                ],
              })
            }
          >
            <Icon style={{ color }} />
            <strong>{value}</strong>
            <span>{label}</span>
          </button>
        ))}
      </div>
      <small className="live-dot">Atualizado há 2 segundos</small>
    </Panel>
  );
}

function OperationShortcuts({ onOpen }: { onOpen: (data: any) => void }) {
  return (
    <Panel
      title="Atalhos Operacionais"
      subtitle="Clique em cada ação para abrir o exemplo"
    >
      <div className="operation-shortcuts">
        {operationShortcuts.map((shortcut) => {
          const Icon = shortcut.icon;
          return (
            <motion.button
              whileHover={{ y: -4 }}
              key={shortcut.key}
              onClick={() => onOpen(shortcut)}
              style={{ "--accent": shortcut.color } as React.CSSProperties}
            >
              <Icon />
              <strong>{shortcut.title}</strong>
              <span>{shortcut.desc}</span>
            </motion.button>
          );
        })}
      </div>
    </Panel>
  );
}

function BacklogInteractive({ onOpen }: { onOpen: (data: any) => void }) {
  return (
    <Panel
      title="Backlog por Faixa"
      subtitle="Clique em uma faixa para ver tickets"
    >
      <div className="backlog-click-list">
        {backlogBuckets.map((bucket) => (
          <button key={bucket.faixa} onClick={() => onOpen(bucket)}>
            <span>{bucket.faixa}</span>
            <div>
              <em
                style={{
                  width: `${Math.min(bucket.total / 12, 100)}%`,
                  background: bucket.cor,
                }}
              ></em>
            </div>
            <strong>{bucket.total}</strong>
          </button>
        ))}
      </div>
    </Panel>
  );
}

function OperationTimeline({ onOpen }: { onOpen: (data: any) => void }) {
  const events = [
    ["09:22", "INC-84521 criado", "Incidente crítico aberto para Portal Meli"],
    ["09:28", "N2 assumiu atendimento", "Responsável definido automaticamente"],
    ["09:31", "Escalonado para Infra", "Correlação indica falha de rede"],
    ["09:42", "Mitigação aplicada", "Serviço parcialmente normalizado"],
    [
      "09:58",
      "Serviço normalizado",
      "Incidente resolvido e aguardando validação",
    ],
  ];
  return (
    <Panel title="Timeline Operacional" subtitle="Eventos recentes clicáveis">
      <div className="op-timeline">
        {events.map(([time, title, desc]) => (
          <button key={time} onClick={() => onOpen({ time, title, desc })}>
            <span>{time}</span>
            <div>
              <strong>{title}</strong>
              <p>{desc}</p>
            </div>
          </button>
        ))}
      </div>
    </Panel>
  );
}

function CyberAssistant({ question, setQuestion, onOpen }: any) {
  const questions = [
    "Qual cliente possui mais incidentes?",
    "Qual time tem mais backlog?",
    "Mostre problemas críticos",
    "Gerar resumo executivo",
  ];
  return (
    <Panel
      title="CyberOne Assistant"
      subtitle="Perguntas rápidas simuladas por IA"
    >
      <div className="assistant-box">
        <div className="assistant-answer">
          <Bot />
          <div>
            <strong>{question}</strong>
            <p>
              Resposta simulada: Mercado Livre concentra 184 incidentes no mês,
              com alta de 22% vs mês anterior. Principal causa: Infraestrutura e
              SAP.
            </p>
          </div>
        </div>
        <div className="assistant-chips">
          {questions.map((q: string) => (
            <button key={q} onClick={() => setQuestion(q)}>
              {q}
            </button>
          ))}
        </div>
        <button
          className="full-btn"
          onClick={() => onOpen({ title: "CyberOne Assistant", question })}
        >
          <MessageSquare size={16} /> Abrir análise completa
        </button>
      </div>
    </Panel>
  );
}

function OperationalHeatmap() {
  const rows = [
    ["Infraestrutura", 92, "#ff4d5e"],
    ["SAP", 74, "#f6c84c"],
    ["Cloud", 58, "#11a8ff"],
    ["Acessos", 36, "#20e074"],
    ["Serviços", 28, "#16e0bd"],
  ];
  return (
    <Panel title="Heatmap Operacional" subtitle="Áreas com maior pressão">
      <div className="op-heatmap">
        {rows.map(([name, value, color]: any) => (
          <div key={name}>
            <span>{name}</span>
            <div>
              <em style={{ width: `${value}%`, background: color }}></em>
            </div>
            <b>{value}%</b>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function OperationTabPreview({
  tab,
  onOpen,
}: {
  tab: OperationTab;
  onOpen: (kind: OperationPreviewKind, data: any) => void;
}) {
  const map: any = {
    chamados: [
      "Chamados",
      FileText,
      "Gestão de chamados, filtros, SLA e responsáveis.",
    ],
    incidentes: [
      "Incidentes",
      AlertTriangle,
      "Controle de incidentes críticos e impacto no negócio.",
    ],
    problemas: [
      "Problemas",
      Bug,
      "Análise de causa raiz e recorrência operacional.",
    ],
    mudancas: [
      "Mudanças",
      GitBranch,
      "RFCs, aprovações e calendário de mudanças.",
    ],
    requisicoes: [
      "Requisições",
      ClipboardList,
      "Solicitações operacionais e catálogo de serviços.",
    ],
    base: [
      "Base de Conhecimento",
      BookMarked,
      "Artigos recomendados, uso e efetividade.",
    ],
  };
  const [title, Icon, desc] = map[tab];
  const examples = [
    {
      title: `${title} críticos`,
      desc: "Abre uma visão filtrada com itens de alta prioridade.",
      icon: AlertTriangle,
      color: "#ff4d5e",
    },
    {
      title: `Novo registro de ${title}`,
      desc: "Mostra como seria o formulário de criação.",
      icon: ClipboardPlus,
      color: "#11a8ff",
    },
    {
      title: `Relatório de ${title}`,
      desc: "Preview de exportação e envio automático.",
      icon: FileDown,
      color: "#8957ff",
    },
    {
      title: `Automação de ${title}`,
      desc: "Exemplo de regra automática com IA.",
      icon: Bot,
      color: "#20e074",
    },
  ];
  return (
    <div className="grid">
      <Panel
        title={`Preview da aba ${title}`}
        subtitle={desc}
        className="span-2"
      >
        <div className="tab-preview-hero">
          <Icon size={46} />
          <div>
            <h3>{title}</h3>
            <p>{desc}</p>
            <button
              onClick={() =>
                onOpen("shortcut", {
                  title: `Criar exemplo de ${title}`,
                  desc,
                  color: "#11a8ff",
                  preview: {
                    id: "DEMO-2025",
                    status: "Demonstração",
                    campos: [
                      "Fluxo clicável",
                      "Dados fake",
                      "Integração futura com backend",
                    ],
                  },
                })
              }
            >
              <Plus size={16} /> Criar exemplo
            </button>
          </div>
        </div>
      </Panel>
      <Panel title="Exemplos clicáveis" className="span-2">
        <div className="tab-example-grid">
          {examples.map((ex) => {
            const ExIcon = ex.icon;
            return (
              <button
                key={ex.title}
                onClick={() =>
                  onOpen("shortcut", {
                    ...ex,
                    preview: {
                      id: "PREVIEW-OP",
                      status: "Exemplo clicável",
                      campos: [
                        "Detalhamento lateral",
                        "Ação simulada",
                        "Pronto para integrar com API",
                      ],
                    },
                  })
                }
              >
                <ExIcon style={{ color: ex.color }} />
                <strong>{ex.title}</strong>
                <p>{ex.desc}</p>
              </button>
            );
          })}
        </div>
      </Panel>
      <Panel title={`Tabela de ${title}`} className="span-2">
        <TicketTable />
      </Panel>
      <Panel title="Indicadores relacionados">
        <MiniPie />
      </Panel>
      <Panel title="Ações rápidas">
        <OperationShortcuts onOpen={(s: any) => onOpen("shortcut", s)} />
      </Panel>
    </div>
  );
}

function OperationDrawer({
  type,
  data,
  onClose,
}: {
  type: OperationPreviewKind;
  data: any;
  onClose: () => void;
}) {
  const [actionResult, setActionResult] = useState<string | null>(null);
  useEffect(() => setActionResult(null), [type, data]);

  if (!type || !data) return null;

  const runFakeAction = (message: string) => {
    setActionResult(message);
  };

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <motion.aside
        className="operation-drawer"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: 420, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
      >
        <div className="drawer-head">
          <div>
            <span>Preview funcional</span>
            <h3>{data.title || data.faixa || "Detalhe operacional"}</h3>
          </div>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        {actionResult && (
          <div className="action-result">
            <CheckCircle2 size={18} />
            <span>{actionResult}</span>
          </div>
        )}

        {type === "insight" && (
          <div className="drawer-content">
            <div
              className="confidence"
              style={{ "--accent": data.color } as React.CSSProperties}
            >
              <strong>{data.confianca}%</strong>
              <span>Confiança da IA</span>
            </div>
            <DrawerSection title="Causas identificadas" items={data.causa} />
            <DrawerSection title="Impacto previsto" items={data.impacto} />
            <DrawerSection title="Recomendações" items={data.recomendacoes} />
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction(
                  "Plano de ação criado como exemplo. Na versão final, ele pode abrir uma tarefa, workflow ou book executivo.",
                )
              }
            >
              <WandSparkles size={16} /> Gerar plano de ação
            </button>
          </div>
        )}

        {type === "shortcut" && (
          <div className="drawer-content">
            <p className="drawer-desc">{data.desc}</p>
            <div className="fake-form">
              <label>
                ID demonstrativo
                <input value={data.preview?.id || "DEMO-001"} readOnly />
              </label>
              <label>
                Status
                <input
                  value={data.preview?.status || "Em demonstração"}
                  readOnly
                />
              </label>
              <label>
                Descrição
                <textarea value={data.desc || "Ação demonstrativa"} readOnly />
              </label>
            </div>
            <DrawerSection
              title="Campos do exemplo"
              items={data.preview?.campos || ["Campo fake 1", "Campo fake 2"]}
            />
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction(
                  `${data.title || "Ação"} executada com sucesso no modo demonstração.`,
                )
              }
            >
              <CheckSquare size={16} /> Executar ação fake
            </button>
          </div>
        )}

        {type === "backlog" && (
          <div className="drawer-content">
            <div className="big-number">
              <strong>{data.total}</strong>
              <span>tickets em {data.faixa}</span>
            </div>
            <table className="mini-table">
              <thead>
                <tr>
                  <th>Ticket</th>
                  <th>Cliente</th>
                  <th>SLA</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                {fakeBacklogTickets.map((t) => (
                  <tr key={t[0]}>
                    <td>{t[0]}</td>
                    <td>{t[1]}</td>
                    <td>{t[3]}</td>
                    <td>{t[4]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction("Lista de backlog exportada como demonstração.")
              }
            >
              <FileDown size={16} /> Exportar lista
            </button>
          </div>
        )}

        {type === "center" && (
          <div className="drawer-content">
            <p className="drawer-desc">{data.desc}</p>
            {data.value && (
              <div className="big-number">
                <strong>{data.value}</strong>
                <span>{data.title}</span>
              </div>
            )}
            <DrawerSection
              title="Fluxo demonstrativo"
              items={data.steps || ["Monitorar", "Analisar", "Agir"]}
            />
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction(
                  "Fluxo continuado. Na versão final, isso pode navegar para Forecast, Books ou abrir uma automação.",
                )
              }
            >
              <ArrowRight size={16} /> Continuar fluxo
            </button>
          </div>
        )}

        {type === "timeline" && (
          <div className="drawer-content">
            <div className="big-number small">
              <strong>{data.time}</strong>
              <span>{data.title}</span>
            </div>
            <p className="drawer-desc">{data.desc}</p>
            <DrawerSection
              title="Próximas ações sugeridas"
              items={[
                "Validar responsável",
                "Atualizar status",
                "Notificar stakeholders",
              ]}
            />
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction("Evento atualizado na timeline demonstrativa.")
              }
            >
              <CheckSquare size={16} /> Atualizar evento
            </button>
          </div>
        )}

        {type === "assistant" && (
          <div className="drawer-content">
            <p className="drawer-desc">Pergunta: {data.question}</p>
            <div className="assistant-long-answer">
              <Bot />
              <p>
                O CyberOne identificou concentração de incidentes no Mercado
                Livre, com maior impacto em Infraestrutura e SAP. A recomendação
                é priorizar filas críticas e criar um plano de mitigação para os
                tickets acima de 16 dias.
              </p>
            </div>
            <button
              className="primary-action"
              onClick={() =>
                runFakeAction(
                  "Resumo executivo gerado como exemplo e pronto para virar página do Book.",
                )
              }
            >
              <FileText size={16} /> Transformar em resumo executivo
            </button>
          </div>
        )}
      </motion.aside>
    </div>
  );
}

function DrawerSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="drawer-section">
      <h4>{title}</h4>
      {items.map((item) => (
        <div key={item}>
          <CheckCircle2 size={15} />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function BacklogBars() {
  const data = [
    { f: "0 - 7 dias", v: 1245 },
    { f: "8 - 15 dias", v: 986 },
    { f: "16 - 30 dias", v: 673 },
    { f: "31 - 60 dias", v: 312 },
    { f: "+ 60 dias", v: 156 },
  ];
  return (
    <ResponsiveContainer width="100%" height={250}>
      <BarChart layout="vertical" data={data}>
        <XAxis type="number" stroke="#8ba5c0" />
        <YAxis dataKey="f" type="category" stroke="#8ba5c0" width={90} />
        <Tooltip />
        <Bar dataKey="v" fill="#11a8ff" radius={[0, 8, 8, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}

function ResourcePanels() {
  return (
    <div className="grid">
      <Panel className="span-2" title="Capacidade de Recursos">
        <ResponsiveContainer width="100%" height={320}>
          <BarChart data={forecastData}>
            <CartesianGrid stroke="#19304a" />
            <XAxis dataKey="mes" stroke="#8ba5c0" />
            <YAxis stroke="#8ba5c0" />
            <Tooltip />
            <Bar dataKey="recursos" fill="#16e0bd" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </Panel>
      <Panel title="Aderência">
        <Drivers />
      </Panel>
      <Insights title="Recomendação" />
      <Panel title="Times críticos" className="span-2">
        <TeamCards />
      </Panel>
    </div>
  );
}

function ProjectPanels() {
  return (
    <div className="grid">
      <Panel className="span-2" title="Impacto de Projetos Estratégicos">
        <Drivers />
      </Panel>
      <Panel title="Volume por Projeto" className="span-2">
        <CategoryTable />
      </Panel>
      <Panel title="Risco por Mês">
        <RiskRings />
      </Panel>
      <Panel title="Roadmap">
        <Roadmap />
      </Panel>
    </div>
  );
}

function TeamCards() {
  return (
    <div className="card-grid">
      {[
        "N1 Service Desk",
        "N2 Infraestrutura",
        "Sistemas ERP",
        "Cloud & Network",
      ].map((t, i) => (
        <div className="mini-card" key={t}>
          <Users style={{ color: colors[i] }} />
          <strong>{t}</strong>
          <p>Capacidade: {92 - i * 4}%</p>
          <Tag tone={i < 2 ? "yellow" : "green"}>
            {i < 2 ? "Atenção" : "Estável"}
          </Tag>
        </div>
      ))}
    </div>
  );
}

function Roadmap() {
  return (
    <div className="timeline">
      {[
        "Integração de Dados",
        "Motor Forecast",
        "Book Automático",
        "Agentes IA",
        "Governança Final",
      ].map((t, i) => (
        <div key={t}>
          <span>{i + 1}</span>
          <strong>{t}</strong>
          <p>{["Mai", "Jun", "Jul", "Ago", "Set"][i]}/2025</p>
        </div>
      ))}
    </div>
  );
}

function ActionGrid({ type = "default" }: { type?: string }) {
  const actions =
    type === "operation"
      ? [
          ["Novo Chamado", Plus],
          ["Registrar Incidente", AlertTriangle],
          ["Solicitar Mudança", GitBranch],
          ["Base de Conhecimento", BookMarked],
          ["Relatório Operacional", FileDown],
          ["Atualizar Dados", RefreshCw],
        ]
      : [
          ["Gerar Book", WandSparkles],
          ["Exportar PDF", FileDown],
          ["Enviar", Send],
          ["Automatizar", Bot],
          ["Configurar", SlidersHorizontal],
          ["Atualizar", RefreshCw],
        ];
  return (
    <div className="action-grid">
      {actions.map(([label, Icon]: any, i) => (
        <motion.button
          key={label}
          whileHover={{ y: -4 }}
          onClick={() =>
            demoNotify(
              `${label} acionado no modo demonstração. Na versão implantada, vira fluxo, modal ou chamada de API.`,
            )
          }
        >
          <Icon style={{ color: colors[i % colors.length] }} />
          <span>{label}</span>
        </motion.button>
      ))}
    </div>
  );
}

function BookShelf() {
  return (
    <div className="book-shelf">
      {books.map((book) => {
        const Icon = book.icon;
        return (
          <motion.button
            key={book.name}
            whileHover={{ y: -8, rotateY: -8 }}
            onClick={() =>
              demoNotify(
                `Book aberto: ${book.name}. Na implantação, isso abre o editor/leitor do book selecionado.`,
              )
            }
            className="book-item book-item-clickable"
            style={{ borderColor: book.color }}
          >
            <div className="spine" style={{ background: book.color }}></div>
            <Icon size={26} style={{ color: book.color }} />
            <strong>{book.name}</strong>
            <p>{book.owner}</p>
            <span>{book.pages} páginas</span>
            <em>{book.status}</em>
          </motion.button>
        );
      })}
    </div>
  );
}

function BooksPage() {
  const [tab, setTab] = useState("executive");
  const [bookPage, setBookPage] = useState(0);
  const [openRight, setOpenRight] = useState(true);
  const [mode, setMode] = useState("leitura");
  const current = bookPages[bookPage];
  const next = () => setBookPage((p) => Math.min(p + 1, bookPages.length - 1));
  const prev = () => setBookPage((p) => Math.max(p - 1, 0));

  const tabs = [
    ["executive", "Executive Reports", BookMarked],
    ["board", "Board Reports", Presentation],
    ["strategic", "Strategic Reviews", Target],
    ["ai", "AI Books", BrainCircuit],
  ];

  return (
    <>
      <Header
        title="Executive Books"
        subtitle="Book ANS demonstrativo com dados fake, storytelling executivo e visual premium"
      />
      <main className="content books-page premium-books-page">
        <div className="books-top premium-books-top">
          <div className="tabs mini premium-tabs">
            {tabs.map(([key, label, Icon]: any) => (
              <button
                key={key}
                onClick={() => setTab(key)}
                className={tab === key ? "selected" : ""}
              >
                <Icon size={17} />
                {label}
              </button>
            ))}
          </div>
          <div className="book-actions premium-book-actions">
            <button
              onClick={() => {
                setTab("executive");
                setBookPage(0);
                setMode("leitura");
              }}
            >
              <Sparkles size={17} />
              Abrir Book ANS
            </button>
            <button
              onClick={() => {
                setTab("ai");
                setBookPage(1);
                setMode("edicao");
              }}
            >
              <WandSparkles size={17} />
              Gerar com IA
            </button>
            <button onClick={() => setBookPage(10)}>
              <Route size={17} />
              Roadmap 90 dias
            </button>
            <button onClick={() => setOpenRight(!openRight)}>
              <PanelRightOpen size={17} />
              Páginas
            </button>
          </div>
        </div>

        {tab === "executive" && (
          <>
            <section className="premium-book-hero">
              <div className="hero-copy">
                <span className="eyebrow">
                  ANS · Agência Nacional de Saúde Suplementar
                </span>
                <h1>Cyber Security Executive Review</h1>
                <p>
                  Um book demonstrativo mais qualitativo que quantitativo: menos
                  tabela, mais narrativa, decisão, valor entregue e próximos
                  passos.
                </p>
                <div className="hero-actions-row">
                  <button onClick={() => setBookPage(1)}>
                    <Eye size={17} />
                    Ver briefing
                  </button>
                  <button onClick={() => setBookPage(2)}>
                    <ShieldCheck size={17} />
                    Valor Stefanini
                  </button>
                  <button onClick={() => setBookPage(11)}>
                    <Presentation size={17} />
                    Resumo Board
                  </button>
                </div>
              </div>
              <div className="hero-orbit">
                <div className="score-orb">
                  <strong>89</strong>
                  <span>Cyber Health</span>
                </div>
                <div className="orbit-card one">
                  <CheckCircle2 />0 críticos confirmados
                </div>
                <div className="orbit-card two">
                  <Radar />
                  18 use cases evoluídos
                </div>
                <div className="orbit-card three">
                  <Target />7 riscos priorizados
                </div>
              </div>
            </section>

            <div className="premium-summary-grid">
              <button onClick={() => setBookPage(2)}>
                <ShieldCheck />
                <strong>Valor entregue</strong>
                <span>
                  42 análises, 7 recomendações, 18 use cases e 96% de cobertura
                  simulada.
                </span>
              </button>
              <button onClick={() => setBookPage(5)}>
                <Globe2 />
                <strong>Threat landscape</strong>
                <span>
                  Cenário fake de ameaças, vetores e tendências para explicar
                  contexto ao cliente.
                </span>
              </button>
              <button onClick={() => setBookPage(7)}>
                <Network />
                <strong>MITRE heatmap</strong>
                <span>
                  Cobertura por tática, gaps e evolução visual estilo ferramenta
                  enterprise.
                </span>
              </button>
              <button onClick={() => setBookPage(10)}>
                <Route />
                <strong>Roadmap executivo</strong>
                <span>
                  Plano 30/60/90 dias com ações, dono e impacto esperado.
                </span>
              </button>
            </div>

            <div className="book-workspace premium-book-workspace">
              <section className="book-reader premium-reader">
                <div className="reader-head premium-reader-head">
                  <div>
                    <strong>ANS · Executive Cyber Review</strong>
                    <span>
                      Book demonstrativo · Dados fake · Visual executivo ·{" "}
                      {bookPages.length} slides
                    </span>
                  </div>
                  <div className="reader-tools">
                    <button
                      onClick={() => setMode("leitura")}
                      className={mode === "leitura" ? "on" : ""}
                    >
                      <Eye size={16} />
                      Leitura
                    </button>
                    <button
                      onClick={() => setMode("edicao")}
                      className={mode === "edicao" ? "on" : ""}
                    >
                      <Pencil size={16} />
                      Edição IA
                    </button>
                    <button
                      onClick={() =>
                        demoNotify(
                          "Exportação PDF simulada: no produto final gera arquivo executivo com capa, slides e anexos.",
                        )
                      }
                    >
                      <FileDown size={16} />
                      PDF
                    </button>
                    <button
                      onClick={() =>
                        demoNotify(
                          "Exportação PowerPoint simulada: no produto final gera deck editável para apresentação.",
                        )
                      }
                    >
                      <Presentation size={16} />
                      PPT
                    </button>
                  </div>
                </div>
                <div className="reader-body premium-reader-body">
                  <button className="page-nav left" onClick={prev}>
                    <ArrowLeft />
                  </button>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={bookPage + mode}
                      initial={{ opacity: 0, y: 28, scale: 0.985 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -18, scale: 0.985 }}
                      transition={{ duration: 0.28 }}
                      className="premium-slide-frame"
                    >
                      <div className="premium-slide-watermark">
                        CYBERONE · STEFANINI
                      </div>
                      <div className="premium-slide-topline">
                        <span>
                          {String(bookPage + 1).padStart(2, "0")} /{" "}
                          {bookPages.length}
                        </span>
                        <em>ANS · Abril/2026 · Dados demonstrativos</em>
                      </div>
                      <h2>{current.title}</h2>
                      <h4>{current.subtitle}</h4>
                      {renderBookContent(current, mode)}
                    </motion.div>
                  </AnimatePresence>
                  <button className="page-nav right" onClick={next}>
                    <ArrowRight />
                  </button>
                </div>
                <div className="reader-footer premium-reader-footer">
                  <input
                    type="range"
                    min="0"
                    max={bookPages.length - 1}
                    value={bookPage}
                    onChange={(e) => setBookPage(Number(e.target.value))}
                  />
                  <span>
                    {bookPage + 1} / {bookPages.length}
                  </span>
                </div>
              </section>
              {openRight && (
                <aside className="book-sidebar premium-book-sidebar">
                  <div className="side-title">
                    <h3>Slides do Book</h3>
                    <span>{bookPages.length} slides</span>
                  </div>
                  <div className="page-list premium-page-list">
                    {bookPages.map((p, i) => (
                      <button
                        key={p.title}
                        onClick={() => setBookPage(i)}
                        className={bookPage === i ? "current" : ""}
                      >
                        <div className="thumb"></div>
                        <strong>{String(i + 1).padStart(2, "0")}</strong>
                        <span>{p.title}</span>
                      </button>
                    ))}
                  </div>
                  <div className="export-panel">
                    <h4>Exportações</h4>
                    <button
                      onClick={() =>
                        demoNotify("PDF Executivo gerado em modo demonstração.")
                      }
                    >
                      <FileDown size={17} />
                      PDF Executivo
                    </button>
                    <button
                      onClick={() =>
                        demoNotify(
                          "PowerPoint Premium gerado em modo demonstração.",
                        )
                      }
                    >
                      <Presentation size={17} />
                      PowerPoint Premium
                    </button>
                    <button
                      onClick={() =>
                        demoNotify(
                          "Link seguro fake criado para compartilhamento com cliente.",
                        )
                      }
                    >
                      <LinkIcon size={17} />
                      Link seguro para cliente
                    </button>
                  </div>
                </aside>
              )}
            </div>
          </>
        )}

        {tab === "board" && (
          <div className="library-grid premium-template-grid">
            {[
              "Board Summary ANS",
              "Comitê Executivo",
              "QBR Segurança",
              "Resumo CEO",
            ].map((t, i) => (
              <Panel
                key={t}
                title={t}
                subtitle="Modelo executivo com linguagem de diretoria"
              >
                <div className="library-card">
                  <Presentation size={42} style={{ color: colors[i] }} />
                  <p>
                    Modelo fake para apresentar status, riscos, decisões
                    necessárias e próximos passos em até 5 minutos.
                  </p>
                  <div>
                    <button
                      onClick={() => {
                        setTab("executive");
                        setBookPage(11);
                      }}
                    >
                      <Eye size={15} />
                      Abrir
                    </button>
                    <button
                      onClick={() => demoNotify(`Modelo duplicado: ${t}`)}
                    >
                      <Copy size={15} />
                      Duplicar
                    </button>
                  </div>
                </div>
              </Panel>
            ))}
          </div>
        )}
        {tab === "strategic" && (
          <div className="library-grid premium-template-grid">
            {[
              "Cyber Health Review",
              "Threat Landscape",
              "MITRE Evolution",
              "Risk Intelligence",
              "Roadmap 90 dias",
              "Business Impact",
            ].map((t, i) => (
              <div className="template-card" key={t}>
                <Target
                  size={36}
                  style={{ color: colors[i % colors.length] }}
                />
                <h3>{t}</h3>
                <p>
                  Slide estratégico com dados fake, narrativa executiva e visual
                  premium.
                </p>
                <button
                  onClick={() => {
                    setTab("executive");
                    setBookPage(Math.min(i + 3, bookPages.length - 1));
                  }}
                >
                  <Plus size={16} />
                  Usar modelo
                </button>
              </div>
            ))}
          </div>
        )}
        {tab === "ai" && (
          <div className="ai-book-builder">
            <Panel
              title="Gerador de Book Executivo"
              subtitle="Demonstração de fluxo com IA usando dados fake"
            >
              <div className="ai-builder-grid">
                <div>
                  <label>Cliente</label>
                  <input value="ANS" readOnly />
                </div>
                <div>
                  <label>Período</label>
                  <input value="Abril/2026" readOnly />
                </div>
                <div>
                  <label>Tom</label>
                  <input value="Executivo, consultivo e premium" readOnly />
                </div>
                <div>
                  <label>Fonte</label>
                  <input value="SOC + GVUL + Threat Intel + MITRE" readOnly />
                </div>
              </div>
              <button
                className="primary-action"
                onClick={() => {
                  setTab("executive");
                  setBookPage(0);
                }}
              >
                <WandSparkles size={17} />
                Gerar prévia do Book dos sonhos
              </button>
            </Panel>
            <Panel title="Prompts executivos" subtitle="Exemplos palpáveis">
              <DrawerSection
                title="Narrativas geradas"
                items={[
                  "Traduzir métricas técnicas em impacto de negócio",
                  "Criar resumo para diretoria sem expor dados sensíveis",
                  "Priorizar riscos por impacto e urgência",
                  "Montar próximos passos 30/60/90 dias",
                ]}
              />
            </Panel>
          </div>
        )}
      </main>
    </>
  );
}

function renderBookContent(current: any, mode: string) {
  const stefaniniKpis = [
    ["42", "análises especializadas", "Triagem, correlação e investigação"],
    ["18", "casos de uso evoluídos", "Cobertura e detecção ampliadas"],
    ["7", "recomendações estratégicas", "Ações priorizadas por impacto"],
    ["96%", "cobertura operacional", "Visibilidade fake do ambiente"],
  ];
  const journey = [
    ["JAN", "Mapeamento", "Inventário de serviços, fontes e riscos iniciais"],
    ["FEV", "Cobertura", "Novos controles e melhoria de visibilidade"],
    ["MAR", "Inteligência", "Correlação de alertas e casos de uso"],
    ["ABR", "Maturidade", "Resumo executivo, riscos e roadmap"],
  ];
  const socSteps = [
    "Detectado",
    "Investigado",
    "Correlacionado",
    "Recomendado",
    "Acompanhado",
  ];
  const mitre = [
    "Recon",
    "Resource Dev",
    "Initial Access",
    "Execution",
    "Persistence",
    "Privilege",
    "Defense Evasion",
    "Credential",
    "Discovery",
    "Lateral",
    "Collection",
    "C2",
    "Exfiltration",
    "Impact",
  ];
  const riskItems = [
    [
      "TLS legado",
      "Alto",
      "Desabilitar protocolos fracos e reforçar baseline criptográfico",
    ],
    [
      "Patching crítico",
      "Alto",
      "Priorizar ativos expostos e criar cadência semanal",
    ],
    [
      "Exposição externa",
      "Médio",
      "Revisar superfície pública e owners de ativos",
    ],
    ["Certificados", "Médio", "Padronizar emissão, renovação e revogação"],
  ];
  return (
    <>
      {current.type === "executive-cover" && (
        <div className="slide-cover-premium">
          <div>
            <span>STEFANINI CYBER</span>
            <h1>ANS Executive Cyber Review</h1>
            <p>{current.content}</p>
            <div className="cover-badges">
              <Tag tone="green">Ambiente estável</Tag>
              <Tag tone="yellow">Riscos priorizados</Tag>
              <Tag>Dados fake</Tag>
            </div>
          </div>
          <div className="cover-score">
            <strong>89</strong>
            <span>Cyber Health</span>
          </div>
        </div>
      )}
      {current.type === "briefing" && (
        <div className="briefing-layout">
          <div className="briefing-main">
            <Sparkles />
            <h3>Mensagem executiva</h3>
            <p>{current.content}</p>
          </div>
          <div className="briefing-cards">
            <div className="green">
              <CheckCircle2 />O que melhorou
              <span>
                Mais cobertura, melhor leitura executiva e riscos organizados.
              </span>
            </div>
            <div className="yellow">
              <AlertTriangle />O que preocupa
              <span>
                Exposição externa, certificados e patching seguem como pontos de
                atenção.
              </span>
            </div>
            <div className="blue">
              <Target />
              Decisão necessária
              <span>Patrocinar roadmap 30/60/90 dias e priorizar owners.</span>
            </div>
          </div>
        </div>
      )}
      {current.type === "value" && (
        <div className="value-delivered">
          <div className="value-title">
            <ShieldCheck />
            <h3>Stefanini Value Delivered</h3>
            <p>Evidências demonstrativas do trabalho realizado para a ANS.</p>
          </div>
          <div className="value-kpis">
            {stefaniniKpis.map(([n, l, d]) => (
              <div key={l}>
                <strong>{n}</strong>
                <span>{l}</span>
                <small>{d}</small>
              </div>
            ))}
          </div>
          <div className="delivery-funnel">
            {["Monitorar", "Triar", "Investigar", "Recomendar", "Evoluir"].map(
              (x, i) => (
                <div key={x}>
                  <b>{i + 1}</b>
                  <span>{x}</span>
                </div>
              ),
            )}
          </div>
        </div>
      )}
      {current.type === "health" && (
        <div className="health-layout">
          <div className="health-score">
            <strong>89</strong>
            <span>POSTURA FORTE</span>
            <p>
              Score demonstrativo consolidando operação, resposta, exposição e
              evolução.
            </p>
          </div>
          <div className="health-bars">
            {[
              ["Monitoramento", 96],
              ["Resposta", 91],
              ["Exposição", 74],
              ["Vulnerabilidades", 82],
              ["Governança", 88],
            ].map(([label, val]: any) => (
              <div key={label}>
                <span>
                  {label}
                  <b>{val}%</b>
                </span>
                <div>
                  <i style={{ width: `${val}%` }}></i>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
      {current.type === "journey" && (
        <div className="journey-timeline">
          {journey.map(([m, t, d]) => (
            <div key={m}>
              <strong>{m}</strong>
              <h3>{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      )}
      {current.type === "threat" && (
        <div className="threat-layout">
          <div className="world-card">
            <Globe2 size={82} />
            <span className="ping p1"></span>
            <span className="ping p2"></span>
            <span className="ping p3"></span>
            <strong>Threat Landscape</strong>
            <p>
              Mapa fake para contextualizar ameaças sem expor informação real.
            </p>
          </div>
          <div className="threat-list">
            {[
              "Credenciais expostas em fontes abertas",
              "Campanhas de phishing setorial",
              "Tentativas de exploração em borda",
              "Risco de superfície externa",
            ].map((x, i) => (
              <div key={x}>
                <Tag tone={i < 2 ? "yellow" : "red"}>
                  {i < 2 ? "Tendência" : "Atenção"}
                </Tag>
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {current.type === "soc-story" && (
        <div className="soc-story">
          <div className="case-card">
            <Flame />
            <h3>Caso demonstrativo</h3>
            <p>
              Tentativa suspeita em serviço exposto foi detectada,
              correlacionada com fontes de inteligência e encaminhada com
              recomendação preventiva.
            </p>
          </div>
          <div className="soc-steps">
            {socSteps.map((x, i) => (
              <div key={x}>
                <b>{i + 1}</b>
                <span>{x}</span>
                {i < socSteps.length - 1 && <ArrowRight size={22} />}
              </div>
            ))}
          </div>
        </div>
      )}
      {current.type === "mitre-heatmap" && (
        <div className="mitre-premium">
          <div className="mitre-summary">
            <strong>88%</strong>
            <span>Cobertura MITRE demonstrativa</span>
            <p>
              Visão executiva por tática, com destaque para gaps e evolução.
            </p>
          </div>
          <div className="mitre-grid">
            {mitre.map((x, i) => (
              <div
                key={x}
                className={i % 5 === 0 ? "gap" : i % 3 === 0 ? "mid" : "ok"}
              >
                <span>{x}</span>
              </div>
            ))}
          </div>
        </div>
      )}
      {current.type === "risks-premium" && (
        <div className="risk-intel">
          {riskItems.map(([r, sev, rec], i) => (
            <div key={r}>
              <div>
                <AlertTriangle />
                <strong>{r}</strong>
                <Tag tone={sev === "Alto" ? "red" : "yellow"}>{sev}</Tag>
              </div>
              <p>{rec}</p>
              <small>
                Dono sugerido:{" "}
                {["Infra", "SOC", "Arquitetura", "Governança"][i]}
              </small>
            </div>
          ))}
        </div>
      )}
      {current.type === "business" && (
        <div className="business-impact">
          <div>
            <h3>Sem atuação estruturada</h3>
            {[
              "Maior superfície exposta",
              "Risco de indisponibilidade",
              "Menor rastreabilidade executiva",
            ].map((x) => (
              <p key={x}>
                <X size={16} />
                {x}
              </p>
            ))}
          </div>
          <div>
            <h3>Com Stefanini</h3>
            {[
              "Riscos priorizados",
              "Visibilidade executiva",
              "Plano de evolução contínua",
            ].map((x) => (
              <p key={x}>
                <CheckCircle2 size={16} />
                {x}
              </p>
            ))}
          </div>
          <div className="impact-statement">
            <BriefcaseBusiness />
            <strong>Impacto de negócio</strong>
            <span>
              Mais clareza para decisão, maior resiliência e melhor governança
              de segurança.
            </span>
          </div>
        </div>
      )}
      {current.type === "roadmap-premium" && (
        <div className="roadmap-premium">
          {[
            ["30 dias", "Hardening TLS e certificados", "Reduzir risco rápido"],
            ["60 dias", "Expansão MITRE e tuning SOC", "Aumentar cobertura"],
            [
              "90 dias",
              "Automação de book e board report",
              "Escalar governança",
            ],
          ].map(([d, t, i]) => (
            <div key={d}>
              <strong>{d}</strong>
              <h3>{t}</h3>
              <p>{i}</p>
              <button
                onClick={() =>
                  demoNotify(`Abrindo ações do roadmap: ${d} · ${t}`)
                }
              >
                Ver ações
              </button>
            </div>
          ))}
        </div>
      )}
      {current.type === "board" && (
        <div className="board-summary">
          <div className="board-head">
            <Presentation />
            <h3>Board Summary</h3>
            <p>Resumo fake para diretoria ler em menos de 1 minuto.</p>
          </div>
          <div className="board-grid">
            <div>
              <b>Melhorou</b>
              <span>Cobertura, narrativa executiva e priorização.</span>
            </div>
            <div>
              <b>Atenção</b>
              <span>Patching, TLS legado e exposição externa.</span>
            </div>
            <div>
              <b>Decisão</b>
              <span>Validar roadmap 90 dias e owners.</span>
            </div>
            <div>
              <b>Próximo passo</b>
              <span>Gerar versão final mensal e enviar ao comitê.</span>
            </div>
          </div>
        </div>
      )}
      {mode === "edicao" && (
        <div className="edit-box premium-edit-box">
          <Pencil size={16} />
          <span>
            Modo edição IA: narrativa, riscos, próximos passos e ordem dos
            slides ficam editáveis antes da exportação.
          </span>
        </div>
      )}
    </>
  );
}

type DashboardPreviewType =
  | "kpi"
  | "insight"
  | "shortcut"
  | "book"
  | "forecast"
  | null;

const dashboardInsights = [
  {
    title: "SLA global em evolução",
    desc: "SLA atual de 92,8% com ganho de 4,3 p.p. no mês.",
    color: "#20e074",
    impacto: [
      "Maior estabilidade operacional",
      "Menor risco de penalidade",
      "Melhor percepção executiva",
    ],
    recomendacoes: [
      "Manter reforço em filas críticas",
      "Monitorar quedas em julho",
      "Gerar resumo para diretoria",
    ],
  },
  {
    title: "Backlog exige atenção",
    desc: "3.247 itens acumulados com concentração em Infraestrutura.",
    color: "#f6c84c",
    impacto: [
      "Possível aumento de MTTR",
      "Pressão no N2",
      "Risco de SLA em 30 dias",
    ],
    recomendacoes: [
      "Priorizar tickets acima de 16 dias",
      "Redistribuir analistas",
      "Acionar Forecast",
    ],
  },
  {
    title: "Forecast indica aumento",
    desc: "Volume previsto sobe 15,3% nos próximos 30 dias.",
    color: "#11a8ff",
    impacto: [
      "Demanda maior para triagem",
      "Capacidade próxima do limite",
      "Necessidade de automação",
    ],
    recomendacoes: [
      "Simular reforço",
      "Gerar plano de capacidade",
      "Criar Book executivo",
    ],
  },
  {
    title: "Oportunidade de automação",
    desc: "IA pode reduzir 18% do volume manual de triagem.",
    color: "#16e0bd",
    impacto: [
      "Redução de esforço operacional",
      "Aceleração de atendimento",
      "Padronização de análise",
    ],
    recomendacoes: [
      "Ativar agente de triagem",
      "Criar workflow automático",
      "Medir ganho semanal",
    ],
  },
];

const dashboardShortcuts = [
  {
    title: "Abrir Operação",
    icon: Activity,
    color: "#11a8ff",
    desc: "Leva para a análise operacional detalhada.",
  },
  {
    title: "Abrir Forecast",
    icon: TrendingUp,
    color: "#16e0bd",
    desc: "Visualiza tendências, backlog e simulações.",
  },
  {
    title: "Gerar Book",
    icon: BookOpen,
    color: "#f6c84c",
    desc: "Simula criação de um relatório executivo.",
  },
  {
    title: "Ver Alertas",
    icon: AlertTriangle,
    color: "#ff4d5e",
    desc: "Mostra riscos críticos e planos de ação.",
  },
  {
    title: "Executar IA",
    icon: BrainCircuit,
    color: "#8957ff",
    desc: "Gera recomendações automáticas.",
  },
  {
    title: "Exportar Painel",
    icon: FileDown,
    color: "#20e074",
    desc: "Exporta PDF, PPT ou Excel.",
  },
];

function DashboardPage({
  setPage,
  setOperationTab,
}: {
  setPage: (p: Page) => void;
  setOperationTab: (t: OperationTab) => void;
}) {
  const [previewType, setPreviewType] = useState<DashboardPreviewType>(null);
  const [previewData, setPreviewData] = useState<any>(null);
  const [executed, setExecuted] = useState(false);

  const openPreview = (type: DashboardPreviewType, data: any) => {
    setExecuted(false);
    setPreviewType(type);
    setPreviewData(data);
  };

  const goTo = (page: Page, tab?: OperationTab) => {
    if (tab) setOperationTab(tab);
    setPage(page);
  };

  const handleShortcut = (shortcut: any) => {
    const routes: Record<string, () => void> = {
      "Abrir Operação": () => goTo("operacao", "visao"),
      "Abrir Forecast": () => goTo("forecast"),
      "Ver Alertas": () => goTo("alertas"),
      "Gerar Book": () => goTo("books"),
      "Executar IA": () => goTo("sai"),
    };
    if (routes[shortcut.title]) routes[shortcut.title]();
    else openPreview("shortcut", shortcut);
  };

  const kpis = [
    {
      label: "Total de Chamados",
      value: "24.752",
      trend: "+12,5%",
      icon: FileText,
      color: "#11a8ff",
      detail:
        "Chamados consolidados no mês, cruzando abertura, resolução e backlog.",
    },
    {
      label: "Resolvidos",
      value: "18.794",
      trend: "+14,7%",
      icon: CheckCircle2,
      color: "#20e074",
      detail:
        "Volume resolvido acima do período anterior, com melhoria no throughput.",
    },
    {
      label: "MTTR Médio",
      value: "5h 32m",
      trend: "-6,2%",
      icon: Clock3,
      color: "#8957ff",
      detail:
        "Tempo médio de resolução caiu, indicando operação mais eficiente.",
    },
    {
      label: "SLA Global",
      value: "92,8%",
      trend: "+4,3 p.p.",
      icon: ShieldCheck,
      color: "#16e0bd",
      detail:
        "SLA global acima da meta, mas com risco previsto para os próximos meses.",
    },
  ];

  return (
    <>
      <Header
        title="Dashboard Executivo"
        subtitle="Visão geral estratégica, indicadores de performance e previews clicáveis"
      />
      <main className="content dashboard-page">
        <div className="dashboard-hero">
          <div>
            <span>Preview executivo</span>
            <h2>Painel central do CyberOne</h2>
            <p>
              Esta tela demonstra como a diretoria pode clicar em indicadores,
              abrir análises, acionar IA, gerar Books e navegar para Operação ou
              Forecast.
            </p>
          </div>
          <button
            onClick={() =>
              openPreview("book", {
                title: "Gerar Book Executivo",
                desc: "Fluxo demonstrativo para criar um Book a partir do Dashboard.",
                steps: [
                  "Coletando KPIs executivos",
                  "Consolidando operação e forecast",
                  "Gerando insights IA",
                  "Montando páginas do Book",
                  "Book pronto para exportar",
                ],
              })
            }
          >
            <BookOpen size={18} /> Gerar Book Executivo
          </button>
        </div>

        <div className="kpi-grid dashboard-kpis">
          {kpis.map((item) => {
            const Icon = item.icon;
            return (
              <motion.button
                key={item.label}
                className="kpi kpi-clickable"
                whileHover={{ y: -4 }}
                onClick={() => openPreview("kpi", item)}
              >
                <div className="kpi-head">
                  <div
                    className="kpi-icon"
                    style={{
                      color: item.color,
                      boxShadow: `0 0 28px ${item.color}55`,
                    }}
                  >
                    <Icon />
                  </div>
                  <div>
                    <p>{item.label}</p>
                    <h3>{item.value}</h3>
                    <span className="good">{item.trend}</span>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={48}>
                  <LineChart data={forecastData}>
                    <Line
                      dataKey="previsto"
                      stroke={item.color}
                      strokeWidth={2}
                      dot={false}
                    />
                  </LineChart>
                </ResponsiveContainer>
                <small>
                  <MousePointerClick size={13} /> abrir detalhe
                </small>
              </motion.button>
            );
          })}
        </div>

        <div className="grid">
          <Panel
            title="Evolução Executiva"
            subtitle="Clique no botão para abrir análise"
          >
            <ResponsiveContainer width="100%" height={300}>
              <ComposedChart data={forecastData}>
                <CartesianGrid stroke="#19304a" />
                <XAxis dataKey="mes" stroke="#8ba5c0" />
                <YAxis stroke="#8ba5c0" />
                <Tooltip />
                <Area
                  dataKey="previsto"
                  stroke="#11a8ff"
                  fill="#11a8ff22"
                  strokeWidth={3}
                />
                <Line dataKey="sla" stroke="#20e074" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
            <button
              className="panel-action"
              onClick={() =>
                openPreview("forecast", {
                  title: "Análise Executiva de Tendência",
                  desc: "A tendência cruza volume previsto, SLA e risco operacional.",
                  steps: [
                    "Volume previsto +15,3%",
                    "SLA pode cair em julho",
                    "Backlog precisa de ação preventiva",
                  ],
                })
              }
            >
              <TrendingUp size={16} /> Abrir análise de tendência
            </button>
          </Panel>

          <Panel
            title="Indicadores relacionados"
            subtitle="Gráfico corrigido sem corte"
          >
            <MiniPie />
          </Panel>

          <Panel
            title="Clientes em atenção"
            subtitle="Demonstrativo clicável por cliente"
          >
            <div className="dashboard-demo-list">
              {[
                [
                  "Mercado Livre",
                  38,
                  "Backlog e SLA concentrados em Infraestrutura",
                ],
                ["Cliente Financeiro", 26, "Incidentes de aplicação e acessos"],
                ["Cliente Varejo", 18, "Volume sazonal acima do previsto"],
                [
                  "Cliente Logística",
                  12,
                  "Mudanças programadas impactando fila",
                ],
              ].map(([cliente, risco, desc]: any) => (
                <button
                  key={cliente}
                  onClick={() =>
                    openPreview("insight", {
                      title: cliente,
                      desc,
                      impacto: [
                        `Risco operacional: ${risco}%`,
                        desc,
                        "Necessita acompanhamento executivo",
                      ],
                      recomendacoes: [
                        "Abrir detalhe por cliente",
                        "Priorizar ofensores",
                        "Gerar plano de ação",
                      ],
                    })
                  }
                >
                  <Building2 />
                  <div>
                    <strong>{cliente}</strong>
                    <span>{desc}</span>
                  </div>
                  <b>{risco}%</b>
                </button>
              ))}
            </div>
          </Panel>

          <Panel
            title="Problemas por severidade"
            subtitle="Clique para entender o que está acontecendo"
          >
            <div className="severity-stack">
              {[
                ["Críticos", 12, "#ff4d5e", "problemas"],
                ["Médios", 31, "#f6c84c", "incidentes"],
                ["Baixos", 84, "#20e074", "chamados"],
              ].map(([label, qtd, color, tab]: any) => (
                <button
                  key={label}
                  onClick={() => goTo("operacao", tab)}
                  style={{ "--accent": color } as React.CSSProperties}
                >
                  <span>{label}</span>
                  <strong>{qtd}</strong>
                  <em>abrir operação</em>
                </button>
              ))}
            </div>
          </Panel>

          <Panel
            title="Capacidade e fila"
            subtitle="Mais demonstrativo executivo"
          >
            <ResponsiveContainer width="100%" height={270}>
              <BarChart
                data={forecastData}
                margin={{ top: 8, right: 14, bottom: 8, left: -14 }}
              >
                <CartesianGrid stroke="#19304a" />
                <XAxis dataKey="mes" stroke="#8ba5c0" />
                <YAxis stroke="#8ba5c0" />
                <Tooltip />
                <Bar dataKey="backlog" fill="#f6c84c" radius={[8, 8, 0, 0]} />
                <Bar
                  dataKey="capacidade"
                  fill="#11a8ff"
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
            <button
              className="panel-action"
              onClick={() =>
                openPreview("forecast", {
                  title: "Capacidade vs Backlog",
                  desc: "Demonstra se a capacidade suporta a fila prevista.",
                  steps: [
                    "Backlog cresce até Ago/25",
                    "Capacidade cresce pouco",
                    "Recomendação: simular reforço",
                  ],
                })
              }
            >
              <Gauge size={16} /> Abrir simulação de capacidade
            </button>
          </Panel>

          <DashboardInsights
            onOpen={(item: any) => openPreview("insight", item)}
          />

          <Panel
            title="Books Recentes"
            className="span-2"
            subtitle="Clique para simular abertura ou geração"
          >
            <BookShelf />
            <button
              className="panel-action"
              onClick={() =>
                openPreview("book", {
                  title: "Resumo Executivo Maio/2025",
                  desc: "Book pronto com indicadores, forecast, riscos e recomendações.",
                  steps: [
                    "12 páginas geradas",
                    "Inclui Forecast e Operação",
                    "Exportação PDF/PPT disponível",
                  ],
                })
              }
            >
              <BookOpen size={16} /> Abrir preview do Book
            </button>
          </Panel>

          <Panel
            title="Atalhos Executivos"
            subtitle="Ações fake clicáveis do dashboard"
          >
            <div className="dashboard-shortcuts">
              {dashboardShortcuts.map((shortcut) => {
                const Icon = shortcut.icon;
                return (
                  <motion.button
                    key={shortcut.title}
                    whileHover={{ y: -4 }}
                    onClick={() => handleShortcut(shortcut)}
                    style={
                      { "--accent": shortcut.color } as React.CSSProperties
                    }
                  >
                    <Icon />
                    <strong>{shortcut.title}</strong>
                    <span>{shortcut.desc}</span>
                  </motion.button>
                );
              })}
            </div>
          </Panel>

          <Panel
            title="Alertas Executivos"
            subtitle="Riscos priorizados para liderança"
          >
            <div className="dashboard-alerts">
              {[
                "SLA em risco para Jul/25",
                "Backlog crescendo em Infraestrutura",
                "Capacidade N2 próxima do limite",
                "Forecast exige reforço",
              ].map((a, i) => (
                <button
                  key={a}
                  onClick={() => openPreview("insight", dashboardInsights[i])}
                >
                  <AlertTriangle
                    style={{ color: i === 0 ? "#ff4d5e" : "#f6c84c" }}
                  />
                  <span>{a}</span>
                  <Tag tone={i === 0 ? "red" : "yellow"}>
                    {i === 0 ? "Alta" : "Média"}
                  </Tag>
                </button>
              ))}
            </div>
          </Panel>

          <Panel title="Fluxo CyberOne" subtitle="Operação → Forecast → Books">
            <div className="flow-preview">
              {[
                ["Operação", Activity, "Dados em tempo real"],
                ["Forecast", TrendingUp, "Previsão e simulação"],
                ["Books", BookOpen, "Relatório executivo"],
              ].map(([title, Icon, desc]: any, i) => (
                <button
                  key={title}
                  onClick={() => {
                    if (title === "Operação") goTo("operacao", "visao");
                    else if (title === "Forecast") goTo("forecast");
                    else if (title === "Books") goTo("books");
                    else
                      openPreview("shortcut", {
                        title,
                        icon: Icon,
                        color: colors[i],
                        desc,
                        steps: [
                          "Abrir módulo",
                          "Visualizar indicadores",
                          "Executar ação",
                        ],
                      });
                  }}
                >
                  <Icon style={{ color: colors[i] }} />
                  <strong>{title}</strong>
                  <span>{desc}</span>
                </button>
              ))}
            </div>
          </Panel>
        </div>

        <DashboardDrawer
          type={previewType}
          data={previewData}
          executed={executed}
          onExecute={() => setExecuted(true)}
          onClose={() => {
            setPreviewType(null);
            setPreviewData(null);
            setExecuted(false);
          }}
        />
      </main>
    </>
  );
}

function DashboardInsights({ onOpen }: { onOpen: (data: any) => void }) {
  return (
    <Panel title="Insights Executivos" subtitle="Clique para abrir a análise">
      <div className="dashboard-insights">
        {dashboardInsights.map((item) => (
          <motion.button
            key={item.title}
            whileHover={{ x: 4 }}
            onClick={() => onOpen(item)}
            style={{ "--accent": item.color } as React.CSSProperties}
          >
            <Sparkles />
            <div>
              <strong>{item.title}</strong>
              <p>{item.desc}</p>
            </div>
            <ExternalLink size={16} />
          </motion.button>
        ))}
      </div>
    </Panel>
  );
}

function DashboardDrawer({ type, data, executed, onExecute, onClose }: any) {
  if (!type || !data) return null;

  return (
    <div className="drawer-backdrop" onClick={onClose}>
      <motion.aside
        className="operation-drawer dashboard-drawer"
        onClick={(e) => e.stopPropagation()}
        initial={{ x: 420, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 420, opacity: 0 }}
      >
        <div className="drawer-head">
          <div>
            <span>Preview dashboard</span>
            <h3>{data.title || data.label}</h3>
          </div>
          <button onClick={onClose}>
            <X size={18} />
          </button>
        </div>

        <div className="drawer-content">
          {type === "kpi" && (
            <>
              <div className="big-number">
                <strong style={{ color: data.color }}>{data.value}</strong>
                <span>
                  {data.label} · {data.trend}
                </span>
              </div>
              <p className="drawer-desc">{data.detail}</p>
              <DrawerSection
                title="O que este clique poderia abrir"
                items={[
                  "Drilldown por cliente",
                  "Comparativo mensal",
                  "Impacto no Forecast",
                  "Recomendações IA",
                ]}
              />
            </>
          )}

          {type === "insight" && (
            <>
              <p className="drawer-desc">{data.desc}</p>
              <DrawerSection title="Impacto executivo" items={data.impacto} />
              <DrawerSection title="Recomendações" items={data.recomendacoes} />
            </>
          )}

          {(type === "shortcut" || type === "forecast" || type === "book") && (
            <>
              <p className="drawer-desc">{data.desc}</p>
              <DrawerSection
                title="Fluxo demonstrativo"
                items={
                  data.steps || [
                    "Abrir módulo",
                    "Carregar indicadores",
                    "Exibir preview lateral",
                  ]
                }
              />
            </>
          )}

          {executed && (
            <div className="success-box">
              <CheckCircle2 />
              <div>
                <strong>Ação executada com sucesso</strong>
                <p>
                  Este é um retorno fake para demonstrar como o CyberOne
                  responderia ao clique.
                </p>
              </div>
            </div>
          )}

          <button className="primary-action" onClick={onExecute}>
            <CheckSquare size={16} /> Executar ação fake
          </button>
        </div>
      </motion.aside>
    </div>
  );
}

function SaiPage() {
  const agents = [
    ["Agente de Triagem", Bot, "Classifica chamados, prioriza criticidade e sugere fila de atendimento."],
    ["Agente de Forecast", TrendingUp, "Projeta volume, backlog, capacidade e risco operacional."],
    ["Agente de Book", BookOpen, "Monta narrativa executiva com indicadores e recomendações."],
    ["Agente de Risco", Radar, "Detecta anomalias, dependências críticas e pontos de atenção."],
    ["Agente de SLA", Timer, "Monitora vencimentos e sugere ações preventivas."],
    ["Agente de Governança", ShieldCheck, "Conecta evidências, compliance e trilhas de auditoria."],
  ];
  return (
    <ModulePage
      title="SAI - Agentes IA"
      subtitle="Agentes autônomos para análise, decisão e automação"
      icon={BrainCircuit}
      custom={
        <>
          <Panel className="span-2" title="Agentes Ativos" subtitle="Clique em qualquer agente para abrir a demonstração operacional">
            <div className="agent-grid">
              {agents.map(([name, Icon, desc]: any, i) => (
                <motion.button
                  whileHover={{ y: -5 }}
                  className="agent-card clickable-card"
                  key={name}
                  onClick={() => openDemoDetail({
                    title: name,
                    subtitle: "SAI - Sistema de Agentes Inteligentes",
                    kind: "agent",
                    status: "Ativo",
                    metric: `Confiança ${[94, 91, 88, 86, 93, 89][i]}%`,
                    description: desc,
                    steps: ["Receber evento ou solicitação", "Consultar contexto operacional", "Correlacionar indicadores", "Gerar recomendação", "Acompanhar execução"],
                    actions: ["Executar análise agora", "Ver recomendações", "Conectar ao Forecast/Book"],
                  })}
                >
                  <Icon style={{ color: colors[i] }} />
                  <strong>{name}</strong>
                  <Tag tone="green">Ativo</Tag>
                  <p>{desc}</p>
                  <span className="card-cta">Abrir demonstração</span>
                </motion.button>
              ))}
            </div>
          </Panel>
          <Panel title="Anomalias Detectadas">
            <Insights title="Alertas IA" />
          </Panel>
          <Panel title="Fluxo de Decisão">
            <Roadmap />
          </Panel>
        </>
      }
    />
  );
}

function GovernancePage() {
  return (
    <ModulePage
      title="Governança"
      subtitle="Compliance, políticas, riscos, auditoria e LGPD"
      icon={ShieldCheck}
      custom={
        <>
          <Panel title="Compliance Geral" className="span-2">
            <ComplianceGrid />
          </Panel>
          <Panel title="Auditorias Recentes">
            <AuditList />
          </Panel>
          <Panel title="Riscos de Governança">
            <RiskRings />
          </Panel>
        </>
      }
    />
  );
}
function AnalyticsPage() {
  return (
    <ModulePage
      title="Analytics"
      subtitle="Análises avançadas, drilldowns, cruzamentos e indicadores estratégicos"
      icon={BarChart3}
      custom={
        <>
          <Panel title="Análise Multivariável" className="span-2">
            <ResponsiveContainer width="100%" height={320}>
              <ComposedChart data={forecastData}>
                <CartesianGrid stroke="#19304a" />
                <XAxis dataKey="mes" stroke="#8ba5c0" />
                <YAxis stroke="#8ba5c0" />
                <Tooltip />
                <Bar dataKey="incidentes" fill="#ff4d5e" />
                <Line dataKey="sla" stroke="#20e074" strokeWidth={3} />
                <Line dataKey="risco" stroke="#f6c84c" strokeWidth={3} />
              </ComposedChart>
            </ResponsiveContainer>
          </Panel>
          <Panel title="Cruzamentos">
            <Drivers />
          </Panel>
          <Panel title="Insights">
            <Insights />
          </Panel>
        </>
      }
    />
  );
}
function ExecutivePage() {
  return (
    <ModulePage
      title="Executive"
      subtitle="Resumo para diretoria, decisões estratégicas e visão C-level"
      icon={PieChart}
      custom={
        <>
          <Panel title="Resumo Executivo" className="span-2">
            <ExecutiveSummary />
          </Panel>
          <Panel title="Decisões Sugeridas">
            <DecisionList />
          </Panel>
          <Panel title="OKRs e Metas">
            <OKRList />
          </Panel>
        </>
      }
    />
  );
}
function AlertsPage() {
  return (
    <ModulePage
      title="Alertas"
      subtitle="Central de riscos, notificações e ocorrências críticas"
      icon={AlertTriangle}
      custom={
        <>
          <Panel title="Alertas Críticos" className="span-2">
            <AlertList />
          </Panel>
          <Panel title="Risco por Mês">
            <RiskRings />
          </Panel>
          <Panel title="Ações de Mitigação">
            <ActionGrid />
          </Panel>
        </>
      }
    />
  );
}
function ProjectsPage() {
  return (
    <ModulePage
      title="Projetos"
      subtitle="Status de iniciativas, roadmap, demandas estratégicas e impacto"
      icon={BriefcaseBusiness}
      custom={
        <>
          <Panel title="Portfólio de Projetos" className="span-2">
            <ProjectGrid />
          </Panel>
          <Panel title="Roadmap Estratégico">
            <Roadmap />
          </Panel>
          <Panel title="Impacto no Forecast">
            <Drivers />
          </Panel>
        </>
      }
    />
  );
}
function AdminPage() {
  return (
    <ModulePage
      title="Administração"
      subtitle="Usuários, permissões, integrações, ambientes e logs"
      icon={UserCog}
      custom={
        <>
          <Panel title="Usuários e Permissões" className="span-2">
            <UserGrid />
          </Panel>
          <Panel title="Integrações">
            <IntegrationList />
          </Panel>
          <Panel title="Logs do Sistema">
            <AuditList />
          </Panel>
        </>
      }
    />
  );
}
function ConfigPage() {
  return (
    <ModulePage
      title="Configurações"
      subtitle="Personalização, segurança, tema, notificações e preferências"
      icon={Settings}
      custom={
        <>
          <Panel title="Preferências do Sistema" className="span-2">
            <SettingsGrid />
          </Panel>
          <Panel title="Segurança">
            <SecurityGrid />
          </Panel>
          <Panel title="Notificações">
            <NotificationList />
          </Panel>
        </>
      }
    />
  );
}

function ModulePage({ title, subtitle, icon: Icon, custom }: any) {
  const [tab, setTab] = useState<GenericTab>("visao");
  const tabs: [GenericTab, string, any][] = [
    ["visao", "Visão Geral", Eye],
    ["indicadores", "Indicadores", BarChart3],
    ["automacoes", "Automações", Bot],
    ["riscos", "Riscos", AlertTriangle],
    ["relatorios", "Relatórios", FileDown],
  ];
  return (
    <>
      <Header title={title} subtitle={subtitle} />
      <main className="content">
        <div className="tabs">
          {tabs.map(([key, label, TIcon]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={tab === key ? "selected" : ""}
            >
              <TIcon size={16} />
              {label}
            </button>
          ))}
        </div>
        <div className="kpi-grid">
          <Kpi
            icon={<Icon />}
            label="Status"
            value="Ativo"
            trend="Monitorado em tempo real"
          />
          <Kpi
            icon={<Shield />}
            label="Confiabilidade"
            value="98,2%"
            trend="+2,1%"
            color="#20e074"
          />
          <Kpi
            icon={<Zap />}
            label="Automações"
            value="16"
            trend="+4 este mês"
            color="#f6c84c"
          />
          <Kpi
            icon={<Bot />}
            label="IA Aplicada"
            value="Alta"
            trend="Insights ativos"
            color="#8957ff"
          />
        </div>
        {tab === "visao" && (
          <div className="grid">
            <Panel title={`${title} - Performance`} className="span-2">
              <ForecastLine mode="volume" />
            </Panel>
            <Panel title="Distribuição">
              <MiniPie />
            </Panel>
            {custom}
          </div>
        )}
        {tab === "indicadores" && (
          <div className="grid">
            <Panel title="Indicadores Principais" className="span-2">
              <CategoryTable />
            </Panel>
            <Panel title="Tendência">
              <ForecastLine mode="sla" />
            </Panel>
            <Panel title="Distribuição">
              <MiniPie />
            </Panel>
          </div>
        )}
        {tab === "automacoes" && (
          <div className="grid">
            <Panel title="Automações Ativas" className="span-2">
              <AutomationCards />
            </Panel>
            <Panel title="Fluxos">
              <Roadmap />
            </Panel>
            <Panel title="Ações">
              <ActionGrid />
            </Panel>
          </div>
        )}
        {tab === "riscos" && (
          <div className="grid">
            <Panel title="Mapa de Riscos" className="span-2">
              <RiskRings />
            </Panel>
            <Insights title="Riscos Detectados" />
            <Panel title="Plano de Ação">
              <DecisionList />
            </Panel>
          </div>
        )}
        {tab === "relatorios" && (
          <div className="grid">
            <Panel title="Relatórios Disponíveis" className="span-2">
              <BookShelf />
            </Panel>
            <Panel title="Exportações">
              <ExportActions />
            </Panel>
            <Panel title="Agendamentos">
              <AutomationCards />
            </Panel>
          </div>
        )}
      </main>
    </>
  );
}

function ComplianceGrid() {
  return (
    <div className="card-grid">
      {[
        "LGPD",
        "Políticas Internas",
        "Auditoria",
        "Acessos",
        "Mudanças",
        "SLA",
      ].map((x, i) => (
        <div className="mini-card" key={x}>
          <BadgeCheck style={{ color: colors[i] }} />
          <strong>{x}</strong>
          <p>{92 + i}% conformidade</p>
          <Tag tone={i < 4 ? "green" : "yellow"}>
            {i < 4 ? "OK" : "Atenção"}
          </Tag>
        </div>
      ))}
    </div>
  );
}
function AuditList() {
  return (
    <div className="list">
      {[
        "Revisão de acessos finalizada",
        "Política de mudança atualizada",
        "Log de integração validado",
        "Auditoria de SLA concluída",
      ].map((x, i) => (
        <div key={x}>
          <ClipboardCheck style={{ color: colors[i] }} />
          <span>{x}</span>
          <Tag tone="green">Concluído</Tag>
        </div>
      ))}
    </div>
  );
}
function ExecutiveSummary() {
  return (
    <div className="executive-box">
      <h2>Operação em evolução, com atenção ao backlog</h2>
      <p>
        O ambiente mantém performance positiva, mas o forecast indica aumento de
        volume e risco de pressão operacional em agosto. A recomendação é
        combinar reforço de equipe com otimização de processos.
      </p>
      <div>
        <Tag tone="green">SLA 92,8%</Tag>
        <Tag tone="yellow">Backlog +22,8%</Tag>
        <Tag tone="red">Risco Ago/25</Tag>
      </div>
    </div>
  );
}
function DecisionList() {
  return (
    <div className="list">
      {[
        "Reforçar equipe N2 em 15%",
        "Automatizar triagem de chamados",
        "Priorizar infraestrutura crítica",
        "Criar book executivo mensal",
      ].map((x, i) => (
        <div key={x}>
          <CheckCircle2 style={{ color: colors[i] }} />
          <span>{x}</span>
          <Tag tone={i < 2 ? "red" : "yellow"}>{i < 2 ? "Alta" : "Média"}</Tag>
        </div>
      ))}
    </div>
  );
}
function OKRList() {
  return (
    <div className="list">
      {[
        "SLA acima de 92%",
        "Reduzir backlog em 20%",
        "Diminuir MTTR para 5h",
        "Automatizar 30% dos reports",
      ].map((x, i) => (
        <div key={x}>
          <Target style={{ color: colors[i] }} />
          <span>{x}</span>
          <b>{[92, 68, 75, 54][i]}%</b>
        </div>
      ))}
    </div>
  );
}
function AlertList() {
  return (
    <div className="list">
      {[
        "Risco de estouro de SLA",
        "Backlog acima do esperado",
        "Capacidade próxima do limite",
        "Anomalia no volume de chamados",
        "Projeto crítico atrasado",
      ].map((x, i) => (
        <div key={x}>
          <AlertTriangle style={{ color: i < 2 ? "#ff4d5e" : "#f6c84c" }} />
          <span>{x}</span>
          <Tag tone={i < 2 ? "red" : "yellow"}>{i < 2 ? "Alta" : "Média"}</Tag>
        </div>
      ))}
    </div>
  );
}
function ProjectGrid() {
  const progress = [72, 64, 48, 85, 39, 58];
  const owners = [
    "PMO + Operação",
    "SAI Factory",
    "Cloud Team",
    "Executive Office",
    "Dados",
    "Governança",
  ];
  return (
    <div className="card-grid">
      {[
        "Modernização ERP",
        "Automação SAI",
        "Migração Cloud",
        "Portal Executivo",
        "Data Lake",
        "Governança Dados",
      ].map((x, i) => (
        <motion.button
          whileHover={{ y: -4 }}
          className="mini-card clickable-card"
          key={x}
          onClick={() =>
            openDemoDetail({
              title: x,
              subtitle: owners[i],
              kind: "project",
              status: i === 2 || i === 4 ? "Atenção" : "No prazo",
              metric: `${progress[i]}% concluído`,
              description:
                "Tela demonstrativa de projeto com cronograma, responsáveis, riscos, dependências, impacto no forecast e próximos marcos.",
              steps: [
                "Revisar objetivo e escopo",
                "Validar responsáveis",
                "Checar riscos e impedimentos",
                "Atualizar progresso",
                "Publicar status no board executivo",
              ],
              actions: [
                "Abrir cronograma",
                "Criar demanda relacionada",
                "Enviar status para Executive",
              ],
            })
          }
        >
          <BriefcaseBusiness style={{ color: colors[i] }} />
          <strong>{x}</strong>
          <p>Progresso: {progress[i]}%</p>
          <p className="mini-meta">Responsável: {owners[i]}</p>
          <Tag tone={i === 2 || i === 4 ? "yellow" : "green"}>
            {i === 2 || i === 4 ? "Atenção" : "No prazo"}
          </Tag>
        </motion.button>
      ))}
    </div>
  );
}
function UserGrid() {
  return (
    <div className="card-grid">
      {[
        "Admin",
        "Gestor",
        "Analista N1",
        "Analista N2",
        "Diretoria",
        "Auditoria",
      ].map((x, i) => (
        <div className="mini-card" key={x}>
          <UserCog style={{ color: colors[i] }} />
          <strong>{x}</strong>
          <p>{[3, 12, 48, 21, 7, 4][i]} usuários</p>
          <Tag tone="green">Ativo</Tag>
        </div>
      ))}
    </div>
  );
}
function IntegrationList() {
  return (
    <div className="list">
      {[
        "PostgreSQL conectado",
        "AWS Bedrock ativo",
        "API FastAPI online",
        "Exportador PDF disponível",
        "Microsoft 365 integrado",
      ].map((x, i) => (
        <div key={x}>
          <Plug style={{ color: colors[i] }} />
          <span>{x}</span>
          <Tag tone="green">Online</Tag>
        </div>
      ))}
    </div>
  );
}
function SettingsGrid() {
  return (
    <div className="card-grid">
      {[
        "Tema Dark Premium",
        "Idioma Português",
        "Modo Executivo",
        "Animações",
        "Densidade Compacta",
        "Auto Refresh",
      ].map((x, i) => (
        <div className="mini-card" key={x}>
          <Settings style={{ color: colors[i] }} />
          <strong>{x}</strong>
          <p>Configuração ativa</p>
          <Tag tone="green">Ativo</Tag>
        </div>
      ))}
    </div>
  );
}
function SecurityGrid() {
  return (
    <div className="card-grid">
      {["SSO", "MFA", "Logs", "Perfis", "Criptografia", "Sessões"].map(
        (x, i) => (
          <div className="mini-card" key={x}>
            <Lock style={{ color: colors[i] }} />
            <strong>{x}</strong>
            <p>Segurança habilitada</p>
            <Tag tone="green">Seguro</Tag>
          </div>
        ),
      )}
    </div>
  );
}
function NotificationList() {
  return (
    <div className="list">
      {[
        "Alertas críticos por e-mail",
        "Resumo diário no Teams",
        "Notificação de SLA",
        "Book mensal automático",
      ].map((x, i) => (
        <div key={x}>
          <Bell style={{ color: colors[i] }} />
          <span>{x}</span>
          <Tag tone="green">Ativo</Tag>
        </div>
      ))}
    </div>
  );
}
function AutomationCards() {
  return (
    <div className="card-grid">
      {[
        "Atualizar Forecast",
        "Gerar Book Mensal",
        "Enviar Alertas",
        "Sincronizar Base",
        "Recalcular SLA",
        "Criar Snapshot",
      ].map((x, i) => (
        <motion.button
          whileHover={{ y: -4 }}
          className="mini-card clickable-card"
          key={x}
          onClick={() =>
            openDemoDetail({
              title: x,
              subtitle: "Orquestração automática",
              kind: "automation",
              status: i < 4 ? "Ativo" : "Pendente",
              metric: i < 4 ? "Online" : "Aguardando aprovação",
              description:
                "Demonstração de automação com gatilho, frequência, última execução, logs e ação manual.",
              steps: [
                "Validar gatilho",
                "Buscar dados fake",
                "Executar regra de negócio",
                "Salvar evidência",
                "Notificar responsáveis",
              ],
              actions: ["Executar agora", "Editar agendamento", "Ver logs"],
            })
          }
        >
          <Bot style={{ color: colors[i] }} />
          <strong>{x}</strong>
          <p>Execução automática</p>
          <Tag tone={i < 4 ? "green" : "yellow"}>
            {i < 4 ? "Ativo" : "Pendente"}
          </Tag>
        </motion.button>
      ))}
    </div>
  );
}

function DetailDrawer({
  detail,
  onClose,
}: {
  detail: DemoDetail | null;
  onClose: () => void;
}) {
  if (!detail) return null;
  const steps = detail.steps || [
    "Abrir registro",
    "Validar dados",
    "Executar ação",
    "Registrar evidência",
  ];
  const actions = detail.actions || [
    "Continuar fluxo",
    "Gerar evidência",
    "Salvar no histórico",
  ];
  return (
    <AnimatePresence>
      <motion.div
        className="drawer-backdrop"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.aside
          className="operation-drawer real-demo-drawer"
          initial={{ x: 460 }}
          animate={{ x: 0 }}
          exit={{ x: 460 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="drawer-head">
            <div>
              <span>{detail.subtitle || "Demonstração funcional"}</span>
              <h3>{detail.title}</h3>
            </div>
            <button onClick={onClose}>
              <X size={20} />
            </button>
          </div>
          <div className="drawer-content">
            <div className="detail-status-row">
              <div>
                <small>Status</small>
                <strong>{detail.status || "Ativo"}</strong>
              </div>
              <div>
                <small>Métrica</small>
                <strong>{detail.metric || "Online"}</strong>
              </div>
            </div>
            <p className="drawer-desc">
              {detail.description ||
                "Este painel agora abre uma demonstração real do fluxo, em vez de apenas exibir uma mensagem verde."}
            </p>
            <div className="drawer-section">
              <h4>Fluxo demonstrativo</h4>
              {steps.map((s, i) => (
                <div key={s}>
                  <CheckCircle2 />
                  <span>
                    <b>{String(i + 1).padStart(2, "0")}</b> · {s}
                  </span>
                </div>
              ))}
            </div>
            <div className="drawer-section">
              <h4>Ações disponíveis</h4>
              {actions.map((a, i) => (
                <button
                  className="drawer-action-btn"
                  key={a}
                  onClick={() =>
                    openDemoDetail({
                      title: a,
                      subtitle: "Ação encadeada",
                      kind: "generic",
                      status: "Executada",
                      metric: "Registrado",
                      description: `${a} foi acionado dentro do fluxo demonstrativo de ${detail.title}.`,
                      steps: [
                        "Validar permissão",
                        "Processar ação",
                        "Atualizar painel",
                        "Registrar evento",
                      ],
                      actions: [
                        "Voltar ao módulo",
                        "Gerar relatório",
                        "Notificar responsável",
                      ],
                    })
                  }
                >
                  <ArrowRight size={16} />
                  {a}
                </button>
              ))}
            </div>
            <div className="fake-form">
              <label>
                Observação executiva
                <textarea
                  defaultValue={`Registro demonstrativo vinculado a ${detail.title}. Na implantação, este campo será persistido no banco de dados e ligado ao usuário logado.`}
                />
              </label>
            </div>
          </div>
        </motion.aside>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  const [page, setPage] = useState<Page>("dashboard");
  const [operationTab, setOperationTab] = useState<OperationTab>("visao");
  const [toast, setToast] = useState("");
  const [detail, setDetail] = useState<DemoDetail | null>(null);

  useEffect(() => {
    const handler = (event: Event) => {
      const detail =
        (event as CustomEvent<string>).detail ||
        "Ação executada no modo demonstração.";
      setToast(detail);
      window.setTimeout(() => setToast(""), 3600);
    };
    const detailHandler = (event: Event) => {
      setDetail((event as CustomEvent<DemoDetail>).detail);
    };
    window.addEventListener("cyberone-demo-action", handler);
    window.addEventListener("cyberone-open-detail", detailHandler);
    return () => {
      window.removeEventListener("cyberone-demo-action", handler);
      window.removeEventListener("cyberone-open-detail", detailHandler);
    };
  }, []);

  const screens: Record<Page, React.ReactNode> = {
    dashboard: (
      <DashboardPage setPage={setPage} setOperationTab={setOperationTab} />
    ),
    operacao: <OperationPage tab={operationTab} setTab={setOperationTab} />,
    forecast: <ForecastPage />,
    books: <BooksPage />,
    sai: <SaiPage />,
    governanca: <GovernancePage />,
    analytics: <AnalyticsPage />,
    executive: <ExecutivePage />,
    alertas: <AlertsPage />,
    projetos: <ProjectsPage />,
    administracao: <AdminPage />,
    configuracoes: <ConfigPage />,
  };
  return (
    <div className="app">
      <Sidebar
        page={page}
        setPage={setPage}
        operationTab={operationTab}
        setOperationTab={setOperationTab}
      />
      <div className="main">{screens[page]}</div>
      <DetailDrawer detail={detail} onClose={() => setDetail(null)} />
      {toast && (
        <div className="demo-toast soft-toast">
          <CheckCircle2 size={18} />
          <span>{toast}</span>
        </div>
      )}
    </div>
  );
}

createRoot(document.getElementById("root")!).render(<App />);
