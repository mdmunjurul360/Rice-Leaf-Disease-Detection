import React from 'react';
import { Scan, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import { Language, RiceDisease } from '../../types';
import { getTranslation } from '../../constants/translations';

interface HeroProps {
  onStartDetection: (sampleDisease?: RiceDisease) => void;
  setCurrentView: (view: string) => void;
  language: Language;
}

export const Hero: React.FC<HeroProps> = ({
  onStartDetection,
  setCurrentView,
  language
}) => {
  return (
    <section className="relative overflow-hidden bg-slate-900 text-white pt-12 sm:pt-20 pb-20 sm:pb-28">
      
      {/* Background Decorative Grid & Glow Effects */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#16a34a15_1px,transparent_1px),linear-gradient(to_bottom,#16a34a15_1px,transparent_1px)] bg-[size:32px_32px]"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-green-600/15 rounded-full blur-3xl pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-green-400 text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-sm">
            <Sparkles className="w-4 h-4 text-green-400 animate-pulse" />
            <span>{getTranslation(language, 'heroBadge')}</span>
          </div>
        </div>

        {/* Main Headline & Description */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight font-sans">
            An Intelligent <span className="text-green-500">Rice Leaf Disease</span> Detection & Treatment System
          </h1>

          <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal max-w-3xl mx-auto">
            {getTranslation(language, 'heroDescription')}
          </p>

          {/* Primary CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => onStartDetection()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-base shadow-lg shadow-green-900/30 transition-all flex items-center justify-center space-x-3 group"
            >
              <Scan className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>{getTranslation(language, 'btnUpload')}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setCurrentView('detect')}
              className="w-full sm:w-auto px-6 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 font-semibold text-base transition-all flex items-center justify-center space-x-2"
            >
              <ShieldCheck className="w-5 h-5 text-green-400" />
              <span>{getTranslation(language, 'navDetect')}</span>
            </button>
          </div>
        </div>

        {/* Removed the dashboard-style metrics strip and sample gallery to avoid presenting fake demo statistics or mock counts. */}
        <div className="mt-12 sm:mt-16 max-w-4xl mx-auto rounded-2xl border border-slate-700 bg-slate-800/80 p-6 text-left shadow-xl">
          <div className="flex items-center space-x-2 text-green-400 font-semibold text-sm uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Prototype Workflow</span>
          </div>
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
            Upload a leaf image from the detection page to review symptoms, treatment guidance, and the overall thesis workflow in a simple academic format.
          </p>
        </div>

      </div>
    </section>
  );
};
