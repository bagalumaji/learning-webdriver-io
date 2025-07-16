import { browser } from '@wdio/globals'

describe('demo test', function () {
    it('basic test', async function () {
        await browser.url("https://google.com");
        console.log(await browser.getUrl());
        console.log((await browser.getTitle()));
        await expect(browser).toHaveTitle("Google");
        await expect(browser).toHaveUrl("https://www.google.com/");
    })
    it("orange HRM test", async function () {
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       await browser.maximizeWindow()
        const textBoxUsername =  browser.$("//input[@name='username']");
        const textBoxPassword =  browser.$("//input[@name='password']");
        const btnLogin=  browser.$("//button[contains(@class,'login')]");
        await textBoxUsername.setValue("Admin");
        await textBoxPassword.setValue("admin123");
        await btnLogin.click();
        await(await browser.$("//img[contains(@class,'userdropdown')]")).click();
        await(await browser.$("//a[text()='Logout']")).click();
    })
})