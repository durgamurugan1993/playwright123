const{test,expect}=require('@playwright/test')
test('fetch multiple element',async({page})=>
{
await page.goto('https://www.demoblaze.com/index.html');
let links=await page.$$('a')
for(let link of links)

    {

        let linktext=await link.textContent()
        console.log(linktext)
    }
}
)