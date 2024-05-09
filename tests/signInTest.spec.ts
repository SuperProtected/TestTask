import { test, expect } from '@playwright/test';
import { signInPage } from '../Page-Object/signInPage';
import { homePage } from '../Page-Object/homePage';

test('SignIn', async ({ page }) => {
  const SignInPage = new signInPage(page);
  const HomePage = new homePage(page);

  await SignInPage.navigate();

  await SignInPage.getSignInBtn.click();
  await SignInPage.getSignInWithEmail.click();
  await SignInPage.getEmailIpput.pressSequentially('qwe@gmail.com');
  await SignInPage.getPasswordInput.pressSequentially('123QWEqwe');
  await SignInPage.getRegisterBtn.click();
  await HomePage.getPopUpBanerAfterSignUp2.click();
  await HomePage.getPopUpBanerAfterSignUp3.click();

  await expect(HomePage.getBalanceLabel).toBeVisible();
});
