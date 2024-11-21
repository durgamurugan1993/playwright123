const{test,expect}=require('@playwright/test')
test('dropdown',async({page})=>{
//select calender
await page.goto('https://testautomationpractice.blogspot.com/')

const table=await page.locator('productTable')
//total number of rows and columns
const columns=await table.locator("//table[@id='taskTable']//th")

const rows=await table.locator("//table[@id='taskTable']//tr")

})