import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Building2, 
  Brain, 
  Trophy, 
  Zap,
  Shield,
  Globe,
  Users,
  TrendingUp,
  CheckCircle
} from "lucide-react";

interface LandingPageProps {
  onGetStarted: () => void;
}

export const LandingPage = ({ onGetStarted }: LandingPageProps) => {
  const features = [
    {
      icon: Brain,
      title: "AI-Powered Insights",
      description: "Machine learning algorithms provide real-time recommendations for optimal farming and waste management.",
      gradient: "gradient-primary"
    },
    {
      icon: Trophy,
      title: "Gamified Rewards",
      description: "Earn sustainability points for eco-friendly practices and redeem them for valuable rewards.",
      gradient: "gradient-earth"
    },
    {
      icon: Zap,
      title: "IoT Integration",
      description: "Connect with smart sensors for real-time monitoring of soil conditions and waste levels.",
      gradient: "gradient-nature"
    },
    {
      icon: Shield,
      title: "Secure & Scalable",
      description: "Enterprise-grade security with cloud infrastructure that grows with your needs.",
      gradient: "gradient-primary"
    }
  ];

  const benefits = [
    "Reduce water consumption by up to 30%",
    "Optimize crop yields with AI predictions", 
    "Cut waste collection costs by 25%",
    "Improve community engagement",
    "Real-time environmental monitoring",
    "Sustainable practice rewards"
  ];

  const stats = [
    { value: "500+", label: "Active Farms", icon: Leaf },
    { value: "50+", label: "Smart Cities", icon: Building2 },
    { value: "2M+", label: "Sustainability Points", icon: Trophy },
    { value: "30%", label: "Resource Savings", icon: TrendingUp }
  ];

  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center space-y-8">
        <div className="space-y-4">
          <Badge className="px-4 py-2 text-sm gradient-nature text-white border-0">
            🌱 Smart Sustainability Platform
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-accent bg-clip-text text-transparent">
            Where Smart Farming Meets Smart Cities
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            AgriNova empowers farmers and city authorities with AI-driven insights and gamified sustainability rewards. 
            Join the revolution of intelligent environmental management.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="px-8 py-6 text-lg gradient-primary border-0 shadow-glow transition-spring hover:scale-105"
          >
            <Zap className="h-5 w-5 mr-2" />
            Get Started Today
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            <Globe className="h-5 w-5 mr-2" />
            Learn More
          </Button>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} className="text-center p-6 transition-spring hover:shadow-elevated">
              <CardContent className="space-y-3">
                <div className="flex justify-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl gradient-nature">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </CardContent>
            </Card>
          );
        })}
      </section>

      {/* Features Grid */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Intelligent Solutions for Tomorrow</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how AgriNova combines cutting-edge technology with sustainable practices
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-6 transition-spring hover:shadow-elevated border-0 bg-gradient-subtle">
                <CardContent className="space-y-4">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.gradient}`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="gradient-nature rounded-2xl p-8 md:p-12 text-white">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Proven Results That Matter</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Join thousands of farmers and cities already transforming their sustainability practices with measurable impact.
            </p>
            
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-white flex-shrink-0" />
                  <span className="text-white/90">{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Leaf className="h-5 w-5" />
                  <span>For Farmers</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                Smart IoT sensors monitor soil conditions 24/7, while AI provides irrigation recommendations and crop stress predictions. Earn points for sustainable practices.
              </CardContent>
            </Card>

            <Card className="bg-white/10 border-white/20 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white flex items-center space-x-2">
                  <Building2 className="h-5 w-5" />
                  <span>For Cities</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="text-white/90">
                Smart waste bins transmit fill levels for optimal collection routes. AI optimization reduces fuel consumption while community engagement drives participation.
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center space-y-8 py-12">
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Transform Your Sustainability?</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join the AgriNova community and start earning rewards for your eco-friendly practices today.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            size="lg" 
            onClick={onGetStarted}
            className="px-8 py-6 text-lg gradient-earth border-0 shadow-glow transition-spring hover:scale-105"
          >
            <Users className="h-5 w-5 mr-2" />
            Start Your Journey
          </Button>
          
          <Button variant="outline" size="lg" className="px-8 py-6 text-lg">
            Contact Sales
          </Button>
        </div>
      </section>
    </div>
  );
};