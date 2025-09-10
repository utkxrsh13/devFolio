import { motion } from 'framer-motion';
import { socials } from '../data/siteData.tsx';

export const Hero = () => {
  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center">
      {/* Left social bar (desktop) */}
      <div className="hidden lg:flex flex-col gap-6 items-center fixed left-10 bottom-0">
        <ul className="flex flex-col gap-5 text-white/60">
          {socials.map(s => (
            <li key={s.name}>
              <a href={s.url} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition" aria-label={s.name}>{s.icon}</a>
            </li>
          ))}
        </ul>
        <div className="w-px h-40 bg-white/20" />
      </div>
      {/* Right email bar */}
      <div className="hidden lg:flex flex-col gap-6 items-center fixed right-10 bottom-0">
        <a href="mailto:you@example.com" className="rotate-90 origin-bottom-right tracking-widest text-xs text-white/60 hover:text-teal-300 transition">you@example.com</a>
        <div className="w-px h-40 bg-white/20" />
      </div>
      <div className="container-section w-full pt-24 pb-20">
        <div className="max-w-3xl">
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-teal-300 text-sm mb-4 tracking-widest">Hi, my name is</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.05}} className="text-5xl md:text-7xl font-bold text-white mb-4 leading-tight">
            Your Name.<br/>
            <span className="text-white/50">I build things for the web.</span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.1}} className="text-white/60 text-lg leading-relaxed mb-10 max-w-2xl">
            I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I focus on crafting accessible, human-centered products.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.15}}>
            <a href="#projects" className="border border-teal-300/50 text-teal-300 hover:bg-teal-300 hover:text-[#0B0F17] transition rounded-md px-6 py-4 text-sm font-medium inline-block">Check out my work!</a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
