import './index.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import SplashScreen from './components/SplashScreen';
import { useEffect, useState } from 'react';
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [showSplash, setShowSplash] = useState(true);

  // Safety fallback: ensure splash never blocks longer than 4s
  useEffect(() => {
    if (!showSplash) return;
    const failSafe = setTimeout(() => setShowSplash(false), 4000);
    return () => clearTimeout(failSafe);
  }, [showSplash]);
  return (
    <div className="relative">
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[200] focus:bg-[#0B0F17] focus:text-white focus:px-3 focus:py-2 focus:rounded-md">Skip to content</a>
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Navbar className={showSplash ? 'pointer-events-none opacity-0' : 'opacity-100 transition-opacity duration-700'} />
      <main id="main" className={showSplash ? 'opacity-0 pointer-events-none select-none' : 'opacity-100 transition-opacity duration-700'}>
        <Landing />
      </main>
      {!showSplash && <Footer />}
      <Analytics />
    </div>
  );
}

export default App;
