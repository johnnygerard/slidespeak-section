import { expect, test } from "@playwright/test";

test("homepage has an h2 element", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h2")).toBeVisible();
});
