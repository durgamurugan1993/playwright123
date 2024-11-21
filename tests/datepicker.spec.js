const{test,expect}=require('@playwright/test')
test('dropdown',async({page})=>{
//select calender
await page.goto('https://testautomationpractice.blogspot.com/')

const year="2024"
const month="November"
const date="20"
await page.click('.hasDatepicker')
//select month and year
while(true){
const currentmonth=await page.locator('.ui-datepicker-month').textContent()
const currentyear=await page.locator('.ui-datepicker-year').textContent()
if(currentyear== year && currentmonth==month)
{
    
    break;
}
await page.locator('[title="Next"]').click()
}
// const dates=await page.$$('//a[@class="ui-state-default"]')
// for(const dt of dates){
// if(await dt.textContent()==date){
//     await dt.click()
//     await page.waitForTimeout(6000)
//     break
// }
// }


await page.click(`//a[@class='ui-state-default'][text()='${date}']`)

await page.waitForTimeout(6000)

})