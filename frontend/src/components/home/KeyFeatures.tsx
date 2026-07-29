import React from 'react';
import { Scan, Stethoscope, ShieldCheck, BarChart3, UploadCloud, Zap } from 'lucide-react';
import { Language } from '../../types';

interface KeyFeaturesProps {
  language: Language;
}

export const KeyFeatures: React.FC<KeyFeaturesProps> = () => {
  const features = [
    {
      icon: Scan,
      title: 'Automated Disease Detection',
      desc: 'Supports the inspection of common rice leaf disease categories through a simple image-based workflow suitable for academic demonstration.',
      badge: 'Deep Learning'
    },
    {
      icon: Stethoscope,
      title: 'Treatment Recommendation',
      desc: 'Provides exact dosage, chemical fungicides/bactericides, and eco-friendly bio-pesticide recipes tailored to the specific infection.',
      badge: 'Actionable Advisory'
    },
    {
      icon: ShieldCheck,
      title: 'Prevention & Management Guidelines',
      desc: 'Delivers cultural practices, water management, split-fertilizer schedules, and resistant seed variety recommendations.',
      badge: 'Agronomy'
    },
    {
      icon: BarChart3,
      title: 'Confidence Score & Heatmap',
      desc: 'Presents the diagnostic result and supporting visual explanation in a clear format for review and discussion.',
      badge: 'Explainable AI'
    },
    {
      icon: UploadCloud,
      title: 'Multi-Modal Image Input',
      desc: 'Supports direct smartphone photos, gallery upload, drag & drop, or live web camera capture with instant auto-crop.',
      badge: 'User Friendly'
    },
    {
      icon: Zap,
      title: 'Sub-150ms Inference Latency',
      desc: 'Designed to keep the prototype lightweight and responsive for classroom and presentation use.',
      badge: 'High Performance'
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
            System Capabilities
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Key Intelligent Features
          </h2>
          <p className="text-slate-600 text-base mt-4">
            Engineered to bridge high-performance computer vision research with practical, field-ready agricultural tools.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="p-8 rounded-2xl bg-white border border-slate-200 shadow-xs hover:border-emerald-300 hover:shadow-lg transition-all group"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-100/80 px-2.5 py-1 rounded-full uppercase border border-emerald-200">
                    {item.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
