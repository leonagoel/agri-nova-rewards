import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { StatsCard } from "./StatsCard";
import { ProgressRing } from "./ProgressRing";
import { 
  Droplets, 
  Thermometer, 
  Sprout, 
  Trophy, 
  Lightbulb,
  TrendingUp,
  Award,
  Target
} from "lucide-react";

export const FarmerDashboard = () => {
  const soilData = [
    { sensor: "Field A", moisture: 65, temp: 24, ph: 6.8, status: "optimal" },
    { sensor: "Field B", moisture: 45, temp: 26, ph: 7.1, status: "needs_water" },
    { sensor: "Field C", moisture: 78, temp: 23, ph: 6.5, status: "optimal" },
  ];

  const achievements = [
    { title: "Water Saver", desc: "Reduced irrigation by 20%", points: 150, new: true },
    { title: "Pest Control Pro", desc: "Early pest detection", points: 200, new: false },
    { title: "Soil Health Expert", desc: "Maintained optimal pH", points: 180, new: false },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="gradient-nature rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">Good morning, Sarah!</h2>
            <p className="text-white/90">Your crops are thriving. Here's today's insights.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <ProgressRing 
              percentage={85} 
              size={100}
              color="white"
            >
              <div className="text-center">
                <div className="text-lg font-bold">85%</div>
                <div className="text-xs opacity-90">Health Score</div>
              </div>
            </ProgressRing>
            
            <div className="text-right">
              <div className="text-2xl font-bold">2,450</div>
              <div className="text-sm opacity-90">Sustainability Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Avg Soil Moisture"
          value="62%"
          change="+5% today"
          trend="up"
          icon={Droplets}
          gradient="primary"
        />
        <StatsCard
          title="Temperature"
          value="24°C"
          change="Normal range"
          trend="neutral"
          icon={Thermometer}
          gradient="earth"
        />
        <StatsCard
          title="Crop Growth"
          value="95%"
          change="+2% this week"
          trend="up"
          icon={Sprout}
          gradient="nature"
        />
        <StatsCard
          title="Points Earned"
          value="320"
          change="+50 today"
          trend="up"
          icon={Trophy}
          gradient="earth"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Soil Sensors */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Droplets className="h-5 w-5 text-primary" />
              <span>IoT Soil Sensors</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {soilData.map((sensor, index) => (
              <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div>
                  <h4 className="font-medium">{sensor.sensor}</h4>
                  <div className="flex items-center space-x-4 mt-1 text-sm text-muted-foreground">
                    <span>💧 {sensor.moisture}%</span>
                    <span>🌡️ {sensor.temp}°C</span>
                    <span>⚗️ pH {sensor.ph}</span>
                  </div>
                </div>
                
                <Badge 
                  variant={sensor.status === "optimal" ? "default" : "destructive"}
                  className="capitalize"
                >
                  {sensor.status.replace("_", " ")}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* AI Recommendations */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Lightbulb className="h-5 w-5 text-accent" />
              <span>AI Recommendations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="p-4 rounded-lg bg-accent/10 border border-accent/20">
              <div className="flex items-start space-x-3">
                <Droplets className="h-5 w-5 text-accent mt-0.5" />
                <div>
                  <h4 className="font-medium text-accent-foreground">Irrigation Alert</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Field B needs watering. Optimal time: 6 AM tomorrow. Expected water saving: 15L
                  </p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Schedule Irrigation
                  </Button>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <div className="flex items-start space-x-3">
                <TrendingUp className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <h4 className="font-medium">Crop Optimization</h4>
                  <p className="text-sm text-muted-foreground mt-1">
                    Weather forecast suggests increasing nitrogen by 5% for optimal growth.
                  </p>
                  <Button size="sm" className="mt-2" variant="outline">
                    Apply Suggestion
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Achievements & Gamification */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Award className="h-5 w-5 text-accent" />
            <span>Recent Achievements</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {achievements.map((achievement, index) => (
              <div key={index} className="relative p-4 rounded-lg bg-gradient-subtle border border-border">
                {achievement.new && (
                  <Badge className="absolute -top-2 -right-2 bg-accent text-accent-foreground">
                    New!
                  </Badge>
                )}
                
                <div className="flex items-center space-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-earth">
                    <Target className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-medium">{achievement.title}</h4>
                    <p className="text-sm text-muted-foreground">{achievement.desc}</p>
                    <p className="text-sm font-medium text-accent">+{achievement.points} points</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};