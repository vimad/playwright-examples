import {expect, test} from "@playwright/test";

test('Generic locators', async ({page}) => {
    // no need the url since it is configured in the playwright.config.ts in baseUrl
    await page.goto('');

    await page.locator('.needs-validation label[for="firstName"]').fill("Vinod");

    // form in anywhere in the page and button anywhere in the form, here select the second button in the formn
    await page.locator('//form//button[2]').click();

    await expect(page.getByText('Valid last name is required')).toBeVisible();
})