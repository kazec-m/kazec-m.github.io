import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://kazec-m.github.io/');

  await expect(page).toHaveTitle(/Mariko Kazetani\.io - About/i);
});