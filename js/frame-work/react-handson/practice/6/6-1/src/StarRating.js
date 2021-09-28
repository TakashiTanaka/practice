import React, { useState } from "react";
import { FaStar } from "react-icons/fa"; // react-iconsの読み込み

// 星のアイコンのコンポーネント
const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

// 利用元でstyleやpropsを設定されることを想定して、受け取れるように引数を用意する
export default function StarRating({ style = {}, totalStars = 5, ...props }) {

  // useStateは配列を返す。引数はデフォルトの値
  // デストラクチャリングして、selectedStarsという定数に配列の1番目の値を代入している
  // また、useStateの2番めにはステート値を更新する関数が入っている。
  // この関数で値を渡すとその値で更新される
  // また、データが更新されると、フックは自身がフックされたコンポーネントを新しいデータで再描画する能力を持つ
  const [selectedStars, setSelectedStars] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {[...Array(totalStars)].map((_, i) =>
        <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i + 1)} />
      )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </div>
  );
}