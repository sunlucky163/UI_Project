import { HomePage } from '@Components/home/homePage';
import { Browser } from '@Core/browser';
import { Page } from '@Core/page';

describe('Load Home Page', () => {
  const browser = new Browser();
  let page: Page;
  let homePage: HomePage;

  beforeAll(async () => {
    await browser.launch(); //открытие браузера
    page = await browser.getPage(); //открытие вкладки и передача в page всех методов Page
    homePage = new HomePage(page); //передача контекста page в homePage
    await homePage.open(); // открытие homePage
  });

  afterAll(async () => {
    await browser.close();
  });

  test('url should be correct', () => {
    expect(page.url()).toMatchSnapshot();
  });
});
