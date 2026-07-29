import { ModelMetrics } from '../types';

export const TRANSFER_LEARNING_MODELS: ModelMetrics[] = [
  {
    name: 'MobileNetV3',
    accuracy: 98.42,
    precision: 98.10,
    recall: 98.35,
    f1Score: 98.22,
    inferenceTimeMs: 145,
    parametersMillion: 5.4,
    modelSizeMb: 16.2,
    description: 'Ultra-lightweight architecture using depthwise separable convolutions and squeeze-and-excitation blocks. Optimized specifically for mobile and edge device deployment on field smartphones.',
    confusionMatrix: [
      [245, 3, 1, 0, 1, 0],
      [2, 238, 4, 1, 0, 0],
      [1, 3, 241, 2, 1, 0],
      [0, 1, 2, 244, 1, 0],
      [1, 0, 1, 2, 240, 1],
      [0, 0, 0, 0, 0, 250]
    ]
  },
  {
    name: 'EfficientNetB0',
    accuracy: 99.15,
    precision: 99.05,
    recall: 99.12,
    f1Score: 99.08,
    inferenceTimeMs: 210,
    parametersMillion: 5.3,
    modelSizeMb: 21.5,
    description: 'Compound scaling method that uniformly scales depth, width, and resolution. Achieves state-of-the-art accuracy with minimal parameters.',
    confusionMatrix: [
      [248, 1, 1, 0, 0, 0],
      [1, 243, 1, 0, 0, 0],
      [0, 2, 246, 0, 0, 0],
      [0, 0, 1, 248, 1, 0],
      [0, 0, 0, 1, 244, 0],
      [0, 0, 0, 0, 0, 250]
    ]
  },
  {
    name: 'ResNet50',
    accuracy: 97.85,
    precision: 97.60,
    recall: 97.72,
    f1Score: 97.66,
    inferenceTimeMs: 380,
    parametersMillion: 25.6,
    modelSizeMb: 98.0,
    description: 'Deep residual network utilizing skip connections to solve vanishing gradient problems. High feature representation capability for complex multi-lesion samples.',
    confusionMatrix: [
      [240, 5, 3, 1, 1, 0],
      [4, 235, 4, 2, 0, 0],
      [2, 4, 238, 3, 1, 0],
      [1, 2, 3, 240, 2, 0],
      [2, 1, 2, 2, 238, 0],
      [0, 0, 0, 0, 0, 250]
    ]
  },
  {
    name: 'DenseNet121',
    accuracy: 98.70,
    precision: 98.55,
    recall: 98.62,
    f1Score: 98.58,
    inferenceTimeMs: 310,
    parametersMillion: 8.0,
    modelSizeMb: 33.0,
    description: 'Connects each layer to every other layer in a feed-forward fashion. Maximizes feature reuse and reduces vanishing gradient issues.',
    confusionMatrix: [
      [246, 2, 1, 1, 0, 0],
      [2, 241, 2, 0, 0, 0],
      [1, 2, 243, 2, 0, 0],
      [0, 1, 1, 246, 0, 0],
      [1, 0, 1, 1, 242, 0],
      [0, 0, 0, 0, 0, 250]
    ]
  },
  {
    name: 'InceptionV3',
    accuracy: 97.10,
    precision: 96.85,
    recall: 96.95,
    f1Score: 96.90,
    inferenceTimeMs: 420,
    parametersMillion: 23.8,
    modelSizeMb: 92.0,
    description: 'Multi-scale factorized convolutions allowing parallel kernel processing. Captures both fine-grained spot edges and broad leaf lesions.',
    confusionMatrix: [
      [238, 6, 4, 1, 1, 0],
      [5, 232, 5, 2, 1, 0],
      [3, 5, 235, 4, 1, 0],
      [2, 2, 4, 237, 3, 0],
      [3, 1, 2, 3, 235, 1],
      [0, 0, 0, 0, 0, 250]
    ]
  },
  {
    name: 'Xception',
    accuracy: 98.20,
    precision: 98.00,
    recall: 98.12,
    f1Score: 98.06,
    inferenceTimeMs: 290,
    parametersMillion: 22.9,
    modelSizeMb: 88.0,
    description: 'Extreme Inception architecture replacing Inception modules with depthwise separable convolutions for robust leaf spatial feature extraction.',
    confusionMatrix: [
      [244, 3, 2, 1, 0, 0],
      [3, 239, 3, 0, 0, 0],
      [2, 3, 240, 2, 1, 0],
      [1, 1, 2, 243, 1, 0],
      [1, 1, 1, 1, 241, 0],
      [0, 0, 0, 0, 0, 250]
    ]
  }
];

export const EPOCH_ACCURACY_DATA = [
  { epoch: 1, MobileNetV3: 72.4, EfficientNetB0: 76.2, ResNet50: 68.5, DenseNet121: 71.0, Loss: 1.42 },
  { epoch: 5, MobileNetV3: 85.1, EfficientNetB0: 88.4, ResNet50: 82.0, DenseNet121: 84.6, Loss: 0.85 },
  { epoch: 10, MobileNetV3: 92.3, EfficientNetB0: 94.1, ResNet50: 90.2, DenseNet121: 92.8, Loss: 0.45 },
  { epoch: 15, MobileNetV3: 95.8, EfficientNetB0: 97.2, ResNet50: 94.5, DenseNet121: 96.1, Loss: 0.22 },
  { epoch: 20, MobileNetV3: 97.2, EfficientNetB0: 98.5, ResNet50: 96.4, DenseNet121: 97.8, Loss: 0.12 },
  { epoch: 25, MobileNetV3: 98.4, EfficientNetB0: 99.1, ResNet50: 97.8, DenseNet121: 98.7, Loss: 0.06 }
];
