import { Component } from '@Components/component';
import { MainContent } from '@Components/home/mainContent/mainContent';

export class CategoryPage extends Component {
  private selectors = {
    mainContent: '[data-test-name="contentContainer"]',
  };
  async getMainContent(): Promise<MainContent> {
    await this.page.waitFor(this.selectors);
    const mainContent = await this.page.$(this.selectors.mainContent);
    return new MainContent(this.page, mainContent);
  }
}
