import { expect, type Locator, type Page } from '@playwright/test';

export class notificationPage {
  readonly page: Page;

  readonly getAcceptCookie: Locator;
  readonly getProfileBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getAcceptCookie = page.locator('//button[@class="buttonio cookies-btn buttonio-primary theme-dark"]');
    this.getProfileBtn = page.locator('//a[@href="/profile"]');
  }
}