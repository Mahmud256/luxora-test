import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class AccountPage extends BasePage {
    constructor(driver) {
        super(driver);

        this.accountBtn = By.xpath("//*[contains(text(),'Account & Orders')]");
        this.signOutBtn = By.xpath("//button[normalize-space()='Sign out']");
    }

    async logout() {
        await this.click(this.accountBtn);
        await this.click(this.signOutBtn);
    }
}