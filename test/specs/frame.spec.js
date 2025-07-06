describe("frame handling", ()=>{
    it('verify framework handling test', async()=>{
        await browser.url("https://www.lambdatest.com/selenium-playground/iframe-demo/");
        const frame1 =await $("#iFrame1");
        await browser.switchFrame(frame1);
        await browser.$('//div[text()="Your content."]').setValue("sayaji bagal")
        const currentUrl = await browser.getUrl();
        console.log("Current Url : "+currentUrl);
        const title = await browser.getTitle();
        console.log("Title : "+title);
        await browser.switchToParentFrame();

        console.log("title : "+await browser.getTitle());
        const url = await browser.getUrl();
        console.log("Current Url : "+url);
        await browser.pause(5000);
    })
})