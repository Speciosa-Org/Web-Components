/* eslint max-len: ["error", { "code": 80 }] */
/* eslint unicorn/no-null: 'off' */

const tabSize = 2;

module.exports = {
  'extends': 'stylelint-config-standard',
  'customSyntax': 'postcss-lit',
  'plugins': [
    '@stylistic/stylelint-plugin',
  ],
  'rules': {
    '@stylistic/indentation': tabSize,
    '@stylistic/string-quotes': 'single',
    'no-duplicate-selectors': true,
    '@stylistic/color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': true,
    'selector-max-id': [0],
    '@stylistic/selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    '@stylistic/selector-attribute-operator-space-before': 'always',
    '@stylistic/selector-attribute-operator-space-after': 'never',
    '@stylistic/selector-attribute-brackets-space-inside': 'never',
    '@stylistic/declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    '@stylistic/declaration-colon-space-before': 'never',
    '@stylistic/declaration-colon-space-after': 'always',
    '@stylistic/number-leading-zero': 'always',
    'function-url-quotes': 'always',
    'font-weight-notation': 'named-where-possible',
    'font-family-name-quotes': 'always-unless-keyword',
    'comment-whitespace-inside': 'always',
    'at-rule-no-vendor-prefix': true,
    'rule-empty-line-before': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    '@stylistic/selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-max-universal': [0],
    '@stylistic/media-feature-range-operator-space-before': 'always',
    '@stylistic/media-feature-range-operator-space-after': 'always',
    '@stylistic/media-feature-parentheses-space-inside': 'never',
    '@stylistic/media-feature-colon-space-before': 'never',
    '@stylistic/media-feature-colon-space-after': 'always',
    // In some situations CSS needs units even when
    // working against 0 values. Just don't enforce
    // this anywhere since it can be optimized out.
    'length-zero-no-unit': [null],
  },
};
