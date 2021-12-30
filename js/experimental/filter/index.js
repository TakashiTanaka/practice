// 配列を用意
const genres = ['punk', 'rock', 'jazz', 'techno', 'ambient', 'hip-hop'];

// 文字数が4を超える要素だけを取得して配列を生成
const result = genres.filter(genre => genre.length > 4);

// [ 'techno', 'ambient', 'hip-hop' ]
console.log(result);
