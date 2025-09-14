import { expect, test } from '@playwright/test';

// 1) Create repo via web API
// 2) Go to UI and check it exists

const REPO = 'Playwright-Test-Repo';

test.use({
    baseURL: 'https://api.github.com/',
    extraHTTPHeaders: {
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': `token your_token_here`
    }
});

test.beforeEach('Create repo', async ({ request }) => {

    const response = await request.post('user/repos', {
        data: {
            name: REPO
        }
    });

    expect(response.ok()).toBeTruthy();

});

test('Work with newly created repo', async ({ page }) => {

    await page.goto('https://github.com/vimad?tab=repositories');

    await expect(page.getByRole('link', { name: REPO })).toHaveCount(1);

    // other actions with a clean, new repo
});


test.afterEach('Delete repo', async ({ request }) => {

    const response = await request.delete(`repos/vimad/${REPO}`);

    expect(response.ok()).toBeTruthy();
    expect(response.status() === 204);
});