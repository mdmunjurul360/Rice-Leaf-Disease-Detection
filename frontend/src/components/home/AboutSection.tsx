import React from 'react';
import { ShieldAlert, Cpu, Sparkles, TrendingUp, Sprout, BrainCircuit } from 'lucide-react';
import { Language } from '../../types';

interface AboutSectionProps {
  language: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ language }) => {
  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
            Research Context & Thesis Motivation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Why Intelligent Rice Disease Detection Matters
          </h2>
          <p className="text-slate-600 text-base mt-4 leading-relaxed">
            Rice feeds over 3.5 billion people globally. Foliar diseases cause severe yield drops, threatening food security and smallholder farmer livelihoods.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Pillar 1: Importance of Rice Disease Detection */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldAlert className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              1. The Agricultural Threat
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Fungal, bacterial, and viral infections like Leaf Blast and Bacterial Leaf Blight can reduce paddy yields by up to <strong className="text-slate-900">30% to 50%</strong>. Misidentifying early symptoms leads to incorrect chemical usage and financial disaster.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
              <li className="flex items-center space-x-2">
                <Sprout className="w-4 h-4 text-amber-600" />
                <span>Prevents widespread field destruction</span>
              </li>
              <li className="flex items-center space-x-2">
                <TrendingUp className="w-4 h-4 text-amber-600" />
                <span>Protects smallholder farm revenues</span>
              </li>
            </ul>
          </div>

          {/* Pillar 2: Importance of AI */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <BrainCircuit className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              2. The Power of Computer Vision
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Traditional manual inspection is slow, subjective, and requires specialized plant pathologists. Artificial Intelligence delivers instant, objective, 24/7 field diagnosis straight to a farmer's smartphone.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
              <li className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Eliminates human error & delays</span>
              </li>
              <li className="flex items-center space-x-2">
                <Sparkles className="w-4 h-4 text-emerald-600" />
                <span>Provides precise chemical & organic remedies</span>
              </li>
            </ul>
          </div>

          {/* Pillar 3: Importance of Transfer Learning */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition-shadow relative overflow-hidden group">
            <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-700 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Cpu className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              3. Why Transfer Learning?
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed mb-4">
              Instead of training deep networks from scratch, Transfer Learning fine-tunes deep convolutional weights (MobileNetV3, ResNet50, EfficientNet) trained on ImageNet. This yields ultra-high accuracy even on lightweight, edge-deployable models.
            </p>
            <ul className="text-xs text-slate-500 space-y-2 border-t border-slate-100 pt-4">
              <li className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>Sub-150ms MobileNetV3 inference speed</span>
              </li>
              <li className="flex items-center space-x-2">
                <Cpu className="w-4 h-4 text-blue-600" />
                <span>High accuracy on small specialized datasets</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
