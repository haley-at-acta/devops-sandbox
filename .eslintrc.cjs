/* eslint-env node */
module.exports = {
    extends: [
      'eslint:recommended', 
      'plugin:@typescript-eslint/recommended-type-checked',
      'plugin:@typescript-eslint/stylistic-type-checked',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      project: true,
      tsconfigRootDir: './customer-success-web-app'
    },
    plugins: ['@typescript-eslint'],
    root: true,
    rules: {
      // Semi colons
      "semi": "off",
      "@typescript-eslint/semi": "error",
      
      // Recommended rules specifications
      "no-case-declarations": "warn",
      "no-prototype-builtins": "warn",
      "@typescript-eslint/no-empty-function": ["error", { "allow": ["constructors"] }],
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-unsafe-argument": "warn",
      "@typescript-eslint/no-unsafe-assignment": "warn",
      "@typescript-eslint/no-unsafe-call": "warn",
      "@typescript-eslint/no-unsafe-member-access": "warn",
      "@typescript-eslint/no-unsafe-return": "warn",
      "@typescript-eslint/unbound-method": "warn",

      // Stylistic rules specifications
      "@typescript-eslint/prefer-nullish-coalescing": "warn",
    }
  };