import React, { useState } from 'react';
import { TRANSFER_LEARNING_MODELS, EPOCH_ACCURACY_DATA } from '../constants/modelsData';
import { ModelMetrics } from '../types';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar 
} from 'recharts';
import { Cpu, Award, Zap, Layers, Download, CheckCircle2 } from 'lucide-react';

export const ResearchView: React.FC = () => {
  const [selectedModelTab, setSelectedModelTab] = useState<ModelMetrics>(TRANSFER_LEARNING_MODELS[0]);

  return (
    <div className="min-h-screen bg-slate-900 text-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Title */}
        <div className="max-w-3xl space-y-3">
          <span className="px-3 py-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-500/30 text-xs font-bold font-mono">
            BSc Capstone Thesis Benchmarks
          </span>
          <h1 className="text-3xl sm:text-5xl font-extrabold font-serif text-white">
            Transfer Learning Model Evaluation
          </h1>
          <p className="text-slate-400 text-sm leading-relaxed">
            Comparative performance benchmarks of 6 convolutional neural architectures fine-tuned on the 12,500 annotated rice leaf dataset.
          </p>
        </div>

        {/* AI PIPELINE DIAGRAM */}
        <div className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-4">
          <h3 className="text-lg font-bold text-white font-serif flex items-center space-x-2">
            <Layers className="w-5 h-5 text-emerald-400" />
            <span>End-to-End Deep Learning Pipeline Architecture</span>
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-2 text-center text-xs">
            {[
              'Dataset (12,500 Images)',
              'Preprocessing (Resize 224x224)',
              'Data Augmentation (Flips, Rotations)',
              'Transfer Learning Backbone',
              'Model Fine-Tuning (Adam W)',
              'Model Evaluation (Confusion Matrix)',
              'Saved Model (TF / ONNX)',
              'FastAPI API Endpoint',
              'React 19 Frontend'
            ].map((step, idx) => (
              <div key={idx} className="p-3 bg-slate-900 rounded-xl border border-slate-700/80 space-y-1 flex flex-col justify-between">
                <span className="text-[10px] font-mono text-emerald-400 font-bold">0{idx + 1}</span>
                <span className="text-[11px] font-medium text-slate-200">{step}</span>
              </div>
            ))}
          </div>
        </div>

        {/* RECHARTS TRAINING CURVES & ACCURACY BARS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Epoch Accuracy Line Chart */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Award className="w-5 h-5 text-emerald-400" />
              <span>Training Accuracy vs Epochs</span>
            </h3>

            <div className="h-72 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={EPOCH_ACCURACY_DATA}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="epoch" stroke="#94a3b8" />
                  <YAxis domain={[60, 100]} stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }} />
                  <Legend />
                  <Line type="monotone" dataKey="MobileNetV3" stroke="#10b981" strokeWidth={3} />
                  <Line type="monotone" dataKey="EfficientNetB0" stroke="#3b82f6" strokeWidth={2} />
                  <Line type="monotone" dataKey="ResNet50" stroke="#f59e0b" strokeWidth={2} />
                  <Line type="monotone" dataKey="DenseNet121" stroke="#a855f7" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Inference Latency Bar Chart */}
          <div className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center space-x-2">
              <Zap className="w-5 h-5 text-amber-400" />
              <span>Model Inference Latency (ms)</span>
            </h3>

            <div className="h-72 w-full text-xs">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={TRANSFER_LEARNING_MODELS}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                  <XAxis dataKey="name" stroke="#94a3b8" />
                  <YAxis stroke="#94a3b8" />
                  <Tooltip contentStyle={{ backgroundColor: '#0f172a', borderColor: '#334155', color: '#fff' }} />
                  <Bar dataKey="inferenceTimeMs" fill="#10b981" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

        </div>

        {/* COMPARATIVE BENCHMARK TABLE */}
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700 overflow-hidden shadow-2xl">
          <div className="p-6 border-b border-slate-700 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg font-bold text-white font-serif">
                Comprehensive Comparative Performance Matrix
              </h3>
              <p className="text-xs text-slate-400">Tested on 1,875 test set images</p>
            </div>

            <button
              onClick={() => alert('Jupyter Notebook training scripts downloaded.')}
              className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl text-xs font-bold flex items-center space-x-2 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Training Code (.ipynb)</span>
            </button>
          </div>

          <div className="overflow-x-auto text-xs">
            <table className="w-full text-left">
              <thead className="bg-slate-900 text-slate-300 uppercase font-mono border-b border-slate-700">
                <tr>
                  <th className="p-4">Model Architecture</th>
                  <th className="p-4">Accuracy</th>
                  <th className="p-4">Precision</th>
                  <th className="p-4">Recall</th>
                  <th className="p-4">F1-Score</th>
                  <th className="p-4">Latency</th>
                  <th className="p-4">Params (M)</th>
                  <th className="p-4">Model Size</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/60 font-mono">
                {TRANSFER_LEARNING_MODELS.map((m) => (
                  <tr key={m.name} className="hover:bg-slate-700/40 transition-colors">
                    <td className="p-4 font-bold text-emerald-400 font-sans">{m.name}</td>
                    <td className="p-4 text-emerald-300 font-bold">{m.accuracy}%</td>
                    <td className="p-4">{m.precision}%</td>
                    <td className="p-4">{m.recall}%</td>
                    <td className="p-4">{m.f1Score}%</td>
                    <td className="p-4 text-amber-300">{m.inferenceTimeMs} ms</td>
                    <td className="p-4">{m.parametersMillion}M</td>
                    <td className="p-4">{m.modelSizeMb} MB</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
};
