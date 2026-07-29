import React from 'react';
import { Sparkles, Mic, Languages, Camera, CloudSun, Bot, Smartphone, WifiOff, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';

interface FutureFeaturesViewProps {
  language: Language;
}

export const FutureFeaturesView: React.FC<FutureFeaturesViewProps> = ({ language }) => {
  const futureFeatures = [
    {
      title: 'Voice Assistant (Bangla & English TTS)',
      desc: 'Audio speech narration of diagnostic remedies for non-literate farmers in field conditions.',
      status: 'Active Live Preview',
      icon: Mic,
      color: 'from-amber-500 to-orange-600'
    },
    {
      title: 'Full Bangla Language Integration (বাংলা)',
      desc: '1-click localization covering all disease symptoms, chemical dosages, and agronomy advice.',
      status: 'Active Live Preview',
      icon: Languages,
      color: 'from-emerald-500 to-green-600'
    },
    {
      title: 'Real-Time Camera Video Stream Detection',
      desc: 'Live camera continuous bounding-box lesion tracking in paddy field walk-throughs.',
      status: 'In Development',
      icon: Camera,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      title: 'Weather & Infection Risk Forecast',
      desc: 'Integration with OpenWeatherMap API to correlate humidity (>90%) with fungal blast outbreaks.',
      status: 'Planned Integration',
      icon: CloudSun,
      color: 'from-sky-500 to-cyan-600'
    },
    {
      title: 'Interactive Farmer AI Chatbot',
      desc: 'Generative LLM agricultural assistant for crop care and fertilizer queries.',
      status: 'Active Live Widget',
      icon: Bot,
      color: 'from-purple-500 to-violet-600'
    },
    {
      title: 'Offline Edge Mobile App (ONNX Runtime PWA)',
      desc: 'Local browser TensorFlow.js / ONNX model caching allowing offline predictions without internet.',
      status: 'Planned Offline Cache',
      icon: WifiOff,
      color: 'from-slate-700 to-slate-900'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
            System Expansion Roadmap
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-slate-900">
            Future System Features & Innovation
          </h1>
          <p className="text-slate-600 text-sm leading-relaxed">
            Roadmap for scaling the BSc Software Engineering thesis prototype into a production agricultural SaaS platform across South Asia.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureFeatures.map((f, i) => {
            const Icon = f.icon;
            return (
              <div
                key={i}
                className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xs hover:shadow-lg transition-all space-y-4 relative overflow-hidden"
              >
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.color} text-white flex items-center justify-center shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className={`text-[10px] font-bold px-2.5 py-1 rounded-full uppercase border ${
                    f.status.includes('Active')
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-slate-100 text-slate-600 border-slate-200'
                  }`}>
                    {f.status}
                  </span>
                </div>

                <h3 className="text-xl font-bold font-serif text-slate-900">{f.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{f.desc}</p>

                <div className="pt-3 border-t border-slate-100 flex items-center space-x-1.5 text-xs text-emerald-700 font-semibold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Roadmap Stage</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
};
