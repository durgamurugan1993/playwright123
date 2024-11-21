const { test,expect } = require("@playwright/test")
test('keyboardaction',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    let name=await page.locator('#field1')
    await name.hover()
    await page.keyboard.press('Control+A')
    await page.keyboard.press('Control+C')
    await page.keyboard.down('Tab')
    await page.keyboard.up('Tab')
    await page.keyboard.press('Control+V')
    await page.waitForTimeout(4000)
    


   

})
