import { setWorldConstructor } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';

class CustomWorld {

  page: Page | null;
  browser: Browser | null;
  context: BrowserContext | null;

  constructor() {

    this.page = null;
    this.browser = null;
    this.context = null;

  }

}

setWorldConstructor(CustomWorld);