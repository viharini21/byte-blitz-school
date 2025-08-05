import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { CoursesSection } from "@/components/CoursesSection";
import { AchievementsSection } from "@/components/AchievementsSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <CoursesSection />
      <AchievementsSection />
      <Footer />
    </div>
  );
};

export default Index;
