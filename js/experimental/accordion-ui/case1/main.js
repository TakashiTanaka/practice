/* jQueryを使ってアコーディオンUIを作成 */

// デフォルト値（400ミリ秒）
$('.trigger').click(e => {
  const nextEl = $(e.currentTarget).next();
  // console.log($(e.currentTarget).next());
  nextEl.slideToggle();
});
