import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Flame, Trophy, Leaf, Star } from "lucide-react";

interface UserProfileProps {
  user: {
    name: string;
    avatar?: string;
    level: number;
    xp: number;
    maxXp: number;
    streak: number;
    totalPoints: number;
    badges: string[];
  };
}

export function UserProfile({ user }: UserProfileProps) {
  const progressPercentage = (user.xp / user.maxXp) * 100;

  return (
    <div className="lesson-card bg-gradient-to-br from-card to-card-hover">
      <div className="flex items-center gap-4 mb-4">
        <Avatar className="h-16 w-16 border-4 border-primary">
          <AvatarImage src={user.avatar} alt={user.name} />
          <AvatarFallback className="bg-primary text-primary-foreground text-lg font-bold">
            {user.name.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <h2 className="text-xl font-bold text-foreground">{user.name}</h2>
          <div className="flex items-center gap-2 mt-1">
            <span className="level-indicator">
              <Star className="w-4 h-4 mr-1" />
              Level {user.level}
            </span>
            <div className="streak-counter">
              <Flame className="w-4 h-4" />
              {user.streak} day streak
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="progress-circle border-primary text-primary">
            {Math.round(progressPercentage)}%
          </div>
          <p className="text-xs text-muted-foreground mt-1">
            {user.xp}/{user.maxXp} XP
          </p>
        </div>
      </div>

      <div className="mb-4">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-foreground">Level Progress</span>
          <span className="text-sm text-muted-foreground">{user.xp} / {user.maxXp} XP</span>
        </div>
        <Progress 
          value={progressPercentage} 
          className="h-3 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-success [&>div]:to-primary animate-progress-fill"
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-warning" />
          <span className="font-semibold text-foreground">{user.totalPoints.toLocaleString()} Eco Points</span>
        </div>
        
        <div className="flex items-center gap-1">
          {user.badges.slice(0, 3).map((badge, index) => (
            <Badge key={index} variant="secondary" className="achievement-badge w-8 h-8 text-xs animate-achievement-glow">
              <Leaf className="w-4 h-4" />
            </Badge>
          ))}
          {user.badges.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{user.badges.length - 3}
            </Badge>
          )}
        </div>
      </div>
    </div>
  );
}