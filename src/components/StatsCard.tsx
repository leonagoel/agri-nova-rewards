import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "neutral";
  icon: LucideIcon;
  gradient?: "primary" | "earth" | "nature";
}

export const StatsCard = ({ 
  title, 
  value, 
  change, 
  trend, 
  icon: Icon,
  gradient = "primary"
}: StatsCardProps) => {
  const gradientClass = {
    primary: "gradient-primary",
    earth: "gradient-earth", 
    nature: "gradient-nature"
  }[gradient];

  const trendColor = {
    up: "text-success",
    down: "text-destructive",
    neutral: "text-muted-foreground"
  }[trend];

  return (
    <Card className="overflow-hidden transition-spring hover:shadow-elevated">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-foreground">{title}</p>
            <p className="text-2xl font-bold text-foreground">{value}</p>
            <p className={`text-sm font-medium ${trendColor}`}>
              {trend === "up" ? "↗" : trend === "down" ? "↘" : "→"} {change}
            </p>
          </div>
          
          <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${gradientClass}`}>
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};