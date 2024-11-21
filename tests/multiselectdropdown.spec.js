const { test,expect } = require("@playwright/test")
test('multiselect',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('#colors').selectOption(['Red','Blue','Green'])
    //assertion1
    let colours=await page.locator('#colors').textContent()
    console.log(colours)
    await expect(colours.includes('Red')).toBeTruthy

    //asserion2 select 2 options
    let value=await page.$$('#colors')
    for(let val of value)
    {
        let total=await val.textContent()
        console.log(total)
        if(total.includes('Green') || total.includes('Red'))
        {
            await val.click()
        }


    }


})
