

import { CalendarDays, Stethoscope, User } from "lucide-react";
import { Tab } from "./types";

export const tabs:Tab[] = [
  {
    id: "about",
    label: "About",
    icon: <User size={18} />,
  },
  {
    id: "services",
    label: "Services",
    icon: <Stethoscope size={18} />,
  },
  {
    id: "schedule",
    label: "Schedule",
    icon: <CalendarDays size={18} />,
  },
]
  export const availability = [
    { day: "Monday", hours: "9:00 AM - 5:00 PM" },
    { day: "Tuesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Wednesday", hours: "9:00 AM - 5:00 PM" },
    { day: "Thursday", hours: "9:00 AM - 5:00 PM" },
    { day: "Friday", hours: "9:00 AM - 3:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 2:00 PM" },
    { day: "Sunday", hours: "Closed" },
  ];
  export const doctorServices = [
    {
      id: 1,
      name: "Cardiac Consultation",
      description:
        "Comprehensive evaluation of heart health and cardiovascular symptoms.",
      duration: "30 min",
      price: "$120",
    },
    {
      id: 2,
      name: "Heart Disease Prevention",
      description:
        "Risk assessment and preventive strategies for cardiovascular diseases.",
      duration: "45 min",
      price: "$150",
    },
    {
      id: 3,
      name: "Cardiac Imaging Review",
      description:
        "Interpretation of ECG, echocardiogram, and other cardiac imaging results.",
      duration: "40 min",
      price: "$140",
    },
    {
      id: 4,
      name: "Hypertension Management",
      description:
        "Diagnosis, monitoring, and treatment planning for high blood pressure.",
      duration: "30 min",
      price: "$110",
    },
    {
      id: 5,
      name: "Heart Failure Management",
      description:
        "Long-term care and treatment optimization for heart failure patients.",
      duration: "60 min",
      price: "$180",
    },
    {
      id: 6,
      name: "Post-Procedure Follow-up",
      description:
        "Follow-up visits after cardiac procedures or hospital discharge.",
      duration: "20 min",
      price: "$90",
    },
  ];

  export const AboutDoctor=`Dr. Sarah Johnson is a board-certified cardiologist with more than 12 years of clinical experience in diagnosing, treating, and preventing cardiovascular diseases. She specializes in preventive cardiology, heart failure management, hypertension treatment, and advanced cardiac imaging.

Throughout her career, Dr. Johnson has been committed to delivering personalized, evidence-based care tailored to each patient's unique needs and lifestyle. She believes that patient education and preventive medicine play a vital role in maintaining long-term heart health and improving quality of life.

Dr. Johnson earned her medical degree from Harvard Medical School, completed her residency in Internal Medicine at Johns Hopkins Hospital, and pursued advanced fellowship training in Cardiology at the Mayo Clinic. She remains actively involved in continuing medical education to stay current with the latest advancements in cardiovascular medicine.

Known for her compassionate approach and attention to detail, Dr. Johnson has helped thousands of patients successfully manage heart conditions and achieve better health outcomes. Her goal is to build long-lasting relationships with her patients while providing the highest standard of cardiac care.`


