import { By } from 'selenium-webdriver';
import BasePage from './BasePage.js';

export default class LoginPage extends BasePage {
    constructor(driver) {
        super(driver);

        this.emailInput = By.name('email');
        this.passwordInput = By.name('password');
        this.loginBtn = By.css('button[type="submit"]');
    }

    async login(email, password) {
        await this.type(this.emailInput, email);
        await this.type(this.passwordInput, password);
        await this.click(this.loginBtn);
    }
}