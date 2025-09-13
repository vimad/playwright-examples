import {chromium, firefox, test, webkit} from "@playwright/test";

test('Browser support demo', async ({page}) => {
    for (const browserType of [chromium, webkit, firefox]) {
        console.log(`Running tests in ${browserType.name()}`)

        const browser = await browserType.launch();
        const page = await browser.newPage();

        await page.goto('https://www.whatsmybrowser.org');
        await page.screenshot({path: `pw-${browserType.name()}.png`});

        await page.close();
        await browser.close();
    }
})