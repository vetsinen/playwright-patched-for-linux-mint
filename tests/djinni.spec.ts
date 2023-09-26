import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
    await page.goto('https://djinni.co/');
    await expect(page).toHaveTitle(/Джин для пошуку/);
});
