import {browser} from "@wdio/globals";

describe('Dropdown demo test', () => {
    it('dropdown without select test', async () => {
        await browser.url("https://testautomationpractice.blogspot.com/")
        console.log(await browser.getTitle());
        await browser.$("#comboBox").click();
        await browser.$("//div[text()='Item 3']").click();
        await  browser.pause(5000);
    })
})