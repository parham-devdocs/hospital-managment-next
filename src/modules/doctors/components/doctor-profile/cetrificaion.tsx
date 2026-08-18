import { formatDate } from "@/src/shared/lib/formatDate";
import { Award, ShieldCheck, CalendarDays } from "lucide-react";
import { CertificationItem } from "../../types";

export const CertificationComp = ({
  certifications,
}: {
  certifications: CertificationItem[];
}) => {
  return (
    <div className="bg-white rounded-2xl border border-primary-200 shadow-md overflow-hidden">
      <div className="h-1.5 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

      <div className="p-6">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2.5 bg-primary-100 rounded-xl">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <h2 className="text-xl font-bold text-primary">Certifications</h2>
          <span className="ml-auto text-sm font-medium text-white bg-primary px-3 py-1 rounded-full border border-primary">
            {certifications.length}{" "}
            {certifications.length === 1 ? "certification" : "certifications"}
          </span>
        </div>

        <div className="space-y-5">
          {certifications.map((cert, idx) => (
            <div
              key={idx}
              className="relative rounded-xl border shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden"
            >
              <div  />

              <div className="pl-5 pr-5 py-4">
                {/* Row: Name + Issuer + Dates */}
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-bold text-primary">
                      {cert.name}
                    </h3>
                    <p className="text-sm font-medium text-gray-500 mt-0.5">
                      {cert.issuingOrganization}
                    </p>
                  </div>
                  <div className="flex items-center gap-1.5 text-xs text-gray-500 bg-white px-3 py-1.5 rounded-full border border-primary shadow-sm shrink-0">
                    <CalendarDays className="w-3.5 h-3.5 text-primary-500" />
                    <span className="font-medium">
                      {formatDate(cert.dateObtained)} – {formatDate(cert.expiryDate)}
                    </span>
                  </div>
                </div>

                {/* Certification Number – black badge (like location / country) */}
                <div className="mt-3 flex items-center gap-1.5 bg-black text-white max-w-fit rounded-md px-3 py-1 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-white/80" />
                  #{cert.certificationNumber}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state */}
        {certifications.length === 0 && (
          <div className="text-center py-8 text-gray-400 text-sm">
            No certifications recorded.
          </div>
        )}
      </div>
    </div>
  );
};

export default CertificationComp;