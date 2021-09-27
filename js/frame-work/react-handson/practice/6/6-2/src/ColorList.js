import Color from "./Color.js";

export default function ColorList({ colors = [] }) {
  if (!colors.length) return <div>No colors!</div>;
  return (
    <div>
      {colors.map(color => <Color key={color.id} {...color} />)}
    </div>
  )
}
