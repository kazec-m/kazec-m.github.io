import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Mariko Kazetani\.io - About/i);
});

test('can navigate to CV page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'CV' }).click();

  await expect(page).toHaveURL(/\/cv/);
});

test('can navigate to Work page', async ({ page }) => {
  await page.goto('/');

  await page.getByRole('link', { name: 'Work' }).click();

  await expect(page).toHaveURL(/\/work/);
});

test('Qiita link is set correctly', async ({ page }) => {
  await page.goto('/work/');

  const qiitaLink = page.locator(
    'a[href="https://qiita.com/okann/items/8150dca24bff3fb91763"]'
  );

  await expect(qiitaLink).toBeVisible();
});

test.describe('mobile', () => {
  test.beforeEach(async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.goto('/');
  });

  test('top page is visible', async ({ page }) => {
    await expect(page.locator('body')).toBeVisible();
  });

  test('navigation links are visible', async ({ page }) => {
    await expect(page.getByRole('link', { name: 'CV' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Work' })).toBeVisible();
  });

  test('page does not overflow horizontally', async ({ page }) => {
    const hasHorizontalOverflow = await page.evaluate(() => {
      return document.documentElement.scrollWidth > document.documentElement.clientWidth;
    });

    expect(hasHorizontalOverflow).toBe(false);
  });
});

test('unknown page returns 404', async ({ page }) => {
  const response = await page.goto('/this-page-does-not-exist');

  expect(response?.status()).toBe(404);
});

test('Work page heading is visible', async ({ page }) => {
  await page.goto('/work/');

  await expect(
    page.getByRole('heading', { name: 'Work' })
  ).toBeVisible();
});

test('main navigation is visible on desktop', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });

  await page.goto('/');

  await expect(page.getByRole('link', { name: 'CV' })).toBeVisible();
  await expect(page.getByRole('link', { name: 'Work' })).toBeVisible();
});

test('Work page heading is visible on mobile', async ({ page }) => {
  await page.goto('/work/');

  await expect(
    page.getByRole('heading', { name: 'Work' })
  ).toBeVisible();
});
