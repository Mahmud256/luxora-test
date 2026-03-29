import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class HomePage extends BasePage {
    constructor(driver) {
        super(driver);

        // Locators
        this.accountBtn = By.xpath("//*[contains(text(),'Account & Orders')]");
        this.searchBox = By.name('search'); // adjust if needed
        this.titleLocator = By.tagName('title');
    }

    // Open Home Page
    async openHome(baseUrl) {
        await this.open(baseUrl);
    }

    // Click Account Menu
    async openAccountMenu() {
        await this.click(this.accountBtn);
    }

    // Get Page Title
    async getPageTitle() {
        return await this.driver.getTitle();
    }
}