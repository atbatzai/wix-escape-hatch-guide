
import { useEffect } from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import FrameworkOverview from '@/components/FrameworkOverview';
import ChallengeSection from '@/components/ChallengeSection';
import Implementation from '@/components/Implementation';
import Services from '@/components/Services';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SectionDivider from '@/components/SectionDivider';

const Index = () => {
  // Ensure page starts at the top when navigating to this route
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <div className="min-h-screen flex flex-col relative">
      <Header />
      <main className="flex-grow">
        <section id="hero">
          <Hero />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="challenges">
            <ChallengeSection />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="framework-overview">
            <FrameworkOverview />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>

        <section id="implementation">
          <Implementation />
        </section>
        
        <div className="relative">
          <SectionDivider position="top" color="#f7f7f7" />
          <section id="services">
            <Services />
          </section>
          <SectionDivider position="bottom" color="white" />
        </div>
        
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
