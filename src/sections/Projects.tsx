import { projects } from '../data/siteData';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';
import { motion } from 'framer-motion';

export const Projects = () => {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="relative py-24 container-section scroll-mt-28">
      {/* subtle background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-28 left-1/4 w-[800px] h-[800px] rounded-full bg-gradient-to-br from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl" />
      </div>
      <div className="flex items-center gap-6 mb-12">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">03.</span>
          <span className="text-white">Some Things I've Built</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>

      <div className="space-y-24">
        {featured.map((p, idx) => (
          <motion.article
            key={p.id}
            className={`grid gap-6 md:gap-10 md:grid-cols-12 items-center group`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-20% 0px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Image */}
            <div className={`relative md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="relative w-full h-72 rounded-md overflow-hidden border border-teal-300/10 bg-[#0e1a23]">
                {p.image ? (
                  <img
                    src={p.image}
                    alt={`${p.title} preview`}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  />
                ) : (
                  <div className="w-full h-full grid place-items-center text-teal-300/40 text-sm">Project Image</div>
                )}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-70" />
                <div className="pointer-events-none absolute inset-0 bg-teal-300/0 group-hover:bg-teal-300/5 transition" />
              </div>
            </div>
            {/* Content */}
            <div className={`md:col-span-5 flex flex-col ${idx % 2 === 1 ? 'md:items-start' : 'md:items-end'} ${idx % 2 === 1 ? '' : 'text-right'} relative`}>
              {p.highlight && <p className="text-teal-300 font-mono text-xs mb-3 tracking-widest">{p.highlight}</p>}
              <h3 className="text-xl font-semibold text-white mb-4">{p.title}</h3>
              <div className={`rounded-md bg-[#112030] text-white/70 text-sm leading-relaxed p-5 shadow-lg max-w-md ${idx % 2 === 1 ? '' : 'md:ml-auto'}`}>{p.description}</div>
              <ul className={`flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[11px] font-mono tracking-wide text-white/50 ${idx % 2 === 1 ? '' : 'md:justify-end'}`}>
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className={`flex gap-3 mt-5 ${idx % 2 === 1 ? '' : 'md:justify-end'} flex-wrap`}>
                {p.repo && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/80 hover:text-white hover:border-teal-300/40 hover:bg-teal-300/10 transition" aria-label="GitHub">
                    <SiGithub /> Code
                  </a>
                )}
                {p.demo && (
                  <a href={p.demo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-md border border-teal-300/40 px-3 py-2 text-xs text-teal-300 hover:text-[#0B0F17] bg-transparent hover:bg-teal-300 transition" aria-label="External">
                    <FiExternalLink /> Live
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {others.length > 0 && (
        <div className="mt-28">
          <h3 className="text-white text-lg font-semibold mb-6 flex items-center gap-3">
            <span className="text-teal-300 font-mono text-sm">//</span>
            <span>Other Noteworthy Projects</span>
            <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {others.map(p => (
              <motion.div
                key={p.id}
                className="relative group rounded-md bg-[#0f1b25] border border-white/5 hover:border-teal-300/30 transition p-6 flex flex-col shadow-[0_0_0_1px_rgba(255,255,255,0.04)] hover:shadow-[0_0_25px_-4px_rgba(45,212,191,0.25)]"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              >
                <div className="flex items-start justify-between mb-4">
                  <h4 className="text-white font-medium text-base leading-snug group-hover:text-teal-200 transition">{p.title}</h4>
                  <div className="flex gap-3 text-white/50 text-sm">
                    {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition" aria-label="GitHub"><SiGithub /></a>}
                    {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition" aria-label="External"><FiExternalLink /></a>}
                  </div>
                </div>
                <p className="text-white/60 text-sm leading-relaxed mb-5 line-clamp-5">{p.description}</p>
                {p.tech && (
                  <ul className="mt-auto flex flex-wrap gap-3 text-[10px] font-mono tracking-wide text-white/40">
                    {p.tech.map(t => <li key={t}>{t}</li>)}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}
 
      
    </section>
  );
};
 