import Hero from '../components/home/Hero.jsx';
import ProblemBand from '../components/home/ProblemBand.jsx';
import Features from '../components/home/Features.jsx';
import NavigatorSection from '../components/home/NavigatorSection.jsx';
import Manifesto from '../components/home/Manifesto.jsx';
import ProgramsTeaser from '../components/home/ProgramsTeaser.jsx';
import Testimonials from '../components/home/Testimonials.jsx';
import CTABand from '../components/home/CTABand.jsx';

// 8 sections (under the 9-section ceiling).
// Order: hook → urgency → what we offer → HOW YOU START NOW → philosophy → programmes → proof → final ask.
export default function Home() {
  return (
    <>
      <Hero />
      <ProblemBand />
      <Features />
      <NavigatorSection />
      <Manifesto />
      <ProgramsTeaser />
      <Testimonials />
      <CTABand />
    </>
  );
}
