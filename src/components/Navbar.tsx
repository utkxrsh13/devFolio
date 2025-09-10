import { useEffect, useRef, useState } from 'react';
import { clsx } from 'clsx';
import { socials } from '../data/siteData.tsx';
import type { TSocialLink } from '../data/siteData.tsx';

interface NavItem { id: string; label: string }

const navItems: NavItem[] = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps { className?: string }

export const Navbar = ({ className }: NavbarProps) => {
  const [active, setActive] = useState<string>('hero');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastYRef = useRef(0);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);

      // Determine direction
  const lastY = lastYRef.current;
  const direction = y > lastY ? 'down' : 'up';
  const delta = Math.abs(y - lastY);

      // Hide when scrolling down past a threshold, show when scrolling up
      if (y < 80) {
        setHidden(false);
      } else if (delta > 4) { // small threshold to reduce jitter
        if (direction === 'down') {
          setHidden(true);
        } else if (direction === 'up') {
          setHidden(false);
        }
      }
  lastYRef.current = y;

      // Active section calculation
      const offsets = navItems.map(item => {
        const el = document.getElementById(item.id);
        if (!el) return { id: item.id, top: Infinity };
        const rect = el.getBoundingClientRect();
        return { id: item.id, top: Math.abs(rect.top) };
      }).sort((a,b)=>a.top-b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when menu open
  useEffect(() => {
    if (open) {
      const original = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      setTimeout(()=> firstLinkRef.current?.focus(), 50);
      return () => { document.body.style.overflow = original; };
    }
  }, [open]);

  const toggleMenu = () => setOpen(o => !o);
  const closeMenu = () => setOpen(false);

  return (
    <nav className={clsx(
      'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out will-change-transform',
      scrolled ? 'bg-[#0B0F17] border-b border-white/10' : 'bg-transparent',
      hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      className
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 relative">
        <a href="#hero" className="text-teal-300 font-semibold tracking-tight text-lg" onClick={closeMenu}>&lt;U/&gt;</a>
        <ol className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
          {navItems.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx('group flex items-center gap-1 transition', active===item.id ? 'text-teal-300' : 'text-white/60 hover:text-teal-300')}
                onClick={closeMenu}
              >
                <span className="text-teal-300">{`0${idx+1}.`}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
        <div className="hidden md:flex items-center gap-3">
          {(socials as TSocialLink[]).map(s => (
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-white/60 hover:text-white transition" aria-label={s.name}>{s.icon}</a>
          ))}
          <a href="/resume.pdf" className="border border-teal-300/50 text-teal-300 hover:bg-teal-300 hover:text-[#0B0F17] transition rounded-md px-4 py-2 text-xs font-medium" download>Resume</a>
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-white/70 hover:text-teal-300 hover:border-teal-300/60 transition relative z-[60]"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className={clsx('block h-0.5 w-5 bg-current transition', open && 'translate-y-[7px] rotate-45')}></span>
            <span className={clsx('block h-0.5 w-5 bg-current transition', open && 'opacity-0')}></span>
            <span className={clsx('block h-0.5 w-5 bg-current transition', open && '-translate-y-[7px] -rotate-45')}></span>
          </div>
        </button>
      </div>
      {/* Mobile overlay */}
      <div
        className={clsx('fixed inset-0 z-40 bg-[#05080d] transition-opacity md:hidden', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        onClick={closeMenu}
      />
      {/* Mobile sliding panel */}
      <div
        id="mobile-nav"
        className={clsx(
          'fixed top-0 right-0 h-full w-72 max-w-[90%] z-50 md:hidden flex flex-col gap-8 shadow-2xl transition-transform duration-500',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="bg-[#0B0F17] flex flex-col gap-6 p-8 mt-14">
          <ol className="flex flex-col gap-8 text-sm font-mono">
            {navItems.map((item, idx) => (
              <li key={item.id}>
                <a
                  ref={idx===0 ? firstLinkRef : undefined}
                  href={`#${item.id}`}
                  onClick={closeMenu}
                  className={clsx('group flex items-center gap-3 transition', active===item.id ? 'text-teal-300' : 'text-white/60 hover:text-teal-300')}
                >
                  <span className="text-teal-300">{`0${idx+1}.`}</span>
                  <span className="text-base tracking-wide">{item.label}</span>
                </a>
              </li>
            ))}
          </ol>
          <div className="flex gap-4 pt-4">
            {(socials as TSocialLink[]).map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-white/50 hover:text-teal-300 transition" aria-label={s.name}>{s.icon}</a>
            ))}
          </div>
          <a
            href="/resume.pdf"
            onClick={closeMenu}
            className="mt-auto inline-flex justify-center rounded-md border border-teal-300/50 px-5 py-3 text-sm font-medium text-teal-300 hover:bg-teal-300 hover:text-[#0B0F17] transition"
            download
          >Resume</a>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
