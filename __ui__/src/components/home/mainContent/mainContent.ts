import { Component } from '@Components/component';
import * as http from "http";

export class MainContent extends Component {
  private selectors = {
    currentProduct: '[data-test-name="product"][data-test-id="4288"]',
  };

  async clickProduct() {
    await this.page.waitFor(this.selectors.currentProduct)
    const product = await this.element.$(this.selectors.currentProduct)
    await product.click()
  }

  getProduct

}
