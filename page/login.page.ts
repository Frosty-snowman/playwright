import { Page } from '@playwright/test'

export class LoginPage {
  private page: Page

  constructor(page: Page) {
    this.page = page
  }

  async goto() {
    await this.page.goto('https://merchandise-dev.odds.team/')
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
}
