import { test, expect } from '@playwright/test';

test.use({
    storageState: 'auth/grab-user.json'
});

test('Add food to basket (Jolibee)', async ({ page }) => {
    await page.goto('https://food.grab.com/vn/en/');
    await page.getByRole('link', { name: 'Order Jollibee - EC STS Tower' }).click();
    await page.getByRole('button').nth(4).click();
    await page.getByRole('radio', { name: 'Crispy Fried Chicken Delight' }).first().check();
    await page.getByRole('radio', { name: 'Crispy Fried Chicken Delight' }).nth(1).check();
    await page.getByRole('radio', { name: 'Crispy Fried Chicken Delight' }).nth(2).check();
    await page.getByRole('radio', { name: 'Medium Jolly Italian Pasta' }).check();
    await page.getByRole('radio', { name: 'Fried Sweet Potato (Medium)' }).check();
    await page.getByRole('radio', { name: '1 Lemon Tea With Chia Seeds' }).first().check();
    await page.getByRole('radio', { name: '1 Lemon Tea With Chia Seeds' }).nth(1).check();
    await page.getByRole('button', { name: 'Add to Basket - 175.000 ₫' }).click();
});