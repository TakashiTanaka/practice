const { Builder, By } = require('selenium-webdriver'); // seleniumをrequire
const assert = require('assert'); // assertをrequire

(async function firstScript() {
  // セッションを開始
  try {
    let driver = await new Builder().forBrowser('chrome').build();

    await driver.get('https://www.google.com'); // 指定したURLへアクセス

    await driver.getTitle(); // タイトルの読み込み

    await driver.manage().setTimeouts({ implicit: 1000 });

    let searchBox = await driver.findElement(By.name('q')); // 要素を検索
    let searchButton = await driver.findElement(By.name('btnK')); // 要素を検索

    await searchBox.sendKeys('Selenium'); // 要素に対してアクションを実行
    await searchButton.click(); // 要素に対してアクションを実行

    let search_box = await driver.findElement(By.name('q'));
    let value = await search_box.getAttribute('value'); // search_boxの値を取得
    assert.deepStrictEqual(value, 'Selenium'); // valueの値と指定した値が等しいかチェック

    // await driver.quit(); // セッションを終了
  } catch (error) {
    console.log(error);
  }
})();
