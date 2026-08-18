import { type GeneralInfo } from "@/src/modules/doctors/types";
import { BadgeCheck, Calendar, Mail, MapPin, Phone, User } from "lucide-react";
import Image from "next/image";
import femaleFigure from "@/public/images/femaleFigure.jpeg";
import maleFigure from "@/public/images/maleFigure.jpeg";

const GeneralInfo = ({ generalInfo }: { generalInfo: GeneralInfo }) => {
  const avatar = generalInfo.gender === "male" ? maleFigure : femaleFigure;

  return (
    <div className=" card-container shadow-sm overflow-hidden">
      {/* Top accent bar */}
      <div className="h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600" />

      <div className="p-8">
        {/* Header: Avatar + Name + Status */}
        <div className="flex items-center gap-6 mb-8">
          <div className="relative shrink-0">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br shadow-lg ring-2 ring-primary">
              <div className="w-full h-full rounded-full bg-white flex items-center justify-center overflow-hidden">
                <Image
                  width={200}
                  height={200}
                  src={generalInfo.avatarUrl || avatar}
                  alt={generalInfo.fullName}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-primary-800 tracking-tight">
              {generalInfo.fullName}
            </h1>
            <div className="flex items-center gap-2 mt-1">
              <span
                className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${
                  generalInfo.iaActive
                    ? "bg-green-100 text-green-700"
                    : "bg-gray-100 text-gray-600"
                }`}
              >
                <BadgeCheck className="w-3 h-3" />
                {generalInfo.iaActive ? "Active" : "Inactive"}
              </span>
            </div>
          </div>
        </div>

        {/* Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 text-sm">
          {/* Email */}
          <div className="flex items-center gap-3 bg-black text-white max-w-fit rounded-md px-2 py-1">
            <Mail className="w-4 h-4 text-primary-500" />
            <span className="truncate">{generalInfo.email}</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3 bg-black text-white max-w-fit rounded-md px-2 py-1">
            <Phone className="w-4 h-4 text-primary-500" />
            <span>{generalInfo.phoneNumber}</span>
          </div>

          {/* Gender */}
          <div className="flex items-center gap-3 bg-black text-white max-w-fit rounded-md px-2 py-1">
            <User className="w-4 h-4 text-primary-500" />
            <span className="capitalize">{generalInfo.gender}</span>
          </div>

          {/* Age */}
          {generalInfo.age && (
            <div className="flex items-center gap-3 bg-black text-white max-w-fit rounded-md px-2 py-1">
              <Calendar className="w-4 h-4 text-primary-500" />
              <span>{generalInfo.age} years old</span>
            </div>
          )}

          {/* Address – spans full width if needed */}
          {generalInfo.address && (
            <div className="flex items-start gap-3  md:col-span-2 bg-black text-white max-w-fit rounded-md px-2 py-1">
              <MapPin className="w-4 h-4 text-primary-500 shrink-0 mt-0.5" />
              <span title={generalInfo.address} className="truncate">
                {generalInfo.address}
              </span>
            </div>
          )}
        </div>

        {/* Optional: add a bottom divider or action buttons here */}
      </div>
    </div>
  );
};

export default GeneralInfo;