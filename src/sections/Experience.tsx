import { useState } from 'react';
import { experience } from '../data/siteData';

export const Experience = () => {
  const [activeId, setActiveId] = useState(experience[0]?.id);
  const active = experience.find(e => e.id === activeId) || experience[0];

  return (
    <section id="experience" className="py-24 container-section scroll-mt-28">
      <div className="flex items-center gap-6 mb-10">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">02.</span>
          <span className="text-white">Where I've Worked</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>
      <div className="flex flex-col md:flex-row gap-8 md:gap-12">
        {/* Company list */}
        <ul className="flex md:flex-col overflow-x-auto md:overflow-visible text-sm font-mono border-b md:border-b-0 md:border-l border-white/10 md:pl-4 shrink-0 md:w-56">
          {experience.map(e => {
            const activeMatch = e.id === activeId;
            return (
              <li key={e.id} className="relative">
                <button
                  onClick={() => setActiveId(e.id)}
                  className={
                    'px-4 md:px-5 py-3 md:py-2 flex w-full text-left whitespace-nowrap transition border-b md:border-b-0 md:border-l-0 text-white/60 hover:text-teal-300 ' +
                    (activeMatch ? 'text-teal-300' : '')
                  }
                >
                  <span className="relative z-10">{e.company}</span>
                  {activeMatch && (
                    <span className="absolute left-0 top-0 h-full w-[2px] md:-left-4 md:w-[2px] bg-teal-300 md:rounded-sm" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Details */}
        {active && (
          <div className="flex-1 space-y-4">
            <div>
              <h3 className="text-lg font-semibold text-white">
                {active.role} <span className="text-teal-300">@ {active.company}</span>
              </h3>
              <p className="text-xs font-mono text-white/50 tracking-wide mt-1">{active.period}</p>
            </div>
            <p className="text-white/60 text-sm leading-relaxed max-w-2xl">{active.description}</p>
            {active.bullets && (
              <ul className="space-y-3 text-sm max-w-2xl">
                {active.bullets.map((b,i)=>(
                  <li key={i} className="flex gap-3">
                    <span className="mt-1 text-teal-300">▸</span>
                    <span className="text-white/70 leading-relaxed">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {active.stack && (
              <div className="flex flex-wrap gap-2 pt-2">
                {active.stack.map(s => <span key={s} className="tag !text-xs">{s}</span>)}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};
