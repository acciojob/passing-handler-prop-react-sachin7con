// SGN
import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [background, setBackground] = useState({ background: "" });

  const updateSelectionStyle = (newBackground) => {
    setBackground(newBackground);
  };

  return (
    <div
      className="fix-box"
      style={{ background: background.background }}
      onClick={() => applyColor(updateSelectionStyle)}
    >
    <div className="selection-text">Selection</div>
    </div>
  );
}

export default Selection;
