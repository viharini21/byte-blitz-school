import { Button } from "@/components/ui/button";
import { Sparkles, Play, BookOpen } from "lucide-react";
import heroBanner from "@/assets/hero-banner.png";

export const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-70"
        style={{ backgroundImage: `url(${heroBanner})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
      
      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 animate-float">
        <div className="w-2 h-2 bg-primary rounded-full shadow-lg animate-glow" style={{ '--glow-color': 'hsl(45 100% 60%)' } as React.CSSProperties} />
      </div>
      <div className="absolute top-1/3 right-1/3 animate-float" style={{ animationDelay: '1s' }}>
        <div className="w-3 h-3 bg-accent rounded-full shadow-lg animate-glow" style={{ '--glow-color': 'hsl(140 60% 40%)' } as React.CSSProperties} />
      </div>
      <div className="absolute bottom-1/3 left-1/3 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-secondary rounded-full shadow-lg animate-glow" style={{ '--glow-color': 'hsl(215 50% 25%)' } as React.CSSProperties} />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-6 inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-primary/20">
          <Sparkles className="w-4 h-4 text-primary animate-pulse" />
          <span className="text-sm font-orbitron text-foreground">Start Your Coding Adventure</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-pixel text-primary mb-6 leading-tight">
          Code<span className="text-accent">Quest</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground mb-4 font-orbitron">
          The most fun way to learn programming!
        </p>
        
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto font-orbitron">
          Journey through the magical lands of HTML, CSS, JavaScript, and Python. 
          Earn XP, unlock achievements, and become a coding hero!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button variant="adventure" size="xl" className="group">
            <Play className="w-5 h-5 mr-2 group-hover:animate-pulse" />
            Begin Adventure
          </Button>
          <Button variant="quest" size="xl" className="group">
            <BookOpen className="w-5 h-5 mr-2 group-hover:animate-bounce" />
            Browse Quests
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
          <div className="text-center">
            <div className="text-2xl font-pixel text-primary mb-1">50k+</div>
            <div className="text-sm text-muted-foreground font-orbitron">Heroes</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-pixel text-accent mb-1">100+</div>
            <div className="text-sm text-muted-foreground font-orbitron">Quests</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-pixel text-secondary mb-1">24/7</div>
            <div className="text-sm text-muted-foreground font-orbitron">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
};