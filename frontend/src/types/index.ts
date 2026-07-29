export type Language = 'en' | 'bn';

export type ModelType = 
  | 'MobileNetV3'
  | 'EfficientNetB0'
  | 'ResNet50'
  | 'DenseNet121'
  | 'InceptionV3'
  | 'Xception';

export interface Treatment {
  id?: string;
  chemical: {
    name: string;
    dosage: string;
    timing: string;
    precautions: string;
  }[];
  organic: {
    name: string;
    recipe: string;
    frequency: string;
  }[];
}

export interface RiceDisease {
  id: string;
  code: string;
  nameEn: string;
  nameBn: string;
  scientificName: string;
  category: 'Fungal' | 'Bacterial' | 'Viral' | 'Healthy';
  severity: 'Low' | 'Medium' | 'High' | 'None';
  descriptionEn: string;
  descriptionBn: string;
  symptomsEn: string[];
  symptomsBn: string[];
  causesEn: string[];
  causesBn: string[];
  favorableConditions: {
    temperature: string;
    humidity: string;
    rainfall: string;
  };
  treatment: Treatment;
  preventionEn: string[];
  preventionBn: string[];
  sampleImages: {
    url: string;
    label: string;
  }[];
}

export interface PredictionResult {
  id: string;
  timestamp: string;
  imageUrl: string;
  disease: RiceDisease;
  confidence: number; // e.g. 98.4
  modelUsed: ModelType;
  inferenceTimeMs: number;
  gradCamHeatmapUrl?: string;
  topProbabilities: {
    diseaseName: string;
    probability: number;
  }[];
  modelComparisons: {
    modelName: ModelType;
    predictedDisease: string;
    confidence: number;
    latencyMs: number;
  }[];
}

export interface ModelMetrics {
  name: ModelType;
  accuracy: number;
  precision: number;
  recall: number;
  f1Score: number;
  inferenceTimeMs: number;
  parametersMillion: number;
  modelSizeMb: number;
  description: string;
  confusionMatrix: number[][];
}

export interface UserLog {
  id: string;
  farmerName: string;
  location: string;
  diseaseDetected: string;
  confidence: number;
  date: string;
  status: 'Verified' | 'Pending Review' | 'Flagged';
}

export interface DatabaseTableSchema {
  tableName: string;
  description: string;
  columns: {
    name: string;
    type: string;
    key?: 'PK' | 'FK';
    description: string;
  }[];
}
