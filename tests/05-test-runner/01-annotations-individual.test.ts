import { test, expect } from '@playwright/test';

test.skip('Will not run', async () => {

    console.log("This should not be printed");
});


test('Skip (un)conditionally', async ({ page, browserName }) => {

    test.skip(browserName === 'chromium', 'Does not work on Chromium, ticket ABC-123');
    
    test.skip(await page.getByTestId('someId').count() === 0, 'Skipping because at least 1 element X must be present')
});



test.fixme('Fixme', async () => {
    
    
});




test('Will fail', async () => {

    test.fail();        // the test SHOULD fail -> output will be pass because the below condition fails

    expect(2).toEqual(3);

});