import {WEBSITE_SIGNIN_EMAIL_SELECTOR, WEBSITE_SIGNIN_PASSWORD_SELECTOR, WEBSITE_SIGNIN_SUBMIT_SELECTOR, USER_EMAIL, USER_PASSWORD} from '../constants.js'
// import { navigatePages } from './naviagtion.js';

export const signIn = async(page) => {

    //signin using puppeteer

    // await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
    // await page.keyboard.type(USER_EMAIL);
    // await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
    // await page.keyboard.type(USER_PASSWORD);
    // await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);



    await page.waitForTimeout(3000);

    const isPresent = await page.$('#global-nav>div') ? true : false
    await page.screenshot({ path: "linkedin.png" });
    
    if(isPresent) {
        const buttons = await page.$x(
          "//button[contains(., 'Accept')]");

        for(let i = 0; i < buttons.length; i++) {
            await buttons[i].click()
        }
    }
}


