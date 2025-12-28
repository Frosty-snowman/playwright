import { Page, Locator, expect } from '@playwright/test';

export class CartPage {
  readonly page: Page;
  readonly cartItems: Locator;
  readonly cartActions: Locator;
  readonly checkoutButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.cartItems = page.getByTestId('cart-item');
    this.cartActions = page.getByTestId('cart-actions-container');
    this.checkoutButton = page.getByTestId('checkout-button');
  }

  async selectCartItemByIndex(index: number) {
    await expect(this.cartItems.nth(index)).toBeVisible();
    await this.cartItems.nth(index).click();
  }

  async proceedToCheckout() {
    await expect(this.checkoutButton).toBeVisible();
    await this.checkoutButton.click();
  }
}
