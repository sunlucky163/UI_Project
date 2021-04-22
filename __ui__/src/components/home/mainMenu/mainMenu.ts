import { Component } from '@Components/component';

export class MainMenu extends Component {
    private selectors = {
        vanny_menu: '[data-room="vanny_menu"]',
        firstItem: '[class="b-header-main-menu-content-sub-list__item"] a',
    };

    async clickVanny(): Promise<void> {
        await this.page.waitFor(this.selectors.vanny_menu);
        const addAccessoryButtonElement = await this.element.$(this.selectors.vanny_menu);
        await addAccessoryButtonElement.click();
    }

    async getFirstItem() {
        await this.page.waitFor(this.selectors.firstItem);
        const firstItem = await this.element.$(this.selectors.firstItem);
        return firstItem;
    }

    async clickFirstItem(): Promise<void> {
        await this.page.waitFor(this.selectors.firstItem);
        const firstItem = await this.element.$(this.selectors.firstItem);
        await firstItem.click();
    }
}
