// requireする
let convert = require('color-convert');

// この例だと、hsb(hsv)からhexに変換したものがmyColorに代入される
let myColor = convert.hsv.hex(0, 100, 100);

// コンソールに変換されたhexが表示される
console.log(myColor); // 'FF0000'と出力される