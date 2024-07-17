import HeroSection from './components/Home/HeroSection';
import ServicesAndToolsSection from './components/Home/ServicesAndToolsSection';
import IndustryKnowledgeSection from './components/Home/IndustryKnowledgeSection';
import FAQSection from './components/Home/FAQSection';
import CallToActionSection from './components/Home/CallToActionSection';

export default function Home() {

  return (
   <>
    <HeroSection />
    <ServicesAndToolsSection />
    <IndustryKnowledgeSection />
    <FAQSection />
    <CallToActionSection />
   </>
  );
}
