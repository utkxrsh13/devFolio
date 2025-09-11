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
      {showSplash && <SplashScreen onFinish={() => setShowSplash(false)} />}
      <Navbar className={showSplash ? 'pointer-events-none opacity-0' : 'opacity-100 transition-opacity duration-700'} />
      <main className={showSplash ? 'opacity-0 pointer-events-none select-none' : 'opacity-100 transition-opacity duration-700'}>
        <Landing />
      </main>
      {!showSplash && <Footer />}
      <Analytics />
    </div>
  );
}

export default App;
