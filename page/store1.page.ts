import { Page } from '@playwright/test';

export class StorePage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  storeContainer() {
    return this.page.getByTestId('store-container');
  }

  item(name: string) {
    return this.page.getByText(name);
  }

  async clickItem(name: string) {
    await this.page.getByText(name).click();
  }
}
