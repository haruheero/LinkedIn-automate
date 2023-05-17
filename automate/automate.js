import { WEBSITE, WEBSITE_INVITE } from "../constants.js";
import puppeteer from "puppeteer";
// import { readFile } from "fs/promises"; check if needed later
import { navigatePages } from "./naviagtion.js";
import { logIn } from "./login.js";


export const automateFunction = (email, password) => {


  (async () => {
    //creates a page, navigates it to a URL
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    //extract cookies for linkedin and store it for auto login
    // const cookiesJSON = JSON.parse(
    //   await readFile(new URL("./linkedin.json", import.meta.url))
    // );

    // //set cookies for a logged in session
    // await page.setCookie(...cookiesJSON);

    // check if needed later

    await page.goto(WEBSITE);

    const responseLogin = await logIn(page, email, password);
    console.log(responseLogin)
    //naviagte to invitations manager page
    if(responseLogin) {
      await page.goto(WEBSITE_INVITE);
      await navigatePages(page);
    }
    //close the browser
    await browser.close();
  })();
  // console.log('h1', email, password)
}