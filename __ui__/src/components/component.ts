import { Page } from '@Core/page';
import { Element } from '@Core/element';

export class Component {
    protected page: Page;
    protected element: Element;

    constructor(page: Page, element: Element | null = null) {
        this.page = page;
        this.element = element;
    }
}
