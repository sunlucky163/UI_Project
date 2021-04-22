import * as puppeteer from 'puppeteer';
import { Element } from '@Core/element';
// eslint-disable-next-line no-duplicate-imports
import { NavigationOptions } from 'puppeteer';

export class Page {
    private readonly page: puppeteer.Page;

    constructor(page: puppeteer.Page) {
        this.page = page;
    }

    async goto(
        url: string,
        options = {
            waitUntil: 'domcontentloaded',
        },
    ): Promise<void> {
        // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
        // @ts-ignore
        await this.page.goto(url, options);
    }

    async waitFor(selector, options = { visible: true }, ...args): Promise<void> {
        if (typeof selector === 'number') {
            await this.page.waitFor(selector);
        } else {
            await this.page.waitFor(selector, options, ...args);
        }
    }

    async $(selector: string): Promise<Element> {
        return new Element(await this.page.$(selector));
    }

    async $$(selector: string): Promise<Element[]> {
        const elements = await this.page.$$(selector);
        return elements.map(element => new Element(element));
    }

    async $x(selector: string): Promise<Element> {
        const [element] = await this.$$x(selector);
        return element;
    }

    async $$x(selector: string): Promise<Element[]> {
        const elements = await this.page.$x(selector);
        return elements.map(element => new Element(element));
    }

    async waitForNavigation(
        options: NavigationOptions = { waitUntil: 'domcontentloaded' },
    ): Promise<void> {
        await this.page.waitForNavigation(options);
    }

    url(): string {
        return this.page.url();
    }
}
