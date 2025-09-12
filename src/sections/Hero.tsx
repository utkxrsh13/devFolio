import { motion, AnimatePresence } from 'framer-motion';
import { socials } from '../data/siteData.tsx';
import { useEffect, useState, useRef } from 'react';
// import Resume from '../components/Resume.tsx';

export const Hero = () => {
  const keywords = ['React', 'MERN', 'AI', 'FastAPI', 'LLMs'];
  const [kwIndex, setKwIndex] = useState(0);
  const kwLenRef = useRef(keywords.length);
  useEffect(() => {
    const id = setInterval(() => {
      setKwIndex(i => (i + 1) % kwLenRef.current);
    }, 2600);
    return () => clearInterval(id);
  }, []);

  return (
  <section id="hero" className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background decorative layers */}
      <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] sm:w-[1100px] h-[900px] sm:h-[1100px] max-w-none rounded-full bg-gradient-to-br from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl" />
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_30%_40%,#2dd4bf_0,transparent_60%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(45,212,191,0.05)_0%,rgba(20,184,166,0)_60%)]" />
        <div className="absolute inset-0 mix-blend-overlay opacity-[0.07] bg-[url('data:image/svg+xml;utf8,<svg xmlns=\'http://www.w3.org/2000/svg\' width=\'400\' height=\'400\' fill=\'none\' stroke=\'%2314b8a6\' stroke-opacity=\'0.15\' stroke-width=\'0.5\'><path d=\'M0 0H400V400H0z\'/><path d=\'M20 0v400M40 0v400M60 0v400M80 0v400M100 0v400M120 0v400M140 0v400M160 0v400M180 0v400M200 0v400M220 0v400M240 0v400M260 0v400M280 0v400M300 0v400M320 0v400M340 0v400M360 0v400M380 0v400M0 20h400M0 40h400M0 60h400M0 80h400M0 100h400M0 120h400M0 140h400M0 160h400M0 180h400M0 200h400M0 220h400M0 240h400M0 260h400M0 280h400M0 300h400M0 320h400M0 340h400M0 360h400M0 380h400'/></svg>')]" />
      </div>
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
      <div className="hidden lg:flex flex-col gap-6 items-center fixed right-14 bottom-0">
        <a href="mailto:you@example.com" className="rotate-90 origin-bottom-right tracking-widest text-xs text-white/60 hover:text-teal-300 transition">utkarsht0813@gmail.com</a>
        <div className="w-px h-40 bg-white/20 translate-x-23" />
      </div>
      <div className="container-section w-full pt-24 pb-24 relative">
        <div className="max-w-4xl">
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:0.5}} className="text-teal-300/80 text-[11px] xs:text-xs md:text-sm mb-5 tracking-[0.35em] font-mono">Hi, my name is</motion.p>
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.65, delay:0.05}} className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-[1.1] md:leading-[1.05] relative">
            <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-cyan-300 bg-clip-text text-transparent">Utkarsh Tiwari</span>
            <span className="block mt-2 text-white/50 text-2xl sm:text-3xl md:text-4xl font-light tracking-tight">
              I build <span className="relative inline-block">
                <span className="sr-only">{keywords[kwIndex]}</span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={keywords[kwIndex]}
                    initial={{opacity:0,y:12,filter:'blur(4px)'}}
                    animate={{opacity:1,y:0,filter:'blur(0px)'}}
                    exit={{opacity:0,y:-12,filter:'blur(4px)'}}
                    transition={{duration:0.55, ease:'easeOut'}}
                    className="text-teal-300 font-semibold"
                    aria-hidden
                  >
                    {keywords[kwIndex]}
                  </motion.span>
                </AnimatePresence>
              </span> solutions.
            </span>
          </motion.h1>
          <motion.p initial={{opacity:0,y:18}} animate={{opacity:1,y:0}} transition={{duration:0.65, delay:0.12}} className="text-white/65 text-base md:text-lg leading-relaxed mb-10 max-w-2xl">
            Frontend Developer specializing in React and the MERN stack, with experience building AI-powered applications, eCommerce platforms, and interactive web solutions. Always exploring cutting-edge tools like <span className="text-teal-300/90">FastAPI</span>, <span className="text-teal-300/90">TypeScript</span>, and <span className="text-teal-300/90">LLMs</span> to craft impactful user experiences.
          </motion.p>
          <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6, delay:0.2}} className="flex flex-col sm:flex-row gap-4">
            <a href="#projects" className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-teal-300/40 px-8 py-4 text-sm font-medium text-teal-300 transition focus:outline-none focus:ring-2 focus:ring-teal-400/50">
              <span className="absolute inset-0 translate-y-[110%] bg-gradient-to-br from-teal-400 via-cyan-400 to-emerald-400 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100" />
              <span className="relative group-hover:text-[#0B0F17]">View Projects</span>
            </a>
            {/* <Resume compact label="Resume" variant="C" /> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
