import {expect, test} from "@playwright/test";

test('check test', async ({ page }) => {
    await page.goto('');

    const checkbox = page.getByRole('checkbox');
    const textArea = page.locator('#textarea');
    const msg = "Message"

    await checkbox.check();
    await textArea.fill(msg);
    await expect(textArea).toHaveValue(msg);
});
