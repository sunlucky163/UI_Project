import * as puppeteer from 'puppeteer';

const defaultArgs = [
    '--no-first-run',
    '--lang=en-US',
    '--no-sandbox',
    '--disable-gpu',
];

export const launchers: { [key: string]: puppeteer.LaunchOptions } = {
    debug: {
        args: [...defaultArgs, '--start-maximized'],
        devtools: true,
        slowMo: 10,
        ignoreHTTPSErrors: true,
    },
    headless: {
        args: defaultArgs,
        headless: true,
        ignoreHTTPSErrors: true,
    },
};
