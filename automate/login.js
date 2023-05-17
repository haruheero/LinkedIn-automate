import {
  WEBSITE_SIGNIN_EMAIL_SELECTOR,
  WEBSITE_SIGNIN_PASSWORD_SELECTOR,
  WEBSITE_SIGNIN_SUBMIT_SELECTOR,
} from "../constants.js";

export const logIn = async (page, email, password) => {
  //signin using puppeteer

  // await page.screenshot({ path: "linkedin1.png" }); 

  await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
  await page.keyboard.type(email);
  await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
  await page.keyboard.type(password);
  await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);
  await page.waitForNavigation();
};
