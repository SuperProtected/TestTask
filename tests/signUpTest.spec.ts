import { test, expect } from '@playwright/test';
import { signUpPage } from '../Page-Object/signUpPage';
import { homePage } from '../Page-Object/homePage';

test('SignUp', async ({ page }) => {
  const regPage = new signUpPage(page);
  const HomePage = new homePage(page);

  await regPage.navigate();

  await regPage.getSignUpBtn.click();
  await regPage.getSignUpWithEmail.click();
  await regPage.getEmailIpput.pressSequentially(`MyEmail${Date.now()}@gmail.com`);
  await regPage.getPasswordInput.pressSequentially(`MyPassword${Date.now()}`);
  await regPage.getRegisterBtn.click();

  await expect(HomePage.getPromoCodeInputAfterSignInOrUp).toBeVisible();  
});
