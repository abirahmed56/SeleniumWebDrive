
const { Builder, By, Key } = require("selenium-webdriver");

async function automation() {
  let driver = await new Builder().forBrowser("chrome").build();

  try{
    await driver.manage().setTimeouts({implicit:10000})

    //Navigate given Website
    await driver.get("https://www.saucedemo.com/");


    //Login to the system as "standard_user"
    await driver.findElement(By.id("user-name")).sendKeys("standard_user");
    await driver.findElement(By.id("password")).sendKeys("secret_sauce");
    await driver.findElement(By.id("login-button")).click();


    //Add the following product to the cart : Sauce Labs Backpack, Sauce Labs Fleece Jacket.
    await driver.findElement(By.id("add-to-cart-sauce-labs-backpack")).click();
    await driver.findElement(By.id("add-to-cart-sauce-labs-fleece-jacket")).click();
 

    //Go to the "Your Cart" page by clicking on the cart icon on top right corner.
    await driver.findElement(By.className("shopping_cart_link")).click();
 

    //Checkout to the next page.
    await driver.findElement(By.id("checkout")).click();


    //Fill the form and then click to the Continue button. 
    await driver.findElement(By.id("first-name")).sendKeys("Abir");
    await driver.findElement(By.id("last-name")).sendKeys("Ahmed");
    await driver.findElement(By.id("postal-code")).sendKeys("1720");
    await driver.findElement(By.id("continue")).click();


    //Finish the order.
    await driver.findElement(By.id("finish")).click();



  }finally{

    await driver.quit()

  }
}
automation();
