/**
 * detailsの高さを設定する関数
 * @param { string } selector
 * @param { HTMLElement | Document } wrapper
 */
function setDetailsHeight(selector, wrapper = document) {
  /**
   * 高さを設定する関数
   * @param { HTMLElement } detail detail要素
   * @param { boolean } open
   */
  const setHeight = (detail, open = false) => {
    // detailsのopen属性をopenに設定
    detail.open = open;
    // detailの高さを取得
    const rect = detail.getBoundingClientRect();
    // detailのデータ属性に取得した幅を設定
    detail.dataset.width = rect.width;
    // detailsにCSS変数を設定
    detail.style.setProperty(
      open ? `--expanded` : `--collapsed`,
      `${rect.height}px`
    );
  };

  /** 全てのdetails要素を取得 @type { NodeList } */
  const details = wrapper.querySelectorAll(selector);

  // ResizeObserverを使用して要素のリサイズを検知
  const RO = new ResizeObserver(entries => {
    return entries.forEach(entry => {
      const detail = entry.target;
      const width = parseInt(detail.dataset.width, 10);
      if (width !== entry.contentRect.width) {
        detail.removeAttribute('style');
        setHeight(detail);
        setHeight(detail, true);
        detail.open = false;
      }
    });
  });

  // 全てのdetailsを監視対象にする
  details.forEach(detail => {
    RO.observe(detail);
  });
}

/* Run it */
setDetailsHeight('details');
