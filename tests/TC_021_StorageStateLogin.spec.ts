import { test, expect } from '@playwright/test';
import { Logger } from '../utils/logger';

test.use({ storageState: 'utils/user-session.json' });

test('Login using Stored Session', async ({ page }) => {

        // Open Inventory Page without Login

        await page.goto('https://www.saucedemo.com/inventory.html');

        // Validation

        await expect(page).toHaveURL(/inventory/);

        await expect(page.locator('.title')).toHaveText(
            'Products'
        );

        Logger.info('Session Reused Successfully');

    });
