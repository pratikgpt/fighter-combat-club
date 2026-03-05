import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProgramsGrid from "@/components/ProgramsGrid";
import ScheduleSection from "@/components/ScheduleSection";
import ContactFooter from "@/components/ContactFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ProgramsGrid />
      <ScheduleSection />
      <ContactFooter />
    </div>
  );
};

export default Index;
