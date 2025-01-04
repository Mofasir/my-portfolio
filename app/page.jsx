// components
import ContactSection from "@/components/ContactSection";
import IntroSection from "@/components/IntroSection";
import ResumeSection from "@/components/ResumeSection";
import ServiceSection from "@/components/ServiceSection";
import WorkSection from "@/components/WorkSection";

const Home = () => {
  return (
    <div>
      <IntroSection />
      <ServiceSection />
      <ResumeSection />
      <WorkSection />
      <ContactSection />
    </div>
  )
}

export default Home