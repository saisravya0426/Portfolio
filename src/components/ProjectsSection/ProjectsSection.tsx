import React from "react";
import { motion } from "framer-motion";
import { Github,  HardDrive, BookOpen, ArrowUpRight } from "lucide-react";

const DRDO_DRIVE = "https://drive.google.com/file/d/1hZZ8K73cURH93r3K8PSY_nyo3O5qGusP/view?usp=sharing";
const PINN_COLAB = "https://colab.research.google.com/drive/1RF4LUA4RiGdsGexGpIbiJ6rh4cN5bT4?usp=sharing";
const GITHUB = "https://github.com/saisravya0426";

const projects = [
  {
    title: "Physics-Informed Neural Network",
    subtitle: "NSTL-DRDO • Scientific ML research",
    description: "Developed a 5,403-parameter PINN for incompressible Navier–Stokes flow around a cylinder at Re = 5, using automatic differentiation to enforce continuity, momentum, no-slip, free-stream and pressure-reference constraints.",
    outcome: "2,000 LHS collocation + 4,300 boundary points • Adam → L-BFGS • reported loss 1.7 × 10⁻³",
    tech: ["Python", "TensorFlow", "PINN", "Automatic Differentiation"],
    links: [
      { href: DRDO_DRIVE, label: "Research Report", icon: HardDrive },
      { href: PINN_COLAB, label: "Colab", icon: BookOpen },
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
    accent: "drdo",
  },
  {
    title: "Stock Price Prediction using LSTM",
    subtitle: "Deep learning • Time-series forecasting",
    description: "Built a 2-layer LSTM with 32K+ parameters from 4,529 AAPL records, nine engineered features and 60-day sequences. The model was trained for 50 epochs and evaluated on 1,336 test sequences.",
    outcome: "RMSE 31.28 • MAE 25.12 • MAPE 17.84 • directional accuracy 51.76%",
    tech: ["Python", "TensorFlow/Keras", "Pandas", "LSTM"],
    links: [{ href: "https://github.com/saisravya0426/Stock-Price-Prediction", label: "GitHub", icon: Github }],
    image: "https://images.unsplash.com/photo-1560707303-4e980ce876ad?auto=format&fit=crop&w=1200&q=80",
    accent: "ml",
  },
  {
    title: "Secure Multi-Client Chat Application",
    subtitle: "C++ • Networking • Concurrent systems",
    description: "Engineered a client-server chat application using TCP sockets and OpenSSL/TLS for encrypted private and group messaging. Dedicated threads and mutexes coordinate concurrent clients and shared state.",
    outcome: "Graph-based friend recommendations + file-backed social graph and user persistence",
    tech: ["C++", "TCP/IP", "OpenSSL/TLS", "Multithreading"],
    links: [{ href: "https://github.com/saisravya0426/Chat-based-app", label: "GitHub", icon: Github }],
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    accent: "systems",
  },
];

const updateGlow = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  el.style.setProperty("--mouse-x", `${x}px`);
  el.style.setProperty("--mouse-y", `${y}px`);
  el.style.setProperty("--rotate-x", `${((y / r.height) - .5) * -4}deg`);
  el.style.setProperty("--rotate-y", `${((x / r.width) - .5) * 4}deg`);
};
const resetGlow = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty("--rotate-x", "0deg");
  e.currentTarget.style.setProperty("--rotate-y", "0deg");
};

export const ProjectsSection = () => (
  <section id="projects" className="w-full max-w-7xl mx-auto px-6 py-24">
    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-16">
      <span className="text-primary text-xs font-bold tracking-widest uppercase">Selected Work</span>
      <h2 className="text-4xl md:text-6xl font-bold tracking-tight mt-3">Projects that show <span className="text-gradient-primary">technical depth.</span></h2>
      <p className="text-muted-foreground max-w-3xl mt-5">Research, machine learning and systems work — with the implementation details and measurable outcomes visible instead of generic project claims.</p>
    </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
      {projects.map((project, i) => (
        <motion.div key={project.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * .06 }} viewport={{ once: true }} onMouseMove={updateGlow} onMouseLeave={resetGlow} className={`project-card group relative overflow-hidden rounded-[1.8rem] min-h-[470px] shadow-xl border border-foreground/10 project-${project.accent}`}>
          <img src={project.image} alt="" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#03050d] via-[#03050d]/92 to-[#03050d]/10" />
          <div className="absolute top-5 right-5 project-top-glow" />

          <div className="relative z-10 h-full min-h-[470px] p-7 flex flex-col justify-end">
            <div className="text-primary-foreground/65 text-xs font-bold tracking-wide uppercase mb-2">{project.subtitle}</div>
            <h3 className="text-white text-2xl font-extrabold mb-3">{project.title}</h3>
            <p className="text-white/75 text-sm leading-relaxed mb-4">{project.description}</p>
            <p className="text-white/90 text-xs font-semibold leading-relaxed mb-4">{project.outcome}</p>
            <div className="flex flex-wrap gap-2 mb-5">
              {project.tech.map(t => <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-white/10 text-white border border-white/15 backdrop-blur">{t}</span>)}
            </div>
            <div className="flex flex-wrap gap-2">
              {project.links.map(link => {
                const Icon = link.icon;
                return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="project-action"><Icon size={15} /> {link.label}</a>;
              })}
            </div>
          </div>
        </motion.div>
      ))}
    </div>

    <GitHubProjects />
  </section>
);

function GitHubProjects() {
  const [repos, setRepos] = React.useState<Array<{name:string;html_url:string;description:string|null;language:string|null;stargazers_count:number;forks_count:number;updated_at:string}>>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch("https://api.github.com/users/saisravya0426/repos?per_page=30&sort=updated")
      .then(r => r.ok ? r.json() : [])
      .then((data) => {
        const blocked = new Set(["Chat-based-app", "Stock-Price-Prediction"]);
        setRepos((Array.isArray(data) ? data : []).filter((r:any) => !r.fork && !blocked.has(r.name)).slice(0, 6));
      })
      .catch(() => setRepos([]))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="github-builds mt-24">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-5 mb-8">
        <div>
          <span className="text-primary text-xs font-bold tracking-widest uppercase">More from GitHub</span>
          <h3 className="text-3xl md:text-4xl font-extrabold mt-2">A living <span className="text-gradient-primary">project shelf.</span></h3>
          <p className="text-muted-foreground mt-3 max-w-2xl">Public repositories are pulled directly from her GitHub profile, so this section stays aligned with what she is actually building and updating.</p>
        </div>
        <a href={GITHUB} target="_blank" rel="noreferrer" className="github-profile-btn"><Github size={17}/> View all repositories <ArrowUpRight size={16}/></a>
      </div>

      {loading ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">{Array.from({length: 6}).map((_,i)=><div key={i} className="github-skeleton" />)}</div>
      ) : repos.length ? (
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
          {repos.map((repo, i) => (
            <motion.a key={repo.name} href={repo.html_url} target="_blank" rel="noreferrer" initial={{opacity:0,y:18}} whileInView={{opacity:1,y:0}} transition={{delay:i*.05}} viewport={{once:true}} className="github-repo-card">
              <div className="repo-card-top"><span className="repo-index">0{i+1}</span><Github size={18}/></div>
              <h4>{repo.name.replace(/[-_]/g," ")}</h4>
              <p>{repo.description || "Public project by Nambari Sai Sravya."}</p>
              <div className="repo-meta"><span className="repo-language"><i />{repo.language || "Code"}</span><span>★ {repo.stargazers_count}</span><span>⑂ {repo.forks_count}</span><ArrowUpRight className="repo-arrow" size={16}/></div>
            </motion.a>
          ))}
        </div>
      ) : (
        <a href={GITHUB} target="_blank" rel="noreferrer" className="github-empty">Explore the latest repositories on GitHub <ArrowUpRight size={17}/></a>
      )}
    </div>
  );
}
