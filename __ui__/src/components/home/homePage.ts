import { Component } from '@Components/component';
import { Config } from '@Core/config';
import { Header } from '@Components/home/header/header';

export class HomePage extends Component {
  private selectors = {
    header: '[id="page-header"]',
  };

  async open(): Promise<void> {
    await this.page.goto(new Config().get('baseUrl'));
  }

  async getHeader(): Promise<Header> {
    await this.page.waitFor(this.selectors.header);
    const header = await this.page.$(this.selectors.header);
    return new Header(this.page, header);
  }

  async getByText(text = '') {
    // eslint-disable-next-line no-return-await
    return await this.page.getElementByText();
  }
}
