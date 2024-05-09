import { test, expect } from '@playwright/test';
import { signUpPage } from '../Page-Object/signUpPage';
import { personalOfficePage } from '../Page-Object/personalOfficePage';
import { homePage } from '../Page-Object/homePage';
import { notificationPage } from '../Page-Object/notificationPage';

test('SignUp', async ({ page }) => {
  const SignUpPage = new signUpPage(page);
  const HomePage = new homePage(page);
  const PersonalOfficePage = new personalOfficePage(page);
  const NotificationPage = new notificationPage(page);

  await SignUpPage.navigate();

  await SignUpPage.getSignUpBtn.click();
  await SignUpPage.getSignUpWithEmail.click();
  await SignUpPage.getEmailIpput.pressSequentially(`MyEmail${Date.now()}@gmail.com`);
  await SignUpPage.getPasswordInput.pressSequentially(`MyPassword${Date.now()}`);
  await SignUpPage.getRegisterBtn.click();
  await HomePage.getPopUpBanerAfterSignUpVersion1.click();
  await HomePage.getPopUpBanerAfterSignUp2.click();
  await HomePage.getPopUpBanerAfterSignUp3.click();
  await HomePage.getMenyToggle.click();
  await HomePage.getPersonalOfficeBtn.click();

  await expect(PersonalOfficePage.getLogo).toBeVisible();
  await expect(PersonalOfficePage.getProfileLabel).toBeVisible();
  await expect(PersonalOfficePage.getBalanceLabel).toBeVisible();
  await expect(PersonalOfficePage.getBalanceWhichCanBeTakenOutLabel).toBeVisible();
  await expect(PersonalOfficePage.getBalanceReplenishmentBtn).toBeVisible();
  await expect(PersonalOfficePage.getBalanceTakeOutBtn).toBeVisible();
  await expect(PersonalOfficePage.getNickNameLabel).toBeVisible();
  await expect(PersonalOfficePage.getUserIDLabel).toBeVisible();
  await expect(PersonalOfficePage.getMyProgresLabel).toBeVisible();
  await expect(PersonalOfficePage.getAccountLogoutBtn).toBeVisible();
  await expect(PersonalOfficePage.getProfileBtn).toBeVisible();
  await expect(PersonalOfficePage.getSettingsBtn).toBeVisible();
  await expect(PersonalOfficePage.getMessagesBtn).toBeVisible();
  await expect(PersonalOfficePage.getVerification).toBeVisible();
});
