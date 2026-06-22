import type { Locator, Page } from '@playwright/test';

class InventoryPage {
  readonly page: Page;
  readonly pageTitle: Locator;
  readonly backpackAddToCart: Locator;
  readonly shoppingCart: Locator;

  constructor(page: Page) {
    this.page = page;
    this.pageTitle = page.locator('.title');
    this.backpackAddToCart = page.locator('#add-to-cart-sauce-labs-backpack');
    this.shoppingCart = page.locator('.shopping_cart_link');
  }

  async addBackpackToCart() {
    await this.backpackAddToCart.click();
  }

  async openCart() {
    await this.shoppingCart.click();
  }
}

export default InventoryPage;
