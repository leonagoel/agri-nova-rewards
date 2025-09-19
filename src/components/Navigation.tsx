import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Leaf, Building2, Trophy, BarChart3, Menu, X } from "lucide-react";

interface NavigationProps {
  currentView: "landing" | "farmer" | "city";
  onViewChange: (view: "landing" | "farmer" | "city") => void;
}

export const Navigation = ({ currentView, onViewChange }: NavigationProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "landing", label: "Home", icon: BarChart3 },
    { id: "farmer", label: "Farmer Dashboard", icon: Leaf },
    { id: "city", label: "City Dashboard", icon: Building2 },
  ];

  return (
    <Card className="sticky top-4 z-50 mb-8 shadow-card">
      <nav className="flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg gradient-nature">
            <Leaf className="h-6 w-6 text-white" />
          </div>
          <h1 className="text-xl font-bold text-foreground">AgriNova</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Button
                key={item.id}
                variant={currentView === item.id ? "default" : "ghost"}
                onClick={() => onViewChange(item.id as any)}
                className="flex items-center space-x-2 transition-spring"
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
              </Button>
            );
          })}
          
          <div className="flex items-center space-x-2 ml-4 pl-4 border-l border-border">
            <Trophy className="h-4 w-4 text-accent" />
            <span className="text-sm font-medium">2,450 pts</span>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="sm"
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </Button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 md:hidden">
            <Card className="p-4 space-y-2 shadow-elevated">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Button
                    key={item.id}
                    variant={currentView === item.id ? "default" : "ghost"}
                    onClick={() => {
                      onViewChange(item.id as any);
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center space-x-2 justify-start"
                  >
                    <Icon className="h-4 w-4" />
                    <span>{item.label}</span>
                  </Button>
                );
              })}
              
              <div className="flex items-center space-x-2 pt-2 border-t border-border">
                <Trophy className="h-4 w-4 text-accent" />
                <span className="text-sm font-medium">2,450 pts</span>
              </div>
            </Card>
          </div>
        )}
      </nav>
    </Card>
  );
};