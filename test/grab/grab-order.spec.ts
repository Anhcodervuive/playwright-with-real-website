import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/grab-user.json'
});

test('Add food to basket (Jolibee)', async ({ page }) => {
    await page.goto('https://food.grab.com/vn/en/');
    await page.getByRole('link', { name: 'Order Jollibee - EC STS Tower' }).click();
    await page.getByRole('button').nth(4).click();
    await page.getByText('1 Spicy Chicken', { exact: true }).nth(2).click();
    await page.getByRole('button', { name: 'Add to Basket - 147.000 ₫' }).click();
    await page.getByText('Choose Chicken 2:Pick 1Crispy').click();
    await page.getByRole('radio', { name: 'Crispy Fried Chicken Delight' }).nth(2).check();
    await page.getByRole('radio', { name: 'Medium Jolly Italian Pasta' }).check();
    await page.getByRole('radio', { name: 'Fried Sweet Potato (Medium)' }).check();
    await page.locator('label').filter({ hasText: 'Lemon Tea With Chia Seeds15.000' }).first().click();
    await page.getByRole('radio', { name: '1 Lemon Tea With Chia Seeds' }).nth(1).check();
    await page.getByRole('button', { name: 'Add to Basket - 177.000 ₫' }).click();
    await page.getByRole('button', { name: '₫' }).click();
    await page.getByRole('button', { name: 'Review Order' }).click();
});