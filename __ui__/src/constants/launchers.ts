import * as puppeteer from 'puppeteer';

const defaultArgs = ['--embedded-extension-options', '--enable-experimental-extension-apis'];

export const launchers: {
  [key: string]: puppeteer.BrowserLaunchArgumentOptions & puppeteer.LaunchOptions & puppeteer.BrowserConnectOptions;
} = {
  debug: {
    args: [
      ...defaultArgs,
      '--start-maximized',
    ],
    devtools: false,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    slowMo: 15,
    ignoreHTTPSErrors: true,
    headless: false,
  },
  headless: {
    args: defaultArgs,
    headless: true,
    ignoreHTTPSErrors: true,
  },
};
