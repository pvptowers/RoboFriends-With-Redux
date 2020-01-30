import React from "react";

const Scroll = props => {
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "2px solid black",
        height: "800px"
      }}
      className="scrollbar"
      id="style-1"
    >
      {props.children}
    </div>
  );
};

export default Scroll;
