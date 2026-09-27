import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import { socials } from '../data/siteData.tsx';
import type { TSocialLink } from '../data/siteData.tsx';
import Resume from './Resume.tsx';

// Custom hook to track portfolio views
const useViewCounter = () => {
  const cacheKey = 'portfolio-views-cache';
  const [views, setViews] = useState<number | null>(() => {
    const cached = localStorage.getItem(cacheKey);
    return cached ? Number(cached) : null;
  });

  useEffect(() => {
    const namespace = 'utkarsh-portfolio';
    const key = 'views';
    
    // Check if this session already counted a view
    const hasViewed = sessionStorage.getItem('portfolio-viewed');
    
    const fetchViews = async () => {
      try {
        if (!hasViewed) {
          // Increment view count (hit endpoint)
          const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}/up`);
          const data = await res.json();
          const nextViews = data.value ?? data.count ?? null;
          if (nextViews !== null) {
            setViews(nextViews);
            localStorage.setItem(cacheKey, String(nextViews));
          }
          sessionStorage.setItem('portfolio-viewed', 'true');
        } else {
          // Just get current count without incrementing
          const res = await fetch(`https://api.counterapi.dev/v1/${namespace}/${key}`);
          const data = await res.json();
          const nextViews = data.value ?? data.count ?? null;
          if (nextViews !== null) {
            setViews(nextViews);
            localStorage.setItem(cacheKey, String(nextViews));
          }
        }
      } catch (error) {
        console.error('Failed to fetch view count:', error);
      }
    };

    fetchViews();
  }, []);

  return views;
};

interface NavItem { id: string; label: string }

const navItems: NavItem[] = [
  { id: 'hero', label: 'Home' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Work' },
  { id: 'contact', label: 'Contact' },
  { id: 'Topmate', url:'https://topmate.io/utkxrsh' }
];

interface NavbarProps { className?: string }

export const Navbar = ({ className }: NavbarProps) => {
  const [active, setActive] = useState<string>('hero');
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const lastYRef = useRef(0);
  const firstLinkRef = useRef<HTMLAnchorElement | null>(null);
  const views = useViewCounter();

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

  // Close menu on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <nav aria-label="Primary" className={clsx(
      'fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-out will-change-transform',
      scrolled ? 'bg-[#0B0F17]/50 backdrop-blur-3xl border-b border-white/10' : 'bg-transparent',
      hidden ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100',
      className
    )}>
      <div className="max-w-6xl mx-auto flex items-center justify-between px-4 md:px-8 h-16 relative">
        <div className="flex items-center gap-4">
          <a href="#hero" className="text-teal-300 font-semibold tracking-tight text-lg" onClick={closeMenu}>&lt;U/&gt;</a>
          {views !== null && views !== undefined && (
            <div className="hidden sm:flex items-center gap-2 rounded-full border border-teal-300/20 bg-white/5 px-3 py-1.5 text-xs font-medium text-white/80 shadow-[0_0_0_1px_rgba(45,212,191,0.06),0_0_24px_rgba(45,212,191,0.12)] backdrop-blur-md transition hover:border-teal-300/40 hover:bg-white/8 hover:shadow-[0_0_0_1px_rgba(45,212,191,0.12),0_0_30px_rgba(45,212,191,0.2)]">
              <span className="inline-flex h-2 w-2 rounded-full bg-teal-300 shadow-[0_0_12px_rgba(45,212,191,0.9)] animate-pulse" />
              <svg className="w-3.5 h-3.5 text-teal-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span className="text-white/90 tabular-nums tracking-wide">
                {views.toLocaleString()}
              </span>
              <span className="rounded-full bg-teal-300/15 px-2 py-0.5 text-[10px] uppercase tracking-[0.2em] text-teal-300">
                views
              </span>
            </div>
          )}
        </div>
        <ol className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide">
          {navItems.map((item, idx) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={clsx('group flex items-center gap-1 transition', active===item.id ? 'text-teal-300' : 'text-white/60 hover:text-teal-300')}
                aria-current={active===item.id ? 'page' : undefined}
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
            <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="text-white/60 hover:text-teal-300 transition" aria-label={s.name}>{s.icon}</a>
          ))}
          <Resume compact label="Resume" />
        </div>
        {/* Mobile hamburger */}
        <button
          onClick={toggleMenu}
          aria-expanded={open}
          aria-controls="mobile-nav"
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-white/15 text-white/80 hover:text-teal-300 hover:border-teal-300/60 transition relative z-[60]"
        >
          <span className="sr-only">Toggle navigation</span>
          <div className="space-y-1.5">
            <span className={clsx('block h-0.5 w-5 bg-[currentColor] transition', open && 'translate-y-[7px] rotate-45')}></span>
            <span className={clsx('block h-0.5 w-5 bg-[currentColor] transition', open && 'opacity-0')}></span>
            <span className={clsx('block h-0.5 w-5 bg-[currentColor] transition', open && '-translate-y-[7px] -rotate-45')}></span>
          </div>
        </button>
      </div>
      {/* Mobile overlay */}
      <div
        className={clsx('fixed inset-0 z-40 bg-[#05080d]/50 transition-opacity md:hidden', open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none')}
        onClick={closeMenu}
        role="presentation"
      />
      {/* Mobile sliding panel */}
      <div
        id="mobile-nav"
        className={clsx(
          'fixed top-0 right-0 h-full w-72 max-w-[90%] z-50 md:hidden flex flex-col gap-8 shadow-2xl transition-transform duration-500',
          open ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <nav className="bg-[#0B0F17]/95 flex flex-col gap-6 p-8 mt-14">
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
          <div className="mt-auto">
            <Resume label="Download" />
          </div>
        </nav>
      </div>
    </nav>
  );
};

export default Navbar;
