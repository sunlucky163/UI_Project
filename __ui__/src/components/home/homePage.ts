import { Component } from '@Components/component';
import { Config } from '@Core/config';
import { MainMenu} from '@Components/home/mainMenu/mainMenu';

export class HomePage extends Component {
    private selectors = {
        mainMenu: '[class="b-header__menu-bar"]',
        isHomeEasy: '//div[contains(@class, "homeEasySteps")]',
    };

    async open(): Promise<void> {
        await this.page.goto(new Config().get('baseUrl'));
    }

    async getMainMenu(): Promise<MainMenu> {
        await this.page.waitFor(this.selectors.mainMenu);
        const isHomeEasyBlock = await this.page.$(this.selectors.mainMenu);
        return new MainMenu(this.page, isHomeEasyBlock);
    }
}
