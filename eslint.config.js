import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default tseslint.config(
  { ignores: ['dist'] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    // rules: {
    //   ...reactHooks.configs.recommended.rules,
    //   'react-refresh/only-export-components': [
    //     'warn',
    //     { allowConstantExport: true },
    //   ],
    // },
    rules: {
      'linebreak-style': 'off',
      'prettier/prettier': [
        'error',
        {
          endOfLine: 'manual',
        },
      ],
      'react/no-unused-prop-types': 1,
      'react-hooks/rules-of-hooks': 'error',
      'import/no-duplicates': 'off',
      'react-hooks/exhaustive-deps': 'warn',
      '@typescript-eslint/camelcase': 'off',
      'react/jsx-one-expression-per-line': 'off',
      'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
      'import/prefer-default-export': 'off',
      'react/jsx-props-no-spreading': 'off',
      'no-unused-expressions': 'off',
      'react/jsx-curly-newline': 'off',
      'no-nested-ternary': 'off',
      '@typescript-eslint/interface-name-prefix': 'off',
      camelcase: 'off',
      'react/no-array-index-key': 'off',
      'import/no-extraneous-dependencies': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      'react/prop-types': 'off',
      'react/require-default-props': 'off',
      'react/no-children-prop': 'off',
      'no-empty': 'warn',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'no-plusplus': 'off',
      'no-empty': 'off',
    },
  },
)
