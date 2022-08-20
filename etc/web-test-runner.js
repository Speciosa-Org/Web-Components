import {fileURLToPath} from 'node:url';
import {
  esbuildPlugin,
} from '@web/dev-server-esbuild';
import {
  playwrightLauncher,
} from '@web/test-runner-playwright';
import yargs from 'yargs';
import {hideBin} from 'yargs/helpers';

const createBrowserContext = function(
  browserName,
  timezoneId,
) {
  return playwrightLauncher({
    product: browserName,
    createBrowserContext({browser}) {
      return browser.newContext({
        timezoneId,
      });
    },
  });
};

let browsers = [];
const arguments_ = yargs(hideBin(process.argv)).parse();

const defaultConcurrentBrowsers = 3;
const concurrentBrowsers = Number.parseFloat(arguments_
  ?.concurrentBrowsers) ?? defaultConcurrentBrowsers;

const requestedBrowsers = arguments_
  ?.runBrowsers
  ?.split(',') ?? ['chromium'];

const timezones = [
  'Pacific/Midway', // -11 UTC Offset
  'Pacific/Kiritimati', // +14 offset
  'UTC',
];

for (const browser of requestedBrowsers) {
  const uniform = browser?.toLowerCase();
  if (
    uniform === 'chromium'
  ) {
    for (const timezone of timezones) {
      browsers = [
        createBrowserContext(uniform, timezone),
        ...browsers,
      ];
    }
  }
}

if (browsers.length === 0) {
  throw new Error(
    `Cannot run tests without browsers.
        Supported browsers are: 'chromium'`,
  );
}

const showBrowser = Boolean(arguments_.showBrowser);

export default {
  files: [
    './src/**/*.test.ts',
  ],
  plugins: [
    esbuildPlugin({
      ts: true,
      tsconfig: fileURLToPath(
        new URL(
          '../tsconfig.json',
          import.meta.url,
        ),
      ),
      target: 'auto',
    }),
  ],
  coverage: true,
  nodeResolve: true,
  open: showBrowser,
  manual: showBrowser,
  playwright: true,
  concurrentBrowsers,
  browsers,
};
