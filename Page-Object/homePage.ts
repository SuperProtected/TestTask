import { expect, type Locator, type Page } from '@playwright/test';
import { lcov } from 'node:test/reporters';

export class homePage {
  readonly page: Page;

  readonly getPromoCodeInputAfterSignInOrUp: Locator;
  readonly getPopUpBanerAfterSignUpVersion1: Locator;
  readonly getPopUpBanerAfterSignUpVersion2: Locator;
  readonly getPopUpBanerAfterSignUp2: Locator;
  readonly getPopUpBanerAfterSignUp3: Locator;
  readonly getNotificationBtn: Locator;
  readonly getBalanceLabel: Locator;
  readonly getMenyToggle: Locator;
  readonly getPersonalOfficeBtn: Locator;
  
  constructor(page: Page) {
    this.page = page;
    
    this.getPromoCodeInputAfterSignInOrUp = page.locator('//input[@id="promo-code"]');
    this.getPopUpBanerAfterSignUpVersion1 = page.locator('//div[@class="big-modal__container"]//button[@type="button"]').first();
    this.getPopUpBanerAfterSignUpVersion2 = page.locator('//div[@data-id="cashbox-close-click"]');
    this.getPopUpBanerAfterSignUp2 = page.locator('//div[@class="base-modal__inner"]//button[@type="button"]').first();
    this.getPopUpBanerAfterSignUp3 = page.locator('//div[@class="base-modal__inner"]//button[@type="button"]').first();
    this.getNotificationBtn = page.locator('//button[@class="btn-notification"]');
    this.getBalanceLabel = page.locator('//span[contains(text(),"Баланс")]');
    this.getMenyToggle = page.locator('//div[@data-id="toggle-menu-mobile-click"]');    
    this.getPersonalOfficeBtn = page.locator('//div[@class="user-panel__meta"]/following-sibling::button');
  }
}