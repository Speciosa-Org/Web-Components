import {resolve, dirname} from 'node:path';
import {fileURLToPath} from 'node:url';
import replaceInFile from 'replace-in-file';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/**
 * Plopjs configuration generator
 * @param {NodePlopAPI} plop Instance of plop to configure.
 */
export default function(
  /** @type {import('plop').NodePlopAPI} */
  plop,
) {
  const kebabCase = plop.getHelper('kebabCase');
  const pascalCase = plop.getHelper('pascalCase');

  plop.setActionType('updateCommitLint', async function(
    answers,
  ) {
    return await replaceInFile({
      files: resolve(
        __dirname,
        '..',
        'etc',
        'commitlint.config.cjs',
      ),
      from: /\/\/\sScopeEnumPlaceholder/,
      to: `'${answers.kebabName}',
        // ScopeEnumPlaceholder`,
    });
  });

  plop.setGenerator('component', {
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is the component name?',
      },
    ],
    description: 'Scaffold a new component',
    actions: function(data) {
      const kebabName = kebabCase(data.name);
      const pascalName = pascalCase(data.name);
      data.tagName = `rabia-${kebabName}`;
      data.jsClassName = pascalCase(
        `Rabia${pascalName}Element`,
      );
      data.kebabName = kebabName;

      return [
        {
          type: 'addMany',
          templateFiles:
                        '../templates/component/*',
          destination: resolve(
            __dirname,
            '..',
            'src',
            'components',
            kebabName,
          ),
          base: '../templates/component',
          verbose: true,
          abortOnFail: true,
        },
        {
          type: 'updateCommitLint',
        },
      ];
    },
  });
}
