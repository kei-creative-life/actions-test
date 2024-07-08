import { test } from "@playwright/test";

const routes = [
  { path: "/", name: "home" },
  { path: "/about", name: "about" },
];

for (const route of routes) {
  test(`${route.name}ページのスクリーンショット`, async ({ page }) => {
    await page.goto(`http://localhost:3000${route.path}`);

    await page.screenshot({
      path: `./tests/directory_contains_actual_images/${route.name}.png`,
      fullPage: true,
    });
  });
}
