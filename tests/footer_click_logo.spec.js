import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

test.describe("Footer logo test", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://oportunitatisicariere.ro/");
    footer = new FooterPage(page);
  });

  test("Click on footer logo works correctly", async ({ page }) => {
    await footer.ensureVisible();

    await footer.prepareLink(footer.logoLink);

    await expect(footer.logoLink).toBeVisible();
    await expect(footer.logoLink).toBeEnabled();

    const href = await footer.logoLink.getAttribute("href");

    await footer.logoLink.click();

    // în cazul tău href este "#"
    if (href === "#") {
      await expect(page).toHaveURL(/oportunitatisicariere\.ro/);
    } else {
      expect(page.url()).toContain(href);
    }
  });
});
