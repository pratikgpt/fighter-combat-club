import Navbar        from "@/components/Navbar";
import HeroSection   from "@/components/HeroSection";
import SocialProof   from "@/components/SocialProof";
import ProgramsGrid  from "@/components/ProgramsGrid";
import CoachSection  from "@/components/CoachSection";
import ScheduleSection from "@/components/ScheduleSection";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* 1. Hero — full viewport, staggered entrance */}
      <HeroSection />

      {/* 2. Stats trust bar — quick credibility above the fold */}
      <SocialProof />

      {/* 3. Program — one program, all disciplines */}
      <ProgramsGrid />

      {/* 4. Coach — Deepak Patil, trust anchor */}
      <CoachSection />

      {/* 5. Schedule — how the week looks, hours, facility */}
      <ScheduleSection />

      {/* 6. Contact + footer — lead form, map, WhatsApp */}
      <ContactFooter />

      {/* Floating WhatsApp FAB — fixed, appears 2s after load */}
      <WhatsAppButton />
    </div>
  );
};

export default Index;
