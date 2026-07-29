import React from 'react';
import { Leaf, LayoutDashboard, Languages, Sparkles, Scan } from 'lucide-react';
import { Language } from '../../types';
import { getTranslation } from '../../constants/translations';

interface NavbarProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  language: Language;
  setLanguage: (lang: Language) => void;
  voiceEnabled: boolean;
  setVoiceEnabled: (enabled: boolean) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentView,
  setCurrentView,
  language,
  setLanguage,
  voiceEnabled,
  setVoiceEnabled
}) => {
  // Removed the extra informational navigation items so the interface stays focused on the main thesis workflow.
  const navItems = [
    { id: 'home', label: getTranslation(language, 'navHome'), icon: Leaf },
    { id: 'detect', label: getTranslation(language, 'navDetect'), icon: Scan, highlight: true },
    { id: 'admin', label: getTranslation(language, 'navAdmin'), icon: LayoutDashboard }
  ];

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-xs transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          
          {/* Logo & Thesis Title */}
          <div 
            className="flex items-center space-x-3 cursor-pointer group"
            onClick={() => setCurrentView('home')}
          >
            <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white shadow-sm group-hover:bg-green-700 transition-colors">
              <Leaf className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center space-x-2">
                <span className="text-xl font-bold tracking-tight text-slate-900 leading-none font-sans">
                  AgriScan<span className="text-green-600">AI</span>
                </span>
                <span className="px-2 py-0.5 text-[10px] text-green-600 font-semibold uppercase tracking-widest bg-green-50 rounded-md border border-green-200">
                  Thesis
                </span>
              </div>
              <p className="text-[10px] text-green-600 font-semibold uppercase tracking-widest hidden md:block mt-1">
                Intelligent Rice Guard
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium uppercase tracking-wider">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = currentView === item.id;
              
              if (item.highlight) {
                return (
                  <button
                    key={item.id}
                    onClick={() => setCurrentView(item.id)}
                    className="flex items-center space-x-2 px-4 py-2 rounded-xl bg-green-600 text-white font-bold hover:bg-green-700 transition-all shadow-md shadow-green-200 active:scale-95"
                  >
                    <Icon className="w-4 h-4" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => setCurrentView(item.id)}
                  className={`flex items-center space-x-1.5 py-1 text-xs font-semibold uppercase tracking-wider transition-colors ${
                    isActive
                      ? 'text-green-600 border-b-2 border-green-600 font-bold'
                      : 'text-slate-500 hover:text-green-600'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-green-600' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Right Action Controls: Language Toggle & Voice */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            
            {/* Language Selector */}
            <button
              onClick={() => setLanguage(language === 'en' ? 'bn' : 'en')}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-green-50 text-green-700 font-semibold rounded-lg text-xs border border-green-200 hover:bg-green-100 transition-all"
              title="Toggle Language (English / বাংলা)"
            >
              <Languages className="w-3.5 h-3.5 text-green-600" />
              <span>{language === 'en' ? 'বাংলা' : 'English'}</span>
            </button>

            {/* Voice Assistant Toggle */}
            <button
              onClick={() => setVoiceEnabled(!voiceEnabled)}
              className={`p-2 rounded-lg border transition-all ${
                voiceEnabled
                  ? 'bg-green-50 border-green-200 text-green-700 shadow-xs'
                  : 'bg-slate-50 border-slate-200 text-slate-400 hover:text-slate-600'
              }`}
              title={voiceEnabled ? 'Voice Assistant Enabled' : 'Enable Voice Assistant'}
            >
              <Sparkles className={`w-4 h-4 ${voiceEnabled ? 'text-green-600 animate-spin-slow' : ''}`} />
            </button>

            {/* Quick Mobile Scan CTA */}
            <button
              onClick={() => setCurrentView('detect')}
              className="lg:hidden p-2 rounded-xl bg-green-600 text-white hover:bg-green-700 transition-colors"
              title="Diagnose Leaf"
            >
              <Scan className="w-5 h-5" />
            </button>

          </div>
        </div>

        {/* Mobile Sub-Navigation Bar */}
        <div className="lg:hidden flex items-center justify-between py-2 border-t border-slate-200 overflow-x-auto text-xs scrollbar-none">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setCurrentView(item.id)}
                className={`flex items-center space-x-1 px-3 py-1.5 rounded-md whitespace-nowrap transition-colors uppercase text-[11px] font-semibold tracking-wider ${
                  isActive
                    ? 'bg-green-600 text-white font-bold'
                    : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{item.label}</span>
              </button>
            );
          })}
        </div>

      </div>
    </header>
  );
};
