import { AchievementBadge } from "./AchievementBadge";

export const AchievementsSection = () => {
  const achievements = [
    {
      title: "First Steps",
      description: "Complete your first HTML lesson",
      icon: "star" as const,
      rarity: "common" as const,
      unlocked: true,
    },
    {
      title: "Style Master",
      description: "Master 10 CSS properties",
      icon: "shield" as const,
      rarity: "rare" as const,
      unlocked: true,
    },
    {
      title: "Speed Demon",
      description: "Complete 5 challenges in under 10 minutes",
      icon: "zap" as const,
      rarity: "epic" as const,
      unlocked: false,
      progress: 3,
      maxProgress: 5,
    },
    {
      title: "Code Ninja",
      description: "Write 1000 lines of code",
      icon: "target" as const,
      rarity: "epic" as const,
      unlocked: false,
      progress: 742,
      maxProgress: 1000,
    },
    {
      title: "Legendary Coder",
      description: "Complete all courses with perfect scores",
      icon: "crown" as const,
      rarity: "legendary" as const,
      unlocked: false,
      progress: 1,
      maxProgress: 4,
    },
    {
      title: "Community Hero",
      description: "Help 100 fellow learners",
      icon: "trophy" as const,
      rarity: "rare" as const,
      unlocked: false,
      progress: 23,
      maxProgress: 100,
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-gradient-to-br from-muted/20 to-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm rounded-full px-4 py-2 border border-accent/20 mb-6">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-orbitron text-foreground">Unlock Your Potential</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-pixel text-accent mb-6">
            Hall of Fame
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-orbitron">
            Track your progress and showcase your coding achievements. Each badge represents a milestone in your journey to becoming a coding hero.
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-pixel text-primary mb-2">12</div>
            <div className="text-sm text-muted-foreground font-orbitron">Unlocked</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-pixel text-accent mb-2">8</div>
            <div className="text-sm text-muted-foreground font-orbitron">In Progress</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-pixel text-secondary mb-2">25</div>
            <div className="text-sm text-muted-foreground font-orbitron">Total XP</div>
          </div>
          <div className="text-center p-6 bg-card rounded-xl border border-border">
            <div className="text-3xl font-pixel text-primary mb-2">Level 5</div>
            <div className="text-sm text-muted-foreground font-orbitron">Current Rank</div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {achievements.map((achievement, index) => (
            <AchievementBadge key={index} {...achievement} />
          ))}
        </div>

        {/* Progress Overview */}
        <div className="bg-card rounded-xl border border-border p-8">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-orbitron font-bold text-foreground">Overall Progress</h3>
            <span className="text-sm bg-primary/10 text-primary px-3 py-1 rounded-full font-orbitron font-bold">
              Level 5 / 20
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-orbitron">Experience Points</span>
              <span className="text-primary font-orbitron font-bold">1,250 / 2,000 XP</span>
            </div>
            <div className="w-full bg-muted rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-primary to-primary-glow h-3 rounded-full transition-all duration-500"
                style={{ width: '62.5%' }}
              />
            </div>
            <p className="text-xs text-muted-foreground font-orbitron">
              750 XP until Level 6 - Keep coding to unlock more achievements!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};