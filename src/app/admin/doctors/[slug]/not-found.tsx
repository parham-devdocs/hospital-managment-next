// src/app/admin/doctors/[slug]/not-found.tsx
import Link from 'next/link'
import { User, ArrowLeft, LayoutDashboard, AlertCircle } from 'lucide-react'

export default function DoctorNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full">
        {/* Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          {/* Icon with status badge */}
          <div className="relative flex justify-center mb-6">
            <div className="w-20 h-20 bg-blue-50 rounded-full flex items-center justify-center border-4 border-blue-100">
              <User className="w-10 h-10 text-blue-600" strokeWidth={1.5} />
            </div>
            <div className="absolute -bottom-1 -right-1 bg-red-100 rounded-full p-1">
              <AlertCircle className="w-5 h-5 text-red-500" />
            </div>
          </div>

          {/* Status badge */}
          <div className="flex justify-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-600 text-xs font-medium rounded-full border border-red-100">
              <span className="w-1.5 h-1.5 bg-red-500 rounded-full animate-pulse"></span>
              404 - Not Found
            </span>
          </div>

          {/* Title */}
          <h1 className="text-2xl font-semibold text-gray-900 text-center">
            Doctor Not Found
          </h1>

          {/* Divider */}
          <div className="flex items-center justify-center gap-3 my-4">
            <div className="h-px flex-1 max-w-12 bg-gray-200"></div>
            <span className="text-gray-300 text-xs">✕</span>
            <div className="h-px flex-1 max-w-12 bg-gray-200"></div>
          </div>

          {/* Message */}
          <p className="text-gray-500 text-sm text-center leading-relaxed">
            We couldn't locate this doctor's profile. They may have been removed or the URL might be incorrect.
          </p>

          {/* Helpful hint */}
          <div className="mt-4 bg-gray-50 rounded-lg p-3 border border-gray-100">
            <p className="text-xs text-gray-400 text-center">
              <span className="font-medium text-gray-500">Tip:</span> Check the doctor ID or browse the full directory below.
            </p>
          </div>

          {/* Actions */}
          <div className="mt-6 space-y-2.5">
            <Link
              href="/admin/doctors"
              className="group flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all text-sm font-medium"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-0.5 transition-transform" />
              Back to Doctors
            </Link>
            <Link
              href="/admin"
              className="group flex items-center justify-center gap-2 w-full px-4 py-2.5 bg-white text-gray-700 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-all text-sm font-medium"
            >
              <LayoutDashboard className="w-4 h-4" />
              Go to Dashboard
            </Link>
          </div>

          {/* Footer */}
          <div className="mt-6 pt-4 border-t border-gray-100">
            <p className="text-[10px] text-gray-400 text-center">
              Need help? Contact support
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}