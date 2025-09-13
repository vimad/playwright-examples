import {test} from "@playwright/test";

test('getByLabel test', async ({page}) => {
    // no need the url since it is configured in the playwright.config.ts in baseUrl
    await page.goto('');

    const firstName = page.getByLabel("First name");

    await firstName.fill("Vinod");
    await firstName.clear();
    await firstName.fill("Madubashana");
})