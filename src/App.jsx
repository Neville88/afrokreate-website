import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import FloatingWhatsApp from './components/FloatingWhatsApp.jsx';
import ScrollToTop from './components/ScrollToTop.jsx';
import Home from './pages/Home.jsx';
import Programs from './pages/Programs.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';

export default function App() {
  const location = useLocation();

  // Update <title> per route for accessibility & SEO
  useEffect(() => {
    const titles = {
      '/': 'The AfroKreate Academy — Build your skills, shape your future',
      '/programs': 'Programs — The AfroKreate Academy',
      '/about': 'About — The AfroKreate Academy',
      '/contact': 'Contact — The AfroKreate Academy',
    };
    document.title = titles[location.pathname] || titles['/'];
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-cream text-ink">
      <ScrollToTop />
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
