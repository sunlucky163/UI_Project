import * as puppeteer from 'puppeteer';
import { Element } from '@Core/element';
// eslint-disable-next-line no-duplicate-imports
import { format } from 'util';

export class Page {
  private readonly page: puppeteer.Page;

  constructor(page: puppeteer.Page) {
    this.page = page;
  }

  async goto(
    url: string,
    options = {
      waitUntil: 'domcontentloaded',
    }
  ): Promise<void> {
    // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
    // @ts-ignore
    await this.page.goto(url, options);
  }

  async waitFor(
    expected: number | Function | string,
    options: puppeteer.FrameWaitForFunctionOptions | puppeteer.WaitForSelectorOptions = {
      timeout: 60000,
    },
    ...args: puppeteer.SerializableOrJSHandle[]
  ): Promise<void> {
    switch (typeof expected) {
      case 'number':
        await this.page.waitForTimeout(expected);
        break;
      case 'function':
        await this.page.waitForFunction(expected, options, ...args);
        break;
      case 'string':
        if (expected.startsWith('/') || expected.startsWith('./')) {
          await this.page.waitForXPath(expected, options);
        } else {
          await this.page.waitForSelector(expected, options);
        }
        break;
    }
  }

  async $(selector: string): Promise<Element> {
    return new Element(await this.page.$(selector));
  }

  async $$(selector: string): Promise<Element[]> {
    const elements = await this.page.$$(selector);
    return elements.map((element) => new Element(element));
  }

  async $x(selector: string): Promise<Element> {
    const [element] = await this.$$x(selector);
    return element;
  }

  async $$x(selector: string): Promise<Element[]> {
    const elements = await this.page.$x(selector);
    return elements.map((element) => new Element(element));
  }

  async waitForNavigation(options: puppeteer.WaitForOptions = { waitUntil: 'domcontentloaded' }): Promise<void> {
    await this.page.waitForNavigation(options);
  }

  url(): string {
    return this.page.url();
  }

  her() {
    console.log('her');
  }

  async getElementByText(text = '') {
    const selector = format('.//*[contains(text(), "%s")]', text);
    const element = await this.page.$x(selector);
    return element;
  }
}
