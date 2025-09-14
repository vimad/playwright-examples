import { test, expect } from '@playwright/test';
import * as fs from 'fs';

// this will only pass in headless mode since the pdf is a viewable file in the browser
// non-viewable files like zip files will pass for both headless and non-headless
test('Download a Single file and assert', async ({ page }) => {
    await page.goto('/savings.html');

    const downloadPromise = page.waitForEvent('download');

    await page.getByText('Download Our Offer').click();

    const download = await downloadPromise;

    const suggestedFileName = download.suggestedFilename();
    const filePath = 'download/' + suggestedFileName;
    await download.saveAs(filePath);

    expect(await download.failure()).toBeNull();

    expect(fs.existsSync(filePath)).toBeTruthy();

    const fileSizeInBytes = fs.statSync(filePath).size;
    console.log(fileSizeInBytes);
    expect(fileSizeInBytes).toBeLessThan(20_000);
});