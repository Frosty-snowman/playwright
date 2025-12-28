import { Page, Locator, expect } from '@playwright/test';

export class CheckoutPage {
  readonly page: Page;

  readonly firstNameField: Locator;
  readonly lastNameField: Locator;
  readonly emailField: Locator;
  readonly zipCodeField: Locator;
  readonly confirmPaymentButton: Locator;

  constructor(page: Page) {
    this.page = page;

    this.firstNameField = page.getByTestId('firstname-field');
    this.lastNameField = page.getByTestId('lastname-field');
    this.emailField = page.getByTestId('email-field');
    this.zipCodeField = page.getByTestId('zipcode-field');
    this.confirmPaymentButton = page.getByTestId('confirm-payment-button');
  }

  async fillCustomerInfo(params: {
    firstName: string;
    lastName: string;
    email: string;
    zipCode: string;
  }) {
    await expect(this.firstNameField).toBeVisible();

    await this.firstNameField.fill(params.firstName);
    await this.lastNameField.fill(params.lastName);
    await this.emailField.fill(params.email);
    await this.zipCodeField.fill(params.zipCode);
  }

  async confirmPayment() {
    await expect(this.confirmPaymentButton).toBeEnabled();
    await this.confirmPaymentButton.click();
  }
}
