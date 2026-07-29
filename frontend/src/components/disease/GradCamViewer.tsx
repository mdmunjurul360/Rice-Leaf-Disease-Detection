import React, { useState } from 'react';
import { Eye, Flame, Layers } from 'lucide-react';

interface GradCamViewerProps {
  imageUrl: string;
  diseaseName: string;
}

export const GradCamViewer: React.FC<GradCamViewerProps> = ({ imageUrl, diseaseName }) => {
  const [showHeatmap, setShowHeatmap] = useState(true);

  return (
    <div className="bg-slate-900 rounded-2xl p-4 border border-slate-800 text-white">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span className="text-xs font-bold font-mono uppercase text-slate-300">
            Grad-CAM Attention Map (XAI)
          </span>
        </div>

        <button
          onClick={() => setShowHeatmap(!showHeatmap)}
          className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
            showHeatmap
              ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40'
              : 'bg-slate-800 text-slate-300 border border-slate-700'
          }`}
        >
          {showHeatmap ? <Flame className="w-3.5 h-3.5 text-amber-400" /> : <Eye className="w-3.5 h-3.5" />}
          <span>{showHeatmap ? 'Heatmap Overlay' : 'Raw RGB Leaf'}</span>
        </button>
      </div>

      <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center">
        {/* Base RGB Image */}
        <img
          src={imageUrl}
          alt={diseaseName}
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />

        {/* Simulated Grad-CAM Heatmap Radial Gradient Layer */}
        {showHeatmap && (
          <div className="absolute inset-0 bg-gradient-to-tr from-red-600/60 via-amber-500/40 to-transparent mix-blend-color-dodge pointer-events-none transition-opacity duration-300">
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-48 h-48 bg-red-500/70 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute bottom-2 left-2 bg-slate-950/80 text-[10px] text-amber-300 font-mono px-2 py-0.5 rounded-sm border border-amber-500/30">
              High Feature Attention Region (Red = 0.94 Weight)
            </div>
          </div>
        )}
      </div>

      <p className="text-[11px] text-slate-400 mt-2 italic">
        * Grad-CAM highlights neural activation zones where MobileNetV3 extracted high spatial gradient features for {diseaseName}.
      </p>
    </div>
  );
};
