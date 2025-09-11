import { useState } from 'react';
import type { KeyboardEvent } from 'react';
import { experience } from '../data/siteData';
import { motion, AnimatePresence } from 'framer-motion';

export const Experience = () => {
  const [activeId, setActiveId] = useState(experience[0]?.id);
  const active = experience.find(e => e.id === activeId) || experience[0];

  const idx = Math.max(0, experience.findIndex(e => e.id === activeId));
  const onKeyNav = (e: KeyboardEvent<HTMLUListElement>) => {
    if (!experience.length) return;
    if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
      const next = (idx + 1) % experience.length;
      setActiveId(experience[next].id);
      e.preventDefault();
    } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
      const prev = (idx - 1 + experience.length) % experience.length;
      setActiveId(experience[prev].id);
      e.preventDefault();
    }
  };

  return (
    <section id="experience" className="relative py-24 container-section scroll-mt-28">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 left-0 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl" />
      </div>
      <div className="flex items-center gap-6 mb-10">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">02.</span>
          <span className="text-white">Where I've Worked</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Company list */}
        <ul
          className="flex md:flex-col overflow-x-auto md:overflow-visible text-sm font-mono border-b md:border-b-0 md:border-l border-white/10 md:pl-4 shrink-0 md:w-56"
          role="tablist"
          aria-orientation="vertical"
          onKeyDown={onKeyNav}
        >
          {experience.map(e => {
            const activeMatch = e.id === activeId;
            return (
              <li key={e.id} className="relative">
                <button
                  onClick={() => setActiveId(e.id)}
                  role="tab"
                  aria-selected={activeMatch}
                  aria-controls={`panel-${e.id}`}
                  id={`tab-${e.id}`}
                  tabIndex={activeMatch ? 0 : -1}
                  className={
                    'relative px-4 md:px-5 py-3 md:py-2 flex w-full text-left whitespace-nowrap transition border-b md:border-b-0 md:border-l-0 text-white/60 hover:text-teal-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400/50 ' +
                    (activeMatch ? 'text-teal-300' : '')
                  }
                >
                  <span className="relative z-10">{e.company}</span>
                  {activeMatch && (
                    <motion.span layoutId="expActiveLine" className="absolute left-0 top-0 h-full w-[2px] md:-left-4 md:w-[2px] bg-teal-300 md:rounded-sm" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Details */}
        {active && (
          <AnimatePresence mode="wait">
            <motion.div
              key={active.id}
              role="tabpanel"
              id={`panel-${active.id}`}
              aria-labelledby={`tab-${active.id}`}
              className="flex-1 space-y-4"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.45, ease: 'easeOut' }}
            >
              <div>
                <h3 className="text-lg font-semibold text-white">
                  {active.role} <span className="text-teal-300">@ {active.company}</span>
                </h3>
                <p className="text-xs font-mono text-white/50 tracking-wide mt-1">{active.period}</p>
              </div>
              <p className="text-white/60 text-sm leading-relaxed max-w-2xl">{active.description}</p>
              {active.bullets && (
                <motion.ul
                  className="space-y-3 text-sm max-w-2xl"
                  initial="hidden"
                  animate="show"
                  variants={{ hidden: {}, show: { transition: { staggerChildren: 0.04 } } }}
                >
                  {active.bullets.map((b,i)=>(
                    <motion.li key={i} className="flex gap-3" variants={{ hidden: { opacity: 0, y: 6 }, show: { opacity: 1, y: 0 } }}>
                      <span className="mt-1 text-teal-300">▸</span>
                      <span className="text-white/70 leading-relaxed">{b}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              )}
              {active.stack && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {active.stack.map(s => <span key={s} className="tag !text-xs">{s}</span>)}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        )}
      </div>
    </section>
  );
};
