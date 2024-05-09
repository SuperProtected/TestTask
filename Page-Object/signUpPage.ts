import { expect, type Locator, type Page } from '@playwright/test';

export class signUpPage {
  readonly page: Page;

  readonly getSignUpBtn: Locator;
  readonly getSignUpWithEmail: Locator;
  readonly getEmailIpput: Locator;
  readonly getPasswordInput: Locator;
  readonly getRegisterBtn: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getSignUpBtn = page.locator('//div[@data-id="header-register-click"]');
    this.getSignUpWithEmail = page.locator('//div[@data-id="register-tabs-email-link"]');
    this.getEmailIpput = page.locator('//input[@name="email"]');
    this.getPasswordInput = page.locator('//input[@name="password"]');
    this.getRegisterBtn = page.locator('//button[@type="submit"]');
  }

  async navigate(){
    await this.page.goto("https://slotscity.ua");
  }
}