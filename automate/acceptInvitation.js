export const signIn = async(page, singlePage) => {
    
  await page.waitForTimeout(3000);

  const isPresent = (await page.$("#global-nav > div")) ? true : false;
  await page.screenshot({ path: "linkedin3.png" }); 

  // to check if user is logged in
  if (isPresent) {
    //extract all buttons with accept on it
    const buttons = await page.$x("//button[contains(., 'Accept')]");

    console.log(buttons.length); 

    //iterate on the buttons and accept the requests
    for (let i = 0; i < buttons.length; i++) {
      //click on button to accept
      await buttons[i].click();
    }
    singlePage -= buttons.length;
  }
  return singlePage;
}




