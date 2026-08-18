// eslint.config.js
import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import boundariesPlugin from 'eslint-plugin-boundaries';
import clerkNext from '@clerk/eslint-plugin/next'
export default tseslint.config(
  // IGNORE these folders
  {
    ignores: [
      '.next/**',
      'node_modules/**',
      'dist/**',
      'build/**',
      '.vercel/**',
      '*.config.js',
      '*.config.ts',
    ],
  },

  // Base ESLint config
  {
    extends: [js.configs.recommended],
    files: ['src/**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      'react-hooks': reactHooks,
      boundaries: boundariesPlugin,
      '@clerk/next': clerkNext
    },
    settings: {
      'boundaries/elements': [
        { type: 'shared', pattern: 'src/shared/*' },
        { type: 'modules', pattern: 'src/modules/*' },
        { type: 'module-appointments', pattern: 'src/modules/appointments/*' },
        { type: 'module-doctor', pattern: 'src/modules/doctor/*' },
        { type: 'module-auth', pattern: 'src/modules/auth/*' },
      ],
    },
    rules: {
      // React Hooks rules
      ...reactHooks.configs.recommended.rules,
      '@clerk/next/require-auth-protection': [
        'error',
        {
          protected: ['**'],
          public: ['src/app/admin/auth/sign-in/**', 'src/app/**'],
        },
      ],
     

      // Module Boundaries rules
      'boundaries/element-types': [
        'error',
        {
          default: 'disallow',
          rules: [
            // Shared can import from itself and external libraries only
            { from: ['shared'], allow: [] },
            
            // Modules can import from shared
            { from: ['modules'], allow: ['shared'] },
            
            // Specific module rules
            { from: ['module-doctor'], allow: ['module-doctor', 'shared'] },
            { from: ['module-appointments'], allow: ['module-appointments', 'shared'] },
            { from: ['module-auth'], allow: ['module-auth', 'shared'] },
            
                      ],
        },
      ],
    },
  }
);