/*
 * 引数にオブジェクトをとり、
 * nameプロパティを参照して挨拶を返す関数
 */
const greeting = person => {
  const name = person ? person.name : `お客さん`;
  return `やあ、${name}`;
};

// "やあ、アリス"
console.log(greeting({ name: `アリス` }));

// nullはfalseとなるので、「お客さん」になる
// "やあ、お客さん"
console.log(greeting(null));
