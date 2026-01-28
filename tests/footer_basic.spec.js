import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

test.describe("Footer basic tests", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://oportunitatisicariere.ro/");
    footer = new FooterPage(page); // 👈 AICI se creează footer
  });

  test("Footer basic elements are visible", async () => {
    await footer.ensureVisible();

    await expect(footer.logoTitle1).toBeVisible();
    await expect(footer.logoTitle2).toBeVisible();

    const currentYear = new Date().getFullYear().toString();
    await expect(footer.currentYear).toContainText(currentYear);
  });
});
