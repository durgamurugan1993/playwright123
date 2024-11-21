const { test,expect } = require("@playwright/test")
test('frame',async({page})=>{

    await page.goto('https://ui.vision/demo/webtest/frames')  
    //count of frames
    let framenum=await page.frames()
    console.log(framenum.length)
    //fetch textfield from frames
    const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'})
    await frame1.fill("[name=mytext1]",'hello')
    //childframe
    const frame3=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_3.html'})
    await frame3.fill("[name=mytext3]",'hello')

    const childframe=await frame3.childFrames()
    console.log(childframe.length)
   let cli= await childframe.locator("//*[@id='i5']/div[3]/div")
  //  cli.check()
    await page.waitForTimeout(3000)
})