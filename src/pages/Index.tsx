import { useState } from "react";
import { UserProfile } from "@/components/UserProfile";
import { LessonCard } from "@/components/LessonCard";
import { ProgressPath } from "@/components/ProgressPath";
import { AchievementSystem } from "@/components/AchievementSystem";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Target, Trophy, Users, Leaf, Bell } from "lucide-react";

// Import generated images
import heroImage from "@/assets/hero-environmental-learning.jpg";
import waterConservationImg from "@/assets/lesson-water-conservation.jpg";
import renewableEnergyImg from "@/assets/lesson-renewable-energy.jpg";
import wasteManagementImg from "@/assets/lesson-waste-management.jpg";

const Index = () => {
  const [activeTab, setActiveTab] = useState("learn");

  // Mock data for demonstration
  const userData = {
    name: "Aarav Sharma",
    avatar: "",
    level: 5,
    xp: 1250,
    maxXp: 1500,
    streak: 7,
    totalPoints: 5420,
    badges: ["Water Guardian", "Eco Warrior", "Green Champion", "Solar Advocate"]
  };

  const lessonsData = [
    {
      id: "1",
      title: "Water Conservation Basics",
      description: "Learn how to save water at home and school. Discover simple techniques that make a big difference for our planet.",
      thumbnail: waterConservationImg,
      difficulty: 'Beginner' as const,
      progress: 75,
      isUnlocked: true,
      isCompleted: false,
      estimatedTime: "15 min",
      xpReward: 100,
      topics: ["Water Saving", "Home Tips", "Community Action"]
    },
    {
      id: "2", 
      title: "Renewable Energy Solutions",
      description: "Explore solar, wind, and other clean energy sources. Understand how renewable energy can power our future.",
      thumbnail: renewableEnergyImg,
      difficulty: 'Intermediate' as const,
      progress: 0,
      isUnlocked: true,
      isCompleted: false,
      estimatedTime: "20 min",
      xpReward: 150,
      topics: ["Solar Power", "Wind Energy", "Clean Technology", "Future Energy"]
    },
    {
      id: "3",
      title: "Waste Management & Recycling",
      description: "Master the art of waste segregation and recycling. Learn how to turn waste into valuable resources.",
      thumbnail: wasteManagementImg,
      difficulty: 'Beginner' as const,
      progress: 100,
      isUnlocked: true,
      isCompleted: true,
      estimatedTime: "18 min",
      xpReward: 120,
      topics: ["Recycling", "Composting", "Waste Reduction", "Circular Economy"]
    }
  ];

  const pathNodes = [
    {
      id: "1",
      title: "Environmental Basics",
      type: 'lesson' as const,
      isCompleted: true,
      isUnlocked: true,
      isCurrent: false,
      xp: 100
    },
    {
      id: "2", 
      title: "Water Conservation",
      type: 'lesson' as const,
      isCompleted: false,
      isUnlocked: true,
      isCurrent: true,
      xp: 150
    },
    {
      id: "3",
      title: "First Water Challenge",
      type: 'challenge' as const,
      isCompleted: false,
      isUnlocked: false,
      isCurrent: false,
      xp: 200
    },
    {
      id: "4",
      title: "Water Guardian Badge",
      type: 'achievement' as const,
      isCompleted: false,
      isUnlocked: false,
      isCurrent: false,
      xp: 300
    }
  ];

  const achievementsData = [
    {
      id: "1",
      title: "First Steps",
      description: "Complete your first environmental lesson",
      icon: 'leaf' as const,
      progress: 1,
      maxProgress: 1,
      isUnlocked: true,
      rarity: 'common' as const,
      xpReward: 50
    },
    {
      id: "2",  
      title: "Water Guardian",
      description: "Complete 5 water conservation activities",
      icon: 'droplets' as const,
      progress: 3,
      maxProgress: 5,
      isUnlocked: false,
      rarity: 'rare' as const,
      xpReward: 200
    },
    {
      id: "3",
      title: "Eco Champion", 
      description: "Maintain a 30-day learning streak",
      icon: 'trophy' as const,
      progress: 7,
      maxProgress: 30,
      isUnlocked: false,
      rarity: 'epic' as const,
      xpReward: 500
    },
    {
      id: "4",
      title: "Planet Protector",
      description: "Complete all environmental modules",
      icon: 'target' as const,
      progress: 0,
      maxProgress: 10,
      isUnlocked: false,
      rarity: 'legendary' as const,
      xpReward: 1000
    }
  ];

  const handleLessonStart = (lessonId: string) => {
    console.log("Starting lesson:", lessonId);
    // In a real app, this would navigate to the lesson
  };

  const handleNodeClick = (nodeId: string) => {
    console.log("Node clicked:", nodeId);
    // In a real app, this would open the appropriate content
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center">
                <Leaf className="w-6 h-6 text-primary-foreground" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">EcoLearn</h1>
                <p className="text-sm text-muted-foreground">Gamified Environmental Education</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Button variant="outline" size="sm">
                <Bell className="w-4 h-4 mr-2" />
                Notifications
              </Button>
              <Button variant="outline" size="sm">
                <Users className="w-4 h-4 mr-2" />
                Community
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 to-primary-light/10 border-b border-border">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div>
                <Badge className="mb-4 bg-success text-success-foreground">
                  🌱 Building Sustainable Future
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4 leading-tight">
                  Learn, Play, and Save Our
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light"> Planet</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  Join thousands of students across India in our gamified environmental education platform. 
                  Learn through interactive lessons, earn rewards, and make a real impact on your community.
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button className="eco-button">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Start Learning
                </Button>
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  <Target className="w-5 h-5 mr-2" />
                  Take Challenge
                </Button>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Environmental Learning Hero" 
                className="rounded-2xl shadow-[var(--shadow-card)] w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="space-y-6">
            <UserProfile user={userData} />
            <ProgressPath nodes={pathNodes} onNodeClick={handleNodeClick} />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs defaultValue="learn" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="learn" className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" />
                  Learn
                </TabsTrigger>
                <TabsTrigger value="challenges" className="flex items-center gap-2">
                  <Target className="w-4 h-4" />
                  Challenges
                </TabsTrigger>
                <TabsTrigger value="achievements" className="flex items-center gap-2">
                  <Trophy className="w-4 h-4" />
                  Achievements
                </TabsTrigger>
              </TabsList>

              <TabsContent value="learn" className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-4">Available Lessons</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {lessonsData.map((lesson) => (
                      <LessonCard 
                        key={lesson.id} 
                        lesson={lesson} 
                        onStart={handleLessonStart}
                      />
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="challenges" className="space-y-6">
                <div className="lesson-card text-center py-12">
                  <Target className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">Challenges Coming Soon!</h3>
                  <p className="text-muted-foreground mb-6">
                    Real-world environmental challenges will be available here. 
                    Complete lessons to unlock exciting challenges!
                  </p>
                  <Button className="eco-button">
                    <BookOpen className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="achievements" className="space-y-6">
                <AchievementSystem achievements={achievementsData} />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card/50 mt-16">
        <div className="container mx-auto px-4 py-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-2">
              <Leaf className="w-6 h-6 text-primary" />
              <span className="text-lg font-semibold text-foreground">EcoLearn</span>
            </div>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Empowering students across India with environmental education through gamification. 
              Together, we're building a sustainable future for all.
            </p>
            <div className="flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>🌍 Supporting SDG Goals</span>
              <span>🎓 Aligned with NEP 2020</span>
              <span>🏆 Gamified Learning</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;