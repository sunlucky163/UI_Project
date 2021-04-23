import {Component} from "@Components/component";

export class Header extends Component {
    private selectors = {
        linkKids: '[data-genders="children"]',
    };

    async clickLinkKids(): Promise<void> {
        await this.page.waitFor(this.selectors.linkKids);
        const link = await this.element.$(this.selectors.linkKids);
        await link.click();
    }
}
