const {test,expect}=require('@playwright/test') //importing statement
test('launch browser',async({page})=>{
    //login
    await page.goto('https://www.amazon.in/');

    expect(page.url()).toContain('amazon.in');

    //entering value

    await page.getByPlaceholder('Search Amazon.in').fill("iphone")
    // Assertion: Check if the input field has the correct value
    const searchInputValue = await page.getByPlaceholder('Search Amazon.in').inputValue();
    expect(searchInputValue).toBe("iphone");

    // dropdown
    //await page.locator('#searchDropdownBox').selectOption('Alexa Skills')
    // Assertion: Verify if the dropdown has the selected option
    // expect(await page.locator('#searchDropdownBox').inputValue()).toBe('Alexa Skills');

    // button using id  
     await page.locator('#nav-search-submit-button').click();
    // assertion of the phone 

    const productText = await page.getByRole('link', { name: 'Apple iPhone 15 (128 GB) - Black' }).first()

// Check if the text contains "128 GB" as part of the element's full text
await expect(productText).toHaveText(/128 GB/); // Using a regular expression for partial match


// clcik on phone or select phone to add to cart

     await page.locator('#a-autoid-1-announce').click()

     const productText1 = await page.getByRole('link', { name: 'Apple iPhone 15 (128 GB) - Black' }).first()

     // Check if the text contains "128 GB" as part of the element's full text
     await expect(productText1).toHaveText(/128 GB/); // Using a regular expression for partial match

    //click on cart 
     await page.locator('#nav-cart-text-container') .click()

     //await page.locator('.a-icon a-icon-checkbox').check()
    //click on checkout
     await page.locator("//input[@value='Proceed to checkout']").click()
     //await page.pause(2000)
     
})
test('has title', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle(/Playwright/);
  });
  
  test('get started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
  
    // Click the get started link.
    await page.getByRole('link', { name: 'Get started' }).click();
  
    // Expects page to have a heading with the name of Installation.
    await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
  });
  
