import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Trophy, Star, Zap } from "lucide-react";
import logo from "@/assets/logo.png";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-background/90 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src={logo} alt="CodeQuest" className="w-8 h-8 animate-float" />
          <h1 className="font-pixel text-lg text-primary">CodeQuest</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#courses" className="text-foreground hover:text-primary transition-colors font-orbitron">
            Courses
          </a>
          <a href="#achievements" className="text-foreground hover:text-primary transition-colors font-orbitron">
            Achievements
          </a>
          <a href="#community" className="text-foreground hover:text-primary transition-colors font-orbitron">
            Community
          </a>
        </nav>

        {/* User Stats & CTA */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1 text-primary">
              <Zap className="w-4 h-4" />
              <span className="font-orbitron font-bold">1,250 XP</span>
            </div>
            <div className="flex items-center gap-1 text-accent">
              <Trophy className="w-4 h-4" />
              <span className="font-orbitron font-bold">12</span>
            </div>
            <div className="flex items-center gap-1 text-foreground">
              <Star className="w-4 h-4" />
              <span className="font-orbitron font-bold">Level 5</span>
            </div>
          </div>
          <Button variant="adventure" size="sm">
            Start Quest
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-4 py-4 space-y-4">
            <a
              href="#courses"
              className="block text-foreground hover:text-primary transition-colors font-orbitron"
              onClick={() => setIsMenuOpen(false)}
            >
              Courses
            </a>
            <a
              href="#achievements"
              className="block text-foreground hover:text-primary transition-colors font-orbitron"
              onClick={() => setIsMenuOpen(false)}
            >
              Achievements
            </a>
            <a
              href="#community"
              className="block text-foreground hover:text-primary transition-colors font-orbitron"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <div className="flex items-center gap-4 text-sm pt-2">
              <div className="flex items-center gap-1 text-primary">
                <Zap className="w-4 h-4" />
                <span className="font-orbitron font-bold">1,250 XP</span>
              </div>
              <div className="flex items-center gap-1 text-accent">
                <Trophy className="w-4 h-4" />
                <span className="font-orbitron font-bold">12</span>
              </div>
            </div>
            <Button variant="adventure" className="w-full">
              Start Quest
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
};