describe("frame handling", ()=>{
    it('verify framework handling test', async()=>{
        await browser.url("https://www.lambdatest.com/selenium-playground/iframe-demo/");
        const frame1 =await $("#iFrame1");
        await browser.switchFrame(frame1);
        await $('//div[text()="Your content."]').setValue("sayaji bagal")
        await browser.pause(5000);
    })
})