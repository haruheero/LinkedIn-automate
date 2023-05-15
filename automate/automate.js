import { signIn } from './login.js';
import { WEBSITE } from '../constants.js';
import puppeteer from "puppeteer";
import { readFile } from "fs/promises";



(async () => {
  //creates a page, navigates it to a URL
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  const cookiesJSON = JSON.parse(
    await readFile(new URL("./linkedin.json", import.meta.url))
  );

  await page.setCookie(...cookiesJSON);
  

  await page.goto(WEBSITE);

  // //Sign In process
  await signIn(page);

  await browser.close();
})();