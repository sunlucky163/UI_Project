import { Browser } from "@Core/browser";
import { Page } from "@Core/page";
import { HomePage } from "@Components/home/homePage";
import { Header } from "@Components/home/header/header";
import { parse } from "url";
import { timeout } from "@Utils/timeout";

describe("Click category link on home page", () => {
  const browser = new Browser();
  let page: Page;
  let homePage: HomePage;
  let header: Header;

  beforeAll(async () => {
    await browser.launch();
    page = await browser.getPage();
    homePage = new HomePage(page);
    await homePage.open();
    header = await homePage.getHeader();
  });

  afterAll(async () => {
    await browser.close();
  });

  test('url should change', async () => {
    await header.clickLinkKids();
    await timeout(5000);
    expect(parse(page.url()).path).toMatchInlineSnapshot(
      `"/kids-home/?sitelink=topmenuK"`
    );
  });
});
