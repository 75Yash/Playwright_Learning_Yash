import { test, expect, Locator, Page } from '@playwright/test';
import { Logger } from '../utils/logger';

test.describe('Dynamic Table Validation POC', () => {

  test('Validate Dynamic Table Data', async ({ page }: { page: Page }) => {

    await page.goto('https://the-internet.herokuapp.com/tables');

    // ==========================================
    // Table Locators
    // ==========================================

    const table: Locator = page.locator('#table1');

    const rows: Locator = table.locator('tbody tr');

    const columns: Locator = table.locator('thead th');

    // ==========================================
    // Validate Row Count
    // ==========================================

    const rowCount: number =await rows.count();

    Logger.info(`Row Count: ${rowCount}`);

    await expect(rows).toHaveCount(4);

    // ==========================================
    // Validate Column Count
    // ==========================================

    const columnCount: number = await columns.count();

    Logger.info(`Column Count: ${columnCount}`);

    await expect(columns).toHaveCount(6);

    // ==========================================
    // Print Complete Table Data
    // ==========================================

    Logger.info('\n===== Complete Table Data =====');

    for (let i = 0; i < rowCount; i++) {

      const rowText = await rows.nth(i).textContent();

      Logger.info(`Row ${i + 1}: ${rowText}`);
    }

    // ==========================================
    // Validate Specific Cell Value
    // ==========================================

    const firstCell: Locator = rows.nth(0).locator('td').nth(0);

    await expect(firstCell).toHaveText('Smith');

    Logger.info('\nValidated First Cell = Smith');

    // ==========================================
    // Dynamic Row Search
    // ==========================================

    const targetLastName = 'Bach';

    let userFound = false;

    for (let i = 0; i < rowCount; i++) {

      const row: Locator = rows.nth(i);

      const lastName = await row.locator('td').nth(0).textContent();

      if (lastName === targetLastName) {

        const firstName = await row.locator('td').nth(1).textContent();

        const email = await row.locator('td').nth(2).textContent();

        Logger.info('\n===== User Found =====');

        Logger.info('Last Name:', lastName);

        Logger.info('First Name:', firstName);

        Logger.info('Email:', email);

        expect(firstName).toBe('Frank');

        userFound = true;

        break;
      }

    }

    expect(userFound).toBeTruthy();

    // ==========================================
    // Validate Complete Row Data
    // ==========================================

    const firstRowData: string[] =
      await rows.first().locator('td').allTextContents();

    Logger.info('\n===== First Row Data =====');

    Logger.info(firstRowData);

    expect(firstRowData).toEqual([
        'Smith',
        'John',
        'jsmith@gmail.com',
        '$50.00',
        'http://www.jsmith.com',
        'edit delete'
      ]);

    // ==========================================
    // Extract Entire Table To JSON
    // ==========================================

    interface UserData {

      lastName: string;

      firstName: string;

      email: string;

      dueAmount: string;

      website: string;

    }

    const tableData: UserData[] = [];

    for (let i = 0; i < rowCount; i++) {

      const cells: string[] = await rows.nth(i).locator('td').allTextContents();

      tableData.push({

        lastName: cells[0],

        firstName: cells[1],

        email: cells[2],

        dueAmount: cells[3],

        website: cells[4]

      });
    }

    Logger.info('\n===== Table JSON Data =====');

    Logger.info(JSON.stringify(tableData,null,2)
    );

    // ==========================================
    // Validate Record Exists
    // ==========================================

    const bachUser = tableData.find(
        (user: UserData) => user.lastName === 'Bach'
      );

    expect(bachUser).toBeDefined();

    expect(bachUser?.firstName).toBe('Frank');

    Logger.info('\nValidated Bach User Successfully');

  });

});