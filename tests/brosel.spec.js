const { test, expect } = require('@playwright/test');

test("open new page after search", async ({ browser }) => {
    // Create a new browser context and page
    let context = await browser.newContext();
    let page = await context.newPage();

    // Navigate to Google
    await page.goto('https://www.google.com/');

    // Locate the search bar and enter the query 'selenium'
    let val = await page.locator('.gLFyf');
    await val.fill('selenium');
    await page.keyboard.press('Enter');

    // Wait for the search results to load
    await page.waitForTimeout(3000);

    // Wait for the first search result (Selenium link)
    const searchResult = await page.locator("//h3[@class='LC20lb MBeuO DKV0Md']").first();

    // Listen for the 'popup' event, which will be triggered when the new tab is opened
    const [newTab] = await Promise.all([
        context.waitForEvent('page'), // Wait for the new tab to be created
        searchResult.click() // Click the search result (it will open in the new tab)
    ]);

    // Now that the new tab is open, you can interact with the new tab
    const link = await searchResult.locator('..//following-sibling::a').getAttribute('href');
    console.log(`Opening link in new tab: ${link}`);
    
    // Navigate the new tab to the link
    await newTab.goto(link);
});

