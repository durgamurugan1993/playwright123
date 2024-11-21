const { test,expect } = require("@playwright/test")
test('alert',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
//alert
// page.on('dialog',async dialog=>{

//     expect(dialog.type()).toContain('alert')
//     expect(dialog.message()).toContain('I am an alert box!')
//     await dialog.accept()
// })
//      await page.getByText('Simple Alert').click()

//confirm
// page.on('Alert with ok',async dailog=>{
// expect(dailog.type()).toContain('confirm')
// expect(dailog.message()).toContain('Press a button!')
// await dailog.accept()

// })

// await page.getByText('Confirmation Alert').click()

//promt

page.on('prompt alert',async dailog=>{
    expect(dailog.type()).toContain('prompt')
    expect(dailog.defaultvalue()).toContain('Harry Potter')
    await dailog.accept()


})
await page.getByText('Prompt Alert').click()
await expect(page.locator("//p[@id='demo']")).toHaveText('Hello Harry Potter! How are you today?')


})

