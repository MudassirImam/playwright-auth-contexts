import { test, expect } from '@playwright/test';

test('Validate cookies and storage', async ({ browser }) => {
  const context = await browser.newContext({
    storageState: 'auth/auth.json'
  });

  const cookies = await context.cookies();

  expect(cookies.length).toBeGreaterThan(0);

  const sessionCookie = cookies.find(c => c.name === 'rack.session');
  expect(sessionCookie).toBeDefined();

  await context.close();
});
