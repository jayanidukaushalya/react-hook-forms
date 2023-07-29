import React, { useState } from "react";

export default function Button(props) {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  return (
    <>
      <button
        style={{
          cursor: "pointer",
          border: "none",
          color: "white",
          backgroundColor: isHovering ? "#8062D6" : "#322653",
          borderRadius: "5px",
          fontSize: "16px",
          height: "30px",
          width: "100px",
        }}
        onMouseDownCapture={handleMouseEnter}
        onMouseUpCapture={handleMouseLeave}
        onClick={props.onClick}
      >
        {props.name}
      </button>
    </>
  );
}
