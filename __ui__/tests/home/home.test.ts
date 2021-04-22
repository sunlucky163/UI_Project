import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { HomePage } from '@Components/home/homePage';
import { MainMenu } from '@Components/home/mainMenu/mainMenu';

describe('SEO on Home Page', () => {
    const browser = new Browser();
    let page: Page;
    let homePage: HomePage;
    let mainMenu: MainMenu;

    beforeAll(async () => {
        await browser.launch();
        page = await browser.getPage();
        homePage = new HomePage(page);
        await homePage.open();
        mainMenu = await homePage.getMainMenu();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('check title element', async () => {
        await mainMenu.clickVanny();
        const firstItem = await mainMenu.getFirstItem();
        expect((await firstItem.attributes())['href']).toMatchSnapshot();
        await mainMenu.clickFirstItem();
    })
});
