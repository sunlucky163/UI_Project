import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { HomePage } from '@Components/home/homePage';

describe('Load Home Page', () => {
    const browser = new Browser();
    let page: Page;
    let homePage: HomePage;

    beforeAll(async () => {
        await browser.launch();
        page = await browser.getPage();
        homePage = new HomePage(page);
        await homePage.open();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('url should be correct', async () => {
    expect(page.url()).toMatchSnapshot();
    })
});
