import {
  WEBSITE_SIGNIN_EMAIL_SELECTOR,
  WEBSITE_SIGNIN_PASSWORD_SELECTOR,
  WEBSITE_SIGNIN_SUBMIT_SELECTOR,
} from "../constants.js";

//check for signin error

export const logIn = async (page, email, password) => {
  //signin using puppeteer

  await page.waitForSelector(WEBSITE_SIGNIN_EMAIL_SELECTOR);

  await page.screenshot({ path: "linkedin1.png" }); 

  await page.click(WEBSITE_SIGNIN_EMAIL_SELECTOR);
  await page.keyboard.type(email);
  await page.click(WEBSITE_SIGNIN_PASSWORD_SELECTOR);
  await page.keyboard.type(password);
  await page.click(WEBSITE_SIGNIN_SUBMIT_SELECTOR);
  await page.waitForNavigation();
  const isPresent =
    (await page.$("#error-for-password")) || (await page.$("#error-for-username"))
      ? true
      : false;
  
  // if(isPresent) return "error"
  // else return "success"
  return !isPresent
};
