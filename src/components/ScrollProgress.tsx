import { useEffect, useState } from 'react';

export const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;
      const trackLength = documentHeight - windowHeight;
      const progress = (scrollTop / trackLength) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    updateScrollProgress();

    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-slate-800/50 z-50 backdrop-blur-sm">
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 transition-all duration-150 ease-out shadow-lg shadow-cyan-500/50"
        style={{ width: `${scrollProgress}%` }}
      />
    </div>
  );
};
