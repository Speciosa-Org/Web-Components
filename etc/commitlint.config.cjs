const errorCode = 2;

module.exports = {
  extends: [
    '@commitlint/config-conventional',
  ],
  ignores: [
    (commit) => commit.toUpperCase().trim() === 'WIP',
  ],
  rules: {
    'scope-enum': [
      errorCode,
      'always',
      [
        'button',
        // ScopeEnumPlaceholder
      ],
    ],
    'scope-case': [
      errorCode,
      'always',
      'kebab-case',
    ],
    'type-enum': [
      errorCode,
      'always',
      [
        'feat',
        'fix',
        'docs',
        'style',
        'refactor',
        'test',
        'revert',
        'chore',
      ],
    ],
  },
};
