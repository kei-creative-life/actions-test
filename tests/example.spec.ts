import { test } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:3000");
  await page.screenshot({ fullPage: true });
});
