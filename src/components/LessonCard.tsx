import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Play, CheckCircle, Lock, Star } from "lucide-react";

interface LessonCardProps {
  lesson: {
    id: string;
    title: string;
    description: string;
    thumbnail: string;
    difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
    progress: number;
    isUnlocked: boolean;
    isCompleted: boolean;
    estimatedTime: string;
    xpReward: number;
    topics: string[];
  };
  onStart: (lessonId: string) => void;
}

export function LessonCard({ lesson, onStart }: LessonCardProps) {
  const difficultyColors = {
    Beginner: 'bg-success text-success-foreground',
    Intermediate: 'bg-warning text-warning-foreground',
    Advanced: 'bg-destructive text-destructive-foreground'
  };

  return (
    <div className={`lesson-card animate-bounce-in ${!lesson.isUnlocked ? 'opacity-60' : ''}`}>
      <div className="relative mb-4">
        <img 
          src={lesson.thumbnail} 
          alt={lesson.title}
          className="topic-thumbnail"
        />
        {lesson.isCompleted && (
          <div className="absolute top-2 right-2 achievement-badge bg-success">
            <CheckCircle className="w-6 h-6 text-success-foreground" />
          </div>
        )}
        {!lesson.isUnlocked && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center rounded-lg">
            <Lock className="w-8 h-8 text-white" />
          </div>
        )}
      </div>

      <div className="space-y-3">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-lg font-bold text-foreground mb-1">{lesson.title}</h3>
            <p className="text-sm text-muted-foreground line-clamp-2">{lesson.description}</p>
          </div>
          <Badge className={`ml-2 ${difficultyColors[lesson.difficulty]}`}>
            {lesson.difficulty}
          </Badge>
        </div>

        <div className="flex flex-wrap gap-1">
          {lesson.topics.slice(0, 3).map((topic, index) => (
            <Badge key={index} variant="outline" className="text-xs">
              {topic}
            </Badge>
          ))}
          {lesson.topics.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{lesson.topics.length - 3} more
            </Badge>
          )}
        </div>

        {lesson.progress > 0 && lesson.progress < 100 && (
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-medium">{lesson.progress}%</span>
            </div>
            <Progress 
              value={lesson.progress} 
              className="h-2 bg-muted [&>div]:bg-gradient-to-r [&>div]:from-primary [&>div]:to-primary-light"
            />
          </div>
        )}

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span>⏱️ {lesson.estimatedTime}</span>
            <span className="flex items-center gap-1">
              <Star className="w-4 h-4 text-warning" />
              {lesson.xpReward} XP
            </span>
          </div>
          
          <Button 
            onClick={() => onStart(lesson.id)}
            disabled={!lesson.isUnlocked}
            className="eco-button"
            size="sm"
          >
            {lesson.isCompleted ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Review
              </>
            ) : (
              <>
                <Play className="w-4 h-4 mr-2" />
                {lesson.progress > 0 ? 'Continue' : 'Start'}
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}