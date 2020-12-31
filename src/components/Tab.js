import React from "react";
export default function Tab({ children }) {
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
      {children}
    </div>
  );
}
