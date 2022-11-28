describe('Android Elements Tests', () => {
    it('Find element by accessibility id', async () => {
        // fidn element by accessibility id, put ~ infront
        const appOption = await $('~App');
        // click on element
        await appOption.click();
        // assertion
        const actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();
    });

    it('Find element by class name', async () => {
        // find element by class name
        const className = await $('android.widget.TextView'); // finds the first element with that class name

        console.log(await className.getText());

        // assertion
        await expect(className).toHaveText('API Demos');
    });

    it('Find element using xpath', async () => {
        // find element by xpath
        // xpath - (//tagName[@attribute=value])
        await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
        // find element by recourseId
        await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();
        // find element by text
        await $('//android.widget.TextView[@text="Command two"]').click();
        // find element by class
        const textAssertion = await $('//android.widget.TextView');
        await expect(textAssertion).toHaveText("You selected: 1, Command two");
    });

    
});