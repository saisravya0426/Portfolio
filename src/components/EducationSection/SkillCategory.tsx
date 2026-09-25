import { motion, AnimatePresence } from "framer-motion";
import { Code2, Database, Brain, Network, Layers, GitBranch, Rocket, Terminal, Cpu } from "lucide-react";

const technicalSkills = [
  { name: "C++ & Systems Programming", level: 90, icon: Code2, color: "text-cyan-400" },
  { name: "Python & Machine Learning", level: 90, icon: Brain, color: "text-yellow-400" },
  { name: "Data Structures & Algorithms", level: 88, icon: Cpu, color: "text-emerald-400" },
  { name: "TensorFlow / Deep Learning", level: 86, icon: Layers, color: "text-orange-400" },
  { name: "TCP/IP & Socket Programming", level: 84, icon: Network, color: "text-sky-400" },
  { name: "SQL & Database Fundamentals", level: 82, icon: Database, color: "text-pink-400" },
];

const traits = [
  { name: "Research Mindset", icon: Brain },
  { name: "Systems Thinking", icon: Cpu },
  { name: "Problem Solving", icon: Rocket },
  { name: "Technical Writing", icon: Terminal },
  { name: "Collaborative Leadership", icon: GitBranch },
  { name: "Experiment → Measure → Improve", icon: Layers },
];

const updateGlow = (e: React.MouseEvent<HTMLDivElement>) => {
  const el = e.currentTarget, r = el.getBoundingClientRect();
  const x = e.clientX - r.left, y = e.clientY - r.top;
  el.style.setProperty("--mouse-x", `${x}px`);
  el.style.setProperty("--mouse-y", `${y}px`);
  el.style.setProperty("--rotate-x", `${((y / r.height) - .5) * -2}deg`);
  el.style.setProperty("--rotate-y", `${((x / r.width) - .5) * 2}deg`);
};
const resetGlow = (e: React.MouseEvent<HTMLDivElement>) => {
  e.currentTarget.style.setProperty("--rotate-x", "0deg");
  e.currentTarget.style.setProperty("--rotate-y", "0deg");
};

export function SkillCategory() {
  return (
    <motion.section id="skills" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary"><Code2 className="w-5 h-5" /></div>
        <div>
          <h3 className="text-2xl md:text-3xl font-extrabold">Technical Skills</h3>
          <p className="text-sm text-muted-foreground mt-1">Core strengths reflected in her coursework, research and projects.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6">
        <div onMouseMove={updateGlow} onMouseLeave={resetGlow} className="premium-hover-card glass-panel p-7 rounded-[2rem] border border-foreground/15">
          <div className="space-y-5">
            {technicalSkills.map((skill, i) => {
              const Icon = skill.icon;
              return (
                <div key={skill.name}>
                  <div className="flex justify-between items-center text-sm font-semibold mb-2">
                    <span className="flex items-center gap-2"><Icon className={`w-4 h-4 ${skill.color}`} />{skill.name}</span>
                    <span className="text-primary">{skill.level}%</span>
                  </div>
                  <div className="h-2.5 w-full bg-muted rounded-full overflow-hidden skill-track">
                    <motion.div
                      className="h-full rounded-full skill-gradient-bar"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1.15, delay: i * .08 }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div onMouseMove={updateGlow} onMouseLeave={resetGlow} className="premium-hover-card glass-panel p-7 rounded-[2rem] border border-foreground/15">
          <h4 className="text-xl font-bold mb-5">Engineering Traits</h4>
          <div className="flex flex-wrap gap-3">
            <AnimatePresence>
              {traits.map((t, i) => {
                const Icon = t.icon;
                return (
                  <motion.div key={t.name} initial={{ opacity: 0, scale: .8 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ delay: i * .06 }} viewport={{ once: true }} className="skill-trait px-4 py-2.5 rounded-2xl border border-primary/20 bg-primary/5 text-sm font-semibold flex items-center gap-2">
                    <Icon className="w-4 h-4 text-primary" />{t.name}
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
