const restrictedGlobals = require(
  'confusing-browser-globals',
);

const tabSize = 2;
// Very narrow on the margin, but this aligns with some
// research on line length optimization.
// It also helps when code reviewing changes on narrow
// monitors or windows.
// A higher length could be done, however to try and keep
// both code and docs balanced, one consistent narrow
// spacing will be fine.
// https://baymard.com/blog/line-length-readability
// https://www.smashingmagazine.com/2014/09/balancing-line-length-font-size-responsive-web-design/
// https://practicaltypography.com/line-length.html
const maxLineLength = 60;
// Some rule strings get long. Trying to keep it scoped
// down still to avoid run-off files.
const configMaxLineLength = 70;
// A reasonable level to try and keep dependencies down to.
// Due to how lit exports from multiple files, this may
// need to increase or get deeper config as the project
// grows.
const maxDependencies = 10;

module.exports = {
  'ignorePatterns': [
    'package-lock.json',
    'tsconfig.json',
  ],
  'env': {
    'browser': true,
    'es2021': true,
  },
  'plugins': [
    '@typescript-eslint',
    'lit',
    'promise',
    'json-format',
    'import',
    'unicorn',
    'lit-a11y',
  ],
  'extends': [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:wc/recommended',
    'plugin:regexp/recommended',
    'plugin:xss/recommended',
    'plugin:compat/recommended',
    'plugin:sonarjs/recommended',
    'google',
  ],
  'settings': {
    'wc': {
      'elementBaseClasses': [
        'LitElement',
      ],
    },
    'json/sort-package-json': [
      'name',
      'description',
      'license',
      'private',
      'scripts',
      'type',
      'contributors',
      'version',
      'browserslist',
      'repository',
      'keywords',
      'homepage',
      'bugs',
      'author',
      'funding',
      'engines',
      'os',
      'cpu',
      'workspaces',
      'publishConfig',
      'config',
      'files',
      'main',
      'browser',
      'module',
      'bin',
      'man',
      'directories',
      'dependencies',
      'devDependencies',
      'bundleDependencies',
      'peerDependencies',
      'peerDependenciesMeta',
      'optionalDependencies',
      'overrides',
    ],
    'json/json-with-comments-files': [
      '**/tsconfig.json',
      '.vscode/**',
    ],
  },
  'overrides': [
    {
      'files': [
        '*.ts',
      ],
      'rules': {
        '@typescript-eslint/explicit-member-accessibility': 'error',
        'require-jsdoc': 'off',
      },
    },
    {
      'files': [
        '*.cjs',
      ],
      'env': {
        'node': true,
      },
      'rules': {
        '@typescript-eslint/no-var-requires': 'off',
        'import/unambiguous': 'off',
        'max-len': [
          'error',
          {
            'code': configMaxLineLength,
            'tabWidth': tabSize,
            'ignoreUrls': true,
          },
        ],
      },
    },
    {
      'files': [
        'etc/**/*.js',
      ],
      'env': {
        'node': true,
      },
      'rules': {
        // Many configs expect default exports.
        // Allow them in this area without concern.
        'import/no-default-export': 'off',
      },
    },
    {
      'files': [
        'src/**/*.test.ts',
      ],
      'plugins': [
        'mocha',
      ],
      'rules': {
        'unicorn/prevent-abbreviations': 'off',
        'lit/binding-positions': 'off',
        'lit/no-invalid-html': 'off',
        'xss/no-mixed-html': 'off',
        'mocha/handle-done-callback': 'error',
        'mocha/max-top-level-suites': 'error',
        'mocha/no-async-describe': 'error',
        'mocha/no-exclusive-tests': 'error',
        'mocha/no-exports': 'error',
        'mocha/no-global-tests': 'error',
        'mocha/no-hooks': 'error',
        'mocha/no-hooks-for-single-case': 'error',
        'mocha/no-identical-title': 'error',
        'mocha/no-mocha-arrows': 'error',
        'mocha/no-nested-tests': 'error',
        'mocha/no-pending-tests': 'error',
        'mocha/no-return-and-callback': 'error',
        'mocha/no-return-from-async': 'error',
        'mocha/no-setup-in-describe': 'error',
        'mocha/no-sibling-hooks': 'error',
        'mocha/no-skipped-tests': 'error',
        'mocha/no-synchronous-tests': 'error',
        'mocha/no-top-level-hooks': 'error',
        'mocha/prefer-arrow-callback': 'error',
        'mocha/valid-suite-description': 'error',
        'mocha/valid-test-description': 'off',
        'mocha/no-empty-description': 'error',
      },
    },
    {
      'files': [
        '*.mdx',
      ],
      'extends': [
        'plugin:mdx/recommended',
      ],
    },
  ],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'ecmaVersion': 'latest',
    'sourceType': 'module',
  },
  'rules': {
    'indent': [
      'error',
      tabSize,
      {
        'ignoredNodes': [
          'FunctionExpression > .params[decorators.length > 0]',
          /* eslint-disable-next-line max-len */
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          /* eslint-disable-next-line max-len */
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'],
      },
    ],
    'eol-last': [
      'error',
      'always',
    ],
    'linebreak-style': [
      'error',
      'unix',
    ],
    'max-len': [
      'error',
      {
        'code': maxLineLength,
        'tabWidth': tabSize,
        'ignoreUrls': true,
      },
    ],
    'no-magic-numbers': [
      'error',
      {
        'ignore': [
          -1,
          0,
          1,
        ],
        'ignoreDefaultValues': true,
        'detectObjects': true,
      },
    ],
    '@typescript-eslint/explicit-member-accessibility': 'off',
    'wc/no-closed-shadow-root': 'error',
    'wc/no-constructor-params': 'error',
    'wc/no-typos': 'error',
    'wc/require-listener-teardown': 'error',
    'lit/attribute-value-entities': 'error',
    'lit/binding-positions': 'error',
    'lit/no-duplicate-template-bindings': 'error',
    'lit/no-invalid-escape-sequences': 'error',
    'lit/no-invalid-html': 'error',
    'lit/no-legacy-imports': 'error',
    'lit/no-legacy-template-syntax': 'error',
    'lit/no-private-properties': 'error',
    'lit/no-property-change-update': 'error',
    'lit/no-template-arrow': 'error',
    'lit/no-template-bind': 'error',
    'lit/no-template-map': 'error',
    'lit/no-useless-template-literals': 'error',
    'lit/no-value-attribute': 'error',
    'lit/quoted-expressions': [
      'error',
      'never',
    ],
    'lit-a11y/alt-text': 'error',
    'lit-a11y/anchor-has-content': 'error',
    'lit-a11y/anchor-is-valid': 'error',
    'lit-a11y/aria-activedescendant-has-tabindex': 'error',
    'lit-a11y/aria-attr-valid-value': 'error',
    'lit-a11y/aria-attrs': 'error',
    'lit-a11y/aria-role': 'error',
    'lit-a11y/aria-unsupported-elements': 'error',
    'lit-a11y/autocomplete-valid': 'error',
    'lit-a11y/click-events-have-key-events': 'error',
    'lit-a11y/heading-has-content': 'error',
    'lit-a11y/iframe-title': 'error',
    'lit-a11y/img-redundant-alt': 'error',
    'lit-a11y/mouse-events-have-key-events': 'error',
    'lit-a11y/no-access-key': 'error',
    'lit-a11y/no-autofocus': 'error',
    'lit-a11y/no-distracting-elements': 'error',
    'lit-a11y/no-invalid-change-handler': 'error',
    'lit-a11y/no-redundant-role': 'error',
    'lit-a11y/role-has-required-aria-attrs': 'error',
    'lit-a11y/role-supports-aria-attr': 'error',
    'lit-a11y/scope': 'error',
    'lit-a11y/tabindex-no-positive': 'error',
    'promise/always-return': 'error',
    'promise/no-return-wrap': 'error',
    'promise/param-names': 'error',
    'promise/catch-or-return': 'error',
    'promise/no-native': 'off',
    'promise/no-nesting': 'error',
    'promise/no-promise-in-callback': 'error',
    'promise/no-callback-in-promise': 'error',
    'promise/avoid-new': 'warn',
    'promise/no-new-statics': 'error',
    'promise/no-return-in-finally': 'error',
    'promise/valid-params': 'error',
    'promise/prefer-await-to-then': 'error',
    'promise/prefer-await-to-callbacks': 'error',
    'sonarjs/no-inverted-boolean-check': 'error',
    'sonarjs/elseif-without-else': 'error',
    'no-restricted-globals': [
      'error',
      ...restrictedGlobals,
    ],
    'import/no-unresolved': 'off',
    'import/named': 'error',
    'import/default': 'error',
    'import/no-absolute-path': 'error',
    'import/no-self-import': 'error',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-cycle': 'error',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'error',
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'error',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unused-modules': 'error',
    'import/unambiguous': 'error',
    'import/first': 'error',
    'import/exports-last': 'error',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'error',
    'import/extensions': 'off',
    'import/order': [
      'error',
      {
        'groups': [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
          'object',
          'type',
        ],
        'newlines-between': 'never',
        'alphabetize': {
          'order': 'asc',
          'caseInsensitive': false,
        },
        'warnOnUnassignedImports': true,
      },
    ],
    'import/max-dependencies': [
      'error',
      {
        'max': maxDependencies,
        'ignoreTypeImports': true,
      },
    ],
    'import/newline-after-import': 'error',
    'import/no-unassigned-import': 'error',
    'import/no-default-export': 'error',
    'unicorn/better-regex': 'error',
    'unicorn/catch-error-name': 'error',
    'unicorn/consistent-destructuring': 'error',
    'unicorn/consistent-function-scoping': 'error',
    'unicorn/custom-error-definition': 'error',
    'unicorn/empty-brace-spaces': 'error',
    'unicorn/error-message': 'error',
    'unicorn/escape-case': 'error',
    'unicorn/expiring-todo-comments': 'error',
    'unicorn/explicit-length-check': 'error',
    'unicorn/filename-case': 'off',
    'unicorn/import-style': 'off',
    'unicorn/new-for-builtins': 'error',
    'unicorn/no-abusive-eslint-disable': 'error',
    'unicorn/no-array-callback-reference': 'error',
    'unicorn/no-array-for-each': 'error',
    'unicorn/no-array-method-this-argument': 'error',
    'unicorn/no-array-push-push': 'error',
    'unicorn/no-array-reduce': 'error',
    'unicorn/no-await-expression-member': 'error',
    'unicorn/no-console-spaces': 'error',
    'unicorn/no-document-cookie': 'error',
    'unicorn/no-empty-file': 'error',
    'unicorn/no-for-loop': 'error',
    'unicorn/no-hex-escape': 'error',
    'unicorn/no-instanceof-array': 'error',
    'unicorn/no-invalid-remove-event-listener': 'error',
    'unicorn/no-keyword-prefix': 'error',
    'unicorn/no-lonely-if': 'error',
    'unicorn/no-nested-ternary': 'error',
    'unicorn/no-new-array': 'error',
    'unicorn/no-new-buffer': 'error',
    'unicorn/no-null': 'error',
    'unicorn/no-object-as-default-parameter': 'error',
    'unicorn/no-process-exit': 'error',
    'unicorn/no-static-only-class': 'error',
    'unicorn/no-thenable': 'error',
    'unicorn/no-this-assignment': 'error',
    'unicorn/no-unreadable-array-destructuring': 'error',
    'unicorn/no-unreadable-iife': 'error',
    'unicorn/no-unsafe-regex': 'error',
    'unicorn/no-unused-properties': 'error',
    'unicorn/no-useless-fallback-in-spread': 'error',
    'unicorn/no-useless-length-check': 'error',
    'unicorn/no-useless-promise-resolve-reject': 'error',
    'unicorn/no-useless-spread': 'error',
    'unicorn/no-useless-switch-case': 'error',
    'unicorn/no-useless-undefined': 'error',
    'unicorn/no-zero-fractions': 'error',
    'unicorn/number-literal-case': 'error',
    'unicorn/numeric-separators-style': 'error',
    'unicorn/prefer-add-event-listener': 'error',
    'unicorn/prefer-array-find': 'error',
    'unicorn/prefer-array-flat': 'error',
    'unicorn/prefer-array-flat-map': 'error',
    'unicorn/prefer-array-index-of': 'error',
    'unicorn/prefer-array-some': 'error',
    'unicorn/prefer-at': 'error',
    'unicorn/prefer-code-point': 'error',
    'unicorn/prefer-date-now': 'error',
    'unicorn/prefer-default-parameters': 'error',
    'unicorn/prefer-dom-node-append': 'error',
    'unicorn/prefer-dom-node-dataset': 'error',
    'unicorn/prefer-dom-node-remove': 'error',
    'unicorn/prefer-dom-node-text-content': 'error',
    'unicorn/prefer-event-target': 'error',
    'unicorn/prefer-export-from': 'error',
    'unicorn/prefer-includes': 'error',
    'unicorn/prefer-json-parse-buffer': 'error',
    'unicorn/prefer-keyboard-event-key': 'error',
    'unicorn/prefer-logical-operator-over-ternary': 'error',
    'unicorn/prefer-math-trunc': 'error',
    'unicorn/prefer-modern-dom-apis': 'error',
    'unicorn/prefer-modern-math-apis': 'error',
    'unicorn/prefer-module': 'error',
    'unicorn/prefer-native-coercion-functions': 'error',
    'unicorn/prefer-negative-index': 'error',
    'unicorn/prefer-node-protocol': 'error',
    'unicorn/prefer-number-properties': 'error',
    'unicorn/prefer-object-from-entries': 'error',
    'unicorn/prefer-optional-catch-binding': 'error',
    'unicorn/prefer-prototype-methods': 'error',
    'unicorn/prefer-query-selector': 'error',
    'unicorn/prefer-reflect-apply': 'error',
    'unicorn/prefer-regexp-test': 'error',
    'unicorn/prefer-set-has': 'error',
    'unicorn/prefer-spread': 'error',
    'unicorn/prefer-string-replace-all': 'error',
    'unicorn/prefer-string-slice': 'error',
    'unicorn/prefer-string-starts-ends-with': 'error',
    'unicorn/prefer-string-trim-start-end': 'error',
    'unicorn/prefer-switch': 'error',
    'unicorn/prefer-ternary': 'error',
    'unicorn/prefer-top-level-await': 'error',
    'unicorn/prefer-type-error': 'error',
    'unicorn/prevent-abbreviations': 'error',
    'unicorn/relative-url-style': 'error',
    'unicorn/require-array-join-separator': 'error',
    'unicorn/require-number-to-fixed-digits-argument': 'error',
    'unicorn/require-post-message-target-origin': 'error',
    'unicorn/string-content': 'off',
    'unicorn/template-indent': 'error',
    'unicorn/text-encoding-identifier-case': 'error',
    'unicorn/throw-new-error': 'error',
  },
};
