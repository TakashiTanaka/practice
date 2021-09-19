let app = new Vue(
  {
    el: '#app',
    data: {
      price: 980
    },
    methods: {
      priceDown(discount) {
        if (discount == undefined) {
          discount = 100;
        }
        this.price -= discount;
      }
    }
  }
);