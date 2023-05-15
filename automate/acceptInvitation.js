import {WEBSITE_SIGNIN_EMAIL_SELECTOR, WEBSITE_SIGNIN_PASSWORD_SELECTOR, WEBSITE_SIGNIN_SUBMIT_SELECTOR, USER_EMAIL, USER_PASSWORD} from '../constants.js'
// import { navigatePages } from './naviagtion.js';

export const signIn = async(page, singlePage) => {

    //signin using puppeteer

    // await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
    // await page.keyboard.type(USER_EMAIL);
    // await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
    // await page.keyboard.type(USER_PASSWORD);
    // await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);

    await page.waitForTimeout(3000);

    const isPresent = await page.$('#global-nav > div') ? true : false
    await page.screenshot({ path: "linkedin3.png" });
    
    // to check if user is logged in
    if(isPresent) {

        //extract all buttons with accept on it
        const buttons = await page.$x(
          "//button[contains(., 'Accept')]");

          console.log(buttons.length)
        //iterate on the buttons and accept the requests
        for(let i = 0; i < buttons.length; i++) {

            //click on button to accept
            await buttons[i].click()
        }
        singlePage -= buttons.length;
    }
    return singlePage
}


