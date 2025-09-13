import {expect, test} from "@playwright/test";

const homeTitle = 'Credit Association';
const savingsTitle = 'Save with us';

test.use({navigationTimeout: 8000});

test('Navigation test', async ({page}) => {
    await page.goto('', {waitUntil: 'load'});
    await expect(page).toHaveTitle(homeTitle);

    await page.goto('/savings.html');
    await expect(page).toHaveTitle(savingsTitle);

    await page.goBack();
    await expect(page).toHaveTitle(homeTitle);

    await page.goForward();
    await expect(page).toHaveTitle(savingsTitle);

    await page.reload();
    await expect(page).toHaveTitle(savingsTitle);
})