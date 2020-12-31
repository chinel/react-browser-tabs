import React, { useState } from "react";
import "./App.css";

function Tab() {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(event) {
    //update highlight style to move the highlight
    //nativeEvent is html event
    setHighlightStyle({
      left: event.nativeEvent.layerX - 150,
    });
  }

  function hideHightlight(event) {
    setHighlightStyle({
      opacity: 0,
      left: event.nativeEvent.layerX - 150,
    });
  }

  return (
    <div
      className="tab"
      onMouseOut={hideHightlight}
      onMouseMove={moveHighlight}
    >
      <div className="highlight" style={highlightStyle} />
      <a>Home</a>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <Tab />
          <Tab />
          <Tab />
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
