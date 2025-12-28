import { test } from '@playwright/test';
import { LoginPage } from '../page/login-page';
import { ProductPage } from '../page/product-page';
import { CartPage } from '../page/cart-page';
import { CheckoutPage } from '../page/checkout-page';
import { ThankYouPage } from '../page/thankyou-page';

test('user can login and add item to cart and checkout successful', async ({ page }) => {
  const loginPage = new LoginPage(page)
  const productPage = new ProductPage(page)
  const cartPage = new CartPage(page)
  const checkoutPage = new CheckoutPage(page);
  const thankYouPage = new ThankYouPage(page);


  await page.goto('https://merchandise-dev.odds.team/')

  await test.step('Login', async () => {
    await loginPage.login('customer1', 'password')
    await loginPage.shouldRedirectToStore()
  })

  await test.step('Interact with product page', async () => {
    await productPage.openFirstProduct()
    await productPage.addFirstProductToCart()
    await productPage.openCart()
  })

  await test.step('Verify item and checkout', async () => {
    await cartPage.proceedToCheckout();
  })

  await test.step('Checkout', async () => {

    await checkoutPage.fillCustomerInfo({
      firstName: 'nattapat',
      lastName: 'pinrat',
      email: 'forst@mailinator.com',
      zipCode: '20130',
    });

    await checkoutPage.confirmPayment();
  })

  await test.step('Verify thank you page', async () => {
    await thankYouPage.shouldShowThankYouPage();
    await thankYouPage.backToStore();
  });
});
