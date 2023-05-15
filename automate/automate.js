import { WEBSITE } from "../constants.js";
import puppeteer from "puppeteer";
import { readFile } from "fs/promises";
import { navigatePages } from "./naviagtion.js";

(async () => {
  //creates a page, navigates it to a URL
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  //extract cookies for linkedin and store it for auto login
  const cookiesJSON = JSON.parse(
    await readFile(new URL("./linkedin.json", import.meta.url))
  );

  //set cookies for a logged in session
  await page.setCookie(...cookiesJSON);

  //naviagte to invitations manager page
  await page.goto(WEBSITE);

  await navigatePages(page);

  //close the browser
  await browser.close();
})();
