import { expect } from "@playwright/test";

export class f_intalniri {
  constructor(page) {
    this.page = page;

    // container
    this.footerNavigation = page.locator("footer .footer__navigation");

    // elements
    this.intalniriLink = this.footerNavigation.getByRole("link", {
      name: "Întâlniri",
    });

    this.scheduleSection = page.locator("#schedule");

    this.luni = this.scheduleSection.getByRole("button", {
      name: "Luni",
    });

    this.marti = this.scheduleSection.getByRole("button", {
      name: "Marti",
    });

    this.miercuri = this.scheduleSection.getByRole("button", {
      name: "miercuri",
    });

    this.joi = this.scheduleSection.getByRole("button", {
      name: "joi",
    });

    this.vineri = this.scheduleSection.getByRole("button", {
      name: "vineri",
    });
  }

  async goto() {
    await this.page.goto("https://oportunitatisicariere.ro/");
  }

  async clickIntalniriFromFooter() {
    await this.intalniriLink.click();
  }

  async verifyScheduleSectionIsVisible() {
    await expect(this.scheduleSection).toBeInViewport();
  }

  async clickLuni() {
    await this.luni.click();
  }
}
