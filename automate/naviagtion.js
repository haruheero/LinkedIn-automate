import { signIn } from "./acceptInvitation.js";

export const navigatePages = async (page) => {
  await page.waitForTimeout(3000);

  //extract number of invitation pages
  const numOfPages = await page.$x("/html//section/div/ul//button");

  //check if only 1 page of invitation is there
  let singlePage = (await page.$x("/html//nav/button[1]/span")).length;

  //loop till all the invitations are accepted
  for (let i = 0; i < numOfPages.length || singlePage > 0; i++) {

    //reload page to refresh invitations
    await page.reload();

    //number of invitations on a single page if > 0 then keep accepting 
    singlePage = await signIn(page);
  }
};
