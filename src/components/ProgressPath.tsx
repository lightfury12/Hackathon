import { Badge } from "@/components/ui/badge";
import { CheckCircle, Lock, Play, Trophy } from "lucide-react";

interface PathNode {
  id: string;
  title: string;
  type: 'lesson' | 'challenge' | 'achievement';
  isCompleted: boolean;
  isUnlocked: boolean;
  isCurrent: boolean;
  xp?: number;
}

interface ProgressPathProps {
  nodes: PathNode[];
  onNodeClick: (nodeId: string) => void;
}

export function ProgressPath({ nodes, onNodeClick }: ProgressPathProps) {
  return (
    <div className="lesson-card">
      <h2 className="text-xl font-bold text-foreground mb-6 flex items-center gap-2">
        <Trophy className="w-6 h-6 text-warning" />
        Your Learning Journey
      </h2>
      
      <div className="relative">
        {/* Progress line */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-muted"></div>
        <div 
          className="absolute left-8 top-0 w-1 bg-gradient-to-b from-success to-primary transition-all duration-1000 ease-out"
          style={{ 
            height: `${(nodes.filter(n => n.isCompleted).length / nodes.length) * 100}%` 
          }}
        ></div>

        <div className="space-y-6">
          {nodes.map((node, index) => (
            <div 
              key={node.id}
              className={`relative flex items-center gap-4 cursor-pointer group ${
                !node.isUnlocked ? 'opacity-50' : ''
              }`}
              onClick={() => node.isUnlocked && onNodeClick(node.id)}
            >
              {/* Node indicator */}
              <div className={`
                relative z-10 w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300
                ${node.isCompleted 
                  ? 'border-success bg-success shadow-[var(--shadow-glow)]' 
                  : node.isCurrent 
                    ? 'border-primary bg-primary animate-pulse shadow-[var(--shadow-glow)]'
                    : node.isUnlocked
                      ? 'border-muted bg-card hover:border-primary hover:bg-primary/10'
                      : 'border-muted-foreground bg-muted'
                }
              `}>
                {node.isCompleted ? (
                  <CheckCircle className="w-8 h-8 text-success-foreground" />
                ) : node.isCurrent ? (
                  <Play className="w-6 h-6 text-primary-foreground" />
                ) : !node.isUnlocked ? (
                  <Lock className="w-6 h-6 text-muted-foreground" />
                ) : node.type === 'achievement' ? (
                  <Trophy className="w-6 h-6 text-warning" />
                ) : (
                  <div className="w-4 h-4 rounded-full bg-current opacity-40"></div>
                )}
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className={`font-semibold ${
                    node.isCurrent ? 'text-primary' : 'text-foreground'
                  }`}>
                    {node.title}
                  </h3>
                  <Badge 
                    variant={node.type === 'achievement' ? 'secondary' : 'outline'} 
                    className="text-xs capitalize"
                  >
                    {node.type}
                  </Badge>
                </div>
                
                {node.xp && (
                  <p className="text-sm text-muted-foreground">
                    Earn {node.xp} XP
                  </p>
                )}
              </div>

              {/* Hover effect */}
              {node.isUnlocked && !node.isCompleted && (
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <Badge variant="outline" className="text-xs">
                    Click to start
                  </Badge>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}