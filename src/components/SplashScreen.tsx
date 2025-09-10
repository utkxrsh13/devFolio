import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface SplashScreenProps { onFinish?: () => void; minimumTime?: number }

// Deterministic phase-based splash that always calls onFinish
export const SplashScreen = ({ onFinish, minimumTime = 1400 }: SplashScreenProps) => {
  const [phase, setPhase] = useState<'hold' | 'exit'>('hold');

  // After minimum time trigger exit phase
  useEffect(() => {
    const t = setTimeout(() => setPhase('exit'), minimumTime);
    return () => clearTimeout(t);
  }, [minimumTime]);

  // Fire finish after exit animation duration (600ms)
  useEffect(() => {
    if (phase === 'exit') {
      const t = setTimeout(() => onFinish?.(), 620);
      return () => clearTimeout(t);
    }
  }, [phase, onFinish]);

  const exiting = phase === 'exit';

  return (
    <motion.div
      aria-label="Loading"
      initial={{ opacity: 1 }}
      animate={{ opacity: exiting ? 0 : 1 }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F1824]"
    >
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: exiting ? 0.92 : 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative"
      >
        <motion.div
          className="w-28 h-28 rounded-lg border-2 border-teal-300 flex items-center justify-center relative"
          initial={{ rotate: -8 }}
          animate={{ rotate: exiting ? 6 : 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.span
            className="text-teal-300 font-semibold text-3xl tracking-tight"
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.25, duration: 0.6, ease: 'easeOut' }}
          >U</motion.span>
          <motion.div
            className="absolute inset-0 rounded-lg"
            initial={{ boxShadow: '0 0 0 0 rgba(45,212,191,0.0)' }}
            animate={{ boxShadow: exiting ? '0 0 0 0 rgba(45,212,191,0)' : ['0 0 0 0 rgba(45,212,191,0.0)','0 0 0 6px rgba(45,212,191,0.15)','0 0 0 0 rgba(45,212,191,0.0)'] }}
            transition={{ repeat: exiting ? 0 : Infinity, duration: 2.2, ease: 'easeInOut' }}
          />
        </motion.div>
        <motion.p
          className="mt-6 text-xs tracking-widest text-white/40 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: exiting ? 0 : 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >LOADING</motion.p>
      </motion.div>
    </motion.div>
  );
};

export default SplashScreen;
