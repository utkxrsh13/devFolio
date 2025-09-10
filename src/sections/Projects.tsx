import { projects } from '../data/siteData';
import { SiGithub } from 'react-icons/si';
import { FiExternalLink } from 'react-icons/fi';

export const Projects = () => {
  const featured = projects.filter(p => p.featured);
  // const others = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 container-section scroll-mt-28">
      <div className="flex items-center gap-6 mb-12">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">03.</span>
          <span className="text-white">Some Things I've Built</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>

      <div className="space-y-24">
        {featured.map((p, idx) => (
          <div key={p.id} className={`grid gap-6 md:gap-10 md:grid-cols-12 items-center group`}>            
            {/* Image placeholder */}
            <div className={`relative md:col-span-7 ${idx % 2 === 1 ? 'md:order-2' : ''}`}>
              <div className="w-full h-72 rounded-md overflow-hidden bg-gradient-to-br from-teal-500/10 to-teal-300/5 border border-teal-300/10 flex items-center justify-center text-teal-300/40 text-sm">
                {p.image ? <img src={p.image} alt={p.title} className="w-full h-full object-cover" /> : 'Project Image'}
              </div>
              <div className="absolute inset-0 bg-teal-300/0 group-hover:bg-teal-300/5 transition" />
            </div>
            {/* Content */}
            <div className={`md:col-span-5 flex flex-col ${idx % 2 === 1 ? 'md:items-start' : 'md:items-end'} ${idx % 2 === 1 ? '' : 'text-right'} relative`}>              
              {p.highlight && <p className="text-teal-300 font-mono text-xs mb-3 tracking-widest">{p.highlight}</p>}
              <h3 className="text-xl font-semibold text-white mb-4">{p.title}</h3>
              <div className={`rounded-md bg-[#112030] text-white/70 text-sm leading-relaxed p-5 shadow-lg max-w-md ${idx % 2 === 1 ? '' : 'md:ml-auto'}`}>{p.description}</div>
              <ul className={`flex flex-wrap gap-x-5 gap-y-2 mt-6 text-[11px] font-mono tracking-wide text-white/50 ${idx % 2 === 1 ? '' : 'md:justify-end'}`}>
                {p.tech.map(t => <li key={t}>{t}</li>)}
              </ul>
              <div className={`flex gap-4 mt-4 text-white/60 ${idx % 2 === 1 ? '' : 'md:justify-end'}`}>
                {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition" aria-label="GitHub"><SiGithub /></a>}
                {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="hover:text-teal-300 transition" aria-label="External"><FiExternalLink /></a>}
              </div>
            </div>
          </div>
        ))}
      </div>

      
    </section>
  );
};
