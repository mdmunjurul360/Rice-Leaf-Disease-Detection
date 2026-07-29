import { RiceDisease } from '../types';

export const RICE_DISEASES: RiceDisease[] = [
  {
    id: 'bacterial-blight',
    code: 'BLB_01',
    nameEn: 'Bacterial Leaf Blight',
    nameBn: 'ব্যাকটেরিয়াল লিফ ব্লাইট (পাতা পোড়া রোগ)',
    scientificName: 'Xanthomonas oryzae pv. oryzae',
    category: 'Bacterial',
    severity: 'High',
    descriptionEn: 'Bacterial leaf blight causes severe wilting of seedlings and yellowing and drying of leaves. It is one of the most destructive diseases of rice in tropical Asia, causing up to 50% yield loss in favorable humid conditions.',
    descriptionBn: 'ব্যাকটেরিয়াল লিফ ব্লাইট ধানের একটি মারাত্মক রোগ। এটি চারা গাছে নেতিয়ে পড়া এবং বয়স্ক পাতায় হলুদ বা তামাটে রঙের দাগ সৃষ্টি করে সম্পূর্ণ পাতা শুকিয়ে ফেলে। বর্ষা মৌসুমে অতিরিক্ত আর্দ্রতায় এর সংক্রমণ আশঙ্কাজনকভাবে বৃদ্ধি পায়।',
    symptomsEn: [
      'Water-soaked to yellowish stripes along the leaf margins.',
      'Wavy margins on lesions progressing toward the leaf tip.',
      'Milky bacterial ooze drops visible on young lesions in humid mornings.',
      'Leaves turn straw-colored, dry up, and die prematurely.'
    ],
    symptomsBn: [
      'পাতার কিনারা বরাবর জলছাপ বা হলুদ রঙের দাগ শুরু হয়।',
      'দাগের কিনারা ঢেউখেলানো হয় এবং পাতার ডগার দিকে ছড়িয়ে পড়ে।',
      'সকালের দিকে ভেজা পাতায় সাদা ফোটার মতো ব্যাকটেরিয়ার আঠা দেখা যায়।',
      'আক্রান্ত পাতা দ্রুত শুকিয়ে খড় রঙের হয়ে মরে যায়।'
    ],
    causesEn: [
      'Pathogen: Xanthomonas oryzae bacteria entering through leaf stomata or mechanical wounds.',
      'High relative humidity (80-100%) and temperatures between 25°C to 34°C.',
      'Excessive nitrogenous fertilizer usage and heavy monsoon rain winds.'
    ],
    causesBn: [
      'রোগজীবাণু: ক্ষতিকর জ্যান্থোমোনাস অরাইজি ব্যাকটেরিয়া যা পাতার প্রাকৃতির ছিদ্র বা ক্ষতের মাধ্যমে প্রবেশ করে।',
      'উচ্চ আপেক্ষিক আর্দ্রতা (৮০-১০০%) এবং ২৫°সে - ৩৪°সে তাপমাত্রা।',
      'জমি-তে অতিরিক্ত ইউরিয়া (নাইট্রোজেন) সারের প্রয়োগ এবং ঝোড়ো হাওয়া।'
    ],
    favorableConditions: {
      temperature: '25°C - 34°C',
      humidity: '85% - 100%',
      rainfall: 'Moderate to Heavy Rainfall'
    },
    treatment: {
      chemical: [
        {
          name: 'Copper Oxychloride (50% WP) + Streptocycline',
          dosage: '2.5g Copper Oxychloride + 0.15g Streptocycline per Liter of water',
          timing: 'Foliar spray at early disease onset; repeat after 10-12 days.',
          precautions: 'Wear protective goggles and mask. Do not spray during peak midday heat.'
        },
        {
          name: 'Copper Hydroxide (77% WP)',
          dosage: '2.0g per Liter of water',
          timing: 'Spray at first symptom observation in affected patches.',
          precautions: 'Ensure thorough coverage on both upper and lower leaf surfaces.'
        }
      ],
      organic: [
        {
          name: 'Fresh Cow Dung Extract (5%) Spray',
          recipe: 'Mix 1kg fresh cow dung in 10L water, strain through muslin cloth, add 20g turmeric powder.',
          frequency: 'Spray every 7 days during early infestation to induce plant immunity.'
        },
        {
          name: 'Pseudomonas fluorescens Bio-Pesticide',
          recipe: 'Mix 10g/L of Pseudomonas fluorescens wettable powder in water.',
          frequency: 'Apply twice with a 10-day interval.'
        }
      ]
    },
    preventionEn: [
      'Plant resistant varieties like BRRI dhan28, BRRI dhan29, or Swarna-Sub1.',
      'Apply Balanced Fertilizers: Split nitrogen dose and increase Potassium (MOP) application.',
      'Ensure proper field drainage and avoid flooding infected plots into healthy fields.',
      'Treat seeds with Streptocycline (0.1g/L) for 12 hours before sowing.'
    ],
    preventionBn: [
      'রোগ প্রতিরোধী জাত নির্বাচন করুন (যেমন: বিআরআরআই ধান২৮, বিআরআরআই ধান২৯ বা সুবর্ণা)।',
      'সুষম সার ব্যবহার করুন: ইউরিয়া কিস্তিতে দিন এবং পটাশ (MOP) সারের পরিমাণ বাড়িয়ে দিন।',
      'জমি থেকে অতিরিক্ত পানি নিষ্কাশনের সঠিক ব্যবস্থা রাখুন।',
      'বীজ শোধন: বীজ বপনের আগে স্ট্রেপ্টোসাইক্লিন দ্রবণে ১২ ঘণ্টা ভিজিয়ে রাখুন।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&w=800&q=80',
        label: 'Field Leaf Blight Sample A'
      },
      {
        url: 'https://images.unsplash.com/photo-1592417817098-8f3d6ef23a2f?auto=format&fit=crop&w=800&q=80',
        label: 'Leaf Margin Lesions Sample B'
      }
    ]
  },
  {
    id: 'brown-spot',
    code: 'BS_02',
    nameEn: 'Brown Spot',
    nameBn: 'ব্রাউন স্পট (বাদামী দাগ রোগ)',
    scientificName: 'Bipolaris oryzae / Helminthosporium oryzae',
    category: 'Fungal',
    severity: 'Medium',
    descriptionEn: 'Brown spot is a fungal disease that affects the coleoptile, leaves, leaf sheath, and glumes. It creates oval, sesame seed-shaped spots with reddish-brown margins and grayish centers, often associated with nutrient-deficient soil.',
    descriptionBn: 'ব্রাউন স্পট একটি ছত্রাকজনিত রোগ যা ধানের পাতা, কান্ড ও ছড়ায় তিল আকারের গোল বাদামী দাগ তৈরি করে। যে সব জমিতে পটাশ ও পুষ্টির ঘাটতি থাকে সে সব জমিতে এই রোগের প্রাদুর্ভাব বেশি দেখা যায়।',
    symptomsEn: [
      'Small circular or oval sesame seed-like brown spots on leaves.',
      'Spots have a dark reddish-brown border with a light grayish or yellow halo.',
      'Large infected leaves dry prematurely, reducing photosynthesizing area.',
      'Velvety black fungal growth on infected glumes during wet spells.'
    ],
    symptomsBn: [
      'পাতায় তিলের মতো ছোট গোল গোল বাদামী দাগ দেখা যায়।',
      'দাগগুলোর কেন্দ্রস্থল হালকা ছাই রঙের এবং চারপাশ গাঢ় বাদামী ও হলুদ রঙের বেষ্টনী থাকে।',
      'তীব্র আক্রমণে পাতা পুরো শুকিয়ে শুকনা খড়ের মতো রূপ নেয়।',
      'ধানের ছড়ায় কালাচে ছত্রাকের গুঁড়া দেখা যেতে পারে।'
    ],
    causesEn: [
      'Pathogen: Bipolaris oryzae fungal spores spread by air and wind.',
      'Nutrient-starved soil (Potassium, Silicon, Zinc deficiency).',
      'High relative humidity (>88%) and temperature 20°C - 30°C.'
    ],
    causesBn: [
      'রোগজীবাণু: বাইপোলারিস অরাইজি ছত্রাক যা বাতাসের সাহায্যে দ্রুত ছড়িয়ে পড়ে।',
      'মাটিতে পটাশ, সিলিকন বা দস্তার ঘাটতি।',
      'উচ্চ আর্দ্রতা (৮৮%-এর বেশি) এবং ২০°-৩০° সেলসিয়াস তাপমাত্রা।'
    ],
    favorableConditions: {
      temperature: '20°C - 30°C',
      humidity: '88% - 98%',
      rainfall: 'Intermittent Showers'
    },
    treatment: {
      chemical: [
        {
          name: 'Mancozeb (75% WP) or Propiconazole (25% EC)',
          dosage: '2.0g Mancozeb or 1.0ml Propiconazole per Liter water',
          timing: 'Spray at initial appearance of brown spots on leaves.',
          precautions: 'Ensure even coverage; do not apply when rain is expected within 2 hours.'
        },
        {
          name: 'Tebuconazole + Trifloxystrobin',
          dosage: '0.7g per Liter of water',
          timing: 'Spray once during tillering stage if nutrient correction is delayed.',
          precautions: 'Mix thoroughly in clean water.'
        }
      ],
      organic: [
        {
          name: 'Neem Leaf & Garlic Extract',
          recipe: 'Boil 500g crushed neem leaves and 100g garlic cloves in 5L water. Dilute 1:10.',
          frequency: 'Spray every 5-7 days as an organic antifungal remedy.'
        },
        {
          name: 'Trichoderma harzianum Bio-fungicide',
          recipe: 'Apply Trichoderma harzianum formulation @ 5g/L as foliar spray.',
          frequency: 'Apply early morning or late afternoon.'
        }
      ]
    },
    preventionEn: [
      'Correct Soil Fertility: Apply recommended dosage of Potash (MOP) and Zinc Sulfate.',
      'Seed Treatment: Treat seed with Carbendazim (2g/kg seed) before sowing.',
      'Maintain continuous shallow irrigation during tillering to reduce soil moisture stress.'
    ],
    preventionBn: [
      'মাটির উর্বরতা বাড়ান: জমিতে সঠিক মাত্রায় পটাশ এবং জিঙ্ক সার প্রয়োগ করুন।',
      'বীজ শোধন: বপনের আগে কার্বেনডাজিম দিয়ে বীজ শোধন করুন।',
      'জমিতে প্রয়োজনীয় সেচ বজায় রাখুন যাতে মাটি একদম শুকিয়ে না যায়।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&q=80',
        label: 'Brown Spot Sesame Lesion'
      },
      {
        url: 'https://images.unsplash.com/photo-1595974482597-4b8da8879bc5?auto=format&fit=crop&w=800&q=80',
        label: 'Leaf Tip Spot Infection'
      }
    ]
  },
  {
    id: 'leaf-blast',
    code: 'LB_03',
    nameEn: 'Rice Leaf Blast',
    nameBn: 'রাইস লিফ ব্লাস্ট (পাতা ব্লাস্ট রোগ)',
    scientificName: 'Magnaporthe oryzae / Pyricularia oryzae',
    category: 'Fungal',
    severity: 'High',
    descriptionEn: 'Leaf blast is one of the most serious fungal diseases threatening global rice production. It produces spindle-shaped (eye-shaped) spots with whitish-gray centers and dark brown borders on leaves, which can coalesce and burn entire crop fields.',
    descriptionBn: 'লিফ ব্লাস্ট হলো ধানের অন্যতম মারাত্বক ছত্রাকজনিত মৈাকসুমি রোগ। পাতায় মাকু আকৃতির (চোখের মতো) স্পট তৈরি হয় যার মাঝখানে ছাই রঙ এবং চারপাশে গাঢ় লালচে বাদামী বর্ডার থাকে। সময়মতো ব্যবস্থা না নিলে সম্পূর্ণ খেতের ধান পুড়ে যাওয়ার মতো ধ্বংস হয়ে যায়।',
    symptomsEn: [
      'Spindle-shaped or eye-shaped lesions with pointed ends on leaves.',
      'Gray or whitish center with brownish or reddish-purple margin.',
      'Lesions enlarge and coalesce, causing entire leaves to turn brown and dry up ("blast appearance").',
      'Node and neck blast can cause head snapping and completely empty panicles.'
    ],
    symptomsBn: [
      'পাতায় মাকু বা চোখের আকৃতির স্পট তৈরি হয় যার দুই প্রান্ত চোখা।',
      'দাগের কেন্দ্রস্থল সাদাটে-ছাই রঙের এবং চারপাশে গাঢ় বাদামী বা বেগুনি সীমানা থাকে।',
      'একাধিক দাগ একত্রিত হয়ে পুরো পাতা জ্বালিয়ে পোড়ানোর মতো পুড়িয়ে ফেলে।',
      'গিঁট বা শীষের গোড়ায় আক্রমণ হলে শীষ ভেঙে পড়ে এবং চিটা হয়ে যায়।'
    ],
    causesEn: [
      'Pathogen: Magnaporthe oryzae airborne spores.',
      'Cool night temperatures (17-23°C) accompanied by high relative humidity (>90%).',
      'Excessive applications of Nitrogen fertilizer and prolonged leaf wetness.'
    ],
    causesBn: [
      'রোগজীবাণু: বাতাসে ভেসে আসা ম্যাগনাপোর্টে অরাইজি ছত্রাক।',
      'রাতের ঠান্ডা তাপমাত্রা (১৭-২৩°সে) এবং অতিরিক্ত আর্দ্রতা (৯০%-এর বেশি)।',
      'জমিতে অতিরিক্ত ইউরিয়া সারের ব্যবহার ও শিশিরে পাতা দীর্ঘক্ষণ ভিজে থাকা।'
    ],
    favorableConditions: {
      temperature: '17°C - 23°C',
      humidity: '90% - 100%',
      rainfall: 'Heavy Dew & Cloudy Weather'
    },
    treatment: {
      chemical: [
        {
          name: 'Tricyclazole (75% WP) or Isoprothiolane (40% EC)',
          dosage: '0.6g Tricyclazole or 1.5ml Isoprothiolane per Liter of water',
          timing: 'Immediate spray upon spotting 1-2 spindle spots per leaf.',
          precautions: 'Do not mix with alkaline compounds. Use systemic action for long protection.'
        },
        {
          name: 'Azoxystrobin + Difenoconazole',
          dosage: '1.0ml per Liter water',
          timing: 'Spray at panicle initiation stage to prevent neck blast stage.',
          precautions: 'Use high volume sprayer nozzle for full canopy penetration.'
        }
      ],
      organic: [
        {
          name: 'Wood Ash & Fermented Rice Water Spray',
          recipe: 'Dust clean wood ash on wet morning leaves or spray fermented starch solution.',
          frequency: 'Apply twice weekly to create an alkaline silica barrier.'
        },
        {
          name: 'Bio-fungicide Trichoderma harzianum',
          recipe: 'Apply @ 10g/L spray.',
          frequency: 'Apply during cloudy high-humidity weather.'
        }
      ]
    },
    preventionEn: [
      'Grow blast-resistant varieties (e.g., BRRI dhan33, BRRI dhan89).',
      'Avoid excess Nitrogen: Apply nitrogen in 3-4 split applications during vegetative growth.',
      'Maintain field water level (5-7 cm) as dry conditions aggravate leaf blast development.',
      'Burn infected crop residues after harvest to kill overwintering fungal spores.'
    ],
    preventionBn: [
      'ব্লাস্ট প্রতিরোধী উন্নত জাত চাষ করুন (যেমন: বিআরআরআই ধান৩৩, বিআরআরআই ধান৮৯)।',
      'ইউরিয়া সার একবারে না দিয়ে ৩-৪ কিস্তিতে সমানভাবে প্রয়োগ করুন।',
      'ক্ষেতে ৫-৭ সেমি পানি ধরে রাখুন; জমি শুকিয়ে গেলে ব্লাস্টের আক্রমণ বাড়ে।',
      'ফসল কাটার পর আক্রান্ত নাড়া ও খড় পুড়িয়ে ফেলুন।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80',
        label: 'Spindle Spindle Blast Spot'
      },
      {
        url: 'https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?auto=format&fit=crop&w=800&q=80',
        label: 'Severe Coalesced Leaf Blast'
      }
    ]
  },
  {
    id: 'tungro',
    code: 'RTV_04',
    nameEn: 'Rice Tungro Virus',
    nameBn: 'রাইস টুংরো ভাইরাস (টুংরো রোগ)',
    scientificName: 'Rice Tungro Bacilliform Virus (RTBV) & Spherical Virus (RTSV)',
    category: 'Viral',
    severity: 'High',
    descriptionEn: 'Rice Tungro Virus is a devastating viral disease transmitted by Green Leafhoppers (Nephotettix virescens). It causes severe plant stunting, reduced tillering, and distinct yellow-orange leaf discoloration from the tip downward.',
    descriptionBn: 'টুংরো একটি মারাত্মক ভাইরাসজনিত রোগ যা সবুজ পাতা শোষক পোকা (সবুজ পাতা ফড়িং) এর মাধ্যমে সংক্রমিত হয়। আক্রান্ত গাছ মারাত্মকভাবে খাটো হয়ে যায়, কুশি গজানো কমে যায় এবং পাতার ডগা থেকে নিচের দিকে হলুদ-কমলা রঙের বর্ণ ধারণ করে।',
    symptomsEn: [
      'Severe plant stunting and reduced tillering capacity.',
      'Leaves turn yellow or orange-yellow starting from the tips.',
      'Young leaves display rusty-colored specks or interveinal chlorosis.',
      'Panicles fail to emerge or are small, poorly filled, and dark.'
    ],
    symptomsBn: [
      'গাছ ছোট বা খাটো হয়ে যায় এবং কুশি কমে যায়।',
      'পাতার ডগা থেকে শুরু করে পুরো পাতা গাঢ় হলুদ বা কমলা রং ধারণ করে।',
      'কচি পাতায় ছোট ছোট জং ধরার মতো বাদামী দাগ দেখা যায়।',
      'শীষ ছোট হয়, বেশিরভাগ ধান চিটা হয়ে যায়।'
    ],
    causesEn: [
      'Vector Transmission: Spread by Green Leafhopper (GLH) feeding on infected tissues.',
      'Presence of dual viral complex (RTBV + RTSV).',
      'Staggered planting seasons keeping vector population high year-round.'
    ],
    causesBn: [
      'সবুজ পাতা ফড়িং (Green Leafhopper) দ্বারা এই ভাইরাসের বিস্তার ঘটে।',
      'আরটিবিভি এবং আরটিএসভি ভাইরাসের যৌথ সংক্রমণ।',
      'এলাকায় একই সময়ে ধান না রোপণ করে আগে-পরে রোপণ করা।'
    ],
    favorableConditions: {
      temperature: '26°C - 32°C',
      humidity: '75% - 90%',
      rainfall: 'Warm Moist Seasons with High Leafhopper Swarms'
    },
    treatment: {
      chemical: [
        {
          name: 'Imidacloprid (17.8% SL) or Thiamethoxam (25% WG)',
          dosage: '0.5ml Imidacloprid or 0.3g Thiamethoxam per Liter of water',
          timing: 'Directly target Green Leafhopper vector at early symptom detection.',
          precautions: 'Direct spray at base of stems where leafhoppers cluster. Do not over-apply.'
        },
        {
          name: 'Pymetrozine (50% WDG)',
          dosage: '0.6g per Liter water',
          timing: 'Systemic insecticide spray to paralyze vector mouthparts instantly.',
          precautions: 'Use clean nozzle spray.'
        }
      ],
      organic: [
        {
          name: 'Yellow Sticky Traps & Neem Oil 10,000 PPM',
          recipe: 'Install 10 yellow sticky boards per acre + spray 3ml Neem Oil per Liter water.',
          frequency: 'Install traps immediately at nursery stage; spray neem oil every 5 days.'
        }
      ]
    },
    preventionEn: [
      'Synchronous Planting: Plant fields in a community within a short 2-week window.',
      'Uproot and destroy infected stunted plants early to break vector transmission reservoir.',
      'Control Green Leafhopper in seedbeds with nursery soil application of Carbofuran.',
      'Cultivate resistant cultivars like BRRI dhan31, BRRI dhan56.'
    ],
    preventionBn: [
      'সমলয় চাষাবাদ: ব্লকের সব কৃষক একই ১০-১৫ দিনের মধ্যে ধান রোপণ সম্পন্ন করুন।',
      'আক্রান্ত খাটো গাছ তুলে মাটিতে পুতে বা পুড়িয়ে ধ্বংস করুন।',
      'বীজতলায় সবুজ পাতা ফড়িং দমনে সতর্ক থাকুন।',
      'রোগ সহনশীল জাত চাষ করুন (যেমন: বিআরআরআই ধান৩১, বিআরআরআই ধান৫৬)।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1535242208474-9a279b23b514?auto=format&fit=crop&w=800&q=80',
        label: 'Tungro Orange Discoloration'
      },
      {
        url: 'https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?auto=format&fit=crop&w=800&q=80',
        label: 'Stunted Clump Sample'
      }
    ]
  },
  {
    id: 'sheath-blight',
    code: 'SB_05',
    nameEn: 'Sheath Blight',
    nameBn: 'শীথ ব্লাইট (খোল পোড়া রোগ)',
    scientificName: 'Rhizoctonia solani',
    category: 'Fungal',
    severity: 'Medium',
    descriptionEn: 'Sheath blight is a major fungal disease characterized by oval or irregular greenish-gray spots on leaf sheaths near the water level. As spots enlarge, they resemble snake skin patterns and can cause lodging of tiller stems.',
    descriptionBn: 'খোল পোড়া রোগ ধানের কাণ্ডের খোল ও পাতায় সাপের চামড়ার মতো ধূসর-সবুজ দাগ তৈরি করে। পানির কাছাকাছি গোড়ার খোলে প্রথম এই দাগ দেখা যায়। রোগের প্রকোপ বাড়লে গাছ নুয়ে পড়ে বা ভেঙে যায়।',
    symptomsEn: [
      'Oval, greenish-gray lesions on leaf sheaths just above water line.',
      'Spots enlarge with dark brown borders resembling snake skin patches.',
      'White cottony fungal mycelium visible between stems in dense foliage.',
      'Lodging of tillers and premature death of flag leaves.'
    ],
    symptomsBn: [
      'পানির স্তরের ঠিক উপরে কাণ্ডের খোলে ডিম্বাকার জলছাপের দাগ দেখা যায়।',
      'দাগগুলো সাপের ছালের মতো আঁকাবাঁকা ও বাদামী পাড়যুক্ত হয়।',
      'ঘন গাছের ভেতরে কাণ্ডের গায়ে সাদা তুলোর মতো ছত্রাক অনুসূত্র দেখা যায়।',
      'গাছ ঢলে পড়ে বা ধানের পাতা শুকিয়ে কাণ্ড দুর্বল হয়ে ভেঙে যায়।'
    ],
    causesEn: [
      'Pathogen: Rhizoctonia solani sclerotia floating in irrigation water.',
      'High planting density preventing air circulation in canopy.',
      'High temperature (28-32°C) and relative humidity (>95%).'
    ],
    causesBn: [
      'রোগজীবাণু: রাইজোকটোনিয়া সোলানি জীবাণু যা সেচের পানিতে ভেসে এক জমি থেকে অন্য জমিতে ছড়ায়।',
      'অতিরিক্ত ঘন করে চারা রোপণ করা এবং আলো-বাতাস চলাচল ব্যাহত হওয়া।',
      'উচ্চ তাপমাত্রা (২৮-৩২°সে) এবং আর্দ্রতা (৯৫%-এর বেশি)।'
    ],
    favorableConditions: {
      temperature: '28°C - 32°C',
      humidity: '95% - 100%',
      rainfall: 'Dense Humid Canopy Environment'
    },
    treatment: {
      chemical: [
        {
          name: 'Hexaconazole (5% EC) or Validamycin (3% L)',
          dosage: '2.0ml Hexaconazole or 2.5ml Validamycin per Liter water',
          timing: 'Spray directed to lower sheath region at maximum tillering stage.',
          precautions: 'Direct nozzle toward stem bases near the water surface.'
        },
        {
          name: 'Thifluzamide (24% SC)',
          dosage: '0.4ml per Liter water',
          timing: 'Single protective spray before canopy closure.',
          precautions: 'Ensure proper water volume for deep stem coverage.'
        }
      ],
      organic: [
        {
          name: 'Trichoderma viride Bio-Control',
          recipe: 'Mix 10g Trichoderma viride per Liter water + 5g jaggery syrup.',
          frequency: 'Apply twice at 10-day intervals around leaf sheath bases.'
        }
      ]
    },
    preventionEn: [
      'Maintain Optimum Spacing: Plant with at least 20cm x 15cm hill spacing.',
      'Drain irrigation water for 3-5 days during late tillering stage.',
      'Avoid excessive Nitrogen fertilizer; apply recommended Potash.'
    ],
    preventionBn: [
      'সঠিক দূরত্বে চারা রোপণ করুন (কমপক্ষে ২০ সেমি × ১৫ সেমি)।',
      'কুশি আসার শেষ দিকে ৩-৫ দিন খেতের সেচের পানি শুকিয়ে আলো-বাতাস ঢুকতে দিন।',
      'অতিরিক্ত ইউরিয়া প্রয়োগ বন্ধ রেখে সঠিক মাত্রায় পটাশ সার দিন।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&w=800&q=80',
        label: 'Sheath Blight Lesion'
      },
      {
        url: 'https://images.unsplash.com/photo-1599818817730-8488e7b51e06?auto=format&fit=crop&w=800&q=80',
        label: 'Stem Base Fungal Patch'
      }
    ]
  },
  {
    id: 'healthy-rice',
    code: 'HLT_00',
    nameEn: 'Healthy Rice Leaf',
    nameBn: 'নিরোগ ও সুস্থ ধান পাতা',
    scientificName: 'Oryza sativa L.',
    category: 'Healthy',
    severity: 'None',
    descriptionEn: 'Vibrant, uniform green leaf surface free from lesions, spots, or bacterial exudate. Indicates optimal photosynthesizing health, balanced nutrition, and robust crop immunity.',
    descriptionBn: 'কোনো প্রকার দাগ, ক্ষত বা ব্যাকটেরিয়ার ছোপ মুক্ত সতেজ ও গাঢ় সবুজ পাতা। এটি সঠিক পুষ্টি, পর্যাপ্ত সেচ এবং সুস্থ ফসলের নির্দেশক।',
    symptomsEn: [
      'Uniform deep green color across leaf blade.',
      'Smooth leaf sheath and clean margins without yellow halos.',
      'Strong erect leaf orientation receiving maximum sunlight.'
    ],
    symptomsBn: [
      'পাতার উপরিভাগে সুষম সতেজ গাঢ় সবুজ রঙ।',
      'মসৃণ পাতার সীমানা এবং কোনো তামাটে বা হলুদ ছোপ নেই।',
      'সোজা খাড়া পাতা যা সূর্যরশ্মি গ্রহণে সক্ষম।'
    ],
    causesEn: [
      'Balanced soil micro-nutrients (N-P-K-Zn-S).',
      'Good field drainage and clean certified seeds.',
      'Proper crop rotation and integrated pest management.'
    ],
    causesBn: [
      'মাটিতে সঠিক মাত্রার সার ও পুষ্টির সমন্বয়।',
      'উন্নত মানের শোধিত বীজ ও নিখুঁত মাঠ ব্যবস্থাপনা।',
      'সঠিক সমন্বিত বালাই ব্যবস্থাপনা।'
    ],
    favorableConditions: {
      temperature: '22°C - 32°C',
      humidity: '60% - 80%',
      rainfall: 'Normal Seasonal Rainfall'
    },
    treatment: {
      chemical: [],
      organic: [
        {
          name: 'Preventive Neem Cake Application',
          recipe: 'Apply 100kg/hectare neem cake into soil during land preparation.',
          frequency: 'Once per crop cycle.'
        }
      ]
    },
    preventionEn: [
      'Continue regular soil health monitoring and split nitrogen application.',
      'Inspect fields weekly for early insect vector activity.',
      'Maintain clean bunds and irrigation channels.'
    ],
    preventionBn: [
      'নিয়মিত খেত পর্যবেক্ষণ করুন এবং সুষম সার প্রয়োগ বজায় রাখুন।',
      'আইল ও সেচ নালা পরিচ্ছন্ন রাখুন।'
    ],
    sampleImages: [
      {
        url: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80',
        label: 'Healthy Rice Paddy Leaf'
      },
      {
        url: 'https://images.unsplash.com/photo-1527847263472-aa5338d178b8?auto=format&fit=crop&w=800&q=80',
        label: 'Vibrant Green Canopy'
      }
    ]
  }
];
