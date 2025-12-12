import { useEffect, useState } from 'react';

const Index = () => {
  const [show, setShow] = useState(false);
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    setTimeout(() => setShow(true), 100);
    setTimeout(() => setShowTitle(true), 400);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950 to-background flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className="relative z-10 text-center px-4">
        {show && (
          <div className="mb-8 animate-snap-in">
            <div className="inline-block">
              <h1 className="font-montserrat font-black text-7xl sm:text-8xl md:text-9xl tracking-tight mb-4 animate-glitch">
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  KOCHEVNIK
                </span>
              </h1>
            </div>
          </div>
        )}

        {showTitle && (
          <div className="animate-zoom-flash">
            <h2 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl tracking-wide">
              <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent animate-flash">
                SHOW
              </span>
            </h2>
          </div>
        )}

        {showTitle && (
          <div className="mt-12 flex gap-6 justify-center animate-snap-in" style={{ animationDelay: '0.2s' }}>
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-primary to-transparent animate-flash" style={{ animationDelay: '0.8s' }} />
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-secondary to-transparent animate-flash" style={{ animationDelay: '1s' }} />
            <div className="w-20 h-2 bg-gradient-to-r from-transparent via-accent to-transparent animate-flash" style={{ animationDelay: '1.2s' }} />
          </div>
        )}
      </div>

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-flash" style={{ animationDelay: '0.5s' }} />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-secondary/30 rounded-full blur-3xl animate-flash" style={{ animationDelay: '0.7s' }} />
      <div className="absolute top-1/2 right-1/3 w-56 h-56 bg-accent/30 rounded-full blur-3xl animate-flash" style={{ animationDelay: '0.9s' }} />
    </div>
  );
};

export default Index;
