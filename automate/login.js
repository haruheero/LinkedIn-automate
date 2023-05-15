import {
  WEBSITE_SIGNIN_EMAIL_SELECTOR,
  WEBSITE_SIGNIN_PASSWORD_SELECTOR,
  WEBSITE_SIGNIN_SUBMIT_SELECTOR,
  USER_EMAIL,
  USER_PASSWORD,
} from "../constants.js";

export const logIn = async (page) => {
  //signin using puppeteer

  await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
  await page.keyboard.type(USER_EMAIL);
  await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
  await page.keyboard.type(USER_PASSWORD);
  await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);
  await page.waitForNavigation()
  await page.screenshot({ path: "linkedin1.png" });
};
