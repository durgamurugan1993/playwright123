const{test,expect}=require('@playwright/test')
test('checkbox',async({page})=>{

await page.goto('https://testautomationpractice.blogspot.com/')
 //radiobutton
 let radionbutton=await page.locator('#male')
 radionbutton.check()
 await expect(radionbutton).toBeChecked()

//click single checkbox
await page.locator('#sunday').check()
await expect(page.locator('#sunday').isChecked()).toBeTruthy()
await expect(page.locator('#sunday')).toBeChecked()
//click multiple checkbox
const checkboxlocators=["//input[@id='monday' and @value='monday']","//input[@id='tuesday' and @value='tuesday']",
    "//input[@id='wednesday' and @value='wednesday']","//input[@id='thursday' and @value='thursday']"]
for(let checkbox of checkboxlocators)
    {
await page.locator(checkbox).check()
}
//unselect if the check box is checked
for(let checkbox of checkboxlocators)
{
    if(await page.locator(checkbox).isChecked())
    {
        await page.locator(checkbox).uncheck()
    }
}

})