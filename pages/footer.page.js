export class FooterPage {
  constructor(page) {
    this.page = page;
    this.footer = page.locator("footer.footer");

    // 🔹 Logo
    this.logoLink = this.footer.locator(".footer__logo a");
    this.logoTitle1 = this.footer.getByText("ASOCIAȚIA");
    this.logoTitle2 = this.footer.getByText("OPORTUNITĂȚI ȘI CARIERE");

    // 🔹 An curent
    this.currentYear = this.footer.locator("#current-year");

    // 🔹 Linkuri footer
    this.footerLinks = [
      // internal
      {
        name: "Misiunea noastră",
        locator: this.footer.getByRole("link", { name: "Misiunea noastră" }),
        type: "internal",
      },
      {
        name: "Cum poți tu ajuta?",
        locator: this.footer.getByRole("link", { name: "Cum poți tu ajuta?" }),
        type: "internal",
      },
      {
        name: "De ce să ajuți?",
        locator: this.footer.getByRole("link", { name: "De ce să ajuți?" }),
        type: "internal",
      },
      {
        name: "Echipa",
        locator: this.footer.getByRole("link", { name: "Echipa" }),
        type: "internal",
      },
      {
        name: "Povești de succes",
        locator: this.footer.getByRole("link", { name: "Povești de succes" }),
        type: "internal",
      },
      {
        name: "Întâlniri",
        locator: this.footer.getByRole("link", { name: "Întâlniri" }),
        type: "internal",
      },

      // external
      {
        name: "peViitor",
        locator: this.footer.getByRole("link", { name: "peViitor" }),
        type: "external",
      },
      {
        name: "Onboarding",
        locator: this.footer.getByRole("link", { name: "Onboarding" }),
        type: "external",
      },
      {
        name: "Condiții de utilizare",
        locator: this.footer.getByRole("link", {
          name: "Condiții de utilizare",
        }),
        type: "external",
      },
      {
        name: "Confidențialitate",
        locator: this.footer.getByRole("link", { name: "Confidențialitate" }),
        type: "external",
      },

      // social
      {
        name: "LinkedIn",
        locator: this.footer.locator('a[href*="linkedin"]'),
        type: "external",
      },
      {
        name: "Instagram",
        locator: this.footer.locator('a[href*="instagram"]'),
        type: "external",
      },
      {
        name: "Discord",
        locator: this.footer.locator('a[href*="discord"]'),
        type: "external",
      },
      {
        name: "GitHub",
        locator: this.footer.locator('a[href*="github"]'),
        type: "external",
      },
      {
        name: "Jitsi",
        locator: this.footer.locator('a[href*="jit.si"]'),
        type: "external",
      },
      {
        name: "Dev.to",
        locator: this.footer.locator('a[href*="dev.to"]'),
        type: "external",
      },
    ];
  }

  async ensureVisible() {
    await this.footer.waitFor({ state: "visible" });
  }

  async prepareLink(locator) {
    await locator.waitFor({ state: "visible" });
    await locator.scrollIntoViewIfNeeded();
  }
}
