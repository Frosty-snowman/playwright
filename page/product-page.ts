import { Page, Locator, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  readonly productCovers: Locator;
  readonly addToCartButtons: Locator;
  readonly cartIcon: Locator;
  readonly bottomController: Locator;
  readonly nextPageButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.productCovers = page.getByTestId("cover");
    this.addToCartButtons = page.getByTestId("add-to-cart-button");
    this.cartIcon = page.getByTestId("cart");
    this.bottomController = page.getByTestId("bottom-controller-container");
    this.nextPageButton = this.bottomController.getByTestId("next-page-button");
  }

  async openFirstProduct() {
    await expect(this.productCovers.first()).toBeVisible();
    await this.productCovers.first().click();
  }

  async addFirstProductToCart() {
    await expect(this.addToCartButtons.first()).toBeVisible();
    await this.addToCartButtons.first().click();
  }

  async openCart() {
    await expect(this.cartIcon).toBeVisible();
    await this.cartIcon.click();
  }
}
