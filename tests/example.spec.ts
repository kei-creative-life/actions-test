import { test } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:3000");

  await page.screenshot({
    path: "./tests/directory_contains_actual_images/top.png",
    fullPage: true,
  });
});
