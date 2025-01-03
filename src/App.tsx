import React from 'react';
import { Code2, Smartphone, Layout, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Services />
      <Contact />
    </div>
  );
}

export default App;