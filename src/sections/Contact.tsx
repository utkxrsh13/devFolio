import { socials } from '../data/siteData.tsx';
import type { TSocialLink } from '../data/siteData.tsx';
import type { FormEvent } from 'react';
import { useState } from 'react';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // simulate send
    setTimeout(()=> setStatus('sent'), 1200);
  };

  return (
  <section id="contact" className="py-24 container-section scroll-mt-28">
      <h2 className="section-title">Contact</h2>
      <div className="grid md:grid-cols-2 gap-12">
        <form onSubmit={onSubmit} className="space-y-4 glass p-6 rounded-2xl border-white/10">
          <div>
            <label className="block text-xs font-medium mb-1 text-white/60">Name</label>
            <input required name="name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-white/60">Email</label>
            <input required type="email" name="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-white/60">Message</label>
            <textarea required name="message" rows={4} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring"></textarea>
          </div>
          <button disabled={status!=='idle'} className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
            {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}
          </button>
        </form>
        <div className="space-y-6">
          <p className="text-white/60 max-w-md">Feel free to reach out for collaborations, opportunities, or just a hello. I'm open to discussing frontend engineering, fullstack development, and design systems.</p>
          <div className="flex gap-4">
            {(socials as TSocialLink[]).map(s => (
              <a key={s.name} href={s.url} target="_blank" rel="noreferrer" className="w-11 h-11 rounded-xl flex items-center justify-center glass border-white/10 hover:scale-105 transition" aria-label={s.name}>{s.icon}</a>
            ))}
          </div>
          <div className="pt-2 text-sm text-white/40">You can also email me at <a className="text-white hover:underline" href="mailto:you@example.com">you@example.com</a></div>
        </div>
      </div>
    </section>
  );
};
