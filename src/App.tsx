import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Features } from './components/Features';
import { AdminFeatures } from './components/AdminFeatures';
import { HowItWorks } from './components/HowItWorks';
import { DownloadSection } from './components/DownloadSection';
import { Footer } from './components/Footer';
export function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-teal-100 selection:text-teal-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <AdminFeatures />
        <HowItWorks />
        <DownloadSection />
      </main>
      <Footer />
    </div>);

}