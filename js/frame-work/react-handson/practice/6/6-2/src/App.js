import React, { useState } from "react";
import colorData from "./color-data.json";
import ColorList from "./ColorList.js";

function App() {
  // colorDataのjsonをcolorsに代入する
  const [colors] = useState(colorData);
  return (
    // ColorListに変数colorsに格納したjsonデータを渡す
    <ColorList colors={colors} />
  );
}

export default App;
