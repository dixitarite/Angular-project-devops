// eslint.config.js
import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import angular from 'angular-eslint';

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.stylistic,

  {
    files: ['**/*.ts'],
    plugins: {
      '@angular-eslint': angular.plugin,
    },
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.json',
        sourceType: 'module',
      },
    },
    rules: {
      ...angular.configs['recommended'].rules,
      ...angular.configs['component-max-inline-declarations'].rules,
      '@angular-eslint/directive-selector': [
        'error',
        {
          type: 'attribute',
          prefix: 'app',
          style: 'camelCase',
        },
      ],
      '@angular-eslint/component-selector': [
        'error',
        {
          type: 'element',
          prefix: 'app',
          style: 'kebab-case',
        },
      ],
    },
  },

  {
    files: ['**/*.html'],
    plugins: {
      '@angular-eslint/template': angular.templatePlugin,
    },
    languageOptions: {
      parser: angular.templateParser,
    },
    rules: {
      ...angular.configs['template-recommended'].rules,
      ...angular.configs['template-accessibility'].rules,
    },
  },
];
