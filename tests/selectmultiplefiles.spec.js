const { test,expect } = require("@playwright/test")
test('fileupload',async({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.waitForSelector('#multipleFilesInput')
    let file=await page.locator('#multipleFilesInput')
    await file.click()
    await file.setInputFiles(['c:/Users/Lenovo/Downloads/Durga-M-FlowCV-Resume-20241117 (1).pdf','C:/Users/Lenovo/Downloads/Durga-M-FlowCV-Resume-20241117 (2).pdf'])
    await page.waitForTimeout(3000)
//     const uploadedFileName = await file.evaluate(input => input.files[0].name);
// expect(uploadedFileName).toBe('Durga-M-FlowCV-Resume-20241117 (1).pdf');
const inputValue = await file.inputValue();
expect(inputValue).toContain('Durga-M-FlowCV-Resume-20241117 (1).pdf');

const fileCount = await file.evaluate(input => input.files.length);
expect(fileCount).toBe(2); // Ensure that exactly one file is uploaded

//select multiple files



})
