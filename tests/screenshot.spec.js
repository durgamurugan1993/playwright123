const { test,expect } = require("@playwright/test")

test('screenshot',async({page})=>{

await page.goto('https://www.amazon.in/')
await page.click("/a[contains(text(), 'Electronics' )]")
let vale=await page.$$("/div[@class='sl-sobe-carousel']/descendant::span[@class='sl-sobe-carousel-sub-card-title']")

let status=false
for(let val of vale)
 {
    let valoptn=await vale.textcontent()
    if(vale.includes('Headphones'))
    {
        status=true;
        break;
    }
//expect(status).toBeTruthy()
 }
 
})
