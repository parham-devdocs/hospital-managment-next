// mock-data.ts
import { DoctorResponse } from "./types";
import { FormData } from "./validations";

export const mockDoctorData: FormData = {
  specialties:[{name:"cardiology"}],
  user: {
    fullName: "Dr. Sarah Johnson",
    email: "sarah.johnson@hospital.com",
    password: "SecurePass123!",
    address: "456 Medical Center Blvd, Suite 200, Los Angeles, CA 90001",
    phoneNumber: "+1 (555) 123-4567",
    age: 34,
    gender: "female",
  },
  bio: "Dr. Sarah Johnson is a board-certified cardiologist with over 8 years of experience in internal medicine and cardiovascular care. She completed her MD at Harvard Medical School and her residency at Cedars-Sinai Medical Center. Dr. Johnson specializes in preventive cardiology, cardiac rehabilitation, and complex cardiovascular diseases. She has published 5 peer-reviewed articles and presented at 3 international conferences. She is committed to providing compassionate, evidence-based care to every patient.",

  educations: [
    {
      medicalSchool: "Harvard Medical School",
      graduationYear: 2015,
      country: "USA",
      degree: "MD - Doctor of Medicine",
      honors: [
        "Summa Cum Laude",
        "Alpha Omega Alpha Honor Medical Society",
        "Best Research Paper Award",
      ],
    },
    {
      medicalSchool: "Stanford University School of Medicine",
      graduationYear: 2011,
      country: "USA",
      degree: "BS in Biology (Pre-Med)",
      honors: ["Dean's List", "Phi Beta Kappa"],
    },
  ],
  workExperiences: [
    {
      hospital: "Cedars-Sinai Medical Center",
      startDate: new Date("2016-07-01"),
      endDate: new Date("2020-06-30"),
      location: "Los Angeles, CA",
      position: "Resident Physician - Internal Medicine",
      responsibilities: [
        "Managed patient care for 20+ patients daily",
        "Performed diagnostic procedures and treatment plans",
        "Supervised and mentored 5 medical students",
        "Collaborated with multidisciplinary teams",
      ],
    },
    {
      hospital: "UCLA Medical Center",
      startDate: new Date("2020-08-01"),
      endDate: new Date("2023-12-31"),
      location: "Los Angeles, CA",
      position: "Attending Physician - Cardiology",
      responsibilities: [
        "Provided specialized cardiac care to high-risk patients",
        "Led clinical trials on new cardiac medications",
        "Presented research at 3 international conferences",
        "Published 5 peer-reviewed articles",
      ],
    },
  ],
  certifications: [
    {
      name: "American Board of Internal Medicine - Cardiology",
      issuingOrganization: "American Board of Internal Medicine",
      dateObtained: new Date("2020-10-15"),
      expiryDate: new Date("2030-10-15"),
      certificationNumber: "ABIM-2020-CARD-8743",
    },
    {
      name: "Advanced Cardiac Life Support (ACLS)",
      issuingOrganization: "American Heart Association",
      dateObtained: new Date("2023-01-20"),
      expiryDate: new Date("2025-01-20"),
      certificationNumber: "AHA-ACLS-3342-2023",
    },
    {
      name: "Basic Life Support (BLS)",
      issuingOrganization: "American Heart Association",
      dateObtained: new Date("2023-01-15"),
      expiryDate: new Date("2025-01-15"),
      certificationNumber: "AHA-BLS-8921-2023",
    },
  ],
};


export const mockDoctorsReponse: DoctorResponse[] = [
  {
    id: '1',
    fullName: 'Dr. Sarah Johnson',
    email: 'p.fftrvdvdgfbfgggggdp@hospital.com', // Long email to test maxLength
    phoneNumber: '+15551234567',
    gender: 'female',
    avatarUrl: null,
    isActive: true,
    specialties: ['NerPhology', 'Neurology'],
    certificationCount: 3,
    educationCount: 2,
    workExperienceCount: 8,
  },
  {
    id: '2',
    fullName: 'Dr. James Carter',
    email: 'james.carter@healthcare.org',
    phoneNumber: '+12223334444',
    gender: 'male',
    avatarUrl: 'https://i.pravatar.cc/150?img=11',
    isActive: false,
    specialties: ['Cardiology'],
    certificationCount: 5,
    educationCount: 3,
    workExperienceCount: 12,
  },
  {
    id: '3',
    fullName: 'Dr. Emily Nguyen',
    email: 'emily.nguyen@medicalgroup.com',
    phoneNumber: '+13334445555',
    gender: 'female',
    avatarUrl: null,
    isActive: true,
    specialties: ['Pediatrics', 'Neonatology', 'Immunology'], // Multiple specialties
    certificationCount: 2,
    educationCount: 2,
    workExperienceCount: 4,
  },
  {
    id: '4',
    fullName: 'Dr. Michael Okafor',
    email: 'michael.o@longdomainnamehospitalenterprise.co.uk',
    phoneNumber: '+14445556666',
    gender: 'male',
    avatarUrl: 'https://i.pravatar.cc/150?img=20',
    isActive: true,
    specialties: ['Orthopedics'],
    certificationCount: 4,
    educationCount: 1,
    workExperienceCount: 6,
  },
  {
    id: '5',
    fullName: 'Dr. Priya Sharma',
    email: 'priya.sharma@clinic.com',
    phoneNumber: '+15556667777',
    gender: 'female',
    avatarUrl: null,
    isActive: false,
    specialties: ['Dermatology', 'Cosmetology'],
    certificationCount: 1,
    educationCount: 1,
    workExperienceCount: 2,
  },
];