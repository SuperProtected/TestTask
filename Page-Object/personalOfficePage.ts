import { expect, type Locator, type Page } from '@playwright/test';

export class personalOfficePage {
  readonly page: Page;

  readonly getLogo: Locator;
  readonly getProfileLabel: Locator;
  readonly getBalanceLabel: Locator;
  readonly getBalanceWhichCanBeTakenOutLabel: Locator;
  readonly getBalanceReplenishmentBtn: Locator;
  readonly getBalanceTakeOutBtn: Locator;
  readonly getNickNameLabel: Locator;
  readonly getUserIDLabel: Locator;
  readonly getMyProgresLabel: Locator
  readonly getAccountLogoutBtn: Locator;
  readonly getProfileBtn: Locator;
  readonly getSettingsBtn: Locator
  readonly getMessagesBtn: Locator;
  readonly getVerification: Locator;

  constructor(page: Page) {
    this.page = page;

    this.getLogo = page.locator('//img[@alt="logo"]');
    this.getProfileLabel = page.locator('//h2[contains(text(),"Профіль")]');
    this.getBalanceLabel = page.locator('//span[contains(text(),"Ваш баланс")]');
    this.getBalanceWhichCanBeTakenOutLabel = page.locator('//span[contains(text(),"До виводу")]');
    this.getBalanceReplenishmentBtn = page.locator('//a[@data-id="profile-balance-cashbox-link"]');
    this.getBalanceTakeOutBtn = page.locator('//a[@href="/cashbox?pay"]');
    this.getNickNameLabel = page.locator('//div[contains(text(),"Нікнейм")]');
    this.getUserIDLabel = page.locator('//div[contains(text(),"User ID")]');
    this.getMyProgresLabel = page.locator('//span[@class="profile-info-title"]');
    this.getAccountLogoutBtn = page.locator('//button[@data-id="account-logout-link"]');
    this.getProfileBtn = page.locator('//a[@data-id="profile-nav-profile-link"]');
    this.getSettingsBtn = page.locator('//a[@data-id="profile-nav-settings-link"]');
    this.getMessagesBtn = page.locator('//a[@data-id="profile-nav-messages-link"]');
    this.getVerification = page.locator('//a[@data-id="profile-nav-verification-link"]');
  }
}