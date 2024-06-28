import { test, expect } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:5173");
  await page.screenshot();
  await expect(page).toHaveScreenshot();
});
