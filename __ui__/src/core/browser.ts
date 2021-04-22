import * as puppeteer from 'puppeteer';
import { Config } from '@Core/config';
import { Page } from '@Core/page';
import { launchers } from '@Constants/launchers';

export class Browser {
    private browser: puppeteer.Browser;
    private readonly launcher: puppeteer.LaunchOptions;

    constructor() {
        const launcher: string = new Config().get('launcher');
        this.launcher = launchers[launcher];
    }

    async launch(): Promise<void> {
        this.browser = await puppeteer.launch(this.launcher);
    }

    async getPage(): Promise<Page> {
        const puppeteerPage = await this.browser.newPage();
        await puppeteerPage.emulate({
            viewport: {
                width: 1280,
                height: 10000,
            },
            userAgent:
                'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_12_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/75.0.3770.142 Safari/537.36',
        });
        const [uselessTab] = await this.browser.pages();
        await uselessTab.close();

        return new Page(puppeteerPage);
    }

    async close(): Promise<void> {
        await this.browser.close();
    }
}
