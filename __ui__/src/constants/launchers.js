"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var defaultArgs = [
    '--disable-dev-shm-usage',
    '--disable-renderer-backgrounding',
    '--disable-background-timer-throttling',
    '--disable-backgrounding-occluded-windows',
    '--no-first-run',
    '--lang=en-US',
    '--disable-default-apps',
    '--no-default-browser-check',
    '--disable-popup-blocking',
    '--no-sandbox',
    '--disable-setuid-sandbox',
    '--no-zygote',
    '--disable-gpu',
];
exports.launchers = {
    debug: {
        args: defaultArgs.concat(['--start-maximized']),
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
//# sourceMappingURL=launchers.js.map