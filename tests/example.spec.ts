import { test, expect } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.screenshot();
  await expect(page).toHaveScreenshot();
});
