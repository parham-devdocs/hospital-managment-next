'use client';

import { useEffect } from 'react';

export default function DoctorsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // This logs the real error to your console
    console.error('Doctor page error:', error);
  }, [error]);

  // Check if it's a connection error
  const isBackendDown = error.message?.includes('connect') || 
                         error.message?.includes('ECONNREFUSED') ||
                         error.message?.includes('fetch');

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] p-6 text-center">
      {isBackendDown ? (
        <>
          <h2 className="text-2xl font-bold text-orange-600">Backend Service Unavailable</h2>
          <p className="mt-2 text-gray-600 max-w-md">
            Could not connect to the doctor service. Please ensure the NestJS backend is running.
          </p>
        </>
      ) : (
        <>
          <h2 className="text-2xl font-bold text-red-600">Something went wrong</h2>
          <p className="mt-2 text-gray-600">{error.message || 'Unknown error'}</p>
        </>
      )}
      <button
        onClick={reset}
        className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        Try again
      </button>
    </div>
  );
}