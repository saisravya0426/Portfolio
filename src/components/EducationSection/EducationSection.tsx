import { motion } from "framer-motion";
import { GraduationCap, Award, Trophy } from "lucide-react";
import { SkillCategory } from "./SkillCategory";

const updateGlow=(e:React.MouseEvent<HTMLDivElement>)=>{const el=e.currentTarget,r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;el.style.setProperty("--mouse-x",`${x}px`);el.style.setProperty("--mouse-y",`${y}px`);el.style.setProperty("--rotate-x",`${((y/r.height)-.5)*-4}deg`);el.style.setProperty("--rotate-y",`${((x/r.width)-.5)*4}deg`)};
const resetGlow=(e:React.MouseEvent<HTMLDivElement>)=>{e.currentTarget.style.setProperty("--rotate-x","0deg");e.currentTarget.style.setProperty("--rotate-y","0deg")};

export const EducationSection=()=> <section id="education" className="max-w-7xl mx-auto px-6 py-24">
  <div className="grid grid-cols-1 lg:grid-cols-[.9fr_1.1fr] gap-16">
    <div>
      <motion.div initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}}>
        <span className="text-primary text-xs font-bold tracking-widest uppercase">Education & Achievements</span>
        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-8">Learning by <span className="text-gradient-primary">building.</span></h2>
        <div onMouseMove={updateGlow} onMouseLeave={resetGlow} className="premium-hover-card education-main-card glass-panel p-7 rounded-3xl border border-foreground/10 mb-5">
          <div className="flex gap-4"><GraduationCap className="w-7 h-7 text-primary shrink-0"/>
            <div><h3 className="font-bold text-xl">Indian Institute of Information Technology, Agartala</h3><p className="text-primary text-sm mt-1">B.Tech — Computer Science & Engineering</p><p className="text-muted-foreground text-sm mt-2">Aug 2023 – May 2027 • CGPA: 8.75</p></div>
          </div>
        </div>
        <div className="grid sm:grid-cols-2 gap-4">
          <div onMouseMove={updateGlow} onMouseLeave={resetGlow} className="premium-hover-card glass-panel p-5 rounded-2xl border border-foreground/10 achievement-mini-card"><Trophy className="text-primary w-6 h-6 mb-3"/><b>Amazon ML Summer School</b><p className="text-xs text-muted-foreground mt-2">Selected 2025</p></div>
          <div onMouseMove={updateGlow} onMouseLeave={resetGlow} className="premium-hover-card glass-panel p-5 rounded-2xl border border-foreground/10 achievement-mini-card"><Award className="text-primary w-6 h-6 mb-3"/><b>NSTL-DRDO Internship</b><p className="text-xs text-muted-foreground mt-2">Physics-Informed Neural Networks</p></div>
        </div>
      </motion.div>
    </div>
    <SkillCategory/>
  </div>
</section>;