
describe("window handling",()=>{
    it("verify window handling test",async ()=>{
        await browser.url("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo");
        await browser.maximizeWindow();
        console.log(await browser.getTitle());
        console.log(await browser.getUrl());
        const currentWindowHandle  = await browser.getWindowHandle();
        console.log("current Window Handle : "+currentWindowHandle);
        const linkTwitter = browser.$("//a[normalize-space()='Follow On Twitter']");
        await linkTwitter.click();
        const allWindowHandles = await browser.getWindowHandles();
        console.log("all Window Handles : "+allWindowHandles);
        for(let handle of allWindowHandles){
            console.log("handle "+handle);
            if(handle !== currentWindowHandle){
                await browser.switchToWindow(handle);
                const lambdaText = browser.$('(//span[text()="LambdaTest"])[1]');
                await lambdaText.waitForDisplayed({timeout:10000});
                console.log("child window title"+await browser.getTitle());
                console.log("Lambda Text : "+await lambdaText.getText());
                await browser.closeWindow();
                await browser.pause(2000);
            }
        }
        await browser.switchToWindow(currentWindowHandle);
        console.log(await browser.getUrl());
        console.log(await browser.getTitle());
        await browser.pause(5000);
    })
})