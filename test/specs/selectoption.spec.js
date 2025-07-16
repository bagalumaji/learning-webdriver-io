import {browser} from "@wdio/globals";

describe.only('Select Option', () => {
    it('select option test', async () => {
        await browser.url("https://testautomationpractice.blogspot.com/")
        const select_locator = $("#country")
        await select_locator.selectByVisibleText("Japan");
        await browser.pause(5000);
        await select_locator.selectByAttribute("value","uk")
        await browser.pause(5000);
        await select_locator.selectByIndex(5)
        await browser.pause(5000);

    })
})