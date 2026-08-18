import { formatDate } from "@/src/shared/lib/formatDate";
import { Briefcase, CalendarDays, MapPin, CheckCircle2 } from "lucide-react";
import { WorkExperienceItem } from "../../types";

const WorkExperienceComp = ({
  workExperiences,
}: {
  workExperiences: WorkExperienceItem[];
}) => {
  return (
    <div className="bg-white rounded-2xl border border-primary-200 shadow-md overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1.5 " />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-primary-100 rounded-xl">
            <Briefcase className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-primary">Work Experience</h2>
          <span className="ml-auto text-sm font-medium text-primary-600 bg-primary text-white px-3 py-1 rounded-full border border-primary">
            {workExperiences.length} {workExperiences.length === 1 ? "role" : "roles"}
          </span>
        </div>

        {/* Experiences */}
        <div className="space-y-5">
          {workExperiences.map((exp, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border  shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Left accent strip – primary gradient */}
              <div  />

              <div className="pl-5 pr-5 py-4">
                {/* Row: Hospital + Position + Date */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {exp.hospital}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-0.5">
                      {exp.position}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-primary shadow-sm shrink-0">
                    <CalendarDays className="w-3.5 h-3.5 text-primary-500" />
                    <span className="font-medium">
                      {formatDate(exp.startDate)} – {formatDate(exp.endDate)}
                    </span>
                  </div>
                </div>

                {/* Location – black badge (as requested) */}
                <div className="mt-3 flex items-center gap-1.5 bg-black text-white max-w-fit rounded-md px-3 py-1 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-white/80" />
                  {exp.location}
                </div>

                {/* Responsibilities – with clear label and primary bullets */}
                {exp.responsibilities && exp.responsibilities.length > 0 && (
  <div className="mt-4">
    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
      Responsibilities
    </span>
    <div className="flex flex-wrap gap-2 mt-2">
      {exp.responsibilities.map((resp, i) => (
        <span
          key={i}
          className="inline-flex items-center gap-1.5  bg-black text-white max-w-fit rounded-md px-3 py-1 text-xs font-medium "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
          {resp}
        </span>
      ))}
    </div>
  </div>
)}
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {workExperiences.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No work experience recorded.
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkExperienceComp;