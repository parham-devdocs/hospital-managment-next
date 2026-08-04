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