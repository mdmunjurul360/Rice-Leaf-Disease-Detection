import { DatabaseTableSchema, UserLog } from '../types';

export const DATABASE_SCHEMAS: DatabaseTableSchema[] = [
  {
    tableName: 'diseases',
    description: 'Stores core catalog of recognized rice leaf diseases, category classification, and scientific metadata.',
    columns: [
      { name: 'disease_id', type: 'VARCHAR(36)', key: 'PK', description: 'Unique identifier UUID' },
      { name: 'disease_code', type: 'VARCHAR(15)', description: 'Academic shortcode (e.g. BLB_01, LB_03)' },
      { name: 'name_en', type: 'VARCHAR(100)', description: 'English disease name' },
      { name: 'name_bn', type: 'VARCHAR(100)', description: 'Bangla translation name' },
      { name: 'scientific_name', type: 'VARCHAR(150)', description: 'Botanical pathogen name' },
      { name: 'category', type: 'ENUM("Fungal", "Bacterial", "Viral", "Healthy")', description: 'Pathogen type' },
      { name: 'severity', type: 'ENUM("Low", "Medium", "High", "None")', description: 'Economic threat level' },
      { name: 'description', type: 'TEXT', description: 'Comprehensive disease overview' },
      { name: 'created_at', type: 'TIMESTAMP', description: 'Record creation timestamp' }
    ]
  },
  {
    tableName: 'treatments',
    description: 'Contains chemical and organic treatment protocols linked to specific disease records.',
    columns: [
      { name: 'treatment_id', type: 'VARCHAR(36)', key: 'PK', description: 'Primary key UUID' },
      { name: 'disease_id', type: 'VARCHAR(36)', key: 'FK', description: 'Foreign Key referencing diseases.disease_id' },
      { name: 'treatment_type', type: 'ENUM("Chemical", "Organic")', description: 'Intervention type' },
      { name: 'active_ingredient', type: 'VARCHAR(150)', description: 'Fungicide/Bactericide or organic compound' },
      { name: 'dosage_per_liter', type: 'VARCHAR(50)', description: 'Application concentration per liter' },
      { name: 'timing_instructions', type: 'TEXT', description: 'Stage of growth or symptom onset application guide' },
      { name: 'precautions', type: 'TEXT', description: 'Safety equipment and environmental caution' }
    ]
  },
  {
    tableName: 'prediction_history',
    description: 'Auditing log of all AI predictions submitted by farmers and agricultural officers.',
    columns: [
      { name: 'prediction_id', type: 'VARCHAR(36)', key: 'PK', description: 'Primary key UUID' },
      { name: 'user_id', type: 'VARCHAR(36)', key: 'FK', description: 'Foreign Key referencing users.user_id' },
      { name: 'image_path', type: 'VARCHAR(255)', description: 'Cloud storage URL for uploaded leaf image' },
      { name: 'predicted_disease_id', type: 'VARCHAR(36)', key: 'FK', description: 'Foreign Key referencing diseases.disease_id' },
      { name: 'confidence_score', type: 'DECIMAL(5,2)', description: 'Model prediction confidence percentage' },
      { name: 'model_architecture', type: 'VARCHAR(50)', description: 'Selected model (e.g. MobileNetV3, ResNet50)' },
      { name: 'inference_latency_ms', type: 'INT', description: 'Server execution duration in milliseconds' },
      { name: 'latitude', type: 'DECIMAL(10,8)', description: 'Optional field GPS location latitude' },
      { name: 'longitude', type: 'DECIMAL(11,8)', description: 'Optional field GPS location longitude' },
      { name: 'farmer_feedback', type: 'ENUM("Confirmed", "Rejected", "Pending")', description: 'Ground truth verification status' },
      { name: 'created_at', type: 'TIMESTAMP', description: 'Timestamp of scan execution' }
    ]
  },
  {
    tableName: 'users',
    description: 'Manages authentication credentials, role-based access controls, and agricultural officer profiles.',
    columns: [
      { name: 'user_id', type: 'VARCHAR(36)', key: 'PK', description: 'Primary key UUID' },
      { name: 'full_name', type: 'VARCHAR(100)', description: 'User full name' },
      { name: 'email', type: 'VARCHAR(100)', description: 'Email address (Unique)' },
      { name: 'phone_number', type: 'VARCHAR(20)', description: 'Mobile phone for SMS advisory' },
      { name: 'role', type: 'ENUM("Farmer", "Officer", "Researcher", "Admin")', description: 'Access permission level' },
      { name: 'district_region', type: 'VARCHAR(100)', description: 'Agricultural zone (e.g. Mymensingh, Dinajpur, Bogra)' },
      { name: 'created_at', type: 'TIMESTAMP', description: 'User registration date' }
    ]
  }
];

export const MOCK_USER_LOGS: UserLog[] = [
  {
    id: 'LOG-8921',
    farmerName: 'Md. Abdul Karim',
    location: 'Mymensingh Sadar, Mymensingh',
    diseaseDetected: 'Bacterial Leaf Blight',
    confidence: 98.6,
    date: '2026-07-28 14:12',
    status: 'Verified'
  },
  {
    id: 'LOG-8922',
    farmerName: 'Rahim Uddin',
    location: 'Bogra Sadar, Bogra',
    diseaseDetected: 'Rice Leaf Blast',
    confidence: 97.4,
    date: '2026-07-28 13:45',
    status: 'Verified'
  },
  {
    id: 'LOG-8923',
    farmerName: 'Dr. Sharmin Akter (Officer)',
    location: 'Dinajpur Agricultural Complex',
    diseaseDetected: 'Brown Spot',
    confidence: 96.1,
    date: '2026-07-28 12:30',
    status: 'Verified'
  },
  {
    id: 'LOG-8924',
    farmerName: 'Mostafa Hossain',
    location: 'Rangpur Sadar, Rangpur',
    diseaseDetected: 'Rice Tungro Virus',
    confidence: 94.8,
    date: '2026-07-28 11:15',
    status: 'Pending Review'
  },
  {
    id: 'LOG-8925',
    farmerName: 'Jahangir Alam',
    location: 'Comilla North',
    diseaseDetected: 'Healthy Rice Leaf',
    confidence: 99.2,
    date: '2026-07-28 10:05',
    status: 'Verified'
  }
];

export const DATASET_STATS = {
  totalImages: 12500,
  trainingCount: 8750, // 70%
  validationCount: 1875, // 15%
  testCount: 1875, // 15%
  classBreakdown: [
    { name: 'Bacterial Leaf Blight', count: 2150, color: '#16A34A' },
    { name: 'Brown Spot', count: 2080, color: '#D97706' },
    { name: 'Leaf Blast', count: 2210, color: '#DC2626' },
    { name: 'Rice Tungro Virus', count: 1840, color: '#EA580C' },
    { name: 'Sheath Blight', count: 1920, color: '#9333EA' },
    { name: 'Healthy Rice Leaf', count: 2300, color: '#059669' }
  ]
};
