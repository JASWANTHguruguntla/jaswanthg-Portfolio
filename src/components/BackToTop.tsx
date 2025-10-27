import { ArrowUp } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={scrollToTop}
      className={`fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-slate-800/80 hover:bg-slate-700/80 backdrop-blur-sm border border-cyan-400/20 hover:border-cyan-400/40 transition-all duration-300 hover:scale-110 shadow-lg group ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
      aria-label="Back to top"
    >
      <ArrowUp className="w-5 h-5 text-cyan-400 group-hover:-translate-y-1 transition-transform duration-300" />
    </Button>
  );
};
