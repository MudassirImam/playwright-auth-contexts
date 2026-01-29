import { test, expect } from '@playwright/test';

test('Incognito session has no auth', async ({ browser }) => {
  const incognitoContext = await browser.newContext();
  const page = await incognitoContext.newPage();

  await page.goto('https://the-internet.herokuapp.com/secure');

  await expect(page).toHaveURL(/login/);

  await incognitoContext.close();
});
