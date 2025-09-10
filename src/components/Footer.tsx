import { socials } from '../data/siteData.tsx';
import type { TSocialLink } from '../data/siteData.tsx';
import { useMemo } from 'react';

const navLinks = [
  { id: 'about', label: 'About Me' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="relative mt-32 border-t border-white/5 bg-[#080d13]">
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none select-none bg-[radial-gradient(circle_at_20%_30%,#2dd4bf_0,transparent_60%),radial-gradient(circle_at_80%_70%,#14b8a6_0,transparent_55%)]" />
      <div className="container-section relative py-16 md:py-20">
        <div className="grid md:grid-cols-12 gap-12">
          {/* Branding / Intro */}
          <div className="md:col-span-5 space-y-5">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-teal-300/50 bg-teal-300/10 text-teal-300 font-mono text-sm">{'</>'}</span>
                <h3 className="text-2xl font-semibold tracking-tight text-white">Utkarsh <span className="text-teal-300">Tiwari</span></h3>
              </div>
              <p className="text-sm leading-relaxed text-white/60 max-w-sm">
                Frontend Developer crafting modern web interfaces with React & TypeScript while exploring the MERN stack.
              </p>
            </div>
            <div className="flex gap-4 pt-2">
              {(socials as TSocialLink[]).map(s => (
                <a key={s.name} href={s.url} target="_blank" rel="noreferrer" aria-label={s.name}
                   className="text-white/50 hover:text-teal-300 transition">
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-4 md:col-start-7">
            <h4 className="text-xs font-semibold tracking-[0.2em] text-teal-300/80 mb-6">QUICK NAVIGATION</h4>
            <ul className="space-y-3 text-sm font-medium">
              {navLinks.map(l => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="group inline-flex items-center gap-2 text-white/60 hover:text-teal-300 transition relative"
                  >
                    <span className="h-px w-4 bg-teal-300/0 group-hover:bg-teal-300/70 transition-all group-hover:w-6" />
                    <span>{l.label.toUpperCase()}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Decorative column (optional) */}
          <div className="hidden md:flex md:col-span-3 items-start justify-end">
            <div className="flex flex-col items-end gap-6 pr-2">
              <span className="text-[10px] tracking-widest text-teal-300/40 font-mono">{'<developer/>'}</span>
              <div className="h-full w-px bg-gradient-to-b from-teal-300/30 via-white/5 to-transparent" />
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-14 mb-8 h-px w-full bg-gradient-to-r from-transparent via-teal-300/25 to-transparent" />

        {/* Console log line */}
        <div className="text-[12px] font-mono text-white/50 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p className="text-white/60">&copy; {year} Utkarsh Tiwari | All Rights Reserved</p>
          <p className="whitespace-pre text-white/50">
            <span className="text-green-400">console</span>.<span className="text-green-400">log</span>(<span className="text-emerald-400">"Built with"</span>, <span className="text-rose-400">'❤'</span>, <span className="text-emerald-400">"and lots of"</span>, <span className="text-fuchsia-400">'☕'</span>);
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
