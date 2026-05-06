import { test } from '@playwright/test';

test('login user A', async ({ page }) => {
    await page.goto('https://chat-website-fsdl.onrender.com/');

    await page.pause();

    await page.context().storageState({
        path: 'auth/chat-user-a.json',
    });
});