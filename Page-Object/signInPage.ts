import { expect, type Locator, type Page } from '@playwright/test';

export class signInPage {
  readonly page: Page;

  readonly getSignInBtn: Locator;
  readonly getSignInWithEmail: Locator;
  readonly getEmailIpput: Locator;
  readonly getPasswordInput: Locator;
  readonly getRegisterBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getSignInBtn = page.locator('//button[@data-id="header-login-click"]');
    this.getSignInWithEmail = page.locator('//div[@data-id="register-tabs-email-link"]');
    this.getEmailIpput = page.locator('//input[@name="email"]');
    this.getPasswordInput = page.locator('//input[@name="password_email"]');
    this.getRegisterBtn = page.locator('//button[@type="submit"]');
  }

  async navigate(){
    await this.page.goto("https://slotscity.ua");
  }
}