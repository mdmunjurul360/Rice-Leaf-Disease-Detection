import React from 'react';
import { Hero } from '../components/home/Hero';
import { AboutSection } from '../components/home/AboutSection';
import { KeyFeatures } from '../components/home/KeyFeatures';
import { FaqSection } from '../components/home/FaqSection';
import { ContactSection } from '../components/home/ContactSection';
import { Language, RiceDisease } from '../types';

interface LandingViewProps {
  onStartDetectionWithSample: (sampleDisease?: RiceDisease) => void;
  setCurrentView: (view: string) => void;
  language: Language;
}

export const LandingView: React.FC<LandingViewProps> = ({
  onStartDetectionWithSample,
  setCurrentView,
  language
}) => {
  return (
    <div className="min-h-screen bg-white">
      {/* 1. Hero */}
      <Hero
        onStartDetection={(sample) => onStartDetectionWithSample(sample)}
        setCurrentView={setCurrentView}
        language={language}
      />

      {/* Removed the benchmark-style showcase and mock-heavy sections to keep the landing page focused on the thesis narrative and the actual diagnostic workflow. */}
      <AboutSection language={language} />

      <KeyFeatures language={language} />

      <FaqSection />

      <ContactSection />
    </div>
  );
};
