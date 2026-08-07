import { Column } from "./types";

export const columns: Column[] = [
  { key: 'index', label: '#', className: 'w-[50px]' },
  { key: "image", label: "Image", className: 'w-[60px]' },
  { key: 'name', label: 'Name' },
  { key: 'email', label: 'Email' },
  { key: 'specialties', label: 'Specialties' },
  { key: 'experience', label: 'Experience' },        // Matches workExperienceCount
  { key: 'certifications', label: 'Certifications' }, // Matches certificationCount
  { key: 'education', label: 'Education' },           // Matches educationCount
  { key: 'joined', label: 'Joined' },
  { key: 'actions', label: '', className: 'w-[50px]' }, // For dropdown
];
export const SAMPLE_SERVICES = [
  {
    id: 1,
    name: "General Checkup",
    description: "Comprehensive health examination including vital signs, blood pressure, and basic lab work.",
    duration: "30 min",
    price: "$120"
  },
  {
    id: 2,
    name: "Dental Cleaning",
    description: "Professional teeth cleaning, scaling, and polishing with oral hygiene consultation.",
    duration: "45 min",
    price: "$150"
  },
  {
    id: 3,
    name: "Physical Therapy",
    description: "Personalized rehabilitation session with specialized exercises and manual therapy techniques.",
    duration: "60 min",
    price: "$200"
  },
  {
    id: 4,
    name: "Vaccination",
    description: "Standard immunization shots including flu, COVID-19, and routine vaccinations.",
    duration: "15 min",
    price: "$85"
  },
  {
    id: 5,
    name: "Skin Consultation",
    description: "Dermatological evaluation for skin conditions, allergies, and cosmetic concerns.",
    duration: "30 min",
    price: "$160"
  }
];
