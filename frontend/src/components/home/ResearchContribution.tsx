import React from 'react';
import { Cpu, Award, Zap, Users, Globe2, Layers, CheckCircle2 } from 'lucide-react';

export const ResearchContribution: React.FC = () => {
  const contributions = [
    {
      title: 'Lightweight AI Model Architecture',
      desc: 'Optimized MobileNetV3 depthwise convolutions achieving 98.42% accuracy with only 5.4M parameters and a 16.2MB binary payload.',
      icon: Cpu,
      highlight: 'MobileNetV3 (5.4M params)'
    },
    {
      title: 'Transfer Learning Benchmarking',
      desc: 'Comprehensive comparative analysis across 6 convolutional architectures (MobileNetV3, EfficientNetB0, ResNet50, DenseNet121, InceptionV3, Xception).',
      icon: Layers,
      highlight: '6 Benchmark Models'
    },
    {
      title: 'High Diagnostic Accuracy',
      desc: 'Validated on 12,500 annotated rice leaf images spanning fungal, bacterial, viral, and healthy paddy conditions.',
      icon: Award,
      highlight: '98.42% Test Accuracy'
    },
    {
      title: 'Farmer-Friendly Accessibility',
      desc: 'Bilingual English & Bangla interface, audio voice narration for non-literate farmers, and 1-click printable PDF advisory reports.',
      icon: Users,
      highlight: 'Bilingual & Voice Guidance'
    },
    {
      title: 'Production Web Deployment',
      desc: 'Full-stack decoupled architecture using React 19 SPA frontend and FastAPI inference REST backend deployed on Cloud infrastructure.',
      icon: Globe2,
      highlight: 'Cloud Run / Vercel Ready'
    },
    {
      title: 'Sub-200ms Field Latency',
      desc: 'Edge-compatible inference engine allowing real-time disease identification over unstable 3G/4G rural networks.',
      icon: Zap,
      highlight: '145ms Latency'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-400 tracking-wider uppercase px-3 py-1 bg-emerald-950 rounded-full border border-emerald-500/30">
            Academic Thesis Value
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 font-serif">
            Research Contribution & Novelty
          </h2>
          <p className="text-slate-400 text-base mt-4">
            BSc Software Engineering thesis focusing on practical lightweight AI deployment for real-world agricultural problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contributions.map((c, i) => {
            const Icon = c.icon;
            return (
              <div
                key={i}
                className="p-8 rounded-2xl bg-slate-800/80 border border-slate-700/80 hover:border-emerald-500/50 transition-all group relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-emerald-950 text-emerald-400 border border-emerald-500/30 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-emerald-300 bg-emerald-950 px-2 py-1 rounded-md border border-emerald-500/30">
                    {c.highlight}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-300 transition-colors">
                  {c.title}
                </h3>

                <p className="text-xs text-slate-400 leading-relaxed mb-4">
                  {c.desc}
                </p>

                <div className="flex items-center space-x-1.5 text-xs text-emerald-400 font-semibold border-t border-slate-700/60 pt-3">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Validated Thesis Innovation</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
