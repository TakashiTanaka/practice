let btnLoad = document.getElementById('load');
btnLoad.addEventListener('click', () => {
  // xmlHttpRequestのインスタンスを作成
  let xmlHttpRequest = new XMLHttpRequest();
  // レスポンスの受信が正常に完了したら起こすイベント
  xmlHttpRequest.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.readyState, this.response);
      document.getElementById('result').textContent = JSON.stringify(this.response);
    }
  };
  // レスポンスの形式を指定
  xmlHttpRequest.responseType = 'json';
  // メソッドと読み込むファイルのパスを指定
  xmlHttpRequest.open('GET', 'products.json');
  // リクエストを送信する
  xmlHttpRequest.send();
});