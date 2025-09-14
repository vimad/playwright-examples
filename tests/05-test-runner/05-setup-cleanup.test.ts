import { test, expect } from '@playwright/test';

// test.describe.configure({ mode: 'parallel' });

// executed before all tests once per worker, if multiple workers run the tests in parallel, then this can be executed multiple times
test.beforeAll('Meaningful description', async () => {
    console.log('Before All setup');
});

test.beforeEach('Meaningful description', async ({page}) => {

    console.log('Before each setup');
    await page.goto('');
});

test('Test 1', async ({ page }) => { 
    console.log('Test 1');
    await expect(page.getByRole('button')).toHaveCount(3);
});

test('Test 2', async ({ page }) => {
    console.log('Test 2');
    await expect(page.getByRole('checkbox')).toHaveCount(1);
});

test.afterEach('Meaningful description', async ({page}) => {
    console.log('After Each cleanup');
});

test.afterAll('Meaningful description', async () => {
    console.log('After All cleanup');
});