import { test } from '@playwright/test';

test('login user B', async ({ page }) => {
    await page.goto('https://chat-website-fsdl.onrender.com/');

    await page.pause();

    await page.context().storageState({
        path: 'auth/chat-user-b.json',
    });
});