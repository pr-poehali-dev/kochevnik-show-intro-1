import { useEffect, useState } from 'react';

const Index = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-950 to-background flex items-center justify-center overflow-hidden relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,92,246,0.1),transparent_50%)]" />
      
      <div className={`relative z-10 text-center px-4 transition-all duration-1000 ${show ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}>
        <div className="mb-8 animate-pulse-glow">
          <div className="inline-block">
            <h1 className="font-montserrat font-black text-7xl sm:text-8xl md:text-9xl tracking-tight mb-4">
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-fade-in">
                KOCHEVNIK
              </span>
            </h1>
          </div>
        </div>

        <div className="animate-scale-in animation-delay-300">
          <h2 className="font-montserrat font-bold text-4xl sm:text-5xl md:text-6xl tracking-wide">
            <span className="bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent">
              SHOW
            </span>
          </h2>
        </div>

        <div className="mt-12 flex gap-6 justify-center animate-fade-in animation-delay-600">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" />
        </div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow animation-delay-300" />
      <div className="absolute top-1/2 right-1/3 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse-glow animation-delay-600" />
    </div>
  );
};

export default Index;
