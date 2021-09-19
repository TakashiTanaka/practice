let app = new Vue(
  {
    el: '#app',
    data: {
      personList: [
        {
          name: "Tom",
          age: "30"
        },
        {
          name: "Sum",
          age: "20"
        },
      ]
    },
    components: {
      'person': Person
    }
  }
);