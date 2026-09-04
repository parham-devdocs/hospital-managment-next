import React from 'react';

interface SimpleInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  type?: string;
  error?: string;
  label: string;
  required?: boolean;
  helperText?: string;
}

const SimpleInput = ({ 
  type = 'text', 
  label, 
  placeholder, 
  error, 
  required = false,
  helperText,
  className = '',
  id,
  ...props 
}: SimpleInputProps) => {
  // Generate a unique ID if not provided
  const inputId = id || `input-${label.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div className="w-full">
      <label 
        htmlFor={inputId}
        className="block text-sm font-medium text-gray-700 mb-1.5"
      >
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        id={inputId}
        type={type}
        placeholder={placeholder}
        aria-label={label}
        aria-invalid={!!error}
        aria-describedby={error ? `${inputId}-error` : helperText ? `${inputId}-helper` : undefined}
        className={`
          w-full px-3 py-2 
          border rounded-md 
          bg-white
          text-gray-900 
          placeholder-gray-400
          transition-colors duration-200
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 hover:border-gray-400'}
          ${className}
        `}
        {...props}
      />

      {error && (
        <p 
          id={`${inputId}-error`}
          className="mt-1.5 text-sm text-red-600 flex items-center gap-1"
        >
          <span className="inline-block w-1 h-1 bg-red-500 rounded-full"></span>
          {error}
        </p>
      )}

      {helperText && !error && (
        <p 
          id={`${inputId}-helper`}
          className="mt-1.5 text-sm text-gray-500"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default SimpleInput;