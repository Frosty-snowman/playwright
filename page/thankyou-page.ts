import { expect, Page } from '@playwright/test';

export class ThankYouPage {
  constructor(private page: Page) {}

  async shouldShowThankYouPage() {
    await expect(this.page.getByTestId('thank-you-container')).toBeVisible();
    await expect(
      this.page.getByText('Thank you for your order.')
    ).toBeVisible();
    await expect(
      this.page.getByText('Your order will be shipped')
    ).toBeVisible();
  }

  async backToStore() {
    await this.page.getByTestId('back-to-store-button').click();
  }
}
