import { browser } from '@wdio/globals'

describe('demo test', function () {
    it('basic test', async function () {
        await browser.url("https://google.com");
        console.log(await browser.getUrl());
        console.log((await browser.getTitle()));
        await expect(browser).toHaveTitle("Google");
        await expect(browser).toHaveUrl("https://www.google.com/");
    })
    it.only("orange HRM test", async function () {
        await browser.url("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
       await browser.maximizeWindow()
        const textBoxUsername =  $("//input[@name='username']");
        const textBoxPassword =  $("//input[@name='password']");
        const btnLogin=  $("//button[contains(@class,'login')]");
        await textBoxUsername.setValue("Admin");
        await textBoxPassword.setValue("admin123");
        await btnLogin.click();
        await(await $("//p[text()=\'manda user\']")).click();
        await(await $("//a[text()='Logout']")).click();
    })
})