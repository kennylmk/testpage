const fs = require('fs');
const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const chromium = require('chromium');
require('chromedriver');
 
describe('UI test',()=>{

    before(async()=>{
      let options = new chrome.Options();
      options.setChromeBinaryPath(chromium.path);
      options.addArguments('--headless');
      options.addArguments('--disable-gpu');
      options.addArguments('--window-size=1280,960');
   
      const driver = await new webdriver.Builder()
          .forBrowser('chrome')
          .setChromeOptions(options)
          .build();
    })

    it('test',async()=>{
      await driver.get('http://google.com');
      console.log('Hello Google!');
      await takeScreenshot(driver, 'google-start-page');
      
      await driver.quit();
    })

})
