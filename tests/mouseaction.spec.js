const { test,expect } = require("@playwright/test")
// test('mouseactn',async({page})=>{
// //mouseover
//     await page.goto('https://demo.opencart.com/')
//     let desktop=await page.locator("(//a[@class='nav-link dropdown-toggle' and @data-bs-toggle= 'dropdown'])[1]")
//     desktop.hover()

// })
test('mouseactn',async({page})=>{
    //doubleclick
        await page.goto('https://testautomationpractice.blogspot.com/')
        let desktop=await page.locator("//button[normalize-space()='Copy Text']")
        await desktop.dblclick()
        await expect(page.locator('#field2')).toHaveValue('Hello World!')
        //darg and drop
        let src=await page.getByText('Drag me to my target')
        let trg=await page.locator('#droppable')
        await src.dragTo(trg)
        await page.waitForTimeout(5000)
    
    })
