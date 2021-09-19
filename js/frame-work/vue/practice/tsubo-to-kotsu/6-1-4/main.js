let app = new Vue(
  {
    el: '#app',
    data: {
      price: 980
    },
    methods: {
      priceDown() {
        let discount = 0;
        if (this.price - 50 < 500) {
          discount = this.price - 500;
        } else {
          discount = 50;
        }
        this.price -= discount;
      }
    }
  }
);