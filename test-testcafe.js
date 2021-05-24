import { Selector } from 'testcafe'; 
fixture `test`
  .page `http://localhost:8083`
  
test('test UI', async t=> {
  await t
    .click('button[id="btn1"]')
})