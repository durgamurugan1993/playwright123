const{test,expect}=require('@playwright/test')
test('dropdown',async({page})=>{
//select single dropdown
await page.goto('https://testautomationpractice.blogspot.com/')
//await page.locator('#country').selectOption('United States')
//assetion1
let options=await page.$$('#country option')  //country only minotor the dropdown along with options we need to give
console.log(options.length)
expect(options.length).toBe(10)
//assertion 2 check the prsence of country
let country=await page.locator('#country').textContent()
console.log(country)
await expect(country.includes('Canada')).toBeTruthy()
//assertion 3
let opt=await page.locator('#country option')  
expect(opt).toHaveCount(10)

//assertion 4 to check the dropdown contains particular country
let status=false
for(let op of options)
{
    let value=await op.textContent()
    if(value.includes('France'))
    {
        status=true
        break
    }
}
expect(status).toBeTruthy()
//select optn using for loop
for(let op of options)
{
    let value=await op.textContent()
    if(value.includes('France'))
    {
        console.log(value)
        await page.locator('#country').selectOption({ label: value.trim() });
    break;
    }
}
//await page.waitForTimeout(3000)
})