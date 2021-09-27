import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ style = {}, totalStars = 5, ...props }) {
  // useStateは配列を返す
  // でストラクチャリングしてselectedStarsという定数に配列の1番目の値を代入している
  // また、useStateの2番めにはステート値を更新する関数が入っている。
  // この関数で値を渡すとその値で更新される
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