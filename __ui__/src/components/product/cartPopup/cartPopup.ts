import {Component} from "@Components/component";

export class CartPopup extends Component {
    private selectors = {
        cartItem: '[class="cart-itemii cart-item cart-item_added"]'
    };

    async isCartItemExist(): Promise<boolean> {
        await this.page.waitFor(this.selectors.cartItem);
        const cartItem = await this.page.$(this.selectors.cartItem);
        return Boolean(cartItem);
    }
}
