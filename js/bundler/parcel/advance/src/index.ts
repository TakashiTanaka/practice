// myFunction.tsをインポートする
import { myFunction } from './myFunction';
// 今日の天気用文字列を生成する
const todayWeather = myFunction(27);
// #weather要素のテキストとして今日の天気を設定する
document.querySelector('#weather').textContent = todayWeather;
