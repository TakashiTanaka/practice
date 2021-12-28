// 文字列を用意
const str = "Sgt. Pepper's Lonely Hearts Club Band";

// 5番目から最後まで
const str2 = str.substring(5);

// Pepper's Lonely Hearts Club Band
console.log(str2);

// 5番目から11番目まで
const str3 = str.substring(5, 11);

// Pepper
console.log(str3);

// 引数が0未満の場合は0として扱われる
const str4 = str.substring(-1);

// Sgt. Pepper's Lonely Hearts Club Band
console.log(str4);

// 引数がstring.lengthを超える場合はstring.lengthとして扱われる
// また、この場合開始位置と終了位置の値が等しくなるので、空文字が戻る
const str5 = str.substring(str.length + 1);

// ''（空文字）
console.log(str5);

// lengthメソッドを利用
const str6 = str.substring(str.length - 4);

// Band
console.log(str6);
