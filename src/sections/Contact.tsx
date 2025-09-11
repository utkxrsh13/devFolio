import Tooltip from '../components/Tooltip.tsx';
import { socials } from '../data/siteData.tsx';
import type { FormEvent } from 'react';
import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';

export const Contact = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID as string | undefined;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string | undefined;
  const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY as string | undefined;

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // honeypot anti-spam: if hidden field is filled, bail silently
      const hp = (e.currentTarget.querySelector('input[name="website"]') as HTMLInputElement | null)?.value;
      if (hp) {
        setStatus('sent');
        (e.currentTarget as HTMLFormElement).reset();
        return;
      }

      if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
        console.warn('Missing EmailJS env vars. Please set VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, VITE_EMAILJS_PUBLIC_KEY');
        setStatus('error');
        return;
      }

      emailjs.init({ publicKey: PUBLIC_KEY });

      const form = e.currentTarget;
      const data = new FormData(form);
      const name = String(data.get('name') || '');
      const email = String(data.get('email') || '');
      const message = String(data.get('message') || '');

      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: name,
        from_email: email,
        message,
      });

      setStatus('sent');
      form.reset();
    } catch (err) {
      console.error('EmailJS send failed', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-24 container-section scroll-mt-28">
      {/* background */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 right-0 w-[640px] h-[640px] rounded-full bg-gradient-to-tr from-teal-500/10 via-cyan-400/5 to-transparent blur-3xl" />
      </div>

      <div className="flex items-center gap-6 mb-12">
        <h2 className="flex items-center gap-3 text-xl md:text-2xl font-semibold tracking-tight">
          <span className="text-teal-300 font-mono text-sm">05.</span>
          <span className="text-white">Get In Touch</span>
          <span className="hidden md:inline-block h-px flex-1 bg-white/10" />
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <motion.form
          onSubmit={onSubmit}
          className="space-y-4 glass p-6 rounded-2xl border-white/10"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          aria-describedby="contact-status"
        >
          {/* honeypot */}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

          <div>
            <label className="block text-xs font-medium mb-1 text-white/60" htmlFor="name">Name</label>
            <input id="name" required name="name" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-white/60" htmlFor="email">Email</label>
            <input id="email" required type="email" name="email" inputMode="email" className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring" />
          </div>
          <div>
            <label className="block text-xs font-medium mb-1 text-white/60" htmlFor="message">Message</label>
            <textarea id="message" required name="message" rows={5} maxLength={1500} className="w-full rounded-lg bg-white/5 border border-white/10 px-3 py-2 text-sm focus-ring"></textarea>
          </div>
          <div className="flex items-center gap-3">
            <button disabled={status!=='idle'} className="inline-flex items-center gap-2 rounded-md border border-teal-300/40 px-5 py-2.5 text-sm text-teal-300 hover:text-[#0B0F17] bg-transparent hover:bg-teal-300 transition disabled:opacity-50 disabled:cursor-not-allowed" type="submit">
              {status==='sending' && (
                <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z" />
                </svg>
              )}
              {status==='sending' ? 'Sending...' : status==='sent' ? 'Sent!' : 'Send Message'}
            </button>
            <span id="contact-status" className="text-xs text-white/60" aria-live="polite">
              {status==='error' && 'Failed to send. Please try again later.'}
              {status==='sent' && 'Thanks! I will get back to you soon.'}
            </span>
          </div>
        </motion.form>

        <motion.div
          className="space-y-6"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          <p className="text-white/60 max-w-md">Feel free to reach out for collaborations, opportunities, or just a hello. I'm open to discussing frontend engineering, fullstack development, and design systems.</p>
          <div className="flex gap-4">
            {socials.map(s => (
              <Tooltip key={s.name} label={s.name} href={s.url} icon={s.icon} />
            ))}
          </div>
          <div className="pt-2 text-sm text-white/40">You can also email me at <a className="text-white hover:underline" href="mailto:utkarsht0813@gmail.com">utkarsht0813@gmail.com</a></div>
        </motion.div>
      </div>
    </section>
  );
};
