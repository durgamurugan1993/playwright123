const{test,expect}=require('@playwright/test')
test('altimg',async({page})=>{

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
await expect(page.getByAltText('company-branding')).toBeVisible()

await page.getByPlaceholder('Username').fill('Admin')
await page.getByPlaceholder('Password').fill('admin123')
await page.click("//button[@type='submit']")
await expect(page.getByAltText('client brand banner')).toBeVisible()
await page.screenshot({path:'test/screenshots/'+Date.now()+'login.png'})
})