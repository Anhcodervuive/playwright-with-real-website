import { test, expect, chromium } from '@playwright/test';

test('multi-session realtime chat', async () => {
    const browser = await chromium.launch({
        headless: false,
        slowMo: 500,
    });

    // USER A
    const contextA = await browser.newContext({
        storageState: 'auth/chat-user-a.json',
    });

    // USER B
    const contextB = await browser.newContext({
        storageState: 'auth/chat-user-b.json',
    });

    const pageA = await contextA.newPage();
    const pageB = await contextB.newPage();

    // OPEN CHAT APP
    await pageA.goto('https://chat-website-fsdl.onrender.com/');
    await pageB.goto('https://chat-website-fsdl.onrender.com/');

    // USER A CHỌN USER B
    await pageA.getByRole('button', {
        name: /user 2/i,
    }).click();

    // USER B CHỌN USER A
    await pageB.getByRole('button', {
        name: /user 1/i,
    }).click();

    // ===== USER A SEND =====
    const inputA = pageA.getByRole('textbox', {
        name: /type a message/i,
    });

    await inputA.fill(
        'Ê ông ăn cơm chưa 😄'
    );

    await pageA.keyboard.press('Enter');

    // USER B NHẬN
    await expect(pageB.locator('body'))
        .toContainText('Ê ông ăn cơm chưa 😄');

    // ===== USER B REPLY =====
    const inputB = pageB.getByRole('textbox', {
        name: /type a message/i,
    });

    await inputB.fill(
        'Chưa nữa 😭 đang combat Playwright với ông đây'
    );

    await pageB.keyboard.press('Enter');

    // USER A NHẬN
    await expect(pageA.locator('body'))
        .toContainText(
            'Chưa nữa 😭 đang combat Playwright với ông đây'
        );

    // ===== USER A SEND AGAIN =====
    await inputA.fill(
        'Multi-session chạy được rồi đó 🔥'
    );

    await pageA.keyboard.press('Enter');

    await expect(pageB.locator('body'))
        .toContainText(
            'Multi-session chạy được rồi đó 🔥'
        );

    // giữ browser vài giây để demo
    await pageA.waitForTimeout(10000);

    await browser.close();
});