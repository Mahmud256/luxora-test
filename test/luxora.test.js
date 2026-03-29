import { expect } from 'chai';
import { createDriver } from '../utils/driver.js';
import { config } from '../utils/config.js';

import HomePage from '../pages/HomePage.js';
import LoginPage from '../pages/LoginPage.js';
import ProductPage from '../pages/ProductPage.js';
import AccountPage from '../pages/AccountPage.js';

describe('Luxora E2E Test Suite (POM)', function () {
    this.timeout(60000);

    let driver;
    let loginPage, productPage, accountPage;

    before(async function () {
        driver = await createDriver();

        loginPage = new LoginPage(driver);
        productPage = new ProductPage(driver);
        accountPage = new AccountPage(driver);
    });

    it('should load home page successfully', async function () {
        const homePage = new HomePage(driver);

        await homePage.openHome(config.baseUrl);

        const title = await homePage.getPageTitle();
        console.log("Home Title:", title);

        expect(title.toLowerCase()).to.include('luxora');
    });

    it('should login successfully', async function () {
        await loginPage.open(`${config.baseUrl}/sign-in`);

        await loginPage.login(config.email, config.password);

        // Wait for redirect properly
        await driver.wait(async () => {
            const url = await driver.getCurrentUrl();
            return !url.includes('/sign-in');
        }, 10000);

        const url = await loginPage.getUrl();
        console.log("Login URL:", url);

        expect(url).to.not.include('/sign-in');
    });

    it('should add product to cart', async function () {
        await productPage.open(`${config.baseUrl}/search?tag=todays-deal`);

        await productPage.addSecondProductToCart();
    });

    it('should logout successfully', async function () {
        await accountPage.open(config.baseUrl);

        await accountPage.logout();

        const url = await accountPage.getUrl();
        expect(url).to.include(config.baseUrl);
    });


    after(async function () {
        await driver.quit();
    });
});