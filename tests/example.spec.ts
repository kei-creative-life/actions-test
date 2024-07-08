import { test } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }) => {
  await page.goto("http://localhost:3000");
  // await page.screenshot({
  //   fullPage: true,
  //   path: `tests/__snapshot__/${titlePath[0]}_${title}_${project.name}.png`,
  // });

  await page.screenshot({
    path: "./tests/directory_contains_actual_images/example.png",
    fullPage: true,
  });
});
