const { test, expect } = require('@playwright/test');

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto('https://www.demoblaze.com/index.html');
  await expect(page).toHaveTitle('STORE');
  console.log('Setup completed for this test');
});

test('login test', async () => {
  await page.locator('#login2').click();
  await page.locator('#loginusername').fill('pavanol');
  await page.locator('#loginpassword').fill('test@123');
  await page.locator("//button[@onclick='logIn()']").click();
  await expect(page.locator("//a[@onclick='logOut()']")).toBeVisible();
});


test.afterEach('logout',async () => {

    const logoutButton = page.locator("//a[@onclick='logOut()']");
  if (await logoutButton.isVisible()) {
    await logoutButton.click();
    await expect(page.locator('#login2')).toBeVisible();
  }
})
