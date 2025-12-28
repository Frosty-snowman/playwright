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





// test('Check items in page 2 and select 1 and see them detail', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();   
//   await loginPage.login('customer1', 'password');
//   await page.getByTestId('bottom-controller-container').getByTestId('next-page-button').click();
//   await page.getByTestId('add-to-cart-button').first().click();
//   await page.getByTestId('cart').click();
//   await page.getByTestId('title').click();
//   await page.getByTestId('description').click();
//   await expect(page.getByTestId('description')).toContainText('Unisex socks for casual. Crafted from nylon-spandex with slim fit; made with recycled fibers; lightweight & breathable.');
//   await expect(page.getByTestId('cart-item')).toContainText('Astra Casual Socks SKU : 0000000011');
// });

// test('Can add items and remove items ', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();   
//   await loginPage.login('customer1', 'password');
//   await page.getByTestId('add-to-cart-button').first().click();
//   await page.getByTestId('cart').click();
//   await page.getByTestId('remove-from-cart-button').click();
//   await expect(page.getByTestId('empty-cart-container')).toContainText('No item in cart.');
// });

// test('Use username customer2 and can login', async ({ page }) => {
//   const loginPage = new LoginPage(page);
//   await loginPage.goto();   
//   await loginPage.login('customer1', 'password');
//   await expect(page.getByTestId('shop-title')).toContainText('ODT x merchandise');
// });

// test('Can add items to cart and checkout then can check email', async ({ page }) => {
//   await page.goto('https://merchandise-dev.odds.team/');
//   await page.getByTestId('login-field').click();
//   await page.getByTestId('login-field').fill('customer1');
//   await page.getByTestId('login-field').press('Tab');
//   await page.getByTestId('password-field').fill('password');
//   await page.getByTestId('password-field').press('Enter');
//   await page.getByTestId('submit-button').click();
//   await page.getByTestId('add-to-cart-button').first().click();
//   await page.getByTestId('cart').click();
//   await page.getByTestId('checkout-button').click();
//   await page.getByTestId('firstname-field').click();
//   await page.getByTestId('firstname-field').fill('frost123');
//   await page.getByTestId('firstname-field').press('Tab');
//   await page.getByTestId('lastname-field').fill('222');
//   await page.getByTestId('email-field').click();
//   await page.getByTestId('email-field').fill('frost@mailinator.com');
//   await page.getByTestId('email-field').press('Tab');
//   await page.getByTestId('zipcode-field').fill('12345');
//   await page.getByText('confirm payment or continue').click();
//   await page.getByText('confirm payment or continue').click();
//   await page.getByTestId('confirm-payment-button').click();
//   await page.getByTestId('back-to-store-button').click();
//   await page.goto('https://mailpit.odds.team/');
//   await page.getByRole('link', { name: 'ODT x merchandise store To: frost@mailinator.com ODT x merchandise: Order #20251210112746F2 Confirmation Hi Frost123 222, Your order #20251210112746F2 has been confirmed. They will be shipped to you soon. Here is the detail of the order. ===================================================================... 2 kB a few seconds ago', exact: true }).click();
//   await expect(page.getByLabel('Text')).toContainText('Hi Frost123 222, Your order #20251210112746F2 has been confirmed. They will be shipped to you soon. Here is the detail of the order. ================================================================================ Description Qty Price -------------------------------------------------------------------------------- 0000000001 : TerraFlex Hoodie 1 79.69 THB -------------------------------------------------------------------------------- Subtotal 79.69 THB Shipping fee 0.00 THB VAT 7% 5.58 THB Total 85.27 THB ================================================================================ ODT x merchandise team');
// });
