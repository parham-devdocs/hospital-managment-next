import { GraduationCap, CalendarDays, MapPin } from "lucide-react";
import React from "react";
import { EducationItem } from "../../types";

const EducationComp = ({ educations }: { educations: EducationItem[] }) => {
  return (
    <div className="bg-white rounded-2xl border border-primary-200 shadow-md overflow-hidden">
      {/* Top accent bar */}
      <div  />

      <div className="p-6">
        {/* Header */}
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-primary-100 rounded-xl">
            <GraduationCap className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-primary">Education</h2>
          <span className="ml-auto text-sm font-medium text-white bg-primary px-3 py-1 rounded-full border border-primary">
            {educations.length} {educations.length === 1 ? "entry" : "entries"}
          </span>
        </div>

        {/* Education list */}
        <div className="space-y-5">
          {educations.map((edu, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              {/* Left accent strip */}
              <div  />

              <div className="pl-5 pr-5 py-4">
                {/* Row: School + Degree + Year */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {edu.medicalSchool}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-0.5">
                      {edu.degree}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-primary shadow-sm shrink-0">
                    <CalendarDays className="w-3.5 h-3.5 text-primary-500" />
                    <span className="font-medium">{edu.graduationYear}</span>
                  </div>
                </div>

                {/* Country – as black badge (same as location in work exp) */}
                <div className="mt-3 flex items-center gap-1.5 bg-black text-white max-w-fit rounded-md px-3 py-1 text-xs font-medium">
                  <MapPin className="w-3.5 h-3.5 text-white/80" />
                  {edu.country}
                </div>

                {/* Honors – styled exactly like responsibilities in work exp */}
                {edu.honors && edu.honors.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-primary-100">
                    <span className="text-xs font-semibold text-primary-700 uppercase tracking-wider">
                      Honors & Awards
                    </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {edu.honors.map((h, i) => (
                        <span
                          key={i}
                          className="inline-flex items-center gap-1.5 bg-black text-white max-w-fit rounded-md px-3 py-1 text-xs font-medium"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-400" />
                          {h}
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
        {educations.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No education records available.
          </div>
        )}
      </div>
    </div>
  );
};

export default EducationComp;