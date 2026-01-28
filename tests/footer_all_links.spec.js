import { test, expect } from "@playwright/test";
import { FooterPage } from "../pages/footer.page";

test.describe("Footer links tests", () => {
  let footer;

  test.beforeEach(async ({ page }) => {
    await page.goto("https://oportunitatisicariere.ro/");
    footer = new FooterPage(page);
  });

  test("All footer links are visible and valid", async ({ page }) => {
    // Asigurăm vizibilitatea footer-ului
    await footer.ensureVisible();

    for (const link of footer.footerLinks) {
      // Pregătim link-ul (derulare + vizibilitate)
      await footer.prepareLink(link.locator);

      // Obținem href-ul și verificăm că există
      const href = await link.locator.getAttribute("href");
      expect(href).toBeTruthy();

      // Test pentru link-uri interne
      if (link.type === "internal") {
        await link.locator.click();
        expect(page.url()).toContain(href);
        await page.goBack(); // revenim la pagina principală ca să testăm următorul link
      }

      // Test pentru link-uri externe
      if (link.type === "external") {
        // Nu deschidem taburi externe → verificăm doar href-ul
        expect(href.startsWith("http")).toBeTruthy();
      }
    }
  });
});
