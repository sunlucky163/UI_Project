import {Component} from "@Components/component";
import {Sidebar} from "@Components/product/sidebar/sidebar";
import {CartPopup} from "@Components/product/cartPopup/cartPopup";

export class Product extends Component {
    private selectors = {
        sidebar: '[class="ii-product__aside-wrapper"]',
        cartPopup: '[class="popup post-cart-add popup_visible"]',
    };

    async open(): Promise<void> {
        await this.page.goto('https://www.lamoda.ru/p/da919bmbrfc3/bags-davidjones-ryukzak/');
    };

    async getSidebar(): Promise<Sidebar> {
        await this.page.waitFor(this.selectors.sidebar);
        const sidebar = await this.page.$(this.selectors.sidebar);
        return new Sidebar(this.page, sidebar);
    }

    async getCartPopup(): Promise<CartPopup> {
        await this.page.waitFor(this.selectors.cartPopup);
        const cartPopup = await this.page.$(this.selectors.cartPopup);
        return new CartPopup(this.page, cartPopup);
    }
}
