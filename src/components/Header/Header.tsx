import { useEffect, useState } from "react";
import { motion, AnimatePresence, type Variants, type MotionProps } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLenis } from "lenis/react";
import { ThemeToggle } from "../lightswind/theme-toggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#career" },
  { name: "Skills", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [showHeader, setShowHeader] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const lenis = useLenis();
  useEffect(() => { let lastScrollY = window.scrollY; const handleScroll = () => { const y=window.scrollY; setShowHeader(!(y>lastScrollY && y>80)); lastScrollY=y; }; window.addEventListener("scroll", handleScroll,{passive:true}); return()=>window.removeEventListener("scroll",handleScroll); },[]);
  const handleScrollTo=(id:string)=>{ if(lenis) lenis.scrollTo(id); setIsMobileMenuOpen(false); };
  const menuVariants:Variants={open:{clipPath:"circle(1500px at 90% 5%)",transition:{type:"spring",stiffness:20,restDelta:2}},closed:{clipPath:"circle(0px at 90% 5%)",transition:{type:"spring",stiffness:400,damping:40}}};
  const listVariants:Variants={open:{transition:{staggerChildren:.07,delayChildren:.2}},closed:{transition:{staggerChildren:.05,staggerDirection:-1}}};
  const itemVariants:Variants={open:{y:0,opacity:1},closed:{y:50,opacity:0}};
  return <AnimatePresence>{showHeader&&<motion.header initial={{y:-100,opacity:0}} animate={{y:0,opacity:1}} exit={{y:-100,opacity:0}} transition={{duration:.3}} className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
    <div className="glass-panel w-full max-w-7xl rounded-[2rem] flex items-center justify-between px-6 py-4 shadow-xl">
      <a onClick={()=>handleScrollTo("#hero")} className="cursor-pointer font-extrabold text-lg flex items-center gap-3 group select-none"><div className="relative w-9 h-9 rounded-xl bg-gradient-to-tr from-purple-600 via-primary to-sky-400 p-[1px]"><div className="w-full h-full bg-background rounded-[11px] flex items-center justify-center"><span className="font-extrabold text-xs bg-gradient-to-r from-purple-500 to-sky-400 bg-clip-text text-transparent">SS</span></div></div><div className="flex flex-col"><span className="font-extrabold tracking-tight text-foreground text-sm leading-none">Nambari Sai Sravya</span><span className="text-[9px] font-bold text-muted-foreground tracking-widest uppercase mt-0.5">CSE • Software & ML</span></div></a>
      <nav className="hidden md:flex flex-1 justify-center"><ul className="flex space-x-7">{navItems.map(item=><motion.li key={item.name} className="relative group text-sm font-medium text-muted-foreground"><a onClick={()=>handleScrollTo(item.href)} className="cursor-pointer hover:text-foreground">{item.name}</a></motion.li>)}</ul></nav>
      <div className="flex items-center gap-2"><ThemeToggle/><button onClick={()=>setIsMobileMenuOpen(true)} className="md:hidden text-foreground p-2"><Menu size={24}/></button></div>
    </div>
    <AnimatePresence>{isMobileMenuOpen&&<motion.div {...({initial:"closed",animate:"open",exit:"closed",variants:menuVariants} as MotionProps)} className="fixed inset-0 z-40 bg-background/95 backdrop-blur-2xl md:hidden flex flex-col items-center justify-center"><motion.button onClick={()=>setIsMobileMenuOpen(false)} className="absolute top-8 right-8 text-foreground"><X size={32}/></motion.button><motion.ul {...({variants:listVariants} as MotionProps)} className="flex flex-col items-center justify-center h-full space-y-10">{navItems.map(item=><motion.li key={item.name} {...({variants:itemVariants} as MotionProps)}><a onClick={()=>handleScrollTo(item.href)} className="text-4xl font-bold text-muted-foreground hover:text-primary cursor-pointer">{item.name}</a></motion.li>)}</motion.ul></motion.div>}</AnimatePresence>
  </motion.header>}</AnimatePresence>;
}
