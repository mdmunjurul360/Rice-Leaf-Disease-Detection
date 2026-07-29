import React from 'react';
import { CheckCircle2, XCircle, Zap, Clock, ShieldCheck, DollarSign, Award } from 'lucide-react';

export const ComparisonTable: React.FC = () => {
  const comparisonData = [
    {
      feature: 'Diagnostic Speed',
      traditional: '2 - 7 Days (Waiting for agricultural expert visit)',
      aiSystem: 'Under 200 Milliseconds (Instant field diagnosis)',
      icon: Clock
    },
    {
      feature: 'Accuracy & Objectivity',
      traditional: 'Subjective visual guessing (prone to misclassification)',
      aiSystem: '98.4% Precision backed by Transfer Learning neural models',
      icon: Award
    },
    {
      feature: 'Accessibility & Availability',
      traditional: 'Limited extension officer availability in remote areas',
      aiSystem: '24/7 Web & Smartphone availability anytime, anywhere',
      icon: Zap
    },
    {
      feature: 'Treatment Precision',
      traditional: 'Over-application of costly broad-spectrum chemicals',
      aiSystem: 'Targeted fungicide dosage + organic eco-friendly options',
      icon: ShieldCheck
    },
    {
      feature: 'Cost Efficiency',
      traditional: 'High loss from delayed treatment & unnecessary sprays',
      aiSystem: 'Free instant access saving crops before severe damage',
      icon: DollarSign
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
            Why Choose Our System
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Traditional Method vs AI-Powered System
          </h2>
          <p className="text-slate-600 text-base mt-4">
            See how modern Deep Learning transforms crop disease management compared to conventional manual techniques.
          </p>
        </div>

        {/* Comparison Table Grid */}
        <div className="max-w-5xl mx-auto bg-slate-50 rounded-2xl border border-slate-200 shadow-md overflow-hidden">
          
          {/* Table Header */}
          <div className="grid grid-cols-12 bg-slate-900 text-white text-sm font-bold p-4 sm:p-6 border-b border-slate-800">
            <div className="col-span-4 sm:col-span-3 font-serif text-emerald-400">
              Feature Metric
            </div>
            <div className="col-span-4 sm:col-span-4 text-slate-300">
              Traditional Inspection
            </div>
            <div className="col-span-4 sm:col-span-5 text-emerald-400 font-bold flex items-center space-x-1">
              <span>AgriScan AI System</span>
              <span className="text-[10px] bg-emerald-600 text-white px-2 py-0.5 rounded-full uppercase">Next Gen</span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-slate-200 text-xs sm:text-sm">
            {comparisonData.map((row, idx) => {
              const Icon = row.icon;
              return (
                <div key={idx} className="grid grid-cols-12 p-4 sm:p-6 items-center hover:bg-white transition-colors">
                  
                  {/* Metric */}
                  <div className="col-span-4 sm:col-span-3 font-bold text-slate-900 flex items-center space-x-2">
                    <Icon className="w-4 h-4 text-emerald-600 hidden sm:block shrink-0" />
                    <span>{row.feature}</span>
                  </div>

                  {/* Traditional */}
                  <div className="col-span-4 sm:col-span-4 text-slate-600 flex items-start space-x-2 pr-2">
                    <XCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                    <span>{row.traditional}</span>
                  </div>

                  {/* AI System */}
                  <div className="col-span-4 sm:col-span-5 font-semibold text-slate-900 bg-emerald-50/70 p-3 rounded-xl border border-emerald-200/80 flex items-start space-x-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-emerald-950">{row.aiSystem}</span>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
};
