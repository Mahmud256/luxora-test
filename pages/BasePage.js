import { By, until } from 'selenium-webdriver';

export default class BasePage {
    constructor(driver) {
        this.driver = driver;
    }

    async open(url) {
        await this.driver.get(url);
    }

    async find(locator, timeout = 10000) {
        return await this.driver.wait(until.elementLocated(locator), timeout);
    }

    async click(locator) {
        const element = await this.find(locator);
        await this.driver.wait(until.elementIsVisible(element), 5000);
        await element.click();
    }

    async type(locator, text) {
        const element = await this.find(locator);
        await element.sendKeys(text);
    }

    async getUrl() {
        return await this.driver.getCurrentUrl();
    }
}