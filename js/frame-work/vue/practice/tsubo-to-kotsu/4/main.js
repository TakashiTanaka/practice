$('#load').on('click', function (e) {
  $.ajax({
    url: 'products.json',
    type: 'GET',
    dataType: 'json'
  })
    .done(function (data, textStatus, jqXHR) {
      document.getElementById('result').textContent = JSON.stringify(data);
      console.log('通信成功！');
    })
    .fail(function (jqXHR, textStatus, errorThrown) {
      console.log('通信失敗！');
    });
});