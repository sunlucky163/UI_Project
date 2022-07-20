import { HomePage } from '@Components/home/homePage';
import { Browser } from '@Core/browser';
import { Page } from '@Core/page';
import { timeout } from '@Utils/timeout';
import { shouldInstrument } from '@jest/transform';

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
    await timeout(5000);
    const kids = await page.$$('.wCjUeog4KtWw64IplV1e6');
    // console.log(text1);
    await kids[8].click();
    await timeout(8000);
    const man = await page.$$('.wCjUeog4KtWw64IplV1e6');
    console.log(man);
    await man[7].click();
    await timeout(8000);
    const woman = await page.$$('.wCjUeog4KtWw64IplV1e6');
    await woman[6].click();
    await timeout(100000);
  });
});
