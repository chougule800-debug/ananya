// medicines.js
// Database for Neuro Specialities Centre
// Format: "Medicine Name": ["Strength 1", "Strength 2", "Type"]

const medicineDatabase = {
    // --- Anti-Epileptics (Seizures) ---
    "Levetiracetam": ["250 mg", "500 mg", "750 mg", "1000 mg", "Syrup", "Injection"],
    "Sodium Valproate": ["200 mg", "300 mg", "500 mg", "Chrono 300", "Chrono 500", "Syrup"],
    "Phenytoin": ["100 mg", "200 mg", "300 mg", "Injection"],
    "Carbamazepine": ["100 mg", "200 mg", "400 mg", "CR 200", "CR 400", "Syrup"],
    "Oxcarbazepine": ["150 mg", "300 mg", "450 mg", "600 mg", "Syrup"],
    "Lamotrigine": ["25 mg", "50 mg", "100 mg", "200 mg"],
    "Topiramate": ["25 mg", "50 mg", "100 mg"],
    "Clobazam": ["5 mg", "10 mg", "20 mg"],
    "Lacosamide": ["50 mg", "100 mg", "150 mg", "200 mg", "Injection"],
    "Clonazepam": ["0.25 mg", "0.5 mg", "1 mg", "2 mg"],

    // --- Neuropathic Pain & Migraine ---
    "Gabapentin": ["100 mg", "300 mg", "400 mg", "600 mg"],
    "Pregabalin": ["50 mg", "75 mg", "150 mg", "300 mg", "SR 75", "SR 150"],
    "Amitriptyline": ["10 mg", "25 mg", "50 mg", "75 mg"],
    "Nortriptyline": ["10 mg", "25 mg"],
    "Duloxetine": ["20 mg", "30 mg", "40 mg", "60 mg"],
    "Flunarizine": ["5 mg", "10 mg"],
    "Propranolol": ["10 mg", "20 mg", "40 mg", "80 mg", "SR 40"],
    "Naproxen": ["250 mg", "500 mg"],
    "Sumatriptan": ["25 mg", "50 mg", "100 mg", "Nasal Spray"],
    "Rizatriptan": ["5 mg", "10 mg"],

    // --- Stroke & Blood Thinners ---
    "Clopidogrel": ["75 mg", "150 mg"],
    "Aspirin": ["75 mg", "150 mg", "325 mg"],
    "Atorvastatin": ["10 mg", "20 mg", "40 mg", "80 mg"],
    "Rosuvastatin": ["5 mg", "10 mg", "20 mg", "40 mg"],
    "Citicoline": ["500 mg", "1000 mg", "Injection", "Syrup"],
    "Piracetam": ["400 mg", "800 mg", "1200 mg", "Syrup", "Injection"],
    "Edaravone": ["Injection"],

    // --- Parkinson's & Movement Disorders ---
    "Levodopa/Carbidopa": ["100/25 mg", "250/25 mg", "110 mg", "275 mg", "CR"],
    "Syndopa": ["110", "275", "Plus"],
    "Pramipexole": ["0.125 mg", "0.25 mg", "0.5 mg", "1 mg"],
    "Ropinirole": ["0.25 mg", "0.5 mg", "1 mg", "2 mg", "XL"],
    "Trihexyphenidyl": ["2 mg", "5 mg"],
    "Amantadine": ["100 mg"],
    "Rasagiline": ["0.5 mg", "1 mg"],

    // --- Vertigo & Dizziness ---
    "Betahistine": ["8 mg", "16 mg", "24 mg", "48 mg"],
    "Cinnarizine": ["25 mg", "75 mg"],
    "Meclizine": ["12.5 mg", "25 mg"],

    // --- Vitamins & Supplements (Neuro) ---
    "Methylcobalamin (B12)": ["500 mcg", "1500 mcg", "Injection", "OD Tablet"],
    "Folic Acid": ["5 mg"],
    "Vitamin D3": ["60K IU Sachet", "Capsule", "Nano Shot"],
    "Calcium + Vit D3": ["500 mg/250 IU"],

    // --- General / Others ---
    "Paracetamol": ["500 mg", "650 mg", "Injection"],
    "Pantoprazole": ["40 mg", "DSR", "Injection"],
    "Rabeprazole": ["20 mg", "DSR"],
    "Domperidone": ["10 mg", "30 mg"],
    "Alprazolam": ["0.25 mg", "0.5 mg"],
    "Lorazepam": ["1 mg", "2 mg", "Injection"]
};