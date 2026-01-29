import { test, expect } from '@playwright/test';

test('Reuse saved authentication state', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: 'auth/auth.json'
  });

  const page = await context.newPage();
  await page.goto('https://the-internet.herokuapp.com/secure');

  await expect(page.locator('h2')).toHaveText('Secure Area');

  await context.close();
});
