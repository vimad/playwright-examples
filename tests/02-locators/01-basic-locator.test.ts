import {expect, test} from "@playwright/test";

test('Recommended built in locators', async ({page}) => {
    // no need the url since it is configured in the playwright.config.ts in baseUrl
    await page.goto('');

    const firstName = page.getByLabel("First name");

    await firstName.fill("Vinod");
    await firstName.clear();
    await firstName.fill("Madubashana");

    await page.getByRole('button', {name: 'Register'}).click();

    const warning = page.getByText('Valid last name is required');
    await expect(warning).toBeVisible();
})