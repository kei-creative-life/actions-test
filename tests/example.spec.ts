import { test, expect } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.screenshot({ path: "top.png", fullPage: true });
  await expect(page).toHaveScreenshot("top.png");
});
