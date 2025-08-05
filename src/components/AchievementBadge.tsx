import { Badge } from "@/components/ui/badge";
import { Trophy, Star, Zap, Target, Shield, Crown } from "lucide-react";

interface AchievementBadgeProps {
  title: string;
  description: string;
  icon: "trophy" | "star" | "zap" | "target" | "shield" | "crown";
  rarity: "common" | "rare" | "epic" | "legendary";
  unlocked?: boolean;
  progress?: number;
  maxProgress?: number;
}

export const AchievementBadge = ({
  title,
  description,
  icon,
  rarity,
  unlocked = false,
  progress,
  maxProgress,
}: AchievementBadgeProps) => {
  const getIcon = () => {
    const iconProps = { className: "w-6 h-6" };
    switch (icon) {
      case "trophy":
        return <Trophy {...iconProps} />;
      case "star":
        return <Star {...iconProps} />;
      case "zap":
        return <Zap {...iconProps} />;
      case "target":
        return <Target {...iconProps} />;
      case "shield":
        return <Shield {...iconProps} />;
      case "crown":
        return <Crown {...iconProps} />;
    }
  };

  const getRarityStyles = () => {
    switch (rarity) {
      case "common":
        return {
          bg: "bg-muted",
          border: "border-muted-foreground/30",
          text: "text-muted-foreground",
          glow: "shadow-muted/20",
        };
      case "rare":
        return {
          bg: "bg-secondary",
          border: "border-secondary",
          text: "text-secondary-foreground",
          glow: "shadow-secondary/30",
        };
      case "epic":
        return {
          bg: "bg-accent",
          border: "border-accent",
          text: "text-accent-foreground",
          glow: "shadow-accent/40",
        };
      case "legendary":
        return {
          bg: "bg-primary",
          border: "border-primary",
          text: "text-primary-foreground",
          glow: "shadow-primary/50",
        };
    }
  };

  const styles = getRarityStyles();
  const progressPercentage = progress && maxProgress ? (progress / maxProgress) * 100 : 0;

  return (
    <div
      className={`group relative p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
        unlocked
          ? `${styles.bg} ${styles.border} ${styles.glow} shadow-lg hover:shadow-xl`
          : "bg-card border-border opacity-60"
      }`}
    >
      {/* Glow effect for unlocked achievements */}
      {unlocked && (
        <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      {/* Content */}
      <div className="relative space-y-3">
        {/* Icon and Rarity */}
        <div className="flex items-center justify-between">
          <div className={`p-2 rounded-lg ${unlocked ? styles.text : "text-muted-foreground"}`}>
            {getIcon()}
          </div>
          <Badge
            variant="outline"
            className={`font-pixel text-xs uppercase ${
              unlocked ? styles.text : "text-muted-foreground"
            }`}
          >
            {rarity}
          </Badge>
        </div>

        {/* Title and Description */}
        <div>
          <h3
            className={`font-orbitron font-bold ${
              unlocked ? styles.text : "text-muted-foreground"
            }`}
          >
            {title}
          </h3>
          <p className="text-sm text-muted-foreground mt-1">{description}</p>
        </div>

        {/* Progress Bar (if applicable) */}
        {progress !== undefined && maxProgress !== undefined && !unlocked && (
          <div className="space-y-1">
            <div className="flex justify-between text-xs">
              <span className="text-muted-foreground font-orbitron">Progress</span>
              <span className="text-muted-foreground font-orbitron">
                {progress}/{maxProgress}
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-1.5">
              <div
                className="bg-primary h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Unlocked indicator */}
        {unlocked && (
          <div className="flex items-center gap-1 text-xs">
            <Star className="w-3 h-3 fill-current" />
            <span className="font-orbitron font-bold">Unlocked!</span>
          </div>
        )}
      </div>
    </div>
  );
};