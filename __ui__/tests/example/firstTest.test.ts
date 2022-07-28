import { HomePage } from '@Components/home/homePage';
import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { timeout } from '@Utils/timeout';
import { CategoryPage } from '@Components/home/categoryPage';

describe('First test', () => {
  const browser = new Browser();
  let page: Page;
  let homePage: HomePage;

  beforeAll(async () => {
    await browser.launch();
  });

  afterAll(async () => {
    await browser.close();
  });
  test('should be', async () => {
    page = await browser.getPage();
    homePage = new HomePage(page);
    await homePage.open();
    await page.waitFor('[aria-label="Close popup"]')
    const closePopup = await page.$('[aria-label="Close popup"]')
    await closePopup.click()
    await timeout(6000);

    const header = await homePage.getHeader();
    await header.openCategory('Sunglasses');
    console.log(1)
    await page.waitForNavigation();
    const categoryPage = new CategoryPage(page);
    const mainContent = await categoryPage.getMainContent();
    await mainContent.clickProduct();
    await timeout(10000);
  });
});

/// Create test:
// 1)Open category page
// 2) Create class for one product,
// 3) click on the myPicks(heart) button, but non-first product