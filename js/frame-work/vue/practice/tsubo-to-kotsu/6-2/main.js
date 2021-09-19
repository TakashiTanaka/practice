Vue.filter('number_format', val => val.toLocaleString());

let app = new Vue({
  el: '#app',
  data: {
    // 表示中の商品数（実際のappではサーバーから動的にデータを読み込むので、ここは初期値の0を設定しておく）
    // count: 0,
    // セール対象のチェック状態（初期状態false）
    showSaleItem: false,
    // 送料無料のチェック状態（初期状態false）
    showDelvFree: false,
    // 並び替えの選択値（1：標準、2：価格が安い順）
    sortOrder: 1,
    // 商品リスト
    products: [
      {
        id: 1,
        name: 'Michael<br>スマホケース',
        price: 1580,
        image: 'images/01.jpg',
        delv: 0,
        isSale: true
      },
      {
        id: 2,
        name: 'Raphael<br>スマホケース',
        price: 1580,
        image: 'images/02.jpg',
        delv: 0,
        isSale: true
      },
      {
        id: 3,
        name: 'Gabriel<br>スマホケース',
        price: 1580,
        image: 'images/03.jpg',
        delv: 240,
        isSale: true
      },
      {
        id: 4,
        name: 'Uriel<br>スマホケース',
        price: 980,
        image: 'images/04.jpg',
        delv: 0,
        isSale: true
      },
      {
        id: 5,
        name: 'Ariel<br>スマホケース',
        price: 980,
        image: 'images/05.jpg',
        delv: 0,
        isSale: false
      },
      {
        id: 6,
        name: 'Azrael<br>スマホケース',
        price: 1580,
        image: 'images/06.jpg',
        delv: 0,
        isSale: false
      }
    ]
  },
  computed: {
    filteredList() {
      // 新しい空の配列を作成
      let newList = [];
      // productsの数だけiterateする
      this.products.forEach(product => {
        // 判定フラグ
        let isShow = true;
        // もしshowSaleItemがtrueかつ、このプロダクトのisSaleがfalseだったらフラグはfalse
        if (this.showSaleItem && !product.isSale) {
          isShow = false;
        }
        if (this.showDelvFree && product.delv > 0) {
          isShow = false;
        }
        if (isShow) {
          newList.push(product);
        }
      });

      // 新しい配列を並び替える
      if (this.sortOrder == 2) {
        newList.sort((a, b) => a.price - b.price);
      }

      return newList;
    },
    count() {
      return this.filteredList.length;
    }
  },
});