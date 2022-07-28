import { Component } from '@Components/component';
import { HomePage } from '@Components/home/homePage';
import { timeout } from '@Utils/timeout';
import { format } from 'util';

export class Header extends Component {
  private selectors = {
    sunglasses: 'sunglasses',
  };

  async openCategory(type: string) {
    // await this.page.waitFor(format('.//*[contains(text(), "%s")]', type));
    await timeout(1000)
    const category = await this.element.getByText(type);
    await category.click();
  }
}
