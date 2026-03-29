import { Builder } from 'selenium-webdriver';

export const createDriver = async () => {
    return await new Builder().forBrowser('chrome').build();
};