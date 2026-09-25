import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { HardDrive, Trophy } from "lucide-react";

const DRDO_DRIVE = "https://drive.google.com/file/d/1hZZ8K73cURH93r3K8PSY_nyo3O5qGusP/view?usp=sharing";
const CERTIFICATE = "https://drive.google.com/file/d/1Ae9R4I9dE6gi2mLHNtED9-T5mcj3tzuu/view?usp=sharing";

const timeline = [
   {
    year: "Aug 2023 – May 2027",
    title: "B.Tech — Computer Science & Engineering",
    company: "Indian Institute of Information Technology, Agartala • CGPA 8.75",
    description: "Building depth across DSA, OOP, Operating Systems, Computer Networks and DBMS while applying those foundations through systems programming, networking and machine learning projects.",
    links: [],
  },
  {
    year: "Dec 2025 – Jan 2026",
    title: "Project Intern — NSTL-DRDO",
    company: "Naval Science and Technological Laboratory • Visakhapatnam",
    description: "Developed a Physics-Informed Neural Network with 5,403 trainable parameters for incompressible Navier–Stokes flow around a cylinder at Re = 5. Worked with 2,000 LHS collocation points and 4,300 boundary points, using automatic differentiation and Adam → L-BFGS optimization.",
    links: [{ href: DRDO_DRIVE, label: "Research Report", icon: HardDrive }],
  },
  {
    year: "2025",
    title: "Selected — Amazon ML Summer School",
    company: "Amazon • Competitive Selection",
    description: "Selected for Amazon ML Summer School 2025 through a competitive process, adding structured exposure to machine learning concepts, algorithms and practical problem solving.",
    links: [{ href: CERTIFICATE, label: "View Certificate", icon: Trophy }],
  },
  {
    year: "2026 – 2027",
    title: "Mess Committee Lead — Girls' Hostel",
    company: "NIT Agartala",
    description: "Leading the Girls' Hostel Mess Committee, taking responsibility for coordination, communication and day-to-day issue resolution with students and the relevant campus stakeholders.",
    links: [],
  },
 
];

const updateCardGlow=(e:React.MouseEvent<HTMLDivElement>)=>{const el=e.currentTarget,r=el.getBoundingClientRect(),x=e.clientX-r.left,y=e.clientY-r.top;el.style.setProperty("--mouse-x",`${x}px`);el.style.setProperty("--mouse-y",`${y}px`);el.style.setProperty("--rotate-x",`${((y/r.height)-.5)*-3}deg`);el.style.setProperty("--rotate-y",`${((x/r.width)-.5)*3}deg`)};
const resetCardGlow=(e:React.MouseEvent<HTMLDivElement>)=>{e.currentTarget.style.setProperty("--rotate-x","0deg");e.currentTarget.style.setProperty("--rotate-y","0deg")};

export const CareerTimeline=()=>{const ref=useRef<HTMLDivElement>(null);const {scrollYProgress}=useScroll({target:ref,offset:["start 75%","end 35%"]});const scaleY=useSpring(scrollYProgress,{stiffness:100,damping:30});return <section id="career" className="max-w-6xl mx-auto px-6 py-24"><motion.div initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="mb-16 text-center"><span className="text-primary text-xs font-bold tracking-widest uppercase">Experience • Leadership • Milestones</span><h2 className="text-4xl md:text-5xl font-bold mt-3">Where curiosity became <span className="text-gradient-primary">responsibility.</span></h2></motion.div><div ref={ref} className="journey-line relative">{timeline.map((item,i)=><motion.article key={item.title} initial={{opacity:0,y:40}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.35}} className={`journey-item ${i%2?"right":"left"}`}><div className="journey-dot"><span/></div><div onMouseMove={updateCardGlow} onMouseLeave={resetCardGlow} className="journey-card glass-panel p-7 rounded-3xl border border-foreground/10"><span className="text-primary font-bold text-sm">{item.year}</span><h3 className="text-xl md:text-2xl font-bold mt-2">{item.title}</h3><div className="text-primary/80 font-medium mt-1 mb-4">{item.company}</div><p className="text-muted-foreground leading-relaxed">{item.description}</p>{item.links.length>0&&<div className="mt-5 flex flex-wrap gap-2">{item.links.map(link=>{const Icon=link.icon;return <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="journey-link"><Icon size={15}/>{link.label}</a>})}</div>}</div></motion.article>)}<motion.div style={{scaleY,transformOrigin:"top"}} className="journey-progress"/></div></section>}
