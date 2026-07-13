import React from "react";
import { Clock, DollarSign, Stethoscope } from "lucide-react";
import { ServicesProps } from "./types";




const Services = ({
  services,
  primaryColor = "#2563eb",
}: ServicesProps) => {
  return (
    <div className="space-y-4 animate-fadeIn">
      {services.map((service) => (
        <div
          key={service.id}
          className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start justify-between gap-4">
            {/* Left side */}
            <div className="flex gap-4 flex-1">
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                style={{ backgroundColor: `${primaryColor}15` }}
              >
                <Stethoscope
                  size={22}
                  style={{ color: primaryColor }}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-lg font-semibold text-gray-800">
                  {service.name}
                </h3>

                <p className="text-gray-500 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>

                <div className="flex gap-4 mt-4 flex-wrap">
                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <Clock size={16} />
                    <span>{service.duration}</span>
                  </div>

                  <div className="flex items-center gap-2 text-gray-600 text-sm">
                    <DollarSign size={16} />
                    <span>{service.price}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional booking button */}
            <button
              className="px-4 py-2 rounded-xl text-white font-medium transition-transform hover:scale-105"
              style={{ backgroundColor: primaryColor }}
            >
              Book
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;