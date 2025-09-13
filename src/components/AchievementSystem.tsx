import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Trophy, Leaf, Recycle, Droplets, Zap, Target } from "lucide-react";

interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: 'leaf' | 'recycle' | 'droplets' | 'zap' | 'trophy' | 'target';
  progress: number;
  maxProgress: number;
  isUnlocked: boolean;
  rarity: 'common' | 'rare' | 'epic' | 'legendary';
  xpReward: number;
}

interface AchievementSystemProps {
  achievements: Achievement[];
}

const icons = {
  leaf: Leaf,
  recycle: Recycle,
  droplets: Droplets,
  zap: Zap,
  trophy: Trophy,
  target: Target
};

const rarityStyles = {
  common: 'border-muted bg-card',
  rare: 'border-primary bg-primary/5',
  epic: 'border-achievement bg-achievement/5',
  legendary: 'border-warning bg-warning/5 animate-achievement-glow'
};

export function AchievementSystem({ achievements }: AchievementSystemProps) {
  const unlockedCount = achievements.filter(a => a.isUnlocked).length;

  return (
    <div className="lesson-card">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <Trophy className="w-6 h-6 text-warning" />
          Achievements
        </h2>
        <Badge variant="secondary" className="text-sm">
          {unlockedCount}/{achievements.length} Unlocked
        </Badge>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {achievements.map((achievement) => {
          const Icon = icons[achievement.icon];
          const progressPercentage = (achievement.progress / achievement.maxProgress) * 100;
          
          return (
            <div 
              key={achievement.id}
              className={`
                relative p-4 rounded-xl border-2 transition-all duration-300 hover:scale-105
                ${achievement.isUnlocked 
                  ? rarityStyles[achievement.rarity] 
                  : 'border-muted bg-muted/20 opacity-60'
                }
              `}
            >
              {/* Achievement icon */}
              <div className={`
                w-12 h-12 rounded-full flex items-center justify-center mb-3 mx-auto
                ${achievement.isUnlocked
                  ? achievement.rarity === 'legendary' 
                    ? 'bg-gradient-to-br from-warning to-warning/80 text-warning-foreground animate-achievement-glow'
                    : achievement.rarity === 'epic'
                      ? 'bg-gradient-to-br from-achievement to-achievement/80 text-achievement-foreground'
                      : achievement.rarity === 'rare'
                        ? 'bg-gradient-to-br from-primary to-primary-light text-primary-foreground'
                        : 'bg-success text-success-foreground'
                  : 'bg-muted text-muted-foreground'
                }
              `}>
                <Icon className="w-6 h-6" />
              </div>

              {/* Achievement info */}
              <div className="text-center space-y-2">
                <h3 className={`font-semibold text-sm ${
                  achievement.isUnlocked ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {achievement.title}
                </h3>
                
                <p className="text-xs text-muted-foreground line-clamp-2">
                  {achievement.description}
                </p>

                {/* Progress bar for incomplete achievements */}
                {!achievement.isUnlocked && achievement.progress > 0 && (
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-xs">
                      <span className="text-muted-foreground">Progress</span>
                      <span className="font-medium">
                        {achievement.progress}/{achievement.maxProgress}
                      </span>
                    </div>
                    <Progress 
                      value={progressPercentage} 
                      className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary-light"
                    />
                  </div>
                )}

                {/* XP reward */}
                <Badge 
                  variant={achievement.isUnlocked ? "secondary" : "outline"} 
                  className="text-xs"
                >
                  {achievement.xpReward} XP
                </Badge>
              </div>

              {/* Rarity indicator */}
              <div className="absolute top-2 right-2">
                <div className={`
                  w-3 h-3 rounded-full 
                  ${achievement.rarity === 'legendary' 
                    ? 'bg-warning animate-pulse' 
                    : achievement.rarity === 'epic'
                      ? 'bg-achievement'
                      : achievement.rarity === 'rare'
                        ? 'bg-primary'
                        : 'bg-success'
                  }
                `}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}