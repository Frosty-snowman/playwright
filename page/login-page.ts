import { Page, expect } from '@playwright/test'

export class LoginPage {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async fillUsername(username: string) {
    await this.page.getByTestId('login-field').fill(username)
  }

  async fillPassword(password: string) {
    await this.page.getByTestId('password-field').fill(password)
  }

  async submit() {
    await this.page.getByTestId('submit-button').click()
  }

  async login(username: string, password: string) {
    await this.fillUsername(username)
    await this.fillPassword(password)
    await this.submit()
  }

  async shouldRedirectToStore() {
    await expect(this.page).toHaveURL(/store\.html/)
  }
}
