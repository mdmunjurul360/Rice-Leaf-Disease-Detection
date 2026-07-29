import React, { useState } from 'react';
import { RICE_DISEASES } from '../constants/diseasesData';
import { Language, RiceDisease } from '../types';
import { Search, Filter, Sparkles, BookOpen, ChevronRight, X, ShieldAlert } from 'lucide-react';

interface DiseasesViewProps {
  onStartDetectionWithSample: (disease: RiceDisease) => void;
  language: Language;
}

export const DiseasesView: React.FC<DiseasesViewProps> = ({ onStartDetectionWithSample, language }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedDisease, setSelectedDisease] = useState<RiceDisease | null>(null);

  const categories = ['All', 'Fungal', 'Bacterial', 'Viral', 'Healthy'];

  const filteredDiseases = RICE_DISEASES.filter((d) => {
    const matchesSearch =
      d.nameEn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.nameBn.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.scientificName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || d.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <span className="px-3 py-1 rounded-lg bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
            Rice Disease Knowledgebase
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 font-sans mt-3 tracking-tight">
            Disease Catalog & Treatment Protocols
          </h1>
          <p className="text-slate-600 text-sm mt-2 leading-relaxed">
            Explore scientific descriptions, symptom diagnostics, chemical fungicide application timing, and organic remedies for major Asian paddy leaf diseases.
          </p>
        </div>

        {/* Filter & Search Bar */}
        <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Search Input */}
          <div className="relative w-full md:w-96">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search by disease name or scientific pathogen..."
              className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 bg-slate-50 text-xs focus:ring-2 focus:ring-green-500 focus:outline-hidden"
            />
          </div>

          {/* Category Chips */}
          <div className="flex items-center space-x-2 overflow-x-auto w-full md:w-auto scrollbar-none">
            <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-green-600 text-white shadow-xs'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Diseases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredDiseases.map((d) => (
            <div
              key={d.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img
                    src={d.sampleImages[0]?.url}
                    alt={d.nameEn}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 bg-slate-950/80 text-white text-xs font-mono px-2.5 py-1 rounded-lg">
                    {d.code}
                  </div>
                </div>

                <div className="p-6 space-y-2">
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-xs uppercase tracking-wider">
                    {d.category}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 font-sans">
                    {language === 'bn' ? d.nameBn : d.nameEn}
                  </h3>
                  <p className="text-xs italic text-slate-500">{d.scientificName}</p>
                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed mt-2">
                    {language === 'bn' ? d.descriptionBn : d.descriptionEn}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between">
                <button
                  onClick={() => setSelectedDisease(d)}
                  className="text-xs font-bold text-slate-700 hover:text-green-700 flex items-center space-x-1"
                >
                  <span>Read Full Protocol</span>
                  <ChevronRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => onStartDetectionWithSample(d)}
                  className="px-3.5 py-2 rounded-xl bg-green-600 text-white font-bold text-xs hover:bg-green-700 transition-colors flex items-center space-x-1 shadow-sm shadow-green-200"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Test Sample</span>
                </button>
              </div>

            </div>
          ))}
        </div>

        {/* Modal Drawer */}
        {selectedDisease && (
          <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-white rounded-2xl max-w-3xl w-full p-6 sm:p-8 relative max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200">
              <button
                onClick={() => setSelectedDisease(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center space-x-2 mb-2">
                <span className="px-2.5 py-0.5 bg-emerald-100 text-emerald-800 text-xs font-mono font-bold rounded-md">
                  {selectedDisease.code}
                </span>
                <span className="text-xs font-bold text-slate-500 uppercase">{selectedDisease.category} Pathogen</span>
              </div>

              <h2 className="text-2xl font-bold font-serif text-slate-900">{selectedDisease.nameEn}</h2>
              <p className="text-sm italic text-slate-500 mb-4">{selectedDisease.scientificName}</p>

              <div className="space-y-4 text-xs text-slate-700">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <h4 className="font-bold text-slate-900 mb-1">Description</h4>
                  <p className="leading-relaxed">{selectedDisease.descriptionEn}</p>
                </div>

                <div>
                  <h4 className="font-bold text-slate-900 mb-2">Chemical Treatments</h4>
                  {selectedDisease.treatment.chemical.map((c, i) => (
                    <div key={i} className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 mb-2">
                      <div className="font-bold text-emerald-900">{c.name}</div>
                      <div>Dosage: {c.dosage}</div>
                      <div className="text-slate-600">{c.timing}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </div>
  );
};
