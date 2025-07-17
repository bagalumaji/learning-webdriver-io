import {browser} from "@wdio/globals";

describe('Select Option', () => {
    it('select option test', async () => {
        await browser.url("https://testautomationpractice.blogspot.com/")
        const select_locator = $("#country")
        await select_locator.selectByVisibleText("Japan");
        await browser.pause(5000);
        await select_locator.selectByAttribute("value","uk")
        await browser.pause(5000);
        await select_locator.selectByIndex(5)
        await browser.pause(5000);
        const selectedOption = await $("#country option:checked")
        console.log("selected option visible text : "+await selectedOption.getText());
    })
    it('multi select dropdown test', async () => {
        await browser.maximizeWindow();
        await browser.url("https://testautomationpractice.blogspot.com/")
        const multiSelect = $("#colors")
        await multiSelect.selectByVisibleText("Red");
        await multiSelect.selectByIndex(5);
        await multiSelect.selectByAttribute("value","blue");
        await browser.pause(5000);
        const text = await $$("#colors option:checked");

        for(const ele of text){
            const value = await ele.getAttribute("value");
            const text = await ele.getText();
            console.log("value : "+value+" text : "+text);
        }

        await browser.pause(5000);
    });
})