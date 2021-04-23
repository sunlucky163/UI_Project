import {Browser} from "@Core/browser";
import {Page} from "@Core/page";
import {Product} from "@Components/product/product";
import {Sidebar} from "@Components/product/sidebar/sidebar";

describe('Click add to cart button on product page', () => {
    const browser = new Browser();
    let page: Page;
    let productPage: Product;
    let sidebar: Sidebar;

    beforeAll(async () => {
        await browser.launch();
        page = await browser.getPage();
        productPage = new Product(page);
        await productPage.open();
        sidebar = await productPage.getSidebar();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('product should added to cart', async () => {
        await sidebar.clickAddToCart();
        const popup = await productPage.getCartPopup();
        expect(await popup.isCartItemExist()).toBe(true);
    });
});
