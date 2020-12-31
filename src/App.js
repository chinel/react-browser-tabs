import React, { useState } from "react";
import "./App.css";

function App() {
  const [highlightStyle, setHighlightStyle] = useState({ left: 0, opacity: 0 });

  function moveHighlight(event) {
    //update highlight style to move the highlight
    //nativeEvent is html event
    setHighlightStyle({
      left: event.nativeEvent.layerX - 150,
    });
  }

  function hideHightlight(event) {}

  return (
    <div className="app">
      <div className="browser">
        <div className="tabs">
          <div
            className="tab"
            onMouseOut={hideHightlight}
            onMouseMove={moveHighlight}
          >
            <div className="highlight" style={highlightStyle} />
            <a>Home</a>
          </div>
          <div className="tab">
            <a>About</a>
          </div>
          <div className="tab">
            <a>Features</a>
          </div>
        </div>

        <div className="viewport">Pages Go Here</div>
      </div>
    </div>
  );
}

export default App;
