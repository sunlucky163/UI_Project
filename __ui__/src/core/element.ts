import * as puppeteer from 'puppeteer';

export class Element {
    private readonly element: puppeteer.ElementHandle;

    constructor(element: puppeteer.ElementHandle) {
        this.element = element;
    }

    async attributes(): Promise<object> {
        return await this.element.executionContext().evaluate(el => {
            const attributes = {};
            for (const attr of el.attributes) {
                attributes[attr.name] = attr.value;
            }
            return attributes;
        }, this.element);
    }

    async $(selector: string): Promise<Element> {
        return new Element(await this.element.$(selector));
    }

    async $$(selector: string): Promise<Element[]> {
        const elements = await this.element.$$(selector);
        return elements.map(element => new Element(element));
    }

    async $x(selector: string): Promise<Element> {
        const [element] = await this.$$x(selector);
        return element;
    }

    async $$x(selector: string): Promise<Element[]> {
        const elements = await this.element.$x(selector);
        return elements.map(element => new Element(element));
    }

    async click(): Promise<void> {
        await this.element.click();
    }
}
