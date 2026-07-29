import React, { useState } from 'react';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { LandingView } from './pages/LandingView';
import { DetectionView } from './pages/DetectionView';
import { AdminView } from './pages/AdminView';
import { FarmerChatbot } from './components/chatbot/FarmerChatbot';
import { MainLayout } from './layouts/MainLayout';
import { Language, RiceDisease } from './types';

export default function App() {
  const [currentView, setCurrentView] = useState<string>('home');
  const [language, setLanguage] = useState<Language>('en');
  const [voiceEnabled, setVoiceEnabled] = useState<boolean>(true);
  const [selectedSample, setSelectedSample] = useState<RiceDisease | null>(null);

  const handleStartDetectionWithSample = (sampleDisease?: RiceDisease) => {
    if (sampleDisease) {
      setSelectedSample(sampleDisease);
    } else {
      setSelectedSample(null);
    }
    setCurrentView('detect');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <MainLayout>
      <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-900">
      
      {/* Top Global Navigation Bar */}
      <Navbar
        currentView={currentView}
        setCurrentView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
        setLanguage={setLanguage}
        voiceEnabled={voiceEnabled}
        setVoiceEnabled={setVoiceEnabled}
      />

      {/* Main Viewport Router */}
      <div className="flex-1">
        {(currentView === 'home' || currentView === 'diseases' || currentView === 'research' || currentView === 'database' || currentView === 'future') && (
          <LandingView
            onStartDetectionWithSample={handleStartDetectionWithSample}
            setCurrentView={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            language={language}
          />
        )}

        {currentView === 'detect' && (
          <DetectionView
            initialDisease={selectedSample}
            language={language}
            voiceEnabled={voiceEnabled}
            setCurrentView={(view) => {
              setCurrentView(view);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentView === 'admin' && (
          <AdminView />
        )}
      </div>

      {/* Floating AI Rice Care Assistant */}
      <FarmerChatbot language={language} />

      {/* Global Footer */}
      <Footer
        setCurrentView={(view) => {
          setCurrentView(view);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        language={language}
      />

    </div>
    </MainLayout>
  );
}
