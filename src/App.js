import React from "react";
import './App.scss';
import RainbowFrame from "./Components/RainbowFrame/RainbowFrame";

function App() {

  let colors = ['red','orange','yellow','green','#00BFFF','blue','purple']

  return (
    <RainbowFrame colors={colors} >
      {/* Hello */}
    </RainbowFrame>
  );

}

export default App;
