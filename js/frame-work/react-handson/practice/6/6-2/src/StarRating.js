import { FaStar } from "react-icons/fa";

const Star = ({ selected = false, onSelect = f => f }) => (
  <FaStar color={selected ? "red" : "grey"} onClick={onSelect} />
);

export default function StarRating({ totalStars = 5, selectedStars = 0 }) {
  // 前回とは異なり、stateを保持しなくなった
  // stateは利用先（App.js）で保持して管理するようになる
  return (
    <>
      {[...Array(totalStars)].map((_, i) =>
        <Star key={i} selected={selectedStars > i} />
      )}
      <p>
        {selectedStars} of {totalStars} stars
      </p>
    </>
  );
}