import React from 'react';
import { UploadCloud, Cpu, Scan, Stethoscope, ShieldCheck, Download, ArrowRight } from 'lucide-react';

export const Workflow: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Upload Image',
      desc: 'Capture or upload a clear photo of the infected rice leaf.',
      icon: UploadCloud,
      color: 'from-blue-500 to-indigo-600'
    },
    {
      num: '02',
      title: 'AI Prediction',
      desc: 'MobileNetV3 / ResNet extract visual feature maps in 150ms.',
      icon: Cpu,
      color: 'from-purple-500 to-violet-600'
    },
    {
      num: '03',
      title: 'Disease Detection',
      desc: 'Multi-class classification identifies exact leaf pathogen.',
      icon: Scan,
      color: 'from-emerald-500 to-teal-600'
    },
    {
      num: '04',
      title: 'Treatment Plan',
      desc: 'Automated chemical & organic fungicide remedies generated.',
      icon: Stethoscope,
      color: 'from-amber-500 to-orange-600'
    },
    {
      num: '05',
      title: 'Prevention Tips',
      desc: 'Agronomic cultural practices to prevent outbreak spread.',
      icon: ShieldCheck,
      color: 'from-emerald-600 to-green-700'
    },
    {
      num: '06',
      title: 'Download Report',
      desc: 'Export structured PDF diagnostic advisory for field record.',
      icon: Download,
      color: 'from-slate-700 to-slate-900'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase px-3 py-1 bg-emerald-950/80 rounded-full border border-emerald-500/30">
            System Workflow
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-serif">
            How The System Works
          </h2>
          <p className="text-slate-400 text-base mt-4">
            An end-to-end automated pipeline transforming field imagery into actionable agricultural advisory.
          </p>
        </div>

        {/* Workflow Timeline Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4 relative">
          
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-800/80 rounded-2xl p-6 border border-slate-700/80 hover:border-emerald-500/50 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded-md border border-emerald-500/30">
                      STEP {step.num}
                    </span>
                    {idx < steps.length - 1 && (
                      <ArrowRight className="w-4 h-4 text-slate-600 hidden lg:block group-hover:text-emerald-400 group-hover:translate-x-1 transition-all" />
                    )}
                  </div>

                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} text-white flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>

                  <h3 className="text-base font-bold text-white mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};
