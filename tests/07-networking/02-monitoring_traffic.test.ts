import { expect, test } from '@playwright/test';

test('Monitoring HTTP Traffic', async ({ page }) => {

  // page.on('console', msg => {
  //   expect(msg.type()).not.toEqual('error');
  // });

  page.on('request', request => console.log(`>> ${request.method()} ${request.url()}`));

  
  page.on('response', response => console.log(`<< ${response.status()} ${response.url()}`));

  await page.goto('');

});



test('Testing HTTP Traffic', async ({ page }) => {

  page.on('response', response => {
    expect.soft(response.status(), 
    `Response with status ${response.status()} for URL: ${response.url()}`).toBeLessThan(300);
  });

  await page.goto('');
});
