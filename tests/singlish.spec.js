const { test, expect } = require('@playwright/test');

test('Convert simple Singlish sentence to Sinhala', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/');

  
  const input = page.getByRole('textbox', { name: 'Input Your Singlish Text Here.' });
  await input.fill('mama gedhara yanavaa');

  
  const sinhalaPanel = page.locator('div', { hasText: 'Sinhala' }).first();

  await expect(output).toBeVisible({ timeout: 20000 });

  
  await expect(sinhalaPanel).toContainText('මම ගෙදර යනවා', { timeout: 20000 });
});