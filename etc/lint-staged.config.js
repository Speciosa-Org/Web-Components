export default {
  '*.{js,ts,cjs,json}': [
    'eslint --fix --config etc/eslintrc.cjs',
  ],
  '*.css.ts': [
    'stylelint --fix --config etc/stylelint.config.cjs',
  ],
};
