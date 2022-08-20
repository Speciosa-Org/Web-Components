/* eslint max-len: ["error", { "code": 80 }] */
/* eslint unicorn/no-null: 'off' */

const tabSize = 2;

module.exports = {
  'extends': 'stylelint-config-standard',
  'customSyntax': 'postcss-lit',
  'rules': {
    'indentation': tabSize,
    'string-quotes': 'single',
    'no-duplicate-selectors': true,
    'color-hex-case': 'lower',
    'color-hex-length': 'short',
    'color-named': 'never',
    'color-no-hex': true,
    'selector-max-id': [0],
    'selector-combinator-space-after': 'always',
    'selector-attribute-quotes': 'always',
    'selector-attribute-operator-space-before': 'always',
    'selector-attribute-operator-space-after': 'never',
    'selector-attribute-brackets-space-inside': 'never',
    'declaration-block-trailing-semicolon': 'always',
    'declaration-no-important': true,
    'declaration-colon-space-before': 'never',
    'declaration-colon-space-after': 'always',
    'number-leading-zero': 'always',
    'function-url-quotes': 'always',
    'font-weight-notation': 'named-where-possible',
    'font-family-name-quotes': 'always-unless-keyword',
    'comment-whitespace-inside': 'always',
    'at-rule-no-vendor-prefix': true,
    'rule-empty-line-before': 'always',
    'selector-pseudo-element-colon-notation': 'double',
    'selector-pseudo-class-parentheses-space-inside': 'always',
    'selector-max-universal': [0],
    'media-feature-range-operator-space-before': 'always',
    'media-feature-range-operator-space-after': 'always',
    'media-feature-parentheses-space-inside': 'never',
    'media-feature-colon-space-before': 'never',
    'media-feature-colon-space-after': 'always',
    // In some situations CSS needs units even when
    // working against 0 values. Just don't enforce
    // this anywhere since it can be optimized out.
    'length-zero-no-unit': [null],
  },
};
