import { HomePage } from '@Components/home/homePage';
import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { timeout } from '@Utils/timeout';

describe('First test', () => {
  const browser = new Browser();
  let page: Page;
  let homePage: HomePage;

  beforeAll(async () => {
    await browser.launch();
    page = await browser.getPage();
    homePage = new HomePage(page);
  });

  afterAll(async () => {
    await browser.close();
  });
  //need create test with lamoda with use method click for elements (3-5)
  test('should be', async () => {
    await homePage.open();
    await page.getByText('');
    const first = await page.$('');
    await first.click();
    await first.attributes();
    await first.click();
    const second = await page.$('selector');
    await second.click();
    await timeout(100000);
  });
});
