import { test } from "@playwright/test";
import { f_intalniri } from "../pages/footer_intalniri";

test.describe("Footer navigation", () => {
  test("Click pe linkul Întâlniri din footer", async ({ page }) => {
    const footer_intalniri = new f_intalniri(page);

    await footer_intalniri.goto();
    await footer_intalniri.clickIntalniriFromFooter();
    await footer_intalniri.verifyScheduleSectionIsVisible();
    await footer_intalniri.clickLuni();
    await footer_intalniri.clickMarti();
    await footer_intalniri.clickMiercuri();
    await footer_intalniri.clickJoi();
    await footer_intalniri.clickVineri();
  });
});
