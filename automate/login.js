import puppeteer from "puppeteer";
import {WEBSITE, WEBSITE_SIGNIN_EMAIL_SELECTOR, WEBSITE_SIGNIN_PASSWORD_SELECTOR, WEBSITE_SIGNIN_SUBMIT_SELECTOR, USER_EMAIL, USER_PASSWORD} from '../constants.js'

const signIn = async(page) => {
    await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
    await page.keyboard.type(USER_EMAIL);
    await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
    await page.keyboard.type(USER_PASSWORD);
    await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);
    await page.waitForNavigation();
    await page.screenshot({path: 'linkedin.png'})
} 


(async () => {

    //creates a page, navigates it to a URL
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(WEBSITE);

    //Sign In process
    await signIn(page)

    

    await browser.close()
})()

