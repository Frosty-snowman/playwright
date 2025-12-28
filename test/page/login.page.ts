import { Page, expect } from '@playwright/test';

export class LoginPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://merchandise-dev.odds.team/');
  }

  async login(username: string, password: string) {
    await this.page.getByTestId('login-field').click();
    await this.page.getByTestId('login-field').fill(username);
    await this.page.getByTestId('password-field').click();
    await this.page.getByTestId('password-field').fill(password);
    await this.page.getByTestId('submit-button').click();
  }
}
