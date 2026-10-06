import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://kazec-m.github.io/');

  await expect(page).toHaveTitle(/Mariko Kazetani\.io - About/i);
});

test('can navigate to CV page', async ({ page }) => {
  await page.goto('https://kazec-m.github.io/');

  await page.getByRole('link', { name: 'CV' }).click();

  await expect(page).toHaveURL(/\/cv/);
});