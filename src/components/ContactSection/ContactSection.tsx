import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Send, ArrowUpRight, Sparkles, Code2, MessageCircle } from "lucide-react";
import { Button } from "../lightswind/button";

const links = [
  { icon: Mail, label: "Email me", value: "Let's start a conversation", href: "mailto:nambarisaisravya@gmail.com", color: "from-fuchsia-500/30 to-violet-500/10" },
  { icon: Github, label: "Explore my code", value: "github.com/saisravya0426", href: "https://github.com/saisravya0426", color: "from-sky-500/25 to-indigo-500/10" },
  { icon: Linkedin, label: "Connect professionally", value: "LinkedIn", href: "https://linkedin.com/in/sai-sravya-nambari-SbGSG1234/", color: "from-blue-500/25 to-cyan-500/10" },
];

export const ContactSection = () => (
  <section id="contact" className="max-w-7xl mx-auto px-6 py-24">
    <motion.div
      initial={{opacity:0,y:36}}
      whileInView={{opacity:1,y:0}}
      viewport={{once:true,amount:.2}}
      className="connect-shell relative overflow-hidden rounded-[2.75rem] border border-white/10"
    >
      <div className="connect-grid"/>
      <div className="connect-orb connect-orb-one"/>
      <div className="connect-orb connect-orb-two"/>
      <div className="connect-streak connect-streak-one"/>
      <div className="connect-streak connect-streak-two"/>

      <div className="relative z-10 grid lg:grid-cols-[1.08fr_.92fr] gap-10 lg:gap-16 p-8 md:p-12 lg:p-16">
        <div>
          <div className="connect-kicker"><Sparkles className="w-4 h-4"/> AVAILABLE FOR INTERESTING WORK</div>
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mt-7 leading-[.95]">
            Let's build<br/>
            <span className="connect-gradient">something great.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed max-w-xl mt-7">
            Have an interesting ML problem, AI challenge, software engineering opportunity, or product idea?
            I'm always excited to talk about ambitious ideas and build things that matter.
          </p>

          <div className="flex flex-wrap gap-3 mt-9">
            <a href="mailto:nambarisaisravya@gmail.com?subject=Let's%20Connect">
              <Button size="lg" className="connect-main-btn rounded-full px-7 h-14">
                Start a conversation <Send className="w-4 h-4 ml-2"/>
              </Button>
            </a>
            <a href="https://github.com/saisravya0426" target="_blank" rel="noreferrer" className="connect-ghost-btn">
              <Code2 className="w-4 h-4"/> View GitHub <ArrowUpRight className="w-4 h-4"/>
            </a>
          </div>

          <div className="connect-mini-row mt-10">
            <MessageCircle className="w-4 h-4 text-primary"/>
            <span>Usually happy to discuss <b>C++, machine learning, networking, research and technical problem solving.</b></span>
          </div>
        </div>

        <div className="flex flex-col justify-center gap-4">
          {links.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                initial={{opacity:0,x:25}}
                whileInView={{opacity:1,x:0}}
                viewport={{once:true}}
                transition={{delay:.12 + i*.09}}
                className="connect-link-card group"
              >
                <div className={`connect-link-icon bg-gradient-to-br ${item.color}`}><Icon className="w-5 h-5"/></div>
                <div className="min-w-0">
                  <div className="text-sm font-bold">{item.label}</div>
                  <div className="text-xs text-muted-foreground truncate mt-1">{item.value}</div>
                </div>
                <ArrowUpRight className="connect-arrow w-5 h-5 ml-auto"/>
              </motion.a>
            )
          })}
          <div className="connect-status">
            <span className="connect-status-dot"/>
            Open to collaborations and engineering opportunities
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);
