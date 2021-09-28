import Color from "./Color.js";

// color-data.jsonを受け取る前提のColorListコンポーネント
export default function ColorList({ colors = [] }) {
  // 受け取った配列が空だった時の処理
  if (!colors.length) return <div>No colors!</div>;
  return (
    // 配列の長さ分、Colorコンポーネントを生成する
    // また、その時、受け取った配列のidとその他の要素を渡す
    <div>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </div>
  )
}
