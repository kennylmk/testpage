const { Builder, By } = require("selenium-webdriver");
const assert = require("assert");
const { expect } = require('chai');
const browserify = require("browserify");
const puppeteer = require('puppeteer');
const _ = require('lodash');
const asserttest  = require("assert");
const globalVariables = _.pick(global, ['browser', 'expect']);
// const { start } = require("repl");
// const app = require('../app').server;

// const document = require('../index.html')
let server;

let driver;

describe('test',()=>{
   
    // before (async function () {
    // before (async function () {
    //     global.expect = expect;
    //     global.browser = await puppeteer.launch(opts);
    //     let page=await browser.newPage();
    //     await page.goto('http://localhost:8083')
    // });

    // });
    let page;
    let result;

    // it('test browser navigation', async()=>{
    //     page = await browser.newPage();
    //     await page.goto('http://localhost:8083');
    //     document.querySelector('button[id=btn1]').click();
    // });
    // // it('test button click', async()=>{
    // //     document.querySelector('button[id=btn1]').click();
    // // });
    // it('test display text', async()=>{
    //     result=await page.evaluate(()=>{
    //         document.querySelector('p[id=result]').innerHTML;
    //     });
    //     asserttest.equal(result,'Hello World for CircleCI')
    //     console.log('result:'+result);
    // });
    const asset = require('assert')
    it('test to click button', async()=>{
        console.log("BROWSER VERSION")
        console.log(await browser.version());
        expect(true).to.be.true;
        page = await browser.newPage();
        await page.goto('http://localhost:8083');
        await page.click("button").promise;
        
        // const clickResult=await page.evaluate(()=>{
        //     document.querySelector('button[id=btn1]').click();
        //     // result = document.querySelector('p[id=result]').innerHTML;
        // })
        // console.log('clickResult:'+clickResult)
        // await page.waitFor('p');
        // result= await page.evaluate(()=>{
        //     document.querySelector('p[id=result]').innetText;

        // }).promise;
        await page.waitFor('p');
        result = await page.$eval('p', result => result.innerText);
        // const headlines = await page.$$('h1')

        expect(result).to.eql('Hello World for CircleCI');
        console.log('result:'+result)

    });

    // it('test to disply text',async()=>{
    //     await page.waitFor('p');
    //     result= await page.evaluate(()=>{
    //         document.querySelector('p[id=result]').innerHTML;

    //     });
    //     console.log('result:'+result)

    // });
    
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


