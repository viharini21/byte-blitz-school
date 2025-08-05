import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Star, Clock, Users, Trophy } from "lucide-react";

interface CourseCardProps {
  title: string;
  description: string;
  image: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  duration: string;
  students: number;
  progress?: number;
  xp: number;
  achievements: number;
  isLocked?: boolean;
}

export const CourseCard = ({
  title,
  description,
  image,
  level,
  duration,
  students,
  progress = 0,
  xp,
  achievements,
  isLocked = false,
}: CourseCardProps) => {
  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-accent text-accent-foreground";
      case "Intermediate":
        return "bg-primary text-primary-foreground";
      case "Advanced":
        return "bg-destructive text-destructive-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <div className={`group relative bg-card rounded-xl border border-border overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl ${
      isLocked ? 'opacity-60' : 'hover:border-primary/50'
    }`}>
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Course Image */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* Level Badge */}
        <Badge className={`absolute top-4 left-4 ${getLevelColor(level)} font-pixel text-xs`}>
          {level}
        </Badge>
        
        {/* Lock Overlay */}
        {isLocked && (
          <div className="absolute inset-0 bg-background/90 flex items-center justify-center">
            <div className="text-center">
              <div className="w-12 h-12 bg-muted rounded-full flex items-center justify-center mb-2 mx-auto">
                <Star className="w-6 h-6 text-muted-foreground" />
              </div>
              <p className="text-sm font-orbitron text-muted-foreground">Complete HTML first</p>
            </div>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-orbitron font-bold text-foreground group-hover:text-primary transition-colors">
            {title}
          </h3>
          <p className="text-muted-foreground text-sm mt-2 line-clamp-2">
            {description}
          </p>
        </div>

        {/* Progress Bar (if started) */}
        {progress > 0 && (
          <div className="space-y-2">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground font-orbitron">Progress</span>
              <span className="text-primary font-orbitron font-bold">{progress}%</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 text-sm">
          <div className="flex items-center gap-1 text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span className="font-orbitron">{duration}</span>
          </div>
          <div className="flex items-center gap-1 text-muted-foreground">
            <Users className="w-4 h-4" />
            <span className="font-orbitron">{students.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-1 text-primary">
            <Trophy className="w-4 h-4" />
            <span className="font-orbitron font-bold">{achievements}</span>
          </div>
        </div>

        {/* XP Reward */}
        <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
          <span className="text-sm font-orbitron text-muted-foreground">Earn up to</span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-primary" />
            <span className="font-orbitron font-bold text-primary">{xp} XP</span>
          </div>
        </div>

        {/* Action Button */}
        <Button 
          variant={progress > 0 ? "quest" : "adventure"} 
          className="w-full" 
          disabled={isLocked}
        >
          {progress > 0 ? "Continue Quest" : "Start Quest"}
        </Button>
      </div>
    </div>
  );
};