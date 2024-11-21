const{test,expect}=require('@playwright/test')

test('login',async({page})=>{
await page.goto('https://www.demoblaze.com/index.html');
// const pagetitle=page.title()
// console.log(pagetitle)
await expect(page).toHaveTitle('STORE')
await expect(page.locator('id=login2')).toBeVisible()
await  page.click('id=login2')

await expect(page.locator('id=loginusername')).toBeEditable()
await page.locator('id=loginusername').fill('pavanol')
await page.fill('#loginpassword','test@123')
await page.click("//button[@class='btn btn-primary' and @onclick='logIn()']")
await expect(page.locator("//a[ @onclick='logOut()']")).toBeVisible();
await page.locator("//a[@class='oxd-main-menu-item' and @href='/web/index.php/admin/viewAdminModule']").click()

})