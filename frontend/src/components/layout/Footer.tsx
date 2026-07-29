import React from 'react';
import { Leaf, Award, Heart, Cpu } from 'lucide-react';
import { Language } from '../../types';
import { getTranslation } from '../../constants/translations';

interface FooterProps {
  setCurrentView: (view: string) => void;
  language: Language;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentView, language }) => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          
          {/* Col 1 & 2: Branding & Thesis Overview */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-xl bg-green-600 flex items-center justify-center text-white font-bold shadow-sm">
                <Leaf className="w-6 h-6" />
              </div>
              <span className="text-2xl font-bold text-white font-sans tracking-tight">
                AgriScan<span className="text-green-500">AI</span>
              </span>
            </div>
            
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              {getTranslation(language, 'thesisSubtitle')}
            </p>

            <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700/60 text-xs text-slate-300 space-y-1">
              <div className="flex items-center space-x-2 text-green-400 font-semibold">
                <Award className="w-4 h-4" />
                <span>BSc Software Engineering Capstone Thesis</span>
              </div>
              <p className="text-slate-400">
                Supervised Research Project on Computer Vision & Transfer Learning in Smart Agriculture.
              </p>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              System Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <button onClick={() => setCurrentView('home')} className="hover:text-emerald-400 transition-colors">
                  {getTranslation(language, 'navHome')}
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('detect')} className="hover:text-emerald-400 transition-colors flex items-center space-x-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{getTranslation(language, 'navDetect')}</span>
                </button>
              </li>
              <li>
                <button onClick={() => setCurrentView('admin')} className="hover:text-emerald-400 transition-colors">
                  {getTranslation(language, 'navAdmin')}
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: AI & Tech Stack */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Technology Stack
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>MobileNetV3 & EfficientNetB0</span>
              </li>
              <li className="flex items-center space-x-2">
                <Cpu className="w-3.5 h-3.5 text-emerald-400" />
                <span>ResNet50 & DenseNet121</span>
              </li>
              <li>• React 19 & Tailwind CSS v4</li>
              <li>• FastAPI (Python Backend)</li>
              <li>• TensorFlow & Keras</li>
              <li>• MySQL Database (Railway)</li>
              <li>• Grad-CAM Heatmap Attention</li>
            </ul>
          </div>

          {/* Col 5: Supported Diseases Quick Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Primary Rice Diseases
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>• Bacterial Leaf Blight</li>
              <li>• Brown Spot (Bipolaris)</li>
              <li>• Rice Leaf Blast</li>
              <li>• Rice Tungro Virus</li>
              <li>• Sheath Blight</li>
              <li>• Healthy Leaf Verification</li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 space-y-4 sm:space-y-0">
          <p>© 2026 AgriScan AI Thesis Project. Developed for BSc Software Engineering Degree.</p>
          <div className="flex items-center space-x-4">
            <span className="flex items-center space-x-1">
              <span>Made with</span>
              <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline" />
              <span>for Sustainable Agriculture</span>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
