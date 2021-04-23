import {Component} from "@Components/component";

export class Sidebar extends Component {
    private selectors = {
        addToCart: '[class="product__cart-add-button button button_l button_blue"]',
    };

    async clickAddToCart(): Promise<void> {
        await this.page.waitFor(this.selectors.addToCart);
        const button = await this.element.$(this.selectors.addToCart);
        await button.click();
    }
}
