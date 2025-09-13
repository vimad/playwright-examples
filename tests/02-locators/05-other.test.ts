import {expect, test} from "@playwright/test";

test('Fill test', async ({page}) => {
    await page.goto('/savings.html');

    // these return Promise<void> hence no locator, need code duplication if required in multiple places
    // if multiple match it selects first rather than failing
    await page.check('#heard-about');
    await page.fill('#textarea', 'Playwright');
})