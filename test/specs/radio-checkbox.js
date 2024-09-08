describe('RadioCheckbox', function () {
    it('radio-checkbox select test', async () => {
        await browser.url('https://www.lambdatest.com/selenium-playground/checkbox-demo')
        await browser.maximizeWindow();
        const checkboxLocator = await $('#isAgeSelected');
        await checkboxLocator.click();
        const isClickableCheckbox = await checkboxLocator.isClickable();
        console.log("isClickableCheckbox : ",isClickableCheckbox);
        const listList = await $$("//div[text()='Multiple Checkbox Demo']/following-sibling::div//input[@type='checkbox']")
       
        const timeout = await browser.getTimeouts();
        console.log(timeout);

        for (let i=0;i<listList.length;i++) {
            let isSelected = await listList[i].isSelected();
            console.log(isSelected);
           await listList[i].click();
            isSelected = await listList[i].isSelected();
           console.log(isSelected);
          const attr =  await listList[i].getAttribute('type');
          console.log(attr);
           await browser.pause(2000);
        }
      
        // const btnCheckAll =await  $('//input[@value="Check All"]');
        // await btnCheckAll.click();
 
        const btnUnCheckAll = await $('//input[@value="Uncheck All"]');
        await browser.pause(5000);

    });
})