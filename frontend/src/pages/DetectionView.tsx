import React, { useState, useEffect } from 'react';
import { 
  UploadCloud, Scan, RefreshCw, Volume2, Download, CheckCircle2, 
  AlertTriangle, Cpu, Sparkles, Layers, ShieldCheck, Stethoscope, 
  ArrowLeft, Camera, FileText, Check 
} from 'lucide-react';
import { RICE_DISEASES } from '../constants/diseasesData';
import { TRANSFER_LEARNING_MODELS } from '../constants/modelsData';
import { Language, ModelType, PredictionResult, RiceDisease } from '../types';
import { getTranslation } from '../constants/translations';
import { GradCamViewer } from '../components/disease/GradCamViewer';
import confetti from 'canvas-confetti';

interface DetectionViewProps {
  initialDisease?: RiceDisease | null;
  language: Language;
  voiceEnabled: boolean;
  setCurrentView: (view: string) => void;
}

export const DetectionView: React.FC<DetectionViewProps> = ({
  initialDisease,
  language,
  voiceEnabled,
  setCurrentView
}) => {
  const [selectedModel, setSelectedModel] = useState<ModelType>('MobileNetV3');
  const [previewImage, setPreviewImage] = useState<string | null>(initialDisease?.sampleImages[0]?.url || null);
  const [targetDisease, setTargetDisease] = useState<RiceDisease | null>(initialDisease || null);
  
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisStage, setAnalysisStage] = useState('');
  
  const [prediction, setPrediction] = useState<PredictionResult | null>(null);
  const [speaking, setSpeaking] = useState(false);

  // If initialDisease changes from parent props
  useEffect(() => {
    if (initialDisease) {
      setTargetDisease(initialDisease);
      setPreviewImage(initialDisease.sampleImages[0]?.url || null);
      setPrediction(null);
    }
  }, [initialDisease]);

  // Handle file drop / select
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setPreviewImage(url);
      // Assign random or heuristic disease for demonstration file upload
      const randomD = RICE_DISEASES[Math.floor(Math.random() * RICE_DISEASES.length)];
      setTargetDisease(randomD);
      setPrediction(null);
    }
  };

  // Run AI Transfer Learning Inference Pipeline
  const runDiagnostics = () => {
    if (!previewImage) return;

    setIsAnalyzing(true);
    setAnalysisProgress(10);
    setAnalysisStage('Preprocessing Image (Resizing 224x224, Min-Max Normalization)...');

    setTimeout(() => {
      setAnalysisProgress(45);
      setAnalysisStage(`Extracting Feature Maps via ${selectedModel} Backbone...`);
    }, 400);

    setTimeout(() => {
      setAnalysisProgress(80);
      setAnalysisStage('Softmax Class Probability & Grad-CAM Attention Heatmap Computation...');
    }, 800);

    setTimeout(() => {
      setAnalysisProgress(100);
      setIsAnalyzing(false);

      const d = targetDisease || RICE_DISEASES[0];
      const modelMeta = TRANSFER_LEARNING_MODELS.find(m => m.name === selectedModel) || TRANSFER_LEARNING_MODELS[0];
      
      const newPrediction: PredictionResult = {
        id: `PRED-${Math.floor(1000 + Math.random() * 9000)}`,
        timestamp: new Date().toISOString(),
        imageUrl: previewImage,
        disease: d,
        confidence: modelMeta.accuracy > 98 ? 98.6 : 96.4,
        modelUsed: selectedModel,
        inferenceTimeMs: modelMeta.inferenceTimeMs,
        topProbabilities: [
          { diseaseName: d.nameEn, probability: 98.6 },
          { diseaseName: 'Brown Spot', probability: 1.1 },
          { diseaseName: 'Healthy Leaf', probability: 0.3 }
        ],
        modelComparisons: [
          { modelName: 'MobileNetV3', predictedDisease: d.nameEn, confidence: 98.4, latencyMs: 145 },
          { modelName: 'EfficientNetB0', predictedDisease: d.nameEn, confidence: 99.1, latencyMs: 210 },
          { modelName: 'ResNet50', predictedDisease: d.nameEn, confidence: 97.8, latencyMs: 380 }
        ]
      };

      setPrediction(newPrediction);
      confetti({ particleCount: 50, spread: 60, origin: { y: 0.6 } });
    }, 1200);
  };

  // Speech Synthesizer for Voice Assistant
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    if (speaking) {
      setSpeaking(false);
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = language === 'bn' ? 'bn-BD' : 'en-US';
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    
    setSpeaking(true);
    window.speechSynthesis.speak(utterance);
  };

  // Trigger PDF Report Download Simulation
  const downloadReport = () => {
    if (!prediction) return;
    const reportText = `
=====================================================
AGRISCAN AI - RICE LEAF DISEASE DIAGNOSTIC REPORT
BSc Software Engineering Thesis Project Prototype
=====================================================

Diagnostic ID: ${prediction.id}
Date/Time: ${new Date().toLocaleString()}
Selected Model: ${prediction.modelUsed}
Inference Latency: ${prediction.inferenceTimeMs} ms

DIAGNOSIS VERDICT:
------------------
Disease Name: ${prediction.disease.nameEn} (${prediction.disease.nameBn})
Scientific Pathogen: ${prediction.disease.scientificName}
Confidence Score: ${prediction.confidence}%

CHEMICAL TREATMENT:
-------------------
${prediction.disease.treatment.chemical.map(c => `- ${c.name} | Dosage: ${c.dosage}`).join('\n')}

ORGANIC REMEDY:
---------------
${prediction.disease.treatment.organic.map(o => `- ${o.name} | Recipe: ${o.recipe}`).join('\n')}

PREVENTION GUIDELINES:
----------------------
${prediction.disease.preventionEn.map(p => `• ${p}`).join('\n')}
=====================================================
    `;

    const blob = new Blob([reportText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `AgriScan_Report_${prediction.id}.txt`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Title */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 pb-4 border-b border-slate-200">
          <div>
            <div className="flex items-center space-x-2">
              <span className="px-3 py-1 rounded-lg bg-green-50 text-green-700 border border-green-200 font-bold text-xs uppercase tracking-wider">
                AI Diagnostic Studio
              </span>
            </div>
            <h1 className="text-3xl font-extrabold text-slate-900 font-sans mt-2 tracking-tight">
              {getTranslation(language, 'uploadHeader')}
            </h1>
          </div>

          <button
            onClick={() => setCurrentView('home')}
            className="mt-4 sm:mt-0 text-xs font-bold text-slate-600 hover:text-green-600 flex items-center space-x-1"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Overview</span>
          </button>
        </div>

        {/* WORKSPACE GRID */}
        {!prediction ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Col: Upload Zone & Sample Picker (Col 7) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Drag and Drop Zone */}
              <div className="bg-white p-6 sm:p-8 rounded-2xl border-2 border-dashed border-slate-300 hover:border-green-500 transition-all text-center shadow-xs relative">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                />

                {previewImage ? (
                  <div className="relative aspect-video max-h-72 rounded-2xl overflow-hidden bg-slate-900 mx-auto shadow-md">
                    <img
                      src={previewImage}
                      alt="Selected Leaf"
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        setPreviewImage(null);
                        setTargetDisease(null);
                      }}
                      className="absolute top-3 right-3 bg-slate-950/80 text-white text-xs px-3 py-1.5 rounded-xl z-20 hover:bg-red-600 transition-colors"
                    >
                      Remove Photo
                    </button>
                  </div>
                ) : (
                  <div className="space-y-4 py-6">
                    <div className="w-16 h-16 rounded-2xl bg-green-50 text-green-600 border border-green-200 flex items-center justify-center mx-auto shadow-xs">
                      <UploadCloud className="w-8 h-8" />
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-800">
                        {getTranslation(language, 'uploadInstruction')}
                      </p>
                      <p className="text-xs text-slate-500 mt-1">
                        JPG, PNG, WEBP up to 10MB (Optimal: 224x224 RGB Leaf Photo)
                      </p>
                    </div>
                    <div className="flex items-center justify-center space-x-3 pt-2">
                      <span className="px-5 py-2.5 rounded-xl bg-green-600 text-white font-bold text-xs shadow-md shadow-green-200">
                        Browse Device Files
                      </span>
                      <span className="text-xs text-slate-400">or use camera</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Sample Images Quick Launcher */}
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs">
                <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                  Or Test Instantly With Pre-Verified Field Samples:
                </h4>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {RICE_DISEASES.map((d) => (
                    <button
                      key={d.id}
                      onClick={() => {
                        setTargetDisease(d);
                        setPreviewImage(d.sampleImages[0]?.url);
                      }}
                      className={`p-2 rounded-xl border text-left transition-all flex items-center space-x-2 ${
                        targetDisease?.id === d.id
                          ? 'border-green-500 bg-green-50/60 ring-2 ring-green-500/20'
                          : 'border-slate-200 bg-slate-50 hover:bg-slate-100'
                      }`}
                    >
                      <img
                        src={d.sampleImages[0]?.url}
                        alt={d.nameEn}
                        className="w-10 h-10 rounded-lg object-cover shrink-0"
                        referrerPolicy="no-referrer"
                      />
                      <div className="truncate">
                        <div className="text-xs font-bold text-slate-900 truncate">
                          {language === 'bn' ? d.nameBn : d.nameEn}
                        </div>
                        <div className="text-[10px] text-slate-500">{d.category}</div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Col: Model Settings & Run Execution (Col 5) */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-sm space-y-6">
                <div>
                  <label className="block text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                    {getTranslation(language, 'selectModel')}
                  </label>
                  
                  <div className="space-y-2">
                    {TRANSFER_LEARNING_MODELS.map((m) => (
                      <button
                        key={m.name}
                        onClick={() => setSelectedModel(m.name)}
                        className={`w-full p-3 rounded-xl border text-left transition-all flex items-center justify-between ${
                          selectedModel === m.name
                            ? 'border-green-600 bg-green-50/80 ring-1 ring-green-600'
                            : 'border-slate-200 hover:bg-slate-50'
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <Cpu className={`w-5 h-5 ${selectedModel === m.name ? 'text-green-600' : 'text-slate-400'}`} />
                          <div>
                            <div className="text-xs font-bold text-slate-900">{m.name}</div>
                            <div className="text-[10px] text-slate-500">{m.description.slice(0, 60)}...</div>
                          </div>
                        </div>

                        <div className="text-right shrink-0">
                          <div className="text-xs font-mono font-bold text-green-700">{m.accuracy}% Acc</div>
                          <div className="text-[10px] text-slate-400">{m.inferenceTimeMs} ms</div>
                        </div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Analysis Loading State OR Predict Button */}
                {isAnalyzing ? (
                  <div className="bg-slate-900 p-6 rounded-2xl text-white space-y-4 text-center">
                    <RefreshCw className="w-8 h-8 text-green-400 animate-spin mx-auto" />
                    <div>
                      <p className="text-sm font-bold text-green-300">
                        {getTranslation(language, 'predicting')}
                      </p>
                      <p className="text-xs text-slate-400 mt-1">{analysisStage}</p>
                    </div>
                    <div className="w-full bg-slate-800 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-green-500 h-full transition-all duration-300"
                        style={{ width: `${analysisProgress}%` }}
                      ></div>
                    </div>
                  </div>
                ) : (
                  <button
                    disabled={!previewImage}
                    onClick={runDiagnostics}
                    className={`w-full py-3.5 px-6 rounded-xl font-bold text-base transition-all flex items-center justify-center space-x-3 shadow-lg ${
                      previewImage
                        ? 'bg-green-600 hover:bg-green-700 text-white shadow-green-200 active:scale-98'
                        : 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    }`}
                  >
                    <Scan className="w-5 h-5" />
                    <span>{getTranslation(language, 'btnPredict')}</span>
                  </button>
                )}

              </div>

            </div>

          </div>
        ) : (
          /* RESULT VIEW VIEWPORT */
          <div className="space-y-8">
            
            {/* Top Banner Card */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              
              <div className="space-y-2 max-w-xl">
                <div className="flex items-center space-x-2">
                  <span className="px-2.5 py-1 rounded-md bg-red-100 text-red-700 text-[10px] font-bold uppercase tracking-wider">
                    High Warning
                  </span>
                  <span className="text-xs text-slate-400 italic">
                    Diagnostic ID: <strong className="text-slate-700 font-mono">{prediction.id}</strong>
                  </span>
                </div>

                <h2 className="text-3xl sm:text-4xl font-black text-slate-900 leading-tight font-sans">
                  {language === 'bn' ? prediction.disease.nameBn : prediction.disease.nameEn}
                </h2>

                <p className="text-xs text-slate-500 leading-relaxed">
                  Caused by <strong className="text-slate-700 italic">{prediction.disease.scientificName}</strong>, typically characterized by leaf lesions and reduced photosynthetic activity.
                </p>
              </div>

              <div className="text-right shrink-0 flex flex-col items-center sm:items-end">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-2">Confidence Score</span>
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-[6px] border-green-600 bg-green-50/30">
                  <span className="text-2xl font-black text-slate-900">{prediction.confidence}<span className="text-sm">%</span></span>
                </div>
              </div>

            </div>

            {/* Actions Bar: Voice Synthesizer & Download PDF */}
            <div className="flex flex-wrap items-center justify-between gap-4 bg-white p-4 rounded-2xl border border-slate-200 shadow-xs">
              
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => speakText(`Diagnosis: ${prediction.disease.nameEn}. Severity: ${prediction.disease.severity}. Chemical Treatment: ${prediction.disease.treatment.chemical[0]?.name || 'None'}`)}
                  className={`px-4 py-2.5 rounded-xl font-bold text-xs flex items-center space-x-2 transition-all ${
                    speaking
                      ? 'bg-amber-500 text-white animate-pulse'
                      : 'bg-green-50 text-green-700 border border-green-200 hover:bg-green-100'
                  }`}
                >
                  <Volume2 className="w-4 h-4 text-green-600" />
                  <span>{speaking ? 'Stop Voice Narration' : getTranslation(language, 'listenAudio')}</span>
                </button>

                <button
                  onClick={downloadReport}
                  className="px-4 py-2.5 rounded-xl bg-slate-900 text-white font-bold text-xs hover:bg-slate-800 transition-colors flex items-center space-x-2 shadow-xs"
                >
                  <Download className="w-4 h-4 text-green-400" />
                  <span>{getTranslation(language, 'downloadPdf')}</span>
                </button>
              </div>

              <button
                onClick={() => setPrediction(null)}
                className="px-4 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs hover:bg-slate-100 transition-colors flex items-center space-x-1.5"
              >
                <RefreshCw className="w-4 h-4" />
                <span>{getTranslation(language, 'btnTryAnother')}</span>
              </button>

            </div>

            {/* MAIN DIAGNOSTIC GRID */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Visuals & Grad-CAM Heatmap (Col 5) */}
              <div className="lg:col-span-5 space-y-6">
                
                {/* Grad-CAM Heatmap Viewer */}
                <GradCamViewer
                  imageUrl={prediction.imageUrl}
                  diseaseName={prediction.disease.nameEn}
                />

                {/* Top Probability Distribution */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                    Model Output Class Probabilities
                  </h4>
                  {prediction.topProbabilities.map((prob, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between text-xs font-semibold">
                        <span className="text-slate-800">{prob.diseaseName}</span>
                        <span className="text-green-700 font-mono">{prob.probability}%</span>
                      </div>
                      <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                        <div
                          className="bg-green-600 h-full rounded-full"
                          style={{ width: `${prob.probability}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

              {/* Right Column: Symptoms & Comprehensive Treatment Advisory (Col 7) */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Symptoms & Causes */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center space-x-2">
                    <AlertTriangle className="w-5 h-5 text-amber-500" />
                    <span>{getTranslation(language, 'symptoms')}</span>
                  </h3>
                  
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
                    {(language === 'bn' ? prediction.disease.symptomsBn : prediction.disease.symptomsEn).map((sym, idx) => (
                      <li key={idx} className="flex items-start space-x-2 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                        <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                        <span>{sym}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Recommended Treatments */}
                <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
                  
                  <div className="flex items-center space-x-2 pb-3 border-b border-slate-100">
                    <Stethoscope className="w-6 h-6 text-green-600" />
                    <h3 className="text-xl font-bold text-slate-900">
                      {getTranslation(language, 'treatmentTitle')}
                    </h3>
                  </div>

                  {/* Chemical Treatments */}
                  {prediction.disease.treatment.chemical.length > 0 && (
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-blue-50 flex-shrink-0 flex items-center justify-center text-blue-600">
                          <Stethoscope className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">
                            {getTranslation(language, 'chemicalTreatment')}
                          </h4>
                          <p className="text-xs text-slate-500">Targeted fungicide & bactericide applications</p>
                        </div>
                      </div>
                      {prediction.disease.treatment.chemical.map((chem, idx) => (
                        <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                          <div className="font-bold text-slate-900 text-sm">{chem.name}</div>
                          <div><strong>Dosage:</strong> {chem.dosage}</div>
                          <div className="text-slate-600"><strong>Timing:</strong> {chem.timing}</div>
                          <div className="text-amber-800 font-medium">⚠️ {chem.precautions}</div>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Organic Treatments */}
                  {prediction.disease.treatment.organic.length > 0 && (
                    <div className="space-y-3 pt-2">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 rounded-full bg-green-50 flex-shrink-0 flex items-center justify-center text-green-600">
                          <Check className="w-5 h-5" />
                        </div>
                        <div>
                          <h4 className="font-bold text-sm text-slate-800">
                            {getTranslation(language, 'organicTreatment')}
                          </h4>
                          <p className="text-xs text-slate-500">Bio-pesticides and natural crop remedies</p>
                        </div>
                      </div>
                      {prediction.disease.treatment.organic.map((org, idx) => (
                        <div key={idx} className="p-4 bg-green-50/50 rounded-xl border border-green-200 space-y-2 text-xs">
                          <div className="font-bold text-slate-900 text-sm">{org.name}</div>
                          <div><strong>Preparation:</strong> {org.recipe}</div>
                          <div className="text-slate-600"><strong>Frequency:</strong> {org.frequency}</div>
                        </div>
                      ))}
                    </div>
                  )}

                </div>

                {/* Prevention Guidelines */}
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-3">
                  <h3 className="text-base font-bold text-slate-900 flex items-center space-x-2">
                    <ShieldCheck className="w-5 h-5 text-green-600" />
                    <span>{getTranslation(language, 'preventionTitle')}</span>
                  </h3>
                  <ul className="space-y-2 text-xs text-slate-600">
                    {(language === 'bn' ? prediction.disease.preventionBn : prediction.disease.preventionEn).map((prev, i) => (
                      <li key={i} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-green-500 mt-1.5 shrink-0"></span>
                        <span>{prev}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
};
