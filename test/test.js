// const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const { expect } = require('chai');
// const browserify = require("browserify");
const puppeteer = require('puppeteer');
// const _ = require('lodash');
// const globalVariables = _.pick(global, ['browser', 'expect']);
const app = require('../server');


describe('UI test',()=>{
   
    let page;
    let result;

    // puppeteer options
    const opts = {
        headless: true,
        slowMo: 100,
        timeout: 60000
    };
  
    // expose variables
    before (async ()=> {
        // global.expect = expect;
        // global.browser = await puppeteer.launch(opts);
        browser = await puppeteer.launch(opts) // with visual
        page = await browser.newPage();
        await page.goto('http://localhost:1337');

    });
    
    // close browser and reset global variables
    after (async ()=> {
        await browser.close().promise;
        browser.close();
        // page.waitFor(100);
        // process.exit(0);
        // global.browser = globalVariables.browser;
        // global.expect = globalVariables.expect;
    });

    it('test to click button', async()=>{
        // page = await browser.newPage();
        // await page.goto('http://localhost:8083');
        await page.click("button").promise;

        // const clickResult=await page.evaluate(()=>{
        //     document.querySelector('button[id=btn1]').click();
        // })
        // console.log('clickResult:'+clickResult)
        // await page.waitFor('p.innerText');
        //  result= await page.evaluate(()=>{
        //     document.querySelector('p[id=result]').innetText;

        // });
        // await page.waitFor('p');
        // result = await page.$eval('p', result => result.innerText);

        // expect(result).to.eql('Hello World for CircleCI');
        // console.log('result:'+result);

        // result.should.equal('Hello World for CircleCI');

    });

    it('test to disply text',async()=>{
    //     await page.waitFor('p');
    //     result= await page.evaluate(()=>{
    //         document.querySelector('p[id=result]').innerHTML;

    //     });
    //     console.log('result:'+result)
        await page.waitFor('p');
        result = await page.$eval('p', result => result.innerText);
        console.log('result:'+result);
        expect(result).to.eql('Hello World for CircleCI');

    });


    
})



// const asset = require('assert')
// var displayText = require("../main.js")

// describe('test', function() {
//     it('Test display text', function() {
//         var result=displayText.displayText();
//         var msg = "Hello World for CircleCI";
//         asset.equal(result,'Hello World for CircleCI')
//     })
//   })


