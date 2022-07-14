import { Component } from '@Components/component';
import { Config } from '@Core/config';
import { Header } from '@Components/home/header/header';

export class HomePage extends Component {
  private selectors = {
    header: '[class="logo-line-wrapper width-wrapper"]',
  };

  async open(): Promise<void> {
    await this.page.goto(new Config().get('baseUrl'));
  }

  async getHeader(): Promise<Header> {
    await this.page.waitFor(this.selectors.header);
    const header = await this.page.$(this.selectors.header);
    return new Header(this.page, header);
  }

  getUrl() {
    return this.page.url();
  }
}
