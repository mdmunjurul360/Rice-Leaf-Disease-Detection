import React, { useState } from 'react';
import { RICE_DISEASES } from '../../constants/diseasesData';
import { RiceDisease, Language } from '../../types';
import { ArrowUpRight, Plus, Sparkles, X, Check, ShieldAlert } from 'lucide-react';

interface DiseaseCardsProps {
  onSelectDisease: (disease: RiceDisease) => void;
  language: Language;
}

export const DiseaseCards: React.FC<DiseaseCardsProps> = ({ onSelectDisease, language }) => {
  const [selectedDisease, setSelectedDisease] = useState<RiceDisease | null>(null);

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold text-emerald-700 tracking-wider uppercase px-3 py-1 bg-emerald-100 rounded-full border border-emerald-200">
            Disease Knowledgebase
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 font-serif">
            Supported Disease Classes
          </h2>
          <p className="text-slate-600 text-base mt-4">
            Trained and benchmarked on thousands of field samples across primary Asian paddy diseases.
          </p>
        </div>

        {/* Disease Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {RICE_DISEASES.map((disease) => (
            <div
              key={disease.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image Cover */}
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={disease.sampleImages[0]?.url}
                    alt={disease.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-2.5 py-1 rounded-lg border border-slate-700">
                    {disease.code}
                  </div>
                  <div className={`absolute top-3 right-3 text-xs font-bold px-2.5 py-1 rounded-lg ${
                    disease.severity === 'High'
                      ? 'bg-red-500 text-white'
                      : disease.severity === 'Medium'
                      ? 'bg-amber-500 text-white'
                      : 'bg-emerald-600 text-white'
                  }`}>
                    {disease.severity} Severity
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <span className="text-[10px] font-bold tracking-wider uppercase text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-sm">
                    {disease.category} Pathogen
                  </span>
                  
                  <h3 className="text-xl font-bold text-slate-900 mt-2 font-serif">
                    {language === 'bn' ? disease.nameBn : disease.nameEn}
                  </h3>
                  
                  <p className="text-xs italic text-slate-500 mt-0.5">
                    {disease.scientificName}
                  </p>

                  <p className="text-slate-600 text-xs mt-3 line-clamp-3 leading-relaxed">
                    {language === 'bn' ? disease.descriptionBn : disease.descriptionEn}
                  </p>
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 pt-0 flex items-center justify-between gap-2 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedDisease(disease)}
                  className="text-xs font-semibold text-slate-700 hover:text-emerald-700 transition-colors flex items-center space-x-1"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={() => onSelectDisease(disease)}
                  className="px-3 py-1.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs shadow-xs transition-all flex items-center space-x-1"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Test Sample</span>
                </button>
              </div>

            </div>
          ))}

          {/* Placeholder Card for Future Expansion */}
          <div className="bg-dashed border-2 border-dashed border-slate-300 rounded-2xl p-8 flex flex-col items-center justify-center text-center text-slate-500 min-h-[360px] hover:border-emerald-400 transition-colors">
            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4">
              <Plus className="w-6 h-6 text-slate-400" />
            </div>
            <h3 className="text-base font-bold text-slate-800">
              More Classes Coming Soon
            </h3>
            <p className="text-xs text-slate-500 mt-2 max-w-xs">
              Dataset expanding to Bakanae (Foolish Seedling), False Smut, and Nutrient Deficiency spot patterns.
            </p>
          </div>

        </div>

        {/* Modal Drawer for Disease Details */}
        {selectedDisease && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              
              <button
                onClick={() => setSelectedDisease(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-3 mb-2">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-mono font-bold bg-emerald-100 text-emerald-800">
                  {selectedDisease.code}
                </span>
                <span className="text-xs font-semibold text-slate-500 uppercase">
                  {selectedDisease.category} Category
                </span>
              </div>

              <h2 className="text-2xl font-bold text-slate-900 font-serif">
                {selectedDisease.nameEn}
              </h2>
              <p className="text-sm italic text-slate-500 mb-4">
                {selectedDisease.scientificName}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Key Symptoms
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {selectedDisease.symptomsEn.map((s, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    Favorable Weather Conditions
                  </h4>
                  <div className="bg-slate-50 p-3 rounded-xl border border-slate-200 text-xs space-y-1">
                    <div><strong>Temperature:</strong> {selectedDisease.favorableConditions.temperature}</div>
                    <div><strong>Humidity:</strong> {selectedDisease.favorableConditions.humidity}</div>
                    <div><strong>Rainfall:</strong> {selectedDisease.favorableConditions.rainfall}</div>
                  </div>
                </div>
              </div>

              <div className="space-y-4 border-t border-slate-200 pt-4">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center space-x-1.5">
                  <ShieldAlert className="w-4 h-4 text-emerald-600" />
                  <span>Chemical Treatment</span>
                </h4>
                {selectedDisease.treatment.chemical.map((chem, idx) => (
                  <div key={idx} className="bg-emerald-50/60 p-3 rounded-xl border border-emerald-100 text-xs space-y-1">
                    <div className="font-bold text-emerald-900">{chem.name}</div>
                    <div><strong>Dosage:</strong> {chem.dosage}</div>
                    <div className="text-slate-600">{chem.timing}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  onClick={() => {
                    const d = selectedDisease;
                    setSelectedDisease(null);
                    onSelectDisease(d);
                  }}
                  className="px-5 py-2.5 rounded-xl bg-emerald-600 text-white font-bold text-sm hover:bg-emerald-700 transition-colors shadow-md"
                >
                  Run Diagnostics on this Disease
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
