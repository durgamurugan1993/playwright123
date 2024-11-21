const{test,expect}=require('@playwright/test')
test('newwindow',async({browser})=>{
let context=await browser.newContext()
let page=await context.newPage()
await page.goto('https://www.amazon.in/')


let pagepromise=context.waitForEvent(page)
let loc=await page.locator("//a[@href='https://www.amazon.in/gp/redirect.html?location=https://www.instagram.com/amazondotin&token=264882C912E9D005CB1D9B61F12E125D5DF9BFC7&source=standards']")
await loc.click()
let page2=await pagepromise
})