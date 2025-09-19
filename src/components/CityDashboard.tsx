import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { StatsCard } from "./StatsCard";
import { ProgressRing } from "./ProgressRing";
import { 
  Trash2, 
  Route, 
  Users, 
  TrendingDown,
  MapPin,
  Fuel,
  Clock,
  CheckCircle,
  AlertTriangle,
  Recycle
} from "lucide-react";

export const CityDashboard = () => {
  const wasteBins = [
    { id: "BIN001", location: "Central Park", fillLevel: 85, status: "needs_collection", lastCollection: "2 hours ago" },
    { id: "BIN002", location: "Main Street", fillLevel: 45, status: "ok", lastCollection: "4 hours ago" },
    { id: "BIN003", location: "Shopping Mall", fillLevel: 92, status: "urgent", lastCollection: "1 hour ago" },
    { id: "BIN004", location: "University", fillLevel: 60, status: "ok", lastCollection: "3 hours ago" },
  ];

  const routes = [
    { id: "Route A", efficiency: 94, fuelSaved: "12L", time: "2.5h", bins: 8 },
    { id: "Route B", efficiency: 87, fuelSaved: "8L", time: "3.1h", bins: 12 },
    { id: "Route C", efficiency: 91, fuelSaved: "10L", time: "2.8h", bins: 10 },
  ];

  const communityStats = [
    { district: "Downtown", segregation: 89, points: 1250 },
    { district: "Suburbs", segregation: 76, points: 890 },
    { district: "Industrial", segregation: 65, points: 720 },
  ];

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="gradient-earth rounded-xl p-8 text-white">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold">City Operations Center</h2>
            <p className="text-white/90">Smart waste management for a cleaner tomorrow.</p>
          </div>
          
          <div className="mt-4 md:mt-0 flex items-center space-x-4">
            <ProgressRing 
              percentage={78} 
              size={100}
              color="white"
            >
              <div className="text-center">
                <div className="text-lg font-bold">78%</div>
                <div className="text-xs opacity-90">Efficiency</div>
              </div>
            </ProgressRing>
            
            <div className="text-right">
              <div className="text-2xl font-bold">2,860</div>
              <div className="text-sm opacity-90">Community Points</div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <StatsCard
          title="Active Bins"
          value="248"
          change="12 need collection"
          trend="neutral"
          icon={Trash2}
          gradient="primary"
        />
        <StatsCard
          title="Route Efficiency"
          value="89%"
          change="+3% this week"
          trend="up"
          icon={Route}
          gradient="nature"
        />
        <StatsCard
          title="Fuel Saved"
          value="156L"
          change="+24L today"
          trend="up"
          icon={Fuel}
          gradient="earth"
        />
        <StatsCard
          title="Community Score"
          value="82%"
          change="+5% this month"
          trend="up"
          icon={Users}
          gradient="primary"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Smart Waste Bins */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Trash2 className="h-5 w-5 text-primary" />
              <span>Smart Waste Bins</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {wasteBins.map((bin) => (
              <div key={bin.id} className="flex items-center justify-between p-4 rounded-lg bg-muted/50">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <h4 className="font-medium">{bin.id}</h4>
                    <p className="text-sm text-muted-foreground">{bin.location}</p>
                    <p className="text-xs text-muted-foreground">Last: {bin.lastCollection}</p>
                  </div>
                </div>
                
                <div className="text-right space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-20">
                      <Progress 
                        value={bin.fillLevel} 
                        className="h-2"
                      />
                    </div>
                    <span className="text-sm font-medium">{bin.fillLevel}%</span>
                  </div>
                  
                  <Badge 
                    variant={
                      bin.status === "urgent" ? "destructive" : 
                      bin.status === "needs_collection" ? "destructive" : 
                      "default"
                    }
                    className="capitalize"
                  >
                    {bin.status === "needs_collection" ? (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    ) : bin.status === "urgent" ? (
                      <AlertTriangle className="h-3 w-3 mr-1" />
                    ) : (
                      <CheckCircle className="h-3 w-3 mr-1" />
                    )}
                    {bin.status.replace("_", " ")}
                  </Badge>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Route Optimization */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Route className="h-5 w-5 text-accent" />
              <span>AI Route Optimization</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {routes.map((route, index) => (
              <div key={index} className="p-4 rounded-lg bg-gradient-subtle border border-border">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{route.id}</h4>
                  <Badge variant="outline" className="text-success">
                    {route.efficiency}% efficient
                  </Badge>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <Fuel className="h-4 w-4 text-accent" />
                    <span>{route.fuelSaved} saved</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Clock className="h-4 w-4 text-primary" />
                    <span>{route.time}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Trash2 className="h-4 w-4 text-muted-foreground" />
                    <span>{route.bins} bins</span>
                  </div>
                </div>
                
                <Button size="sm" className="mt-3 w-full" variant="outline">
                  View Route Details
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Community Engagement */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <Recycle className="h-5 w-5 text-success" />
            <span>Community Engagement</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communityStats.map((district, index) => (
              <div key={index} className="p-6 rounded-lg bg-muted/50 border border-border">
                <div className="text-center space-y-4">
                  <h4 className="font-medium text-lg">{district.district}</h4>
                  
                  <ProgressRing 
                    percentage={district.segregation} 
                    size={80}
                    color="hsl(var(--success))"
                  >
                    <div className="text-center">
                      <div className="text-sm font-bold">{district.segregation}%</div>
                    </div>
                  </ProgressRing>
                  
                  <div>
                    <p className="text-sm text-muted-foreground">Waste Segregation</p>
                    <p className="text-lg font-bold text-success">{district.points} pts</p>
                    <p className="text-xs text-muted-foreground">Community earned</p>
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