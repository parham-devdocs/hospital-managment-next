"use client"

export default function ErrorPage({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  

  return (
    <div className=' h-screen flex items-center justify-center '>
   <div className="min-h-[60vh] mb-40 flex items-center justify-center p-6 bg-gradient-to-br ">
      <div className="relative max-w-lg w-full bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 border border-slate-200 dark:border-slate-700 
                      before:absolute before:-inset-0.5 before:bg-gradient-to-r before:from-primary before:via-blue-800 before:to-primary
                      before:rounded-3xl before:blur-sm before:opacity-70 before:-z-10">
        
        {/* Decorative floating dots */}
        <div className="absolute top-4 right-6 flex space-x-1">
          <span className="h-2 w-2 bg-blue-300 rounded-full animate-pulse" style={{ animationDelay: '0ms' }} />
          <span className="h-2 w-2 bg-green-300 rounded-full animate-pulse" style={{ animationDelay: '300ms' }} />
          <span className="h-2 w-2 bg-purple-300 rounded-full animate-pulse" style={{ animationDelay: '600ms' }} />
        </div>

        <div className="text-center">
          {/* Icon */}
          <div className="flex justify-center mb-4">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-full blur-lg opacity-60 animate-pulse" />
              <svg
                className="relative w-16 h-16 text-primary "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1.8}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-bold text-slate-800 dark:text-white">
            Oops! Something went wrong
          </h1>

          {/* Custom message */}
          <p className="mt-2 text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
            An unexpected error happened. <br />
            <span className="font-medium text-primary dark:text-purple-400">
              We are trying to solve that.
            </span>
          </p>

          {/* Error details (optional, but helpful for devs) */}
          <div className="mt-4 p-3 bg-slate-100 dark:bg-slate-700 rounded-lg text-left text-xs text-slate-500 dark:text-slate-400 overflow-auto max-h-28 border border-slate-200 dark:border-slate-600">
            <span className="font-mono break-all">{error.message || 'Unknown error'}</span>
          </div>

        

          <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
            If the issue persists, please contact support.
          </p>
        </div>
      </div>
    </div>
    </div>
 
  );
}