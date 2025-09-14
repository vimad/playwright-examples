import { test, expect } from '@playwright/test';

const name = 'Sofia';

test('Session (or Local) Storage', async ({ page }) => {
    await page.goto('/');
    const input = page.getByLabel('First name');
    await input.fill(name);
    await page.getByRole('button', { name: 'Save Input' }).click();
    const storage = await page.evaluate(() => window.localStorage);
    console.log(storage);

    // clear
    await page.evaluate(() => window.localStorage.clear());
    await page.reload();
    await expect(input).toHaveValue('');

    // set
    await page.evaluate(setLocalStorage);
    await page.reload();
    await expect(input).toHaveValue('Andrejs');
});

function setLocalStorage() {
    localStorage.setItem('firstName', 'Andrejs');
}