import { motion } from "framer-motion";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import TechStackSection from "../TechStackSection/TechStackSection";
import { Button } from "../lightswind/button";
import { Badge } from "../lightswind/badge";
import { AuroraTextEffect } from "../lightswind/aurora-text-effect";
import { DotPattern } from "../lightswind/dot-pattern";

export const HeroSection=()=> <section id="hero" className="relative min-h-[100vh] flex flex-col pt-12 md:pt-16 overflow-hidden bg-background"><DotPattern width={16} height={16} cx={1} cy={1} cr={1} glow/>
<div className="absolute inset-0 pointer-events-none hero-ambient"/>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex-1 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 pb-8">
<motion.div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left" initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
<div className="mb-6"><Badge variant="outline" size="lg" className="gap-2.5 py-1.5 px-4 glass-panel border-emerald-400/30"><span className="relative flex h-2 w-2"><span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"/><span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"/></span><span className="text-xs font-medium text-muted-foreground">Open to software engineering opportunities</span></Badge></div>
<div className="mb-4"><p className="text-primary font-semibold tracking-[.22em] uppercase text-xs mb-3">Code • Learn • Build</p><h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">Hi, I'm</h1><div className="hidden dark:block"><AuroraTextEffect text="Nambari Sai Sravya" fontSize="clamp(3rem, 6.5vw, 5.5rem)" className="bg-transparent overflow-visible p-0 justify-start" textClassName="bg-gradient-to-r from-cyan-400 via-purple-400 to-sky-300 bg-clip-text text-transparent pb-2 font-extrabold"/></div><div className="block dark:hidden"><span className="bg-gradient-to-r from-violet-600 via-sky-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-[clamp(3rem,6.5vw,5.5rem)] leading-none tracking-tight block pb-2">Nambari Sai Sravya</span></div></div>
<p className="text-lg md:text-xl text-muted-foreground max-w-xl mb-6 leading-relaxed">Computer Science undergraduate at <b>IIIT Agartala</b>, working across C++, Python, machine learning and systems programming. I build technically grounded projects — from encrypted multi-client networking to physics-informed neural networks and time-series forecasting.</p>
<div className="flex flex-wrap justify-center md:justify-start gap-2 mb-8"><span className="hero-chip">C++</span><span className="hero-chip">Python</span><span className="hero-chip">TensorFlow</span><span className="hero-chip">Machine Learning</span><span className="hero-chip">TCP/IP</span><span className="hero-chip">DSA</span></div>
<div className="flex flex-wrap items-center justify-center md:justify-start gap-4 mb-8"><a href="#projects"><Button size="lg" className="rounded-full px-7 h-12 bg-primary text-primary-foreground font-semibold flex items-center gap-2">View My Work <ArrowRight className="w-4 h-4"/></Button></a><a href="/SaiSravya_SDE_Resume.pdf" target="_blank" rel="noreferrer"><Button size="lg" variant="outline" className="rounded-full px-7 h-12 glass-panel text-foreground font-semibold flex items-center gap-2">Download Resume <Download className="w-4 h-4"/></Button></a></div>
<div className="flex items-center gap-5"><a href="https://github.com/saisravya0426" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><Github className="w-5 h-5"/></a><a href="https://linkedin.com/in/sai-sravya-nambari-SbGSG1234/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground"><Linkedin className="w-5 h-5"/></a><a href="mailto:nambarisaisravya@gmail.com" className="text-muted-foreground hover:text-foreground"><Mail className="w-5 h-5"/></a></div>
</motion.div>
<motion.div className="flex-1 w-full max-w-[680px] relative flex justify-center items-center" initial={{opacity:0,scale:.92,filter:"blur(12px)"}} animate={{opacity:1,scale:1,filter:"blur(0px)"}} transition={{delay:.25,duration:1}}>
  <div className="character-stage" aria-label="Portrait of Nambari Sai Sravya">
    <div className="hero-spot spot-magenta" />
    <div className="hero-spot spot-violet" />
    <div className="hero-spot spot-cyan" />
    <div className="hero-star-field" />
    <div className="hero-soft-grid" />
    <div className="tech-orb orb-react">TF</div>
    <div className="tech-orb orb-node">ML</div>
    <div className="tech-orb orb-cpp">C++</div>
    <img className="character-cutout" src="/sravya-profile.png" alt="Nambari Sai Sravya" />
    <div className="character-light-sweep" />
  </div>
</motion.div>
</div><TechStackSection/></section>;
