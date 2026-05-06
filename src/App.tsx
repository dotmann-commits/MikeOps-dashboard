import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Metrics from './components/Metrics';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Services from './components/Services';
import Projects from './components/Projects';
import AutomationRequestForm from './components/AutomationRequestForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navigation />
      <main>
        <Hero />
        <Metrics />
        <Skills />
        <Experience />
        <Services />
        <Projects />
        <AutomationRequestForm />
      </main>
      <Footer />
    </div>
  );
}
