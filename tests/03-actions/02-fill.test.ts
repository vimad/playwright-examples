import {expect, test} from "@playwright/test";

test('Navigation test', async ({page}) => {
    await page.goto('', {waitUntil: 'load'});

    await page.getByLabel('First name').fill('Vinod');
    await page.getByLabel('Date of birth').fill('2025-03-18');
})
