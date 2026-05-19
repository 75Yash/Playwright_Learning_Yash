class InventoryPage {

  constructor(page) {

    this.page = page;

    // =========================
    // Locators
    // =========================

    this.pageTitle = page.locator('.title');

    this.backpackAddToCart =page.locator('#add-to-cart-sauce-labs-backpack');

    this.shoppingCart = page.locator('.shopping_cart_link');

  }

  // =========================
  // Methods
  // =========================

  async addBackpackToCart() {

    await this.backpackAddToCart.click();

  }

  async openCart() {

    await this.shoppingCart.click();

  }

}

module.exports = InventoryPage;