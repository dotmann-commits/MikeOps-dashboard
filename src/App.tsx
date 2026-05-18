import Navigation from './components/Navigation';
import Hero from './components/Hero';
import MikeOpsAI from './components/MikeOpsAI';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Services from './components/Services';
import AutomationRequestForm from './components/AutomationRequestForm';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import FloatingAI from './components/FloatingAI';

export default function App() {
  return (
    <div className="min-h-screen bg-[#020617] text-gray-900">
      <Navigation />

      <main className="bg-[#020617]">
        <Hero />
        <MikeOpsAI />
        <Skills />
        <Projects />
        <Services />
        <AutomationRequestForm />
      </main>

      <FloatingAI />
      <Footer />
      <CookieConsent />
    </div>
  );
}
