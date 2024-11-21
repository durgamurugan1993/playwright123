const { test, expect } = require('@playwright/test');

test.skip('make my trip',async({page})=>{
//test.slow()
await page.goto('https://www.makemytrip.com/')
await page.click("//span[@class='commonModal__close']")
await page.click("(//span[@class='lbl_input appendBottom10'])[3]")
//await page.waitForSelector("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class='todayPrice']")
let price=await page.$$("(//div[@class='DayPicker-Month'])[1]/descendant::p[@class='todayPrice'] ")
// const lowprice=[]
// for(let Price of allprice)
// {
// let pro= await Price.textContent()
// lowprice.push(pro)
// }
// await lowprice.sort()
// await page.click(`//p[.="${lowprice[0]}"]`)
// console.log(lowprice[0])


})
test("MakeMyTrip", async ({page}) => {
    await page.goto("https://www.makemytrip.com/");
   
    await page.click('//span[@class="commonModal__close"]');
    await page.click('//label[@for="departure"]');
    await page.waitForSelector('//div[@class="DayPicker-Month"][1]/descendant::p[@class=" todayPrice"]');
    let allPrice= await page.$$('//div[@class="DayPicker-Month"][1]/descendant::p[@class=" todayPrice"]');
    let lowestprice = [];
    for(let key of allPrice ){
        let price = await key.textContent();
       await lowestprice.push(price);
    }
    
    let lo = await lowestprice.map((item) => item.replace(",","")).map(Number);
    let bo = lo.slice();
    let low = await bo.sort((a,b) => a-b);
    let v = await lo.indexOf(bo[0]);
    await page.click(`//p[.='${lowestprice[v]}']`);
    console.log(lowestprice);
    console.log(lo);
    console.log(bo);
    console.log(low);
    console.log(v);
    console.log(lowestprice[v])

})
