import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Loader from './Loader';

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
      className="fixed inset-0 z-[100]"
    >
      <Loader message="Generating..." overlay />
    </motion.div>
  );
};

export default SplashScreen;
