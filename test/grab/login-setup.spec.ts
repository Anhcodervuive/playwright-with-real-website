import { test as setup } from '@playwright/test';

setup('grab login manual', async ({ page }) => {
    await page.goto('https://food.grab.com/vn/en/');

    await page.pause();

    await page.context().storageState({
        path: 'auth/grab-user.json',
    });
});