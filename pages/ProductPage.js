import { By, until } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class ProductPage extends BasePage {
    constructor(driver) {
        super(driver);

        this.productCards = By.css('[data-slot="card"]');
    }

    async addSecondProductToCart() {
        const products = await this.driver.wait(
            until.elementsLocated(this.productCards),
            10000
        );

        const selectedProduct = products[1];

        const addToCartBtn = await selectedProduct.findElement(
            By.xpath(".//button[normalize-space()='Add to Cart']")
        );

        await this.driver.wait(until.elementIsVisible(addToCartBtn), 5000);
        await addToCartBtn.click();
    }
}