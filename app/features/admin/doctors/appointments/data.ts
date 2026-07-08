import { Appointment } from "./types";

export const appointments: Appointment[] = [
  // July 2, 2026 - 2 appointments
  {
    id: "1",
    title: "Morning Checkup",
    date: new Date(2026, 6, 2, 9, 0),
    time: "9:00 AM",
    description: "Regular health checkup",
    status: "completed",
    patient: {
      id: "p1",
      name: "John Smith",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
    },
  },
  {
    id: "16",
    title: "Blood Test",
    date: new Date(2026, 6, 2, 11, 0),
    time: "11:00 AM",
    description: "Routine blood work",
    status: "completed",
    patient: {
      id: "p13",
      name: "Thomas Brown",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
    },
  },

  // July 3, 2026 - 1 appointment
  {
    id: "2",
    title: "Dental Appointment",
    date: new Date(2026, 6, 3, 14, 30),
    time: "2:30 PM",
    description: "Teeth cleaning and checkup",
    status: "in_progress",
    patient: {
      id: "p2",
      name: "Emma Wilson",
      avatar_url: "",
    },
    doctor: {
      id: "d2",
      name: "Dr. Michael Chen",
      avatar_url: "",
    },
  },

  // July 4, 2026 - 2 appointments
  {
    id: "3",
    title: "Cardiology Consultation",
    date: new Date(2026, 6, 4, 10, 0),
    time: "10:00 AM",
    description: "Heart health evaluation",
    status: "completed",
    patient: {
      id: "p3",
      name: "Robert Davis",
      avatar_url: "",
    },
    doctor: {
      id: "d3",
      name: "Dr. Emily Martinez",
      avatar_url: "",
    },
  },
  {
    id: "17",
    title: "MRI Scan",
    date: new Date(2026, 6, 4, 14, 0),
    time: "2:00 PM",
    description: "Lower back MRI",
    status: "completed",
    patient: {
      id: "p14",
      name: "Susan Clark",
      avatar_url: "",
    },
    doctor: {
      id: "d9",
      name: "Dr. Mark Taylor",
      avatar_url: "",
    },
  },

  // July 5, 2026 - 1 appointment
  {
    id: "4",
    title: "Follow-up Visit",
    date: new Date(2026, 6, 5, 11, 30),
    time: "11:30 AM",
    description: "Post-surgery follow-up",
    status: "in_progress",
    patient: {
      id: "p4",
      name: "Lisa Anderson",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
    },
  },

  // July 6, 2026 - 1 appointment
  {
    id: "5",
    title: "Physical Therapy",
    date: new Date(2026, 6, 6, 15, 0),
    time: "3:00 PM",
    description: "Knee rehabilitation session",
    status: "cancelled",
    patient: {
      id: "p5",
      name: "David Brown",
      avatar_url: "",
    },
    doctor: {
      id: "d4",
      name: "Dr. Lisa Park",
      avatar_url: "",
    },
  },

  // July 7, 2026 - 3 appointments
  {
    id: "6",
    title: "Pediatric Checkup",
    date: new Date(2026, 6, 7, 9, 30),
    time: "9:30 AM",
    description: "Annual checkup for child",
    status: "completed",
    patient: {
      id: "p6",
      name: "Olivia Taylor",
      avatar_url: "",
    },
    doctor: {
      id: "d5",
      name: "Dr. James Wilson",
      avatar_url: "",
    },
  },
  {
    id: "18",
    title: "Skin Biopsy",
    date: new Date(2026, 6, 7, 11, 0),
    time: "11:00 AM",
    description: "Mole biopsy procedure",
    status: "in_progress",
    patient: {
      id: "p15",
      name: "Karen White",
      avatar_url: "",
    },
    doctor: {
      id: "d6",
      name: "Dr. Robert Kim",
      avatar_url: "",
    },
  },
  {
    id: "19",
    title: "Nutrition Consultation",
    date: new Date(2026, 6, 7, 15, 30),
    time: "3:30 PM",
    description: "Diet and nutrition planning",
    status: "completed",
    patient: {
      id: "p16",
      name: "Daniel Lee",
      avatar_url: "",
    },
    doctor: {
      id: "d10",
      name: "Dr. Amanda Green",
      avatar_url: "",
    },
  },

  // July 8, 2026 - 2 appointments
  {
    id: "7",
    title: "Dermatology Visit",
    date: new Date(2026, 6, 8, 13, 0),
    time: "1:00 PM",
    description: "Skin check and mole screening",
    status: "in_progress",
    patient: {
      id: "p7",
      name: "Maria Garcia",
      avatar_url: "",
    },
    doctor: {
      id: "d6",
      name: "Dr. Robert Kim",
      avatar_url: "",
    },
  },
  {
    id: "20",
    title: "Eye Checkup",
    date: new Date(2026, 6, 8, 16, 0),
    time: "4:00 PM",
    description: "Regular eye examination",
    status: "completed",
    patient: {
      id: "p17",
      name: "Rachel Adams",
      avatar_url: "",
    },
    doctor: {
      id: "d7",
      name: "Dr. Angela White",
      avatar_url: "",
    },
  },

  // July 9, 2026 - 1 appointment
  {
    id: "8",
    title: "Eye Examination",
    date: new Date(2026, 6, 9, 16, 0),
    time: "4:00 PM",
    description: "Comprehensive eye exam",
    status: "completed",
    patient: {
      id: "p8",
      name: "James Rodriguez",
      avatar_url: "",
    },
    doctor: {
      id: "d7",
      name: "Dr. Angela White",
      avatar_url: "",
    },
  },

  // July 10, 2026 - 3 appointments
  {
    id: "9",
    title: "Neurology Consultation",
    date: new Date(2026, 6, 10, 10, 30),
    time: "10:30 AM",
    description: "Migraine treatment consultation",
    status: "cancelled",
    patient: {
      id: "p9",
      name: "Patricia Lee",
      avatar_url: "",
    },
    doctor: {
      id: "d8",
      name: "Dr. David Thompson",
      avatar_url: "",
    },
  },
  {
    id: "21",
    title: "Chest X-Ray",
    date: new Date(2026, 6, 10, 13, 0),
    time: "1:00 PM",
    description: "Chest X-ray for respiratory check",
    status: "in_progress",
    patient: {
      id: "p18",
      name: "William Turner",
      avatar_url: "",
    },
    doctor: {
      id: "d11",
      name: "Dr. Rachel Carter",
      avatar_url: "",
    },
  },
  {
    id: "22",
    title: "Psychology Session",
    date: new Date(2026, 6, 10, 16, 30),
    time: "4:30 PM",
    description: "Mental health counseling",
    status: "completed",
    patient: {
      id: "p19",
      name: "Sophie Martin",
      avatar_url: "",
    },
    doctor: {
      id: "d12",
      name: "Dr. Thomas Walsh",
      avatar_url: "",
    },
  },

  // July 11, 2026 - 1 appointment
  {
    id: "10",
    title: "Orthopedic Checkup",
    date: new Date(2026, 6, 11, 11, 0),
    time: "11:00 AM",
    description: "Joint pain evaluation",
    status: "in_progress",
    patient: {
      id: "p10",
      name: "Michael Johnson",
      avatar_url: "",
    },
    doctor: {
      id: "d3",
      name: "Dr. Emily Martinez",
      avatar_url: "",
    },
  },

  // July 12, 2026 - 2 appointments
  {
    id: "11",
    title: "Dermatology Follow-up",
    date: new Date(2026, 6, 12, 14, 0),
    time: "2:00 PM",
    description: "Follow-up skin check",
    status: "completed",
    patient: {
      id: "p7",
      name: "Maria Garcia",
      avatar_url: "",
    },
    doctor: {
      id: "d6",
      name: "Dr. Robert Kim",
      avatar_url: "",
    },
  },
  {
    id: "23",
    title: "Ultrasound",
    date: new Date(2026, 6, 12, 10, 0),
    time: "10:00 AM",
    description: "Abdominal ultrasound",
    status: "in_progress",
    patient: {
      id: "p20",
      name: "George Williams",
      avatar_url: "",
    },
    doctor: {
      id: "d13",
      name: "Dr. Patricia Moore",
      avatar_url: "",
    },
  },

  // July 14, 2026 - 1 appointment
  {
    id: "12",
    title: "General Checkup",
    date: new Date(2026, 6, 14, 8, 30),
    time: "8:30 AM",
    description: "Annual general checkup",
    status: "in_progress",
    patient: {
      id: "p11",
      name: "Sarah Williams",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
    },
  },

  // July 15, 2026 - 3 appointments
  {
    id: "13",
    title: "Cardiology Follow-up",
    date: new Date(2026, 6, 15, 10, 0),
    time: "10:00 AM",
    description: "Follow-up heart evaluation",
    status: "completed",
    patient: {
      id: "p3",
      name: "Robert Davis",
      avatar_url: "",
    },
    doctor: {
      id: "d3",
      name: "Dr. Emily Martinez",
      avatar_url: "",
    },
  },
  {
    id: "24",
    title: "Blood Pressure Check",
    date: new Date(2026, 6, 15, 14, 30),
    time: "2:30 PM",
    description: "Blood pressure monitoring",
    status: "in_progress",
    patient: {
      id: "p21",
      name: "Angela Miller",
      avatar_url: "",
    },
    doctor: {
      id: "d1",
      name: "Dr. Sarah Johnson",
      avatar_url: "",
    },
  },
  {
    id: "25",
    title: "Allergy Test",
    date: new Date(2026, 6, 15, 16, 0),
    time: "4:00 PM",
    description: "Food allergy testing",
    status: "cancelled",
    patient: {
      id: "p22",
      name: "Jennifer Davis",
      avatar_url: "",
    },
    doctor: {
      id: "d14",
      name: "Dr. Robert Wilson",
      avatar_url: "",
    },
  },

  // July 16, 2026 - 1 appointment
  {
    id: "14",
    title: "Physical Therapy Session",
    date: new Date(2026, 6, 16, 15, 30),
    time: "3:30 PM",
    description: "Physical therapy session",
    status: "cancelled",
    patient: {
      id: "p5",
      name: "David Brown",
      avatar_url: "",
    },
    doctor: {
      id: "d4",
      name: "Dr. Lisa Park",
      avatar_url: "",
    },
  },

  // July 17, 2026 - 2 appointments
  {
    id: "15",
    title: "Pediatric Vaccination",
    date: new Date(2026, 6, 17, 9, 0),
    time: "9:00 AM",
    description: "Child vaccination appointment",
    status: "in_progress",
    patient: {
      id: "p12",
      name: "Noah Martinez",
      avatar_url: "",
    },
    doctor: {
      id: "d5",
      name: "Dr. James Wilson",
      avatar_url: "",
    },
  },
  {
    id: "26",
    title: "Thyroid Check",
    date: new Date(2026, 6, 17, 11, 0),
    time: "11:00 AM",
    description: "Thyroid function test",
    status: "completed",
    patient: {
      id: "p23",
      name: "Megan Roberts",
      avatar_url: "",
    },
    doctor: {
      id: "d15",
      name: "Dr. Steven Adams",
      avatar_url: "",
    },
  },

  // July 18, 2026 - 2 appointments
  {
    id: "27",
    title: "Prenatal Checkup",
    date: new Date(2026, 6, 18, 9, 0),
    time: "9:00 AM",
    description: "Pregnancy follow-up",
    status: "in_progress",
    patient: {
      id: "p24",
      name: "Rachel Brown",
      avatar_url: "",
    },
    doctor: {
      id: "d16",
      name: "Dr. Elizabeth Scott",
      avatar_url: "",
    },
  },
  {
    id: "28",
    title: "Osteoporosis Screening",
    date: new Date(2026, 6, 18, 14, 0),
    time: "2:00 PM",
    description: "Bone density test",
    status: "completed",
    patient: {
      id: "p25",
      name: "Mary Wilson",
      avatar_url: "",
    },
    doctor: {
      id: "d17",
      name: "Dr. Charles Miller",
      avatar_url: "",
    },
  },

  // July 20, 2026 - 2 appointments
  {
    id: "29",
    title: "Sleep Study",
    date: new Date(2026, 6, 20, 20, 0),
    time: "8:00 PM",
    description: "Sleep apnea test",
    status: "in_progress",
    patient: {
      id: "p26",
      name: "Steven Johnson",
      avatar_url: "",
    },
    doctor: {
      id: "d18",
      name: "Dr. Barbara Nelson",
      avatar_url: "",
    },
  },
  {
    id: "30",
    title: "ENT Checkup",
    date: new Date(2026, 6, 20, 10, 0),
    time: "10:00 AM",
    description: "Ear, nose, throat examination",
    status: "completed",
    patient: {
      id: "p27",
      name: "Laura Taylor",
      avatar_url: "",
    },
    doctor: {
      id: "d19",
      name: "Dr. Daniel Harris",
      avatar_url: "",
    },
  },
];

export const statusColorMap: Record<string, string> = {
  in_progress: "#3b82f6", // blue
  completed: "#22c55e", // green
  cancelled: "#ef4444", // red
};

export const colorMap: string[] = [
  "#3b82f6",
  "#22c55e",
  "#ef4444",
  "#f59e0b",
  "#8b5cf6",
  "#eab308",
  "#ec4899",
];

export const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
