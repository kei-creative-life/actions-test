import { test } from "@playwright/test";

test("TOPページのスクリーンショット", async ({ page }, testInfo) => {
  // console.log(testInfo);
  const { project, title, titlePath } = testInfo;
  await page.goto("http://localhost:3000");
  await page.screenshot({
    fullPage: true,
    path: `tests/__snapshot__/${titlePath[0]}_${title}_${project.name}.png`, // TODO: 変数にしたい
  });
});
