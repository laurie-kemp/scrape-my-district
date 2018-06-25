const {Builder, By, Key, until} = require('selenium-webdriver');

(async function example() {
  let driver = await new Builder().forBrowser('chrome').build();
  try {
    await driver.get('https://www.linkedin.com/uas/login?trk=nav_header_signin');
		await driver.findElement(By.id('session_key-login')).sendKeys('henk@l0real.net');
		await driver.findElement(By.id('session_password-login')).sendKeys('Schn4uzersAr3c0ol', Key.RETURN);
    //await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
    await driver.get('https://www.linkedin.com/company/development-bootcamp/');
    const Employees = await driver.wait(await driver.findElement(By.xpath("//div[@id='org-about-company-module']/div/div[2]/div/p[4]")), 1000000)
    if(Employee)
      console.log(Employees.getText())
  } finally {
    //await driver.wait(driver.quit(), 1000000);
  }
})();
