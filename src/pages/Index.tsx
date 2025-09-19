import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { LandingPage } from "@/components/LandingPage";
import { FarmerDashboard } from "@/components/FarmerDashboard";
import { CityDashboard } from "@/components/CityDashboard";

const Index = () => {
  const [currentView, setCurrentView] = useState<"landing" | "farmer" | "city">("landing");

  const handleGetStarted = () => {
    setCurrentView("farmer");
  };

  const renderContent = () => {
    switch (currentView) {
      case "farmer":
        return <FarmerDashboard />;
      case "city":
        return <CityDashboard />;
      default:
        return <LandingPage onGetStarted={handleGetStarted} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <div className="container mx-auto px-4 py-4">
        <Navigation currentView={currentView} onViewChange={setCurrentView} />
        <main className="pb-8">
          {renderContent()}
        </main>
      </div>
    </div>
  );
};

export default Index;
