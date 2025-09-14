import { test } from '@playwright/test';

test('Upload', async ({ page }) => {
    await page.goto('/loans.html');
    const uploadInput = page.locator('input[type="file"]');
    await uploadInput.setInputFiles(['download/dummy.pdf']);

    // clear
    await uploadInput.setInputFiles([]);
});